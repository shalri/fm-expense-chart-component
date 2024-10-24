"use client";
import { calculateCurrentBalance } from "@/lib/utils";
import data from "@/lib/data.json";
import Image from "next/image";
import BarChart from "./BarChart";

export default function Expenses() {
  const {
    currentBalance,
    currentMonthTotalExpense,
    percentageChange,
    expenseIncreased,
  } = calculateCurrentBalance({
    data,
    prevMonthBalance: 1149.42,
    currentTotalExpense: 250.39,
    prevMonthExpense: 467.1,
  });
  return (
    <main className="mx-auto grid min-h-screen w-full max-w-[572px] grid-cols-1 items-center justify-center px-4">
      <section className="w-full space-y-4 sm:space-y-6">
        <div className="flex w-full items-center justify-between rounded-[0.625rem] bg-ec-red p-5 text-white sm:rounded-[1.125rem] sm:px-8 sm:pb-[1.375rem] sm:pt-[1.625rem]">
          <h1 className="flex flex-col text-[0.9375rem] sm:text-[1.125rem]">
            My balance
            <span className="mt-[0.125rem] text-[24px] font-bold sm:text-[1.96rem]">
              ${currentBalance}
            </span>
          </h1>
          <div className="relative size-[3.875rem] sm:h-[3rem] sm:w-[5.375rem]">
            <Image
              src="/fm-expense-chart-component/images/logo.svg"
              fill
              className="object-contain"
              alt="logo"
            />
          </div>
        </div>
        <div className="rounded-[0.625rem] bg-white pb-5 sm:rounded-[1.125rem] sm:pb-[3.375rem]">
          <h2 className="px-5 py-6 text-2xl font-bold text-ec-dark-brown sm:px-10 sm:py-[40px] sm:text-[1.97rem]">
            Spending - Last 7 days
          </h2>
          <div className="h-[206px] border-none pl-1 pr-3 sm:pl-5 sm:pr-7">
            <BarChart />
          </div>
          <div className="mt-5 px-5 sm:mt-8 sm:px-10">
            <div className="flex w-full items-baseline justify-between border-t-2 border-t-orange-500/10 pt-[1.375rem] text-ec-medium-brown sm:pt-8">
              <h2 className="flex flex-col text-base text-ec-medium-brown sm:text-[1.125rem]">
                Total this month{" "}
                <span className="pt-1 text-3xl font-bold text-ec-dark-brown sm:pt-4 sm:text-[3rem]">
                  ${currentMonthTotalExpense}
                </span>
              </h2>
              <div className="self-end sm:-mb-2">
                <h3 className="flex flex-col justify-end self-end text-right text-[0.925rem] sm:text-[18px]">
                  <span className="block self-end pt-[1.375rem] text-[0.9375rem] font-bold text-ec-dark-brown sm:sm:text-[1.125rem]">
                    {expenseIncreased ? "+" : ""}
                    {percentageChange}%
                  </span>{" "}
                  from last month
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
