"use client";

import { type FC } from "react";

export const ConfigPreview: FC<{ config: string }> = ({ config }) => {
  return (
    <div className="p-2 rounded bg-black text-white">
      <pre className="text-xs overflow-auto">
        <code className="language-javascript">{config}</code>
      </pre>
    </div>
  );
};
