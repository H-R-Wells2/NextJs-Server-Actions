"use client";

import { MdOutlineRemoveCircleOutline } from "react-icons/md";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useTransition } from "react";
import { removeProductFromDatabase } from "@/actions/serverAtions";

const RemoveProductButton = ({ id }: { id: number | undefined }) => {
  const [isPending, startTransition] = useTransition();

  return (
    <button
      onClick={() => startTransition(() => removeProductFromDatabase(id))}
      className="-mt-3 -mr-3 cursor-pointer"
    >
      {isPending ? (
        <AiOutlineLoading3Quarters className="text-blue-500 w-5 h-5 animate-spin" />
      ) : (
        <MdOutlineRemoveCircleOutline className="text-blue-500 hover:text-blue-600 w-5 h-5" />
      )}
    </button>
  );
};

export default RemoveProductButton;
