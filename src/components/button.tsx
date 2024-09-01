import { ComponentProps } from "react";
import { tv, VariantProps } from "tailwind-variants";
import { twMerge } from "tailwind-merge";

const button = tv({
  base: [
    "transform font-medium outline-1 outline-indigo-600 transition-colors duration-100 ease-out",
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
      md: "rounded-[4px] px-3 py-2 text-sm leading-4",
      lg: "rounded-[4px] px-3 py-2 text-base",
      xl: "rounded-lg px-6 py-4 text-base",
    },
  },
});

type ButtonVariantProps = VariantProps<typeof button>;

type ButtonProps = {
  children: string;
} & ComponentProps<"button"> &
  ButtonVariantProps;

export function Button({
  children,
  size,
  enphasis,
  className,
  ...props
}: ButtonProps) {
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
      {...props}
    >
      {children}
    </button>
  );
}
