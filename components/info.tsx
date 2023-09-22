import { Product } from "@/types";
import { Currency } from "./ui/currency";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";

export const Info = ({ data }: { data: Product }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl text-gray-900">
          <Currency value={data?.price} />
        </p>
      </div>
      <hr className="my-4" />
      <div className="flex items-center gap-x-4">
        <h3 className="font-semibold text-black">Розмір: </h3>
        <div>
          {data?.size.name} / {data?.size.value}
        </div>
      </div>
      <div className="flex items-center gap-x-4 mt-4">
        <h3 className="font-semibold text-black">Колір: </h3>
        <div className="flex items-center gap-2">
          <div
            className="w-4 h-4 rounded-full border"
            style={{ background: data.color.value }}
          />
          ({data?.color.name.toLowerCase()})
        </div>
      </div>
      <div className="mt-10 flex items-center gap-x-3">
        <Button className="flex gap-x-2 items-center">
          В корзину
          <ShoppingCart />
        </Button>
      </div>
    </div>
  );
};
