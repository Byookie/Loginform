import { IoMdContact } from "react-icons/io";
import { GiPadlock } from "react-icons/gi";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-full h-[100vh] bg-teal-500 flex justify-center items-center">
      <div className="w-80 min-h-[320px] rounded bg-white">
        <div className="w-80 h-20 flex justify-center items-center rounded bg-teal-600">
          <div className="font-semibold text-[24px] text-white">Login Form</div>
        </div>
        <div className="px-2 py-5 flex items-center flex-col ">
          <div className="w-[300px] h-12 rounded flex justify-center items-center ">
            <div className="w-10 h-10 rounded bg-teal-600 flex justify-center items-center text-[24px] text-white ">
              <IoMdContact />
            </div>
            <input
              className="h-10 w-[240px] border rounded pl-3"
              placeholder="Email or Phone"
            />
          </div>
          <div className="w-[300px] h-12 mt-2 rounded flex justify-center items-center ">
            <div className="w-10 h-10 rounded bg-teal-600 flex justify-center items-center text-[24px] text-white ">
              <GiPadlock />
            </div>
            <input
              className="h-10 w-[240px] border rounded pl-3"
              placeholder="Password"
            />
          </div>

          <Link to="/forgot">
            <div className="text-teal-600 hover:cursor-pointer hover:scale-[1.05] transition-all mr-[160px]">
              Forgot password?
            </div>
          </Link>
          <div className="mt-4 px-2">
            <button className="w-[280px] h-10 rounded bg-teal-600 text-white text-[18px] hover:scale-[1.05] transition-all">
              Login
            </button>
            <div className="flex justify-center items-center mt-3 hover:cursor-pointer ">
              <div>Not a member?</div>

              <Link to="/signup">
                <div className="ml-1 text-teal-600 hover:scale-[1.05] transition-all ">
                  Sign-up now
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login
