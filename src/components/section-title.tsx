"use client";

// import { useOnScreen } from "@/hooks/use-on-screen";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type SectionTitleProps = {
  children: ReactNode;
};

export function SectionTitle({ children }: SectionTitleProps) {
  // const [ref, isVisible] = useOnScreen<HTMLHeadingElement>({
  //   threshold: 0.5,
  // });

  return (
    <h1
      // ref={ref}
      className={twMerge(
        "inline-block text-2xl font-extrabold tracking-tight text-slate-900 dark:text-slate-200 sm:text-3xl",
      )}
    >
      <span
        className={
          twMerge()
          // "block opacity-0",
          // isVisible ? "animate-slideright300" : "translate-x-[-10px]",
        }
      >
        {children}
      </span>
    </h1>
  );
}
