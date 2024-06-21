import axios from "axios";
import { BUDGET } from "./url";
import { UnauthorizedError } from "./errors";
import { cookies } from "next/headers";

export interface BudgetPlanItem {
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

export interface BudgetPlanItemsResponse {
  data: {
    pageNo: number;
    pageSize: number;
    recordCount: number;
    budgetPlans: BudgetPlanItem[];
  };
}

export interface BudgetPlanItemsQuery {
  keyword: string;
  pageNo: number;
}

class BudgetPlanRequest {
  get: (query: BudgetPlanItemsQuery) => Promise<{
    items: BudgetPlanItem[];
    page: number;
    previous: boolean;
    next: boolean;
  }> = async (query: BudgetPlanItemsQuery) => {
    const token = cookies().get("token");
    const tokenString = token?.value ?? "";
    let response = await axios.get<BudgetPlanItemsResponse>(
      `${BUDGET}?keyword=${query.keyword}&pageNo=${query.pageNo}`,
      {
        headers: {
          Authorization: `Bearer ${tokenString}`,
        },
      },
    );

    if (response.status == 401) {
      throw new UnauthorizedError("unauthorized");
    }

    let budgetPlanItemsData = response.data.data;
    let itemPosition =
      (budgetPlanItemsData.pageNo - 1) * 5 + budgetPlanItemsData.pageSize;
    return {
      items: budgetPlanItemsData.budgetPlans,
      page: budgetPlanItemsData.pageNo,
      previous: itemPosition > 5,
      next: itemPosition < budgetPlanItemsData.recordCount,
    };
  };
}

const budgetPlanRequest = new BudgetPlanRequest();

export default budgetPlanRequest;
