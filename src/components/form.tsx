"use client";
import { useForm, UseFormRegister } from "react-hook-form";
import React from "react";
import { getLastCreatedProduct, postToDB } from "@/app/actions";
import { Product } from "@/model/Product";
import { useRouter } from "next/navigation";

interface IFormValues {
  productName: string;
  imageUrl: string;
  initialPrice: number;
  category: string;
  condition: string;
  age: number;
}

const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ type, ...props }, ref) => (
  <input
    type={type}
    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
    ref={ref}
    {...props}
  />
));

Input.displayName = "Input";

const Select = React.forwardRef<
  HTMLSelectElement,
  { label: string; options: (string | number)[] } & ReturnType<
    UseFormRegister<IFormValues>
  >
>(({ onChange, onBlur, name, label, options }, ref) => (
  <div className="flex flex-col w-full">
    <label className="font-bold text-center">{label}</label>
    <select
      name={name}
      ref={ref}
      onChange={onChange}
      onBlur={onBlur}
      className="w-2/3 sm:w-full mx-auto border border-black rounded-lg px-2 py-1"
    >
      {options.map((option, index) => (
        <option value={option} key={index} className="text-center">
          {option}
        </option>
      ))}
    </select>
  </div>
));
Select.displayName = "Select";

interface FormProps {
  userId: string;
}
export const Form = ({ userId }: FormProps) => {
  const { register, handleSubmit } = useForm<IFormValues>();
  const ageOptions = Array.from({ length: 11 }, (_, i) => i);

  const router = useRouter();

  function depreciatedValue(
    age: number,
    initialPrice: number,
    valueDependency: number
  ) {
    return (
      initialPrice * (1 - Math.log(age + 1) / Math.log(age + valueDependency))
    );
  }

  const conditionDepreciationRates = (condition: string) => {
    if (condition === "Like New") return 20;
    if (condition === "Good") return 15;
    if (condition === "Bad") return 10;
    if (condition === "Very bad") return 5;
  };

  const onSubmit = async (data: IFormValues) => {
    const valueDependency = conditionDepreciationRates(data.condition);

    const secondHandPrice = depreciatedValue(
      data.age,
      data.initialPrice,
      valueDependency!
    );

    const newItem: Product = {
      ...data,
      userId: userId,
      secondHandPrice: Math.round(secondHandPrice),
    };

    await postToDB(newItem);

    const lastCreatedProductId = await getLastCreatedProduct();

    router.push(`/product/${lastCreatedProductId}`);
  };

  return (
    <form
      className="flex flex-col items-center h-[80vh] gap-4 mt-16 sm:mt-8"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col items-center w-full">
        <label id="productName" className="w-2/3">
          Title
        </label>
        <Input
          className="w-2/3 border-2 border-black px-4 py-2 rounded-lg mb-2 sm:mb-4"
          placeholder="What are you selling?"
          id="productName"
          {...register("productName")}
        />
        <label id="imageUrl" className="w-2/3">
          Image of your product
        </label>
        <Input
          className="w-2/3 border-2 border-black px-4 py-2 rounded-lg mb-2 sm:mb-4"
          placeholder="Add image URL"
          id="imageUrl"
          {...register("imageUrl")}
        />
        <label id="initialPrice" className="w-2/3">
          Your initial buying price
        </label>
        <Input
          className="w-2/3 border-2 border-black px-4 py-2 rounded-lg mb-2 sm:mb-4"
          placeholder="In SEK"
          type="number"
          id="initialPrice"
          {...register("initialPrice")}
        />
      </div>
      <div className="w-2/3 flex flex-col gap-4 sm:flex-row justify-center sm:pb-6">
        <Select
          label="Category"
          options={["Computers"]}
          {...register("category")}
        />
        <Select
          label="Condition"
          options={["Like New", "Good", "Bad", "Very Bad"]}
          {...register("condition")}
        />
        <Select
          label="Age in years"
          options={ageOptions}
          {...register("age")}
        />
      </div>

      <button
        type="submit"
        className="text-white bg-blue-700 font-medium rounded-lg text-lg px-5 py-2.5 mt-4"
      >
        Confirm
      </button>
    </form>
  );
};
