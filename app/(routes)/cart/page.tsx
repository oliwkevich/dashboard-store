"use client";

import { Container } from "@/components/ui/container";
import { useCart } from "@/hooks/use-cart";
import { useEffect, useState } from "react";
import { CartItem } from "./components/cart-item";
import { Summary } from "./components/summary";

export default function CartPage() {
  const cart = useCart();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-black">Кошик:</h1>
          <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
            <div className="lg:col-span-7 ">
              {!cart.items.length && (
                <p className="text-neutral-500">
                  У вас поки що, немає ніяких товарів в кошику!
                </p>
              )}
              <ul>
                {cart.items.map((item) => (
                  <CartItem product={item} key={item.id} />
                ))}
              </ul>
            </div>
            <Summary />
          </div>
        </div>
      </Container>
    </div>
  );
}
