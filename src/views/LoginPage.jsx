import { StatusBar } from "../components/StatusBar";
import { Header } from "../components/Header";
import { InputBox } from "../components/Inputbox";
import background from "../assets/image-10.png";
import { useState } from "react";
import { AuthBtn } from "../components/AuthBtn";
import { motion, AnimatePresence } from "framer-motion";

export const LoginPage = ({ setPage }) => {
  const [isSignUp, setIsSignup] = useState(false);

  return (
    <AnimatePresence>
      <motion.div className="h-[844px] w-[390px] relative flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{duration: 1}}
      >
        <img
          className="object-cover w-full h-full max-w-[912px]"
          src={background}
          alt="background"
        />
        <div
          className={
            isSignUp
              ? "grid grid-rows-5 max-w-xl absolute top-0 w-full h-full"
              : "grid grid-rows-2 max-w-xl absolute top-0 w-full h-full"
          }
        >
          <div className="pt-3.5 pb-3 pl-[19.89px] pr-[18.26px]">
            <StatusBar variant="white" />
            <div className="flex justify-center">
              <Header />
            </div>
          </div>
          <div className={isSignUp ? "row-start-3 row-span-full" : ""}>
            <div className="mx-[24px]">
              <div className="my-[20px]">
                <InputBox type="Email" />
              </div>
              <div className="my-[20px]">
                <InputBox type="Password" />
              </div>
              {!isSignUp && (
                <div className="flex justify-center text-sm hover:underline cursor-pointer text-white mb-[32px]">
                  <div>Forgot Password</div>
                </div>
              )}
              <button
                className="bg-emerald h-[50px] rounded-[10px] w-full py-[15px] text-center mb-[24px]"
                onClick={() => setPage("Home")}
              >
                <div className="font-bold text-white text-base">
                  {isSignUp ? "Sign up" : "Sign in"}
                </div>
              </button>
              {isSignUp && (
                <div className="flex justify-center mt-[42px]">
                  <div>
                    <AuthBtn type="Apple" />
                  </div>
                  <div className="mx-[15px]">
                    <AuthBtn type="Facebook" />
                  </div>
                  <div>
                    <AuthBtn type="GoogleAuth" />
                  </div>
                </div>
              )}
              <div className="text-center text-white mt-[24px]">
                {isSignUp
                  ? "If you have an account?"
                  : "Didn't have any account?"}{" "}
                <span
                  className="text-emerald underline cursor-pointer"
                  onClick={() => setIsSignup(!isSignUp)}
                >
                  {isSignUp ? "Sign in here" : "Sign Up here"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
