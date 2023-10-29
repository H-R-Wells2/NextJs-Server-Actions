"use client";

import { addProductToDatabase } from "@/actions/serverAtions";
import { useTransition } from "react";

const AddProductButton = () => {
  const [isPending, startTransition] = useTransition();

  const formData = new FormData();
  formData.append("product", "Macbook Pro");
  formData.append("price", "1299");

  return (
    <button
      onClick={() => startTransition(() => addProductToDatabase(formData))}
      className="py-2 px-4 bg-blue-500 hover:bg-blue-600 rounded-lg text-white"
    >
      {isPending ? "Adding..." : "Add Macbook Pro"}
    </button>
  );
};

export default AddProductButton;
