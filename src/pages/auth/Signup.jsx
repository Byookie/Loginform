import { IoMdContact } from "react-icons/io";
import { GiPadlock } from "react-icons/gi";
import { AiOutlineMail } from "react-icons/ai";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="w-full h-[100vh] bg-teal-500 flex justify-center items-center">
      <div className="w-80 min-h-[320px] rounded bg-white">
        <div className="w-80 h-20 flex justify-center items-center rounded bg-teal-600">
          <div className="font-semibold text-[24px] text-white">
            Signup Form
          </div>
        </div>
        <div className="px-2 py-5 flex items-center flex-col">
          <div className="w-[300px] h-12 rounded flex justify-center items-center ">
            <div className="w-10 h-10 rounded bg-teal-600 flex justify-center items-center text-[24px] text-white ">
              <IoMdContact />
            </div>
            <input
              className="h-10 w-[240px] border rounded pl-3"
              placeholder="Username"
            />
          </div>
          <div className="w-[300px] h-12 mt-2 rounded flex justify-center items-center ">
            <div className="w-10 h-10 rounded bg-teal-600 flex justify-center items-center text-[20px] text-white ">
              <AiOutlineMail />
            </div>
            <input
              className="h-10 w-[240px] border rounded pl-3"
              placeholder="Email Address"
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

          <div className="mt-4 px-2">
            <button className="w-[280px] h-10 rounded bg-teal-600 text-white text-[18px] hover:scale-[1.05] transition-all">
              Signup
            </button>
            <div className="flex justify-center items-center mt-3 hover:cursor-pointer ">
              <div>Already a member?</div>
              <Link to="/">
                <div className="ml-1 text-teal-600 hover:scale-[1.05] transition-all ">
                  Login now
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup
