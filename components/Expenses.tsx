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
    <main className="mx-auto grid min-h-screen w-full max-w-[400px] grid-cols-1 items-center justify-center px-4">
      {" "}
      {/* <main className="mx-auto grid min-h-screen w-full max-w-[400px] grid-cols-1 justify-center px-4 pt-[66px]"> */}
      <section className="w-full space-y-4">
        <div className="flex w-full items-center justify-between rounded-[0.625rem] bg-ec-red p-5 text-white">
          <h1 className="flex flex-col text-[0.9375rem]">
            My balance
            <span className="text-[24px] font-bold">${currentBalance}</span>
          </h1>
          <Image src="/images/logo.svg" width={62} height={62} alt="logo" />
        </div>
        <div className="rounded-[0.625rem] bg-white pb-5">
          <h2 className="px-5 py-6 text-2xl font-bold text-ec-dark-brown">
            Spending - Last 7 days
          </h2>
          <div className="h-[206px] border-none pl-1 pr-3">
            <BarChart />
          </div>
          <div className="mt-5 px-5">
            <div className="flex w-full justify-between border-t-2 border-t-orange-500/10 pt-[22px] text-ec-medium-brown">
              <h2 className="flex flex-col text-base text-ec-medium-brown">
                Total this month{" "}
                <span className="pt-1 text-3xl font-bold text-ec-dark-brown">
                  ${currentMonthTotalExpense}
                </span>
              </h2>
              <div className="self-end">
                <h3 className="flex flex-col self-end text-right text-[0.925rem] text-base">
                  <span className="block pt-[22px] text-[0.9375rem] font-bold text-ec-dark-brown">
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
