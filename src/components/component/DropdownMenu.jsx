import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

const DropdownMenu = () => {
  return (
    <Menu>
      <MenuButton className="align-middle outline-none">
        <img
          className="h-8 w-8 cursor-pointer"
          src="/images/user.png"
          alt="User Image"
        />
      </MenuButton>
      <MenuItems
        transition
        anchor="bottom end"
        className="w-40 origin-top-right rounded-md border border-gray-200 bg-white p-1 text-sm/6 text-gray-800 transition duration-100 ease-out [--anchor-gap:--spacing(1)] focus:outline-none data-closed:scale-95 data-closed:opacity-0"
      >
        <MenuItem>
          <button className="group flex w-full cursor-pointer items-center gap-2 rounded-md px-3 py-1.5 data-focus:bg-gray-100">
            <img className="h-6 w-6" src="/images/user.png" alt="User Image" />
            <span>Admin</span>
          </button>
        </MenuItem>
        <MenuItem>
          <button className="group flex w-full cursor-pointer items-center gap-2 rounded-md px-3 py-1.5 data-focus:bg-gray-100">
            <img
              className="h-6 w-6"
              src="/images/signOut.png"
              alt="Sign Out Image"
            />
            <span>Sign Out</span>
          </button>
        </MenuItem>
      </MenuItems>
    </Menu>
  );
};

export default DropdownMenu;
