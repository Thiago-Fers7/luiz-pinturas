import { ComponentProps } from "react";
import { tv, VariantProps } from "tailwind-variants";
import { twMerge } from "tailwind-merge";

const button = tv({
  base: [
    "font-medium transform ease-out transition-colors duration-100 outline-1 outline-indigo-600",
  ],
  variants: {
    enphasis: {
      high: "bg-sky-600 text-white hover:bg-sky-700 active:bg-sky-700/90",
      medium:
        "border shadow-sm text-slate-900 hover:bg-slate-100 active:bg-slate-200",
      low: "",
      lowest: "",
    },
    size: {
      md: "text-sm leading-4 rounded-[4px] px-3 py-2",
      lg: "text-base rounded-[4px] px-3 py-2",
      xl: "text-base rounded-lg px-6 py-4",
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
