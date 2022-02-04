import React from "react";
import { ICartItem } from "../type";
import { FaShieldAlt, FaPlus, FaMinus, FaTrashAlt } from "react-icons/fa";
import humanize from "humanize-plus";
import { useAppDispatch } from "../app/hooks";
import { increaseQty, decreaseQty, removeItem } from "../feature/cartSlicer";

const CartItem = ({ item }: { item: ICartItem }) => {
  const dispatch = useAppDispatch();

  return (
    <div className="w-full lg:grid lg:grid-cols-12 lg:gap-x-2 py-4  border-b border-gray-200">
      <div className="col-span-3">
        <img src={item.img} alt={item.name} className="w-32 h-32" />
      </div>
      <div className="col-span-9 flex flex-col space-y-4">
        <h3 className="text-base text-gray-800">{item.name}</h3>
        <div className="flex items-center">
          <span className={`${item.color} rounded-full w-4 h-4 ml-2`}></span>
          <span className="text-gray-500 text-base">{item.colorFa}</span>
        </div>
        <div className="flex">
          <FaShieldAlt />
          <span className="text-gray-500 text-sm mr-2">
            گارانتی ۳۶ ماهه آواژنگ
          </span>
        </div>

        <div className="w-full flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-32 border border-gray-200 rounded-lg grid grid-cols-12 ml-4">
              <button
                className="text-blue-500 text-lg col-span-4 flex justify-center items-center py-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={() => dispatch(increaseQty(item.id))}
                disabled={item.qty === item.countInStock}
              >
                <FaPlus />
              </button>
              <span className="text-blue-500 text-lg col-span-4 text-center py-2">
                {item.qty}
              </span>
              <button
                className="text-blue-500 text-lg col-span-4 flex justify-center items-center py-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={() => dispatch(decreaseQty(item.id))}
                disabled={item.qty === 1}
              >
                <FaMinus />
              </button>
            </div>
            <span
              onClick={() => dispatch(removeItem(item.id))}
              className="text-blue-500 text-lg col-span-4 flex justify-center items-center py-2 cursor-pointer"
            >
              <FaTrashAlt />
            </span>
          </div>
          <span className="text-base text-gray-900">
            {humanize.intComma(item.price * item.qty)}{" "}
            <span className="text-xs">تومان</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
