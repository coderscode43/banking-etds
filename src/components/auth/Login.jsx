const Login = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-3">
        <div className="h-[450px] w-[400px] flex-col justify-center rounded-xl bg-[#e0dddd] p-5">
          <div className="px-9 py-2">
            <img
              src="/images/NIA.png"
              height={"75px"}
              width={"100%"}
              alt="NIA"
            />
          </div>
          <div className="flex w-full justify-center text-2xl font-semibold text-[#79bd3c]">
            <h1>LOGIN</h1>
          </div>
          <div>
            <form>
              <select
                name="2025-26"
                id="year"
                className="form-input my-5 w-100 outline-none"
              >
                <option value="2025-26">2025-26</option>
              </select>
              <input
                id="username"
                className="form-input my-5 outline-none"
                name="username"
                type="text"
                placeholder="Username"
                autoComplete="off"
              />
              <input
                id="password"
                className="form-input my-5 outline-none"
                name="password"
                placeholder="Password"
                type="password"
                autoComplete="off"
              />
              <button
                className="w-90 bg-[#0f316d] text-white"
                style={{ padding: "0.5rem 0.75rem", borderRadius: "9px" }}
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
        <div className="flex-col items-center justify-center text-center">
          <p className="font-bold">Powered By</p>
          <div>
            <img
              src="/images/TOS-TRANSPARENT.png"
              className="h-[50px]"
              alt="NIA"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
