"use client";

import { useState } from "react";

interface ICollapsibleTextProps {
  numberOfLinesWhenClosed: number;
  children: React.ReactNode;
}

export const CollapsibleText = ({
  children,
  numberOfLinesWhenClosed,
}: ICollapsibleTextProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-end">
      <p
        style={
          isOpen
            ? {}
            : {
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: numberOfLinesWhenClosed,
                overflow: "hidden",
              }
        }
      >
        {children}
      </p>

      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="bg-paper rounded border border-primary -mt-7 px-1 py-1"
      >
        {isOpen ? "Ver menos" : "Ver mais"}
      </button>
    </div>
  );
};
