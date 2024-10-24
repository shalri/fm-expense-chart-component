export interface ExpenseItem {
  day: string;
  amount: number;
}

export type calculateCurrentBalanceProps = {
  data: ExpenseItem[];
  prevMonthBalance: number;
  prevMonthExpense: number;
  currentTotalExpense: number;
};
