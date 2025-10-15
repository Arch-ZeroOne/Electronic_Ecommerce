import ImageBackground from "../../assets/images/register-background.jpg";
import { useState, type ChangeEvent, type FormEvent } from "react";
import axios from "axios";
import axiosClient from "../../axiosClient";
function Register() {
  type Payload = {
    firstname: string;
    lastname: string;
    gmail: string;
    username: string;
    password: string;
  };

  const [firstname, setFirstName] = useState<string>();
  const [lastname, setLastName] = useState<string>();
  const [gmail, setEmail] = useState<string>();
  const [username, setUserName] = useState<string>();
  const [password, setPassword] = useState<string>();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    //* handles null values
    if (!firstname || !lastname || !gmail || !password || !username) {
      return;
    }

    const payload: Payload = {
      firstname,
      lastname,
      gmail,
      username,
      password,
    };
    register(payload);
  };

  const register = async (payload: Payload) => {
    try {
      console.log(payload);
      const request = await axiosClient.post("/register", payload);
      const response = await request.data;

      console.log(response);
    } catch (error) {
      console.error("Error occured while submitting form values", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex mr-auto p-3 items-center justify-around ml-auto mt-5 font-[Poppins] shadow-2xl w-[80%]"
    >
      {/* Box for image and hero */}
      <div
        className="h-120 text-white w-120 rounded-xl flex flex-col items-center justify-center"
        style={{
          backgroundImage: `url(${ImageBackground})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="text-center flex flex-col gap-2">
          <h1 className="text-3xl  font-medium w-50 text-left">
            Create Your Account
          </h1>
          <p className="w-50 text-left font-medium">
            Sell and Buy Products in One Place!
          </p>
        </div>
      </div>
      {/* Box for form , buttons and input */}

      <div className="flex items-center flex-col gap-3">
        <h2 className="text-2xl font-bold">Sign Up</h2>
        <section className="flex flex-col items-center gap-3 ">
          <input
            type="text"
            placeholder="First Name"
            className="input"
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setFirstName(event.target.value)
            }
          />
          <input
            type="text"
            placeholder="Last Name"
            className="input"
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              setLastName(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Username"
            className="input"
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              setUserName(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Email Address"
            className="input"
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              setEmail(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Password"
            className="input"
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              setPassword(event.target.value);
            }}
          />
          <div className="flex gap-1 items-center">
            <input
              type="checkbox"
              defaultChecked
              className="checkbox checkbox-neutral"
            />
            <p className="text-sm">Accept terms and conditions?</p>
          </div>
          <button className="btn btn-neutral w-80">
            Join Us <i className="fa-solid fa-arrow-right-long"></i>
          </button>
        </section>
        <hr className="w-100" />
        <p>OR</p>
        <hr className="w-100" />
        <button className="btn w-80 bg-white text-black border-[#e5e5e5]">
          <svg
            aria-label="Google logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              ></path>
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              ></path>
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              ></path>
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              ></path>
            </g>
          </svg>
          Login with Google
        </button>
        <button className="btn bg-[#1A77F2] text-white border-[#005fd8] w-80">
          <svg
            aria-label="Facebook logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
          >
            <path
              fill="white"
              d="M8 12h5V8c0-6 4-7 11-6v5c-4 0-5 0-5 3v2h5l-1 6h-4v12h-6V18H8z"
            ></path>
          </svg>
          Login with Facebook
        </button>
      </div>
    </form>
  );
}

export default Register;
