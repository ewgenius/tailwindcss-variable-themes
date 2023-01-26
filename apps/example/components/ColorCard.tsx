import { FC } from "react";

export const ColorCard: FC<{
  className: string;
}> = ({ className }) => (
  <div className="flex gap-2 items-center">
    <div className={`rounded shadow w-8 h-8 ${className}`}></div>
    {className}
  </div>
);
