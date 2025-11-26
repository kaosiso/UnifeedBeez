"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import Image from "next/image";
import MessageIcons from "@/components/MessageIcons";
import PasswordInput from "@/app/(auth)/SignUp/ui/PasswordInput";
import PasswordValidation from "@/app/(auth)/SignUp/ui/PasswordValidation";

export interface FormState {
    oldPassword: string;
    newPassword: string;
    confirmPassword: string;
}

const CreateNewPassword = (): JSX.Element => {
    const [form, setForm] = useState<FormState>({
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
    });

    const [show, setShow] = useState<Record<keyof FormState, boolean>>({
        oldPassword: false,
        newPassword: false,
        confirmPassword: false,
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target;
        if (name in form) setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleGoBack = (): void => {
        alert("Go back clicked");
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        if (form.newPassword !== form.confirmPassword) {
            alert("New password and confirm password do not match.");
            return;
        }
        alert("Password successfully changed!");
        setForm({ oldPassword: "", newPassword: "", confirmPassword: "" });
    };

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#ffffff] via-[#FEFCF4] to-[#fdf5de] p-4">
            <div className="flex flex-col items-center justify-start flex-1 mt-24">
                <div className="rounded-[40px] p-[24px] sm:p-[40px] w-full max-w-2xl min-h-[520px] bg-gradient-to-b from-[#e6f7ec] via-[#E6EEDB] to-[#E6EAD3] flex flex-col space-y-6">
                    {/* Padlock Icon */}
                    <div className="flex justify-center">
                        <div className="rounded-xl w-16 h-16 bg-white shadow-lg flex items-center justify-center">
                            <div className="flex items-center justify-center rounded-full w-14 h-14 bg-[#eefdf1]">
                                <div className="flex items-center justify-center rounded-full w-10 h-10 bg-[#dbf0df]">
                                    <Image
                                        src="/icons/padlock.svg"
                                        alt="Padlock Icon"
                                        width={20}
                                        height={20}
                                        className="ml-px"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Heading */}
                    <div className="flex flex-col items-center gap-4">
                        <h1 className="text-xl sm:text-[24px] font-[550] text-center">
                            Create New Password
                        </h1>
                        <p className="text-gray-600 text-center">
                            Create a new password for your account
                        </p>
                    </div>




                    {/* Form */}
                    <form onSubmit={handleSubmit} className="flex flex-col space-y-6">

                        {/* Old Password */}
                        <div>

                            <label className="block pl-1 text-[16px] font-[600] mb-1">Old Password</label>

                            <PasswordInput
                                name="oldPassword"
                                value={form.oldPassword}
                                onChange={handleChange}
                                placeholder="Enter your old password"
                                showState={show.oldPassword}
                                toggleState={() =>
                                    setShow((prev) => ({ ...prev, oldPassword: !prev.oldPassword }))
                                }
                                className="w-full px-3 py-2 rounded-lg border text-black text-base sm:text-md"
                            />
                            <p className="text-xs text-gray-400 mt-1">
Please enter the old Password                            </p>
                        </div>

                        {/* New Password */}
                        <div>
                            <label className="block pl-1 text-[16px] font-[600] mb-1">New Password</label>

                            <PasswordInput
                                name="newPassword"
                                value={form.newPassword}
                                onChange={handleChange}
                                placeholder="Enter a new password"
                                showState={show.newPassword}
                                toggleState={() =>
                                    setShow((prev) => ({ ...prev, newPassword: !prev.newPassword }))
                                }
                                className="w-full px-3 py-2 rounded-lg border text-black text-base sm:text-md"
                            />
                            <p className="text-xs text-gray-400 mt-1">
this hint is to help the user.
                            </p>
                        </div>

                        {/* Confirm Password */}
                        <div>
                            <label htmlFor="confirmPassword" className="block pl-1 text-[16px] font-[600] mb-1">                                Confirm New Password
                            </label>

                            <PasswordInput
                                name="confirmPassword"
                                value={form.confirmPassword}
                                onChange={handleChange}
                                placeholder="Re-enter new password"
                                showState={show.confirmPassword}
                                toggleState={() =>
                                    setShow((prev) => ({ ...prev, confirmPassword: !prev.confirmPassword }))
                                }
                                className="w-full px-3 py-2 rounded-lg border text-black text-base sm:text-md"
                            />
                            <p className="text-xs text-gray-400 mt-1">
this hint is to help the user.
                            </p>
                        </div>

                        {/* Password Validation */}
                        <PasswordValidation password={form.newPassword} />

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <button
                                type="button"
                                className="w-full sm:w-1/2 py-2 font-semibold rounded-lg border border-gray-200 text-[#1c4f3c] bg-white hover:bg-gray-100 text-base sm:text-md"
                                onClick={handleGoBack}
                            >
                                Go Back
                            </button>
                            <button
                                type="submit"
                                className="w-full sm:w-1/2 py-2 rounded-lg font-medium bg-[#1c4f3c] text-white hover:bg-green-800 sm:text-md"
                            >
                                Continue
                            </button>
                        </div>
                    </form>

                </div>
            </div>

            <div className="mt-24 w-full">
                <MessageIcons className="w-full" />
            </div>
        </div>
    );
};

export default CreateNewPassword;
