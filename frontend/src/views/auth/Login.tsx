import User from "../../assets/images/user.png";

function Login() {
  return (
    <section className="flex flex-col items-center   gap-3 font-[Roboto] mt-10">
      <form className="shadow-2xl w-110 flex flex-col h-120 gap-5 items-center p-5 bg-white rounded-xl">
        <div className="flex flex-col gap-4">
          <img src={User} className="h-30"></img>
          <h1 className="text-2xl">User Log in</h1>
        </div>
        <div className="flex flex-col items-center">
          <label className="input validator">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </g>
            </svg>
            <input
              type="text"
              required
              placeholder="Username"
              pattern="[A-Za-z][A-Za-z0-9\-]*"
              title="Only letters, numbers or dash"
            />
          </label>
          <p className="validator-hint">
            Must be 3 to 30 characters
            <br />
            containing only letters, numbers or dash
          </p>
          <label className="input validator">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
              </g>
            </svg>
            <input
              className="w-100"
              type="password"
              required
              placeholder="Password"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
            />
          </label>
          <p className="validator-hint hidden">
            Must be more than 8 characters, including
            <br />
            At least one number <br />
            At least one lowercase letter <br />
            At least one uppercase letter
          </p>
        </div>
        <div className="flex flex-col items-center gap-1 mt-2">
          <button className="bg-blue-400 w-80 p-2 text-white rounded-lg ">
            LOGIN
          </button>
          <div className="mt-4 flex gap-2">
            Forgot <a className="text-blue-500 ">Password?</a>
          </div>
        </div>
      </form>
    </section>
  );
}

export default Login;
