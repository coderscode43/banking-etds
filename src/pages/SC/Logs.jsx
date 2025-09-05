import DynamicTableEdit from "@/components/tables/DynamicTableEdit";
import { Field, Input, Label } from "@headlessui/react";
import clsx from "clsx";

const Logs = () => {
  const tableHead = [
    {
      key: "srNo",
      label: "Sr.No",
    },
    {
      key: "username",
      label: "Username",
    },
    {
      key: "ipaddrs",
      label: "IP Address",
    },
    {
      key: "entity",
      label: "Entity",
    },
    {
      key: "logsDate",
      label: "Date",
    },
    {
      key: "action",
      label: "Action",
    },
  ];

  const tableData = [
    {
      id: 2291353,
      username: "directdownload",
      logsDate: "2025-09-02",
      ipaddrs: "192.168.0.98",
      entity: "Download Certificate",
      action: "Download",
      details: null,
      fy: null,
    },
  ];

  return (
    <>
      {" "}
      <div className="space-y-5">
        <h1 className="text-2xl font-bold text-[var(--primary-color)]">Logs</h1>

        <div>
          <form className="flex items-end justify-start gap-5">
            <Field className="flex gap-3">
              <div>
                <Label className="font-semibold text-[var(--primary-color)]">
                  User Name
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

export default Logs;
