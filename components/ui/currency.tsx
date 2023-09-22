"use client";
import React from "react";

import { formatter } from "@/lib/utils";

interface CurrencyProps {
  value: string | number;
}

export const Currency: React.FC<CurrencyProps> = ({ value }) => {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return <div className="font-semibold">{formatter.format(+value)}</div>;
};
