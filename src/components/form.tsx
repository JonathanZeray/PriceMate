"use client";

import { useForm, UseFormRegister } from "react-hook-form";
import React from "react";
import { db } from "@/app/server/db";
import { products } from "@/app/server/db/schema";

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
  <>
    <label>{label}</label>
    <select name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
      {options.map((option, index) => (
        <option value={option} key={index}>
          {option}
        </option>
      ))}
    </select>
  </>
));
Select.displayName = "Select";

export const Form = () => {
  const { register, handleSubmit } = useForm<IFormValues>();
  const ageOptions = Array.from({ length: 11 }, (_, i) => i);

  const onSubmit = async (data: IFormValues) => {
    console.log(
      data.age,
      data.category,
      data.condition,
      data.imageUrl,
      data.initialPrice,
      data.productName
    );

    await db.insert(products).values({
      productName: "Test",
      imageUrl: "test",
      userId: "test",
      initialPrice: 100,
      secondHandPrice: 50,
      category: "test",
      condition: "test",
      age: 4,
    });
  };

  return (
    <form
      className="flex flex-col items-center space-y-2"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input placeholder="Product Name" {...register("productName")} />
      <Input placeholder="Image URL" {...register("imageUrl")} />
      <Input
        placeholder="Initial Price"
        type="number"
        {...register("initialPrice")}
      />
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
      <Select label="Age in years" options={ageOptions} {...register("age")} />
      <button
        type="submit"
        className="text-white bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5"
      >
        Confirm
      </button>
    </form>
  );
};
