import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  PaymentFormInputs,
  paymentFormSchema,
  ShippingFormInputs,
  shippingFormSchema,
} from "../../types";

import { ArrowRight, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const PaymentForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PaymentFormInputs>({
    resolver: zodResolver(paymentFormSchema),
  });

  const handlePaymentForm: SubmitHandler<PaymentFormInputs> = (data) => {};
  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={handleSubmit(handlePaymentForm)}
    >
      <div className="flex flex-col gap-1">
        <label
          htmlFor="cardHolder"
          className="text-sm text-gray-500 font-medium"
        >
          Name or card
        </label>
        <input
          className="border-b py-2 border-gray-200 outline-none text-sm"
          type="text"
          id="cardHolder"
          placeholder="Monte Cristo"
          {...register("cardHolder")}
        />
        {errors.cardHolder && (
          <p className="text-sm  text-red-500">{errors.cardHolder.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label
          htmlFor="cardNumber"
          className="text-sm text-gray-500 font-medium"
        >
          Card Number
        </label>
        <input
          className="border-b py-2 border-gray-200 outline-none text-sm"
          type="text"
          id="cardNumber"
          placeholder="1234 456 5859 6008"
          {...register("cardNumber")}
        />
        {errors.cardNumber && (
          <p className="text-sm  text-red-500">{errors.cardNumber.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label
          htmlFor="expirationDate"
          className="text-sm text-gray-500 font-medium"
        >
          Expiration Date
        </label>
        <input
          className="border-b py-2 border-gray-200 outline-none text-sm"
          type="phone"
          id="expirationDate"
          placeholder="03/11"
          {...register("expirationDate")}
        />
        {errors.expirationDate && (
          <p className="text-sm  text-red-500">
            {errors.expirationDate.message}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="cvv" className="text-sm text-gray-500 font-medium">
          CVV
        </label>
        <input
          className="border-b py-2 border-gray-200 outline-none text-sm"
          type="text"
          id="cvv"
          placeholder="555"
          {...register("cvv")}
        />
        {errors.cvv && (
          <p className="text-sm  text-red-500">{errors.cvv.message}</p>
        )}
      </div>
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

      <button
        type="submit"
        className="bg-gray-800 hover:bg-gray-900 transition-all duration-300 text-white w-full p-2 rounded-lg cursor-pointer flex items-center justify-center gap-2"
      >
        Checkot
        <ShoppingCart className="w-3 h-3" />
      </button>
    </form>
  );
};

export default PaymentForm;
