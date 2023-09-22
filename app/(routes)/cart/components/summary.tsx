import axios from "axios";

import { Button } from "@/components/ui/button";
import { Currency } from "@/components/ui/currency";
import { useCart } from "@/hooks/use-cart";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast/headless";

export const Summary = () => {
  const searchParams = useSearchParams();
  const items = useCart((state) => state.items);
  const removeAll = useCart((state) => state.removeAll);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (searchParams.get("success")) {
      toast.success("Платіж успішно пройшов!");
      removeAll();
    }

    if (searchParams.get("canceled")) {
      toast.error("Упс... Щось пішло не так...");
    }

    setLoading(false);
  }, [searchParams, removeAll]);

  const totalPrice = items.reduce((total, item) => {
    return total + +item.price;
  }, 0);

  const onCheckout = async () => {
    setLoading(true);
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
      { productIds: items.map((item) => item.id) }
    );

    window.location = response.data.url;
  };

  if (!items.length) return null;

  return (
    <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
      <h2 className="text-lg font-medium text-gray-900">Підсумок Замовлення</h2>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-base font-medium text-gray-900 ">Сума:</div>
          <Currency value={totalPrice} />
        </div>
      </div>
      <Button
        disabled={!items.length || loading}
        onClick={onCheckout}
        className="w-full mt-6"
      >
        Оплатити
      </Button>
    </div>
  );
};
