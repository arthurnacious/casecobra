import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string;
  isDark?: boolean;
}

const Phone = ({ imgSrc, isDark = false, className, ...props }: Props) => {
  return (
    <div
      className={cn(
        "relative pointer-events-none z-50 overflow-hidden",
        className
      )}
      {...props}
    >
      <Image
        src={
          isDark
            ? "/phone-template-dark-edges.png"
            : "/phone-template-white-edges.png"
        }
        width={500}
        height={500}
        className="pointer-events-none z-50 select-none"
        alt="Phone image"
      />
      <div className="absolute -z-10 inset-0">
        <Image
          src={imgSrc}
          width={500}
          height={500}
          alt="Overlaying phone image"
          className=""
        />
      </div>
    </div>
  );
};

export default Phone;
