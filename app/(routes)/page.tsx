import getBillboard from "@/actions/get-billboards";
import getProducts from "@/actions/get-products";
import { Billboard } from "@/components/billboard";
import { ProductList } from "@/components/product-list";
import { Container } from "@/components/ui/container";

export const relative = 0;

export default async function HomePage() {
  const products = await getProducts({ isFeatured: true });
  const billboards = await getBillboard("d2e5b507-ae6f-40ad-b6b3-9c1ebf8e37b7");

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboards} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8 ">
          <ProductList title="Варто подивитись" items={products} />
        </div>
      </div>
    </Container>
  );
}

