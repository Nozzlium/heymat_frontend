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

let budget: BudgetPlanItem = {
  id: 1,
  title: "lorem ipsum",
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
};

export default function Page() {
  return (
    <main>
      <div className="flex flex-col items-center">
        <div className="flex flex-row gap-2 p-4 items-stretch bg-white justify-between shadow fixed w-full">
          <form className="grow">
            <div className="w-full h-full border-2 border-gray-200 rounded-md">
              <input
                className="w-full h-full p-2 outline-none rounded-md"
                placeholder="cari"
                name="keyword"
              />
            </div>
          </form>
          <button className="rounded-md bg-red-400 border-none p-2 text-white">
            Buat baru
          </button>
        </div>
        <div className="mt-20 px-2 py-1 md:w-3/5 w-full">
          <BudgetPlanCard budgetPlanItem={budget} />
        </div>
      </div>
    </main>
  );
}
