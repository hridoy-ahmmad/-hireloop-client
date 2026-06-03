"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
// Next.js এর লিঙ্ক কম্পোনেন্ট ইম্পোর্ট করা হয়েছে
import Link from "next/link";
import { FaGoogle, FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { FiCheck } from "react-icons/fi";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";

export default function CustomRenderFunction() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [passwordVal, setPasswordVal] = useState("");

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const info = Object.fromEntries(formData.entries());

        const { data, error } = await authClient.signUp.email({
            name: info.name,
            email: info.email,
            password: info.password,
            callbackURL: "/",
        });

        if (error) {
            console.error("Signup error:", error);
            return;
        }

        console.log("Success:", data);
    };

    const handleGoogleSignIn = async () => {
        try {
            await authClient.signIn.social({
                provider: "google",
                callbackURL: "/", 
            });
        } catch (error) {
            console.error("Google Sign-In Error:", error);
        }
    };

    return (
        <Form
            className="flex w-full max-w-md flex-col gap-5 mx-auto p-6 bg-black rounded-2xl shadow-xl backdrop-blur-md text-white my-5"
            onSubmit={onSubmit}
        >
            <div className="space-y-1 mb-2">
                <h2 className="text-2xl font-bold tracking-tight">Create an account</h2>
                <p className="text-sm text-zinc-400">Enter your details to get started.</p>
            </div>

            {/* Name Field */}
            <TextField isRequired name="name" type="text" className="w-full">
                <Label className="text-zinc-300 font-medium text-sm">Name</Label>
                <Input placeholder="John Doe" className="text-zinc-100 bg-zinc-800/50 border-zinc-700" />
                <FieldError className="text-danger text-xs mt-1" />
            </TextField>

            {/* Email Field */}
            <TextField
                isRequired
                name="email"
                type="email"
                className="w-full"
                validate={(value) => {
                    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                        return "Please enter a valid email address";
                    }
                    return null;
                }}
            >
                <Label className="text-zinc-300 font-medium text-sm">Email</Label>
                <Input placeholder="john@example.com" className="text-zinc-100 bg-zinc-800/50 border-zinc-700" />
                <FieldError className="text-danger text-xs mt-1" />
            </TextField>

            {/* Password Field */}
            <TextField
                isRequired
                name="password"
                type={showPassword ? "text" : "password"}
                className="w-full"
                onChange={(val) => setPasswordVal(val)}
                validate={(value) => {
                    if (value.length < 8) return "Password must be at least 8 characters";
                    if (!/[A-Z]/.test(value)) return "Password must contain at least one uppercase letter";
                    if (!/[0-9]/.test(value)) return "Password must contain at least one number";
                    return null;
                }}
            >
                <Label className="text-zinc-300 font-medium text-sm">Password</Label>
                <div className="relative flex items-center">
                    <Input placeholder="••••••••" className="text-zinc-100 bg-zinc-800/50 border-zinc-700 w-full pr-10" />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 text-zinc-400 hover:text-zinc-200 focus:outline-none flex items-center"
                    >
                        {showPassword ? <FaRegEyeSlash size={16} /> : <FaRegEye size={16} />}
                    </button>
                </div>
                <Description className="text-zinc-500 text-xs mt-1">
                    Must be at least 8 characters with 1 uppercase and 1 number
                </Description>
                <FieldError className="text-danger text-xs mt-1" />
            </TextField>

            {/* Confirm Password Field */}
            <TextField
                isRequired
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                className="w-full"
                validate={(value) => {
                    if (value !== passwordVal) {
                        return "Passwords do not match";
                    }
                    return null;
                }}
            >
                <Label className="text-zinc-300 font-medium text-sm">Confirm Password</Label>
                <div className="relative flex items-center">
                    <Input placeholder="••••••••" className="text-zinc-100 bg-zinc-800/50 border-zinc-700 w-full pr-10" />
                    <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 text-zinc-400 hover:text-zinc-200 focus:outline-none flex items-center"
                    >
                        {showConfirmPassword ? <FaRegEyeSlash size={16} /> : <FaRegEye size={16} />}
                    </button>
                </div>
                <FieldError className="text-danger text-xs mt-1" />
            </TextField>

            {/* Action Buttons */}
            <div className="flex gap-3 mt-2">
                <Button type="submit" color="primary" className="flex-1 font-semibold flex items-center justify-center gap-1">
                    <FiCheck size={18} />
                    Sign Up
                </Button>
                <Button type="reset" variant="flat" className="flex-1 font-semibold text-zinc-300 border border-zinc-700">
                    Reset
                </Button>
            </div>

            {/* Divider (OR) */}
            <div className="flex items-center my-1 text-zinc-500 text-xs uppercase tracking-wider before:content-[''] before:flex-1 before:border-b before:border-zinc-800 before:mr-3 after:content-[''] after:flex-1 after:border-b after:border-zinc-800 after:ml-3">
                or
            </div>

            {/* Google Sign-In Button */}
            <Button
                type="button"
                variant="flat"
                className="w-full font-semibold bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-white flex items-center justify-center gap-2"
                onClick={handleGoogleSignIn}
            >
                <FaGoogle size={16} className="text-red-400" />
                Continue with Google
            </Button>

            {/* Already have an account Section */}
            <p className="text-center text-sm text-zinc-400 mt-2">
                Already have an account?{" "}
                <Link href="/sign-in" className="text-blue-400 hover:text-blue-300 font-medium transition-colors underline-offset-4 hover:underline">
                    Sign In
                </Link>
            </p>
        </Form>
    );
}