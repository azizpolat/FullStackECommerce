import React from "react";
import { ProductsType } from "../../../../types";
import Image from "next/image";
import ProductInteraction from "@/components/ProductInteraction";
import { string } from "zod";
import { title } from "process";
import { describe } from "node:test";

const product: ProductsType = {
  id: 1,
  name: "Adidas CoreFit T-Shirt",
  shortDescription:
    "Lightweight and breathable fabric, perfect for daily workouts and casual wear.",
  description:
    "The Adidas CoreFit T-Shirt combines modern design with comfort and flexibility, making it ideal for both training and everyday use. Featuring moisture-wicking technology, it quickly draws sweat away from the body to keep you dry and comfortable all day. The soft-touch fabric is gentle on the skin, while its durable material ensures long-lasting wear. A must-have piece for any sports wardrobe, delivering both style and performance.",
  price: 59.9,
  sizes: ["xs", "s", "m", "l", "xl"],
  colors: ["gray", "purple", "green"],
  images: {
    gray: "/products/1g.png",
    purple: "/products/1p.png",
    green: "/products/1gr.png",
  },
};

export const generateMetadata = async ({
  params,
}: {
  params: { id: string };
}) => {
  return {
    title: product?.name,
    describe: product?.description,
  };
};

export const ProductPage = async ({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searcParams: Promise<{ color: string; size: string }>;
}) => {
  const { size, color } = await searchParams;

  const selectedSize = size || (product?.sizes[0] as string);
  const selectedColor = color || (product?.colors[0] as string);
  return (
    <div className=" flex flex-col gap-4 lg:flex-row md:gap-12 mt-12">
      <div className="w-full lg:w-5/12 relative aspect-[2/3]">
        <Image
          src={product?.images[selectedColor]}
          alt={product.name}
          fill
          className="object-contain rounded-md"
        />
      </div>

      <div className="w-full lg:w-7/12 flex flex-col gap-4">
        <h1 className="text-2xl font-medium">{product.name}</h1>
        <p className="text-gray-500">{product.description}</p>
        <h2 className="text-2xl font-semibold">${product.price.toFixed(2)}</h2>
        <ProductInteraction
          product={product}
          selectedSize={selectedSize}
          selectedColor={selectedColor}
        />
        <div className="flex items-center gap-2 mt-4">
          <Image
            alt="klarma"
            width={50}
            height={50}
            src="/klarna.png"
            className="rounded-md"
          />
          <Image
            alt="klarma"
            width={50}
            height={50}
            src="/cards.png"
            className="rounded-md"
          />
          <Image
            alt="klarma"
            width={50}
            height={50}
            src="/stripe.png"
            className="rounded-md"
          />
        </div>
        <p className="text-gray-500 text-xs">
          <span className="underline hover:text-black">Terms & Conditions</span>{" "}
          and <span className="underline hover:text-black">Privary Policy</span>{" "}
          - You authoriza us to charge your selected{" "}
          <span className="underline hover:text-black">Refund Policies</span>
        </p>
      </div>
    </div>
  );
};

export default ProductPage;
