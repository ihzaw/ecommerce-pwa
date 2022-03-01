import { StatusBar } from "../components/StatusBar";
import { Header } from "../components/Header";
import { InputBox } from "../components/Inputbox";
import background from "../assets/image-10.png";

export const LoginPage = () => {
  return (
    <div className="h-screen max-w-xl w-full relative">
      <img className="w-full h-full" src={background} alt="background" />
      <div className="h-screen grid grid-rows-2 max-w-xl absolute top-0 w-full">
        <div>
          <StatusBar />
          <div className="flex justify-center">
            <Header />
          </div>
        </div>
        <div>
          <div className="mx-[24px]">
            <div className="my-[20px]">
              <InputBox type="Email" />
            </div>
            <div className="my-[20px]">
              <InputBox type="Password" />
            </div>
            <div className="flex font-dmsans justify-center text-sm hover:underline cursor-pointer text-white mb-[32px]">
              <div>Forgot Password</div>
            </div>
            <button className="bg-emerald h-[50px] rounded-[10px] w-full py-[15px] text-center mb-[24px]">
              <div className="font-bold text-white text-base">Sign in</div>
            </button>
            <div className="text-center text-white">
              Didn't have any account?{" "}
              <span className="text-emerald underline">Sign Up here</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
