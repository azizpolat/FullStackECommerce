import React from "react";
import products from "../../data/productData";
import Categories from "./Categories";
import ProductCard from "./ProductCard";

import Link from "next/link";
import Filters from "./Filters";

const productsData = products;

const ProdcuctList = ({
  category,
  params,
}: {
  category: string;
  params: "homepage" | "products";
}) => {
  return (
    <div className="w-full">
      <Categories />
      {params === "products" && <Filters />}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-12">
        {productsData.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div>
        <Link
          className="flex justify-end mt--4 underline text-gray-400 text-sm"
          href={category ? `/products/?category=${category}` : "/products"}
        >
          View all products
        </Link>
      </div>
    </div>
  );
};

export default ProdcuctList;
