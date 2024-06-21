import { cookies } from "next/headers";
import budgetPlanRequest from "../lib/budget-request";

function BudgetPlanCard({
  budgetPlanItem,
}: {
  budgetPlanItem: BudgetPlanItem;
}) {
  let expenseScale =
    (budgetPlanItem.expense / budgetPlanItem.amount) * 100 < 100
      ? (budgetPlanItem.expense / budgetPlanItem.amount) * 100
      : 100;
  return (
    <div className="flex flex-col gap-1 my-1 shadow p-4 border rounded-md">
      <p className="text-xs text-gray-500">{budgetPlanItem.createdAtString}</p>
      <p className="text-xl">{budgetPlanItem.title}</p>
      <p className="text-right mt-2">
        <span className="text-sm">anggaran tersedia: </span>
        <span className="text-xl font-bold">
          {budgetPlanItem.balanceString}
        </span>
      </p>
      <div className="mt-1 h-8 bg-gray-400 rounded-md">
        <div
          className={`h-full bg-green-500 rounded-l-md ${expenseScale < 100 ? "" : "rounded-r-md"}`}
          style={{
            width: `${expenseScale}%`,
          }}
        >
          <p className="text-sm h-full p-2 font-bold text-white">
            {budgetPlanItem.expenseString}
          </p>
        </div>
      </div>
    </div>
  );
}

let tempBudgetPlans: BudgetPlanItem[] = [
  {
    id: 1,
    title: "lorem ipsum 1",
    user: {
      id: 1,
      username: "username lorem ipsum",
    },
    amount: 500000,
    amountString: "Rp500.000",
    expense: 200000,
    expenseString: "Rp200.000",
    balance: 450000,
    balanceString: "Rp300.000",
    private: true,
    createdAt: new Date(),
    createdAtString: "Minggu, 5 May 2024",
    updatedAt: new Date(),
    updatedAtString: "Senin, 6 May 2024",
    hasBeenUpdated: true,
  },
  {
    id: 2,
    title: "lorem ipsum 2",
    user: {
      id: 1,
      username: "username lorem ipsum",
    },
    amount: 500000,
    amountString: "Rp500.000",
    expense: 200000,
    expenseString: "Rp200.000",
    balance: 450000,
    balanceString: "Rp300.000",
    private: true,
    createdAt: new Date(),
    createdAtString: "Minggu, 5 May 2024",
    updatedAt: new Date(),
    updatedAtString: "Senin, 6 May 2024",
    hasBeenUpdated: true,
  },
];

export default async function BudgetPlanItemsComponent() {
  try {
    const { items, page, previous, next } = await budgetPlanRequest.get({
      keyword: "",
      pageNo: 1,
    });
    return (
      <div>
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <BudgetPlanCard budgetPlanItem={item} />
            </li>
          ))}
        </ul>
        <div className="flex flex-row">
          {previous ? "previous" : null}
          {next ? "next" : null}
        </div>
      </div>
    );
  } catch (error) {
    return "error";
  }
}
