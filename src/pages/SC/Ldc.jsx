import DynamicTableEdit from "@/components/tables/DynamicTableEdit";
import { Field, Input, Label } from "@headlessui/react";
import clsx from "clsx";

const Ldc = () => {
  const tableHead = [
    {
      key: "srNo",
      label: "Sr.No",
    },
    {
      key: "LDC_NUMBER",
      label: "LDC_NUMBER",
    },
    {
      key: "NAME",
      label: "NAME",
    },
    {
      key: "TAN",
      label: "TAN",
    },
    {
      key: "PAN",
      label: "PAN",
    },
    {
      key: "FY",
      label: "Finanial Year",
    },
    {
      key: "VALID_FROM",
      label: "Valid From",
    },
    {
      key: "VALID_TO",
      label: "Valid To",
    },
    {
      key: "SECTION_CODE",
      label: "Section Code",
    },
    {
      key: "NATURE_OF_PAYMENT",
      label: "Nature of Payment",
    },
    {
      key: "LDC_RATE",
      label: "LDC Rate",
    },
    {
      key: "certificate_LIMIT",
      label: "Certificate Limit",
    },
    {
      key: "AMOUNT_CONSUMED",
      label: "Amount Consumed",
    },
    {
      key: "ISSUE_DATE",
      label: "Issued Date",
    },
    {
      key: "CANCEL_DATE",
      label: "Cancel Date",
    },
    {
      key: "as_ON_DATE",
      label: "As on Date",
    },
  ];

  const tableData = [
    {
      LDC_NUMBER: "sdgsdg",
      NAME: "dsfgdg",
      TAN: "MUMP20147B",
      PAN: "dfgdgdsd",
      FY: "202021",
      VALID_FROM: "2025-06-16",
      VALID_TO: "2025-06-12",
      SECTION_CODE: null,
      NATURE_OF_PAYMENT: "gfdfg",
      LDC_RATE: "sdgdsfg",
      CERTIFICATE_LIMIT: "dfg",
      AMOUNT_CONSUMED: "sdfg",
      ISSUE_DATE: "2025-06-19",
      CANCEL_DATE: "2025-06-11",
      AS_ON_DATE: "2025-06-25",
      pan: "dfgdgdsd",
      as_ON_DATE: "2025-06-25",
      valid_FROM: "2025-06-16",
      valid_TO: "2025-06-12",
      issue_DATE: "2025-06-19",
      section_CODE: null,
      cancel_DATE: "2025-06-11",
      ldc_NUMBER: "sdgsdg",
      amount_CONSUMED: "sdfg",
      ldc_RATE: "sdgdsfg",
      certificate_LIMIT: "dfg",
      nature_OF_PAYMENT: "gfdfg",
      fy: "202021",
      name: "dsfgdg",
      tan: "MUMP20147B",
    },
  ];
  return (
    <>
      <div className="space-y-5">
        <h1 className="text-2xl font-bold text-[var(--primary-color)]">Logs</h1>

        <div>
          <form className="flex items-end justify-start gap-5">
            <Field className="flex gap-3">
              <div>
                <Label className="font-semibold text-[var(--primary-color)]">
                  Financial Year
                </Label>
                <select
                  name="FY"
                  id="FY"
                  className={clsx(
                    "mt-1 block w-72 rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm/6 text-gray-900",
                    "focus:outline-2 focus:outline-offset-2 focus:outline-blue-500 focus:outline-none",
                    "h-[38px]"
                  )}
                >
                  {" "}
                  <option value="">Select Financial Year</option>
                  <option value="2025-26">2025-26</option>
                  <option value="2024-25">2024-25</option>
                  <option value="2023-24">2023-24</option>
                </select>
              </div>
              <div>
                <Label className="font-semibold text-[var(--primary-color)]">
                  Entity
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
                  IP-Address
                </Label>
                <Input
                  className={clsx(
                    "mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm/6 text-gray-900",
                    "focus:outline-2 focus:outline-offset-2 focus:outline-blue-500 focus:outline-none"
                  )}
                />
              </div>
            </Field>

            <div className="flex gap-4">
              <button className="h-[38px] cursor-pointer rounded-sm bg-[#03d87f] px-3 text-2xl font-black text-white">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>

              <button className="h-[38px] cursor-pointer rounded-sm bg-[#ffa500] px-3 text-2xl font-black text-white">
                <i className="fa-solid fa-filter"></i>
              </button>
            </div>
          </form>
        </div>

        <DynamicTableEdit tableHead={tableHead} tableData={tableData} />
      </div>
    </>
  );
};

export default Ldc;
