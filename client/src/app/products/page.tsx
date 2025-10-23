import ProdcuctList from "@/components/ProdcuctList";
import React from "react";

const ProductPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ category: string }>;
}) => {
  const category = (await searchParams).category;
  return (
    <div>
      <ProdcuctList category={category} params="products" />
    </div>
  );
};

export default ProductPage;
