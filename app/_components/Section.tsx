import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

export const Section = (props: PropsWithChildren<{ id?: string, className?: string }>) => {
  return (
    <section id={props.id} className={cn("max-w-6xl px-4 m-auto pt-[80px] mt-[-80px]", props.className)}>
      {props.children}
    </section>
  );
};
