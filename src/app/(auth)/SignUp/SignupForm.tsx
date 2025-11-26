"use client";
import React from "react";
import SocialButtons from "./Components/SocialButtons";
import FormController from "./FormController";
import CreateAccountView from "./views/CreateAccountView";
import LoginView from "./views/LoginView";

const SignupForm: React.FC = () => {
  return (
    <FormController>
      {({
        activeTab,
        form,
        showPassword,
        showConfirmPassword,
        setActiveTab,
        setShowPassword,
        setShowConfirmPassword,
        handleInputChange,
        handleSubmit,
        isFormValid,
      }) => (
        <div className="flex flex-col w-full max-w-lg mx-auto h-full justify-between overflow-auto px-2 py-4 [background:linear-gradient(to_bottom,#e6f7ec_0%,#E6EAD3_100%)]">
          
          {/* Logo */}
          <div className="flex justify-center mb-6 pt-2">
            <img
              src="/icons/UNIFIEDBEEZ LOGO PRIMARY 11.png"
              alt="UnifiedBeez Logo"
              className="w-48 sm:w-60 h-auto"
            />
          </div>

          {/* Tabs */}
          <div className="flex p-2 mb-6 bg-[#f3f5f2] border-[#e0e0df] rounded-lg border-2">
            <button
              type="button"
              className={`flex-1 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all duration-300 ${
                activeTab === "create"
                  ? "bg-gray-50 text-[#717775] border-2 border-[#d4d4d4]"
                  : "text-[#cccfce]"
              }`}
              onClick={() => setActiveTab("create")}
            >
              Create Account
            </button>

            <button
              type="button"
              className={`flex-1 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all duration-300 ${
                activeTab === "login"
                  ? "bg-gray-50 text-[#717775] border-2 border-[#d4d4d4]"
                  : "text-[#cccfce]"
              }`}
              onClick={() => setActiveTab("login")}
            >
              Log In
            </button>
          </div>

          {/* Conditional Views */}
          {activeTab === "create" ? (
            <CreateAccountView
              form={form}
              showPassword={showPassword}
              showConfirmPassword={showConfirmPassword}
              setShowPassword={setShowPassword}
              setShowConfirmPassword={setShowConfirmPassword}
              handleInputChange={handleInputChange}
              handleSubmit={handleSubmit}
              isFormValid={isFormValid}
            />
          ) : (
            <LoginView
              form={form}
              showPassword={showPassword}
              setShowPassword={setShowPassword}
              handleInputChange={handleInputChange}
              handleSubmit={handleSubmit}
              isFormValid={isFormValid}
            />
          )}

          {/* Social Buttons */}
          <SocialButtons />
        </div>
      )}
    </FormController>
  );
};

export default SignupForm;
