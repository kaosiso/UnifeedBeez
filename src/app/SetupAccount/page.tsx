import MessageIcons from "@/components/MessageIcons";
import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";


const SetupAccount: FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#fffffe] via-[#fef9eb] to-[#fdf5de] p-6">

      <div className="flex-1 flex flex-col items-center justify-center mt-28 mb-10">
        <div className="[background:linear-gradient(to_bottom,#e6f7ec_0%,#E6EAD3_100%)] rounded-3xl p-10 max-w-2xl w-full text-center border-[3px] border-[#d0d5dd]">

          {/* Logo */}
          <div className="flex flex-col items-center mb-10">
            <Image
              src="icons/UNIFIEDBEEZ LOGO PRIMARY 11.png"
              alt="UnifiedBeez Logo"
              className="w-48 sm:w-56 h-auto mb-6"
            />
            <h1 className="text-3xl font-semibold text-[#0b1012] mt-2">
              Setup up your account
            </h1>
            <p className="text-gray-600 mt-4">
              Let us set up your Unifiedbeez account.
            </p>
          </div>

          {/* Buttons */}
          <div>
            <Link href="/WelcomeBeezaro">

              <button className="w-full bg-[#053d27] text-[#f6f8f7] py-3 pt-4  rounded-lg text-base font-medium flex items-center justify-center gap-2 hover:opacity-90 transition">
                Let BeeZora Set Everything Up For Me
                <Image src="icons/bee.svg" alt="Bee Logo" className="w-6 h-6" />
              </button>

            </Link>

            <Link href="/WelcomeManual">
              <button className="w-full bg-[#fab403] text-[#053d27] py-3 pt-4 rounded-lg text-base font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition mt-6">
                <span>Customize It Myself Instead</span>
                <Image src="icons/chevron-right.svg" alt="Bee Logo" className="w-6 h-6" />
              </button>
            </Link>


            <button className="w-full bg-white border border-gray-300 text-gray-600 py-3 pt-4  rounded-lg font-semibold hover:bg-gray-50 transition mt-10">
              Go back
            </button>
          </div>

        </div>
      </div>

      {/* Footer */}
      <div className="w-full mt-6">
        <MessageIcons />
      </div>

    </div>
  );
};

export default SetupAccount;
