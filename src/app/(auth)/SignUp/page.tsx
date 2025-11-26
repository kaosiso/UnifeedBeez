import { FC } from "react";
import LeftSection from "@/app/(auth)/SignUp/Components/LeftSection";
import SignupForm from "./SignupForm";
import MessageIcons from "@/components/MessageIcons";

const SignUpPage: FC = () => {
  return (
    <div className=""> {/* Optional padding so the border isn't cut off */}
      <div className="left-section w-full flex flex-col md:flex-row font-sans min-h-screen overflow-y-hidden border border-[#fffefb]">
        
        {/* Left Panel */}
        <div className="w-full md:w-1/2">
          <LeftSection />
        </div>

        {/* Right Panel */}
        <div className="w-full md:w-1/2 flex flex-col bg-gradient-to-br from-[#fffffe] via-[#fef9eb] to-[#fdf5de]">
          <div className="flex flex-col items-center p-8 md:pt-12 md:pb-12">
            <div className="w-full max-w-xl mx-auto h-full flex flex-col items-center justify-center rounded-3xl py-4 bg-gradient-to-b from-[#e6f7ec] to-[#E6EAD3]">
              <SignupForm />
            </div>
          </div>

          <div className="w-full md:5">
            <MessageIcons />
          </div>
        </div>

      </div>
    </div>
  );
};

export default SignUpPage;
