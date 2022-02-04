import React from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import humanize from "humanize-plus";
import { ICartItem } from "../type";
import CartItem from "../components/CartItem";
import { clearBasket } from "../feature/cartSlicer";
const CartPage = () => {
  const { cartItems } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  return (
    <div className="px-2">
      <div className="w-full  border-b border-gray-300 mb-10 pt-5 flex justify-between items-center">
        <h3 className=" border-b-4 border-red-600 inline-block px-4 py-2 text-red-600">
          سبد خرید{" "}
          <span className="px-2 py-1 rounded-full bg-red-600 text-white mr-2">
            {cartItems.length}
          </span>
        </h3>

        <button
          onClick={() => dispatch(clearBasket())}
          type="button"
          className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          خالی کردن سبد
        </button>
      </div>
      <div className="lg:grid lg:grid-cols-12 lg:gap-x-4">
        {cartItems.length > 0 ? (
          <div className="lg:col-span-9 rounded-lg border border-gray-300 bg-white px-3 mb-4">
            {cartItems.map((item: ICartItem) => (
              <CartItem item={item} key={item.id} />
            ))}
          </div>
        ) : (
          <div className="lg:col-span-9 rounded-lg border border-gray-300 bg-white px-3 mb-4">
            <div className="w-full flex flex-col justify-center items-center">
              <img
                src="https://www.digikala.com/static/files/68b7acd6.png "
                alt="empty-basket"
                className="w-48 h-auto"
              />
              <h3 className="text-gray-800 text-lg">سبد خرید شما خالی است!</h3>
            </div>
          </div>
        )}

        <div className="col-span-3 lg:h-72 bg-white rounded-lg border border-gray-200 flex flex-col px-2 space-y-5 mb-28 lg:mb-0">
          <div className="w-full flex justify-between p-2 border-b border-gray-200">
            <span className="text-base text-gray-400">{`قیمت کالاها (${
              cartItems.length > 0
                ? cartItems
                    .map((item: any) => item.qty)
                    .reduce((a: number, b: number) => a + b)
                : 0
            })`}</span>
            <span className="text-base text-gray-400">
              {humanize.intComma(
                cartItems.length > 0
                  ? cartItems
                      .map((item: any) => item.price * item.qty)
                      .reduce((a: number, b: number) => a + b)
                  : 0
              )}{" "}
              <span className="text-xs">تومان</span>
            </span>
          </div>

          <div className="w-full flex justify-between px-2">
            <span className="text-base text-gray-900">جمع سبد خرید</span>
            <span className="text-base text-gray-900">
              {humanize.intComma(
                cartItems.length > 0
                  ? cartItems
                      .map((item: any) => item.price * item.qty)
                      .reduce((a: number, b: number) => a + b)
                  : 0
              )}{" "}
              <span className="text-xs">تومان</span>
            </span>
          </div>

          <span className="text-gray-400 text-xs">
            هزینه‌ی ارسال در ادامه بر اساس آدرس، زمان و نحوه‌ی ارسال انتخابی
            شما‌ محاسبه و به این مبلغ اضافه خواهد شد
          </span>

          <button
            type="button"
            className="hidden lg:block text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center m-4 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          >
            ادامه فرآیند خرید
          </button>

          <div className="w-full flex justify-between pb-2">
            <span className="text-gray-500 text-base">امتیاز دیجی کلاب</span>
            <span className="text-gray-500 text-base">150 امتیاز</span>
          </div>
        </div>

        <div className="w-full fixed bottom-0 lg:hidden bg-white">
          <div className="w-full justify-between items-center px-2 flex">
            <button
              type="button"
              className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center m-4 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            >
              ادامه فرآیند خرید
            </button>

            <div className="flex flex-col justify-between px-2">
              <span className="text-base text-gray-900">مبلغ قابل پرداخت</span>
              <span className="text-base text-gray-900">
                {humanize.intComma(
                  cartItems.length > 0
                    ? cartItems
                        .map((item: any) => item.price * item.qty)
                        .reduce((a: number, b: number) => a + b)
                    : 0
                )}{" "}
                <span className="text-xs">تومان</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
