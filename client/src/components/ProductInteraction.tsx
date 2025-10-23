"use client";

import React, { useState } from "react";
import { ProductsType } from "../../types";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  Minus,
  Plus,
  PlusIcon,
  ShoppingBag,
  ShoppingBagIcon,
  ShoppingCart,
} from "lucide-react";
import { size } from "zod";
import useCartStore from "@/stores/cartStore";
import { toast } from "react-toastify";

const ProductInteraction = ({
  product,
  selectedSize,
  selectedColor,
}: {
  product: ProductsType;
  selectedColor: string;
  selectedSize: string;
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const { addToCart } = useCartStore();

  const [quantity, setQuantity] = useState(1);

  const handleTypeChange = (type: string, value: string) => {
    const params = new URLSearchParams(searchParams);
    params.set(type, value);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const handleQuantityChange = (type: "increment" | "decriment") => {
    if (type === "increment") {
      setQuantity((prev) => prev + 1);
    } else {
      if (quantity > 1) {
        setQuantity((prev) => prev - 1);
      }
    }
  };

  const handleAddToCart = () => {
    addToCart({
      ...product,
      selectedColor,
      selectedSize,
      quantity,
    });
    toast.success("Product Cart add to Success");
  };
  return (
    <div className="flex flex-col gap-4 mt-4">
      <div className="flex flex-col gap-2 text-xs">
        <span className="text-gray-500">Size</span>
        <div className="flex items-center gap-2">
          {product.sizes.map((size) => (
            <div
              className={`cursor-pointer border-1 p-[2px]  ${
                selectedSize === size ? "border-gray-600" : "border-gray-300"
              }`}
              key={size}
              onClick={() => handleTypeChange("size", size)}
            >
              <div
                className={`w-6 h-6 text-center flex items-center justify-center ${
                  selectedSize === size
                    ? "bg-black text-white"
                    : "bg-white text-black"
                }`}
              >
                {size.toUpperCase()}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2 text-sm">
        <div className="flex flex-col gap-2 text-xs">
          <span className="text-gray-500">Colors</span>
          <div className="flex items-center gap-2 ">
            {product.colors.map((color) => (
              <div
                className={`cursor-pointer border-1 p-[2px]  ${
                  selectedColor === color ? "border-gray-300" : "border-white"
                }`}
                key={color}
                onClick={() => handleTypeChange("color", color)}
              >
                <div
                  className={`w-6 h-6 `}
                  style={{ backgroundColor: color }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 text-sm">
        <span className="text-gray-500">Quantity</span>
        <div className="flex items-center gap-2">
          <button
            className="cursor-pointer border-1 border-gray-300 p-1"
            onClick={() => handleQuantityChange("decriment")}
          >
            <Minus className="w-3 h-3" />
          </button>
          <span className="text-ms font-semibold">{quantity}</span>
          <button
            className="cursor-pointer border-1 border-gray-300 p-1"
            onClick={() => handleQuantityChange("increment")}
          >
            <Plus className="w-3 h-3" />
          </button>
        </div>
      </div>
      <button
        onClick={handleAddToCart}
        className="bg-gray-800 text-white flex justify-center items-center gap-2 px-3 py-2 shadow-lg rounded-md cursor-pointer text-sm font-medium"
      >
        <PlusIcon className="w-4 h-4" />
        Add to Cart
      </button>
      <button className="ring-1 ring-gray-800 flex items-center justify-center gap-2 px-3 py-2 rounded-md text-sm font-medium cursor-pointer ">
        <ShoppingCart className="w-4 h-4" />
        Buy this Item
      </button>
    </div>
  );
};

export default ProductInteraction;
