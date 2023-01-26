import { FC } from "react";

export const ColorCard: FC<{
  className: string;
}> = ({ className }) => (
  <div className="flex gap-2 items-center">
    <div
      className={`rounded-xl relative overflow-hidden w-8 h-8 shadow hover:shadow-lg hover:scale-110 transition-all duration-300 cursor-pointer`}
    >
      <div className={`${className} absolute inset-0 shadow-inner`} />
    </div>
    {className}
  </div>
);
