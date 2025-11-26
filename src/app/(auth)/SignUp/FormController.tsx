"use client";
import React, { useState, useMemo, ChangeEvent, FormEvent, ReactNode } from "react";
import { FormState } from "./Input";
import { getPasswordRules } from "@/app/(auth)/SignUp/utils/PasswordRules";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation"; // <-- import router

interface FormControllerProps {
  children: (props: {
    activeTab: "create" | "login";
    form: FormState;
    showPassword: boolean;
    showConfirmPassword: boolean;
    setActiveTab: React.Dispatch<React.SetStateAction<"create" | "login">>;
    setShowPassword: React.Dispatch<React.SetStateAction<boolean>>;
    setShowConfirmPassword: React.Dispatch<React.SetStateAction<boolean>>;
    handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
    isFormValid: boolean;
  }) => ReactNode;
}

const FormController: React.FC<FormControllerProps> = ({ children }) => {
  const router = useRouter(); // initialize router
  const [activeTab, setActiveTab] = useState<"create" | "login">("create");
  const [form, setForm] = useState<FormState>({ email: "", password: "", confirmPassword: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const dummyData = {
      email: form.email,
      password: form.password,
      confirmPassword: form.confirmPassword,
    };

    console.log(`Submitting form for ${activeTab}`, dummyData);

    if (activeTab === "create") {
      toast.success("Account created successfully!");
      router.push("/verify"); // <-- navigate to VerifyPage
    } else {
      toast.success("Logged in successfully!");
      router.push("/dashboard"); // <-- optional: navigate after login
    }

    // reset form
    setForm({ email: "", password: "", confirmPassword: "" });
  };

  const isFormValid = useMemo(() => {
    const { email, password, confirmPassword } = form;
    const isEmailValid = /\S+@\S+\.\S+/.test(email);
    const rules = getPasswordRules(password);
    const allRulesValid = Object.values(rules).every(Boolean);

    return activeTab === "create"
      ? allRulesValid && password === confirmPassword && isEmailValid
      : email.length > 0 && password.length > 0 && isEmailValid;
  }, [form, activeTab]);

  return children({
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
  });
};

export default FormController;
