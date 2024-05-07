interface BudgetPlanItem {
  id: number;
  title: string;
  user: {
    id: number;
    username: string;
  };
  amount: number;
  amountString: string;
  expense: number;
  expenseString: string;
  balance: number;
  balanceString: string;
  private: boolean;
  createdAt: Date;
  createdAtString: string;
  updatedAt: Date;
  updatedAtString: string;
  hasBeenUpdated: boolean;
}
