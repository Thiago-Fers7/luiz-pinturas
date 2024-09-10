import { ComponentProps, ReactNode, forwardRef } from "react";
import { tv, VariantProps } from "tailwind-variants";
import { twMerge } from "tailwind-merge";

const button = tv({
  base: [
    "outline-1 outline-indigo-600 transition-colors duration-100 ease-out",
  ],
  variants: {
    enphasis: {
      high: "bg-sky-600 text-white hover:bg-sky-700 active:bg-sky-700/90",
      medium:
        "border text-slate-900 shadow-sm hover:bg-slate-100 active:bg-slate-200",
      low: "",
      lowest: "",
    },
    size: {
      md: "h-8 rounded-[4px] px-1 text-sm leading-4",
      lg: "h-10 rounded-[4px] px-1 text-base",
      xl: "h-14 rounded-lg px-3 text-base",
    },
  },
});

type ButtonVariantProps = VariantProps<typeof button>;

type ButtonProps = {
  children: ReactNode;
} & ComponentProps<"button"> &
  ButtonVariantProps;

export const IconButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, size, enphasis, className, ...props }, ref) => {
    return (
      <button
        type="button"
        className={twMerge(
          button({
            enphasis,
            size,
          }),
          className,
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  },
);
