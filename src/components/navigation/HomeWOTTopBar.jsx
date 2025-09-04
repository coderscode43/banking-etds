const HomeWOTTopBar = () => {
  return (
    <>
      <div>
        <nav className="border-b-2 border-[#e3ebf6]">
          <ul className="flex justify-between px-4 py-3">
            <li>
              <i class="fa-solid fa-bars"></i>
            </li>
            <li className="text-center text-2xl text-[#303e67]">
              Financial Year:- <b>2025-26</b>, Branch Code:- <b>45</b>
            </li>
            <div className="flex">
              <li className="mx-3">
                <button className="cursor-pointer rounded border-[#12a4ed] bg-[#12a4ed] px-2 py-1.5 text-sm text-[#ffff]">
                  Refresh
                </button>
              </li>
              <li>
                <a>
                  <img
                    src="/images/user.png"
                    className="rounded-circle thumb-xs logoutBtn"
                    alt="logout"
                  ></img>
                </a>
              </li>
            </div>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default HomeWOTTopBar;
