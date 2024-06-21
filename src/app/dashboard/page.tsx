"use client;";

import BudgetPlanItemsComponent from "./budget-plan-item";

export default function Page() {
  return (
    <main>
      <div className="flex flex-col items-center">
        <div className="flex flex-row gap-2 p-4 items-stretch bg-white justify-between shadow-md fixed w-full">
          <form className="grow">
            <div className="w-full h-full border-2 border-gray-200 rounded-md">
              <input
                className="w-full h-full p-2 outline-none rounded-md"
                placeholder="cari"
                name="keyword"
              />
            </div>
          </form>
          <button className="rounded-md bg-red-600 border-none p-2 text-white font-bold">
            Buat baru
          </button>
        </div>
        <div className="mt-20 px-2 py-1 md:w-3/5 w-full">
          <BudgetPlanItemsComponent />
        </div>
      </div>
    </main>
  );
}
