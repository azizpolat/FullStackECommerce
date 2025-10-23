import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ShippingFormInputs, shippingFormSchema } from "../../types";

import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

const ShippingForm = ({
  setShippingForm,
}: {
  setShippingForm: (data: ShippingFormInputs) => void;
}) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ShippingFormInputs>({
    resolver: zodResolver(shippingFormSchema),
  });

  const handleShipingForm: SubmitHandler<ShippingFormInputs> = (data) => {
    setShippingForm(data);
    router.push("/cart?step=3", { scroll: false });
  };
  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={handleSubmit(handleShipingForm)}
    >
      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="text-sm text-gray-500 font-medium">
          Name
        </label>
        <input
          className="border-b py-2 border-gray-200 outline-none text-sm"
          type="text"
          id="name"
          placeholder="Monte Cristo"
          {...register("name")}
        />
        {errors.name && (
          <p className="text-sm  text-red-500">{errors.name.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="text-sm text-gray-500 font-medium">
          Email
        </label>
        <input
          className="border-b py-2 border-gray-200 outline-none text-sm"
          type="email"
          id="email"
          placeholder="montecristo@gmail.com"
          {...register("email")}
        />
        {errors.email && (
          <p className="text-sm  text-red-500">{errors.email.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="phone" className="text-sm text-gray-500 font-medium">
          Phone
        </label>
        <input
          className="border-b py-2 border-gray-200 outline-none text-sm"
          type="phone"
          id="phone"
          placeholder="+90 555 444 2211"
          {...register("phone")}
        />
        {errors.phone && (
          <p className="text-sm  text-red-500">{errors.phone.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="address" className="text-sm text-gray-500 font-medium">
          Address
        </label>
        <input
          className="border-b py-2 border-gray-200 outline-none text-sm"
          type="address"
          id="address"
          placeholder="123 Main Street,Cal "
          {...register("address")}
        />
        {errors.address && (
          <p className="text-sm  text-red-500">{errors.address.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="city" className="text-sm text-gray-500 font-medium">
          City
        </label>
        <input
          className="border-b py-2 border-gray-200 outline-none text-sm"
          type="text"
          id="city"
          placeholder="New York City "
          {...register("city")}
        />
        {errors.city && (
          <p className="text-sm  text-red-500">{errors.city.message}</p>
        )}
      </div>
      <button
        type="submit"
        className="bg-gray-800 hover:bg-gray-900 transition-all duration-300 text-white w-full p-2 rounded-lg cursor-pointer flex items-center justify-center gap-2"
      >
        Continue
        <ArrowRight className="w-3 h-3" />
      </button>
    </form>
  );
};

export default ShippingForm;
