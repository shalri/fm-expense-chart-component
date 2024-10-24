import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tw-merge";
import { calculateCurrentBalanceProps } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function calculateCurrentBalance({
  data,
  prevMonthBalance,
  prevMonthExpense,
  currentTotalExpense,
}: calculateCurrentBalanceProps) {
  const currentWeekExpenses = data.reduce((acc, item) => acc + item.amount, 0);
  const currentMonthTotalExpense = (
    currentTotalExpense + currentWeekExpenses
  ).toFixed(2);
  const currentBalance = (prevMonthBalance - currentWeekExpenses).toFixed(2);
  //
  // Calculate the percentage change from previous month expenses to current month expenses
  const percentageChange = prevMonthExpense
    ? (
        ((parseFloat(currentMonthTotalExpense) - prevMonthExpense) /
          prevMonthExpense) *
        100
      ).toFixed(1)
    : "0.00";

  const expenseIncreased =
    prevMonthExpense < parseFloat(currentMonthTotalExpense);

  return {
    currentBalance,
    currentMonthTotalExpense,
    percentageChange,
    expenseIncreased,
  };
}
