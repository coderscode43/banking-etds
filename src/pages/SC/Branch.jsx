import DynamicTableEdit from "@/components/tables/DynamicTableEdit";
import { Field, Input, Label } from "@headlessui/react";
import clsx from "clsx";

const Branch = () => {
  // Table Details
  const tableHead = [
    { label: "Sr.No.", key: "srNo" },
    { label: "Date", key: "dateoflogs" },
    { label: "Action", key: "action" },
    { label: "F.Y.", key: "fy" },
    { label: "Form", key: "form" },
    { label: "Quarter", key: "quarter" },
    { label: "TAN", key: "tan" },
    { label: "User", key: "username" },
  ];

  const tableData = [
    { label: "Sr.No.", key: "srNo" },
    { label: "Date", key: "dateoflogs" },
    { label: "Action", key: "action" },
    { label: "F.Y.", key: "fy" },
    { label: "Form", key: "form" },
    { label: "Quarter", key: "quarter" },
    { label: "TAN", key: "tan" },
    { label: "User", key: "username" },
  ];

  return (
    <>
      <div className="space-y-5">
        <h1 className="text-2xl font-bold text-[var(--primary-color)]">
          RO Details
        </h1>

        <div>
          <form className="flex items-end justify-start gap-5">
            <Field className="flex gap-3">
              <div>
                <Label className="font-semibold text-[var(--primary-color)]">
                  Ro Code
                </Label>
                <Input
                  className={clsx(
                    "mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm/6 text-gray-900",
                    "focus:outline-2 focus:outline-offset-2 focus:outline-blue-500 focus:outline-none"
                  )}
                />
              </div>
              <div>
                <Label className="font-semibold text-[var(--primary-color)]">
                  RO Name
                </Label>
                <Input
                  className={clsx(
                    "mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm/6 text-gray-900",
                    "focus:outline-2 focus:outline-offset-2 focus:outline-blue-500 focus:outline-none"
                  )}
                />
              </div>
              <div>
                <Label className="font-semibold text-[var(--primary-color)]">
                  State
                </Label>
                <select
                  name="state"
                  id="state"
                  className={clsx(
                    "mt-1 block w-72 rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm/6 text-gray-900",
                    "focus:outline-2 focus:outline-offset-2 focus:outline-blue-500 focus:outline-none",
                    "h-[38px]"
                  )}
                >
                  <option value="">Select State</option>
                  <option value="state1">State 1</option>
                  <option value="state2">State 2</option>
                  <option value="state3">State 3</option>
                </select>
              </div>
            </Field>

            <div className="flex gap-4">
              <button className="h-[38px] cursor-pointer rounded-sm bg-[#03d87f] px-3 text-2xl font-black text-white">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>

              <button className="h-[38px] cursor-pointer rounded-sm bg-[#1761fd] px-3 text-2xl font-black text-white">
                <i className="fa-solid fa-plus"></i>
              </button>

              <button className="h-[38px] cursor-pointer rounded-sm bg-[#1761fd] px-2 text-white">
                Export to Excel
              </button>
            </div>
          </form>
        </div>

        <DynamicTableEdit tableHead={tableHead} tableData={tableData} />
      </div>
    </>
  );
};

export default Branch;
