import DropdownMenu from "../component/DropdownMenu";

const HomeSCTopBar = () => {
  return (
    <header className="border-b-2 border-gray-300 bg-white">
      <div className="mx-10 flex h-14 items-center justify-between">
        <div className="ps-16">
          <i className="fa-solid fa-bars cursor-pointer text-gray-400"></i>
        </div>
        <div className="ml-[105px]">
          <h1 className="text-2xl font-bold text-[var(--primary-color)]">
            R J SONI and Associates - ABCDE1234A
          </h1>
        </div>
        <div className="flex items-center justify-center gap-5">
          <div>
            <button className="cursor-pointer rounded-md bg-[#12a4ed] px-2 py-1.5 text-sm text-white">
              Refresh
            </button>
          </div>
          <div>
            <DropdownMenu />
          </div>
        </div>
      </div>
    </header>
  );
};

export default HomeSCTopBar;
