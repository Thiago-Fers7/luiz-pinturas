import { ComponentProps, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type SectionContainerProps = {
  children: ReactNode;
} & ComponentProps<"section">;

export function SectionContainer({
  children,
  className,
  ...props
}: SectionContainerProps) {
  return (
    <section
      className={twMerge(
        "w-full mx-auto max-w-screen-xl px-5 py-16 lg:px-7",
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
}
