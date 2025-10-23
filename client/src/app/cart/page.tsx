"use client";
import React, { useState } from "react";
import categoriesData from "../../../data/categoriesData";
import { useRouter, useSearchParams } from "next/navigation";
import { ArrowRight, Trash2 } from "lucide-react";
import ShippingForm from "@/components/ShippingForm";
import PaymentForm from "@/components/PaymentForm";
import Image from "next/image";
import { ShippingFormInputs } from "../../../types";
import useCartStore from "@/stores/cartStore";

const steps = [
  { id: 1, title: "Shopping Cart" },
  { id: 2, title: "Shopping Address" },
  { id: 3, title: "Payment Method" },
];

// const cartItems = categoriesData;
// console.log(cartItems);

const CartPage = () => {
  const searchParam = useSearchParams();
  const router = useRouter();
  const [shippingForm, setShippingForm] = useState<ShippingFormInputs>();

  const activeStep = parseInt(searchParam.get("step") || "1");

  const { cart, removeFromCart } = useCartStore();

  return (
    <div className="flex flex-col gap-8 items-center justify-center mt-12">
      <h1 className="text-2xl font-medium">Your Shopping Cart</h1>
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        {steps.map((step) => (
          <div
            className={`flex items-center gap-2 border-b-2 pb-4 ${
              step.id === activeStep ? "border-gray-800" : "border-gray-200"
            }`}
            key={step.id}
          >
            <div
              className={`w-6 h-6 rounded-full text-white p-4 flex items-center justify-center ${
                step.id === activeStep ? "bg-gray-800" : "bg-gray-200"
              }`}
            >
              {step.id}
            </div>
            <p
              className={`text-sm font-medium ${
                step.id === activeStep ? "text-gray-800" : "text-gray-400"
              } `}
            >
              {step.title}
            </p>
          </div>
        ))}
      </div>

      <div className="w-full flex flex-col lg:flex-row gap-16">
        <div className="w-full lg:w-7/12 shadow-lg border-1 border-gray-100 p-8 rounded-lg flex flex-col gap-8">
          {activeStep === 1 ? (
            cart.map((item) => (
              <div
                key={item.id + item.selectedSize + item.selectedColor}
                className="flex items-center justify-between"
              >
                <div className="flex gap-8">
                  <div className="relative rounded-lg overflow-hidden w-32 h-32">
                    <Image
                      src={item?.images[item?.selectedColor]}
                      alt={item.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="flex flex-col justify-between">
                    <div className="flex flex-col gap-1">
                      <p className="text-sm font-semibold">{item.name}</p>
                      <p className="text-sm text-gray-500">
                        Quantity: {item?.quantity}
                      </p>
                      <p className="text-sm text-gray-500">
                        Size: {item?.selectedSize}
                      </p>
                      <p className="text-sm text-gray-500">
                        Color: {item?.selectedColor}
                      </p>
                    </div>
                    <p className="font-medium">${item?.price}</p>
                  </div>

                  <div></div>
                </div>
                <button
                  onClick={() => removeFromCart(item)}
                  className="w-8 h-8 rounded-full hover:bg-red-200 transition-all duration-300 bg-red-100 text-red-400 items-center justify-center flex cursor-pointer"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            ))
          ) : activeStep === 2 ? (
            <ShippingForm setShippingForm={setShippingForm} />
          ) : activeStep === 3 && shippingForm ? (
            <PaymentForm />
          ) : (
            <p className="text-sm text-gray-500">
              Plase fill in the shipping form to contiune
            </p>
          )}
        </div>
        <div className="w-full lg:w-5/12 lg:w-7/12 shadow-lg border-1 border-gray-100 p-8 rounded-lg flex flex-col gap-8 h-max">
          <h2 className="font-semibold">Cart Details</h2>
          <div className="flex flex-col gap-4 ">
            <div className=" flex justify-between">
              <p className="text-sm text-gray-500">Subtotal:</p>
              <p className="font-semibold">
                $
                {cart
                  .reduce((acc, item) => acc + item.price * item.quantity, 0)
                  .toFixed(2)}
              </p>
            </div>
            <div className=" flex justify-between">
              <p className="text-sm text-gray-500">Discount(10%)</p>
              <p className="font-semibold text-red-600">$10</p>
            </div>
            <div className=" flex justify-between">
              <p className="text-sm text-gray-500">Shopping Free:</p>
              <p className="font-semibold">$10</p>
            </div>
            <hr className="border-gray-200" />
            <div className=" flex justify-between">
              <p className="font-semibold text-gray-800">Total:</p>
              <p className="font-semibold">
                $
                {cart
                  .reduce((acc, item) => acc + item.price * item.quantity, 0)
                  .toFixed(2)}
              </p>
            </div>
          </div>
          {activeStep === 1 && (
            <button
              onClick={() => router.push("/cart?step=2")}
              className="bg-gray-800 hover:bg-gray-900 transition-all duration-300 text-white w-full p-2 rounded-lg cursor-pointer flex items-center justify-center gap-2"
            >
              Continue
              <ArrowRight className="w-3 h-3" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
