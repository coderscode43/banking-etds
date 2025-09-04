import React, { useState } from "react";

const HomeSCTopbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="h-15 bg-white shadow-md">
      <ul className="m-0 flex h-15 w-full list-none items-center justify-evenly px-4">
        <li className="flex w-full max-w-xs items-center justify-between">
          <div className="brand w-full text-center">
            <a className="logo1 inline-block">
              <img
                alt="logo-small"
                className="h-12 w-full object-cover"
                src="" // You should put your image src here
              />
            </a>
          </div>
        </li>

        <li className="ml-0">
          <p className="mb-0 text-2xl font-bold text-[#1d2c48]">
            R J SONI and Associates - ABCDE1234A
          </p>
        </li>
        <li className="ml-0">
          <button className="rounded bg-sky-500 px-4 py-2 text-white hover:bg-sky-600">
            Refresh
          </button>
        </li>
        <li className="ml-0">
          <button
            className="mr-2 h-6 w-6 cursor-pointer rounded-full"
            onClick={() => setOpen(true)}
          >
            Login
          </button>
        </li>
        {open && (
          <ul
            className="dropdown-menu show right-0 min-h-[70px] min-w-[60px] translate-x-[-70%] rounded-lg border-none bg-white shadow-md"
            style={{
              boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)",
              marginTop: "60px",
            }}
          >
            <li>
              <a className="flex cursor-pointer items-center px-3 py-2 hover:bg-gray-100">
                <img
                  className="me-2 h-6 w-6 rounded-full"
                  src="" // icon src
                />
                Master File
              </a>
            </li>
            <li>
              <a className="flex cursor-pointer items-center px-3 py-2 text-red-600 hover:bg-gray-100">
                <img
                  className="me-2 h-6 w-6 rounded-full"
                  src="" // icon src
                />
                Logout
              </a>
            </li>
          </ul>
        )}
      </ul>
    </nav>
  );
};

export default HomeSCTopbar;
