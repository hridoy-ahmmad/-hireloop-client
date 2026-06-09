"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaGoogle, FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { FiCheck } from "react-icons/fi";
import { Button, Description, FieldError, Form, Input, Label, Radio, RadioGroup, TextField } from "@heroui/react";

export default function SignUpForm() {
    const [isLoading, setIsLoading] = useState(false);
    const [isGoogleLoading, setIsGoogleLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [passwordVal, setPasswordVal] = useState("");
    const [authError, setAuthError] = useState(null);
    const router = useRouter();
    const onSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setAuthError(null);
        const formData = new FormData(e.currentTarget);
        const info = Object.fromEntries(formData.entries());
        try {
            const { data, error } = await authClient.signUp.email({
                name: info.name,
                email: info.email,
                password: info.password,
                role: info.role
            });

            if (error) {
                setAuthError(error.message || "Something went wrong during signup.");
                console.error("Signup error:", error);
            } else {
                console.log("Success:", data);
                router.push("/");
                router.refresh();
            }
        } catch (err) {
            setAuthError("An unexpected error occurred. Please try again.");
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };
    const handleGoogleSignIn = async () => {
        setIsGoogleLoading(true);
        setAuthError(null);
        try {
            await authClient.signIn.social({
                provider: "google",
                callbackURL: "/",
            });
        } catch (error) {
            setAuthError("Google Sign-In failed. Please try again.");
            console.error("Google Sign-In Error:", error);
            setIsGoogleLoading(false);
        }
    };
    return (
        <Form
            className="w-full max-w-md mx-auto my-8 p-8 flex flex-col gap-5 rounded-3xl border border-white/10 bg-zinc-950/80 backdrop-blur-xl shadow-[0_0_50px_rgba(0,0,0,0.5)] text-white"
            onSubmit={onSubmit}
        >
            {/* Header */}
            <div className="space-y-2 text-center">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
                    Create Account
                </h2>
                <p className="text-sm text-zinc-400">
                    Join us today and start your journey.
                </p>
            </div>

            {/* Global Error */}
            {authError && (
                <div className="rounded-2xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                    {authError}
                </div>
            )}

            {/* Name */}
            <TextField isRequired name="name" type="text" className="w-full">
                <Label className="mb-1 text-sm font-medium text-zinc-300">
                    Full Name
                </Label>
                <Input
                    placeholder="John Doe"
                    className="bg-zinc-900/80 border border-zinc-800 rounded-xl text-white focus:border-blue-500 transition-all"
                    isDisabled={isLoading || isGoogleLoading}
                />
                <FieldError className="mt-1 text-xs text-red-400" />
            </TextField>

            {/* Email */}
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
                <Label className="mb-1 text-sm font-medium text-zinc-300">
                    Email Address
                </Label>
                <Input
                    placeholder="john@example.com"
                    className="bg-zinc-900/80 border border-zinc-800 rounded-xl text-white focus:border-blue-500 transition-all"
                    isDisabled={isLoading || isGoogleLoading}
                />
                <FieldError className="mt-1 text-xs text-red-400" />
            </TextField>

            {/* Password */}
            <TextField
                isRequired
                name="password"
                type={showPassword ? "text" : "password"}
                className="w-full"
                onChange={(val) => setPasswordVal(val)}
                validate={(value) => {
                    if (value.length < 8) return "Password must be at least 8 characters";
                    if (!/[A-Z]/.test(value))
                        return "Password must contain at least one uppercase letter";
                    if (!/[0-9]/.test(value))
                        return "Password must contain at least one number";
                    return null;
                }}
            >
                <Label className="mb-1 text-sm font-medium text-zinc-300">
                    Password
                </Label>

                <div className="relative">
                    <Input
                        placeholder="••••••••"
                        className="w-full pr-12 bg-zinc-900/80 border border-zinc-800 rounded-xl text-white focus:border-blue-500 transition-all"
                        isDisabled={isLoading || isGoogleLoading}
                    />

                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white transition-colors"
                    >
                        {showPassword ? <FaRegEyeSlash size={18} /> : <FaRegEye size={18} />}
                    </button>
                </div>

                <Description className="mt-1 text-xs text-zinc-500">
                    Minimum 8 characters, 1 uppercase letter and 1 number
                </Description>

                <FieldError className="mt-1 text-xs text-red-400" />
            </TextField>

            {/* Confirm Password */}
            <TextField
                isRequired
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                className="w-full"
                validate={(value) => {
                    if (value !== passwordVal) return "Passwords do not match";
                    return null;
                }}
            >
                <Label className="mb-1 text-sm font-medium text-zinc-300">
                    Confirm Password
                </Label>

                <div className="relative">
                    <Input
                        placeholder="••••••••"
                        className="w-full pr-12 bg-zinc-900/80 border border-zinc-800 rounded-xl text-white focus:border-blue-500 transition-all"
                        isDisabled={isLoading || isGoogleLoading}
                    />

                    <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white transition-colors"
                    >
                        {showConfirmPassword ? (
                            <FaRegEyeSlash size={18} />
                        ) : (
                            <FaRegEye size={18} />
                        )}
                    </button>
                </div>

                <FieldError className="mt-1 text-xs text-red-400" />
            </TextField>


            {/* Radio Options */}
            <RadioGroup defaultValue="seeker" name="role">
                <Label className="text-white">What is your role?</Label>
                <Radio value="seeker">
                    <Radio.Control>
                        <Radio.Indicator />
                    </Radio.Control>
                    <Radio.Content>
                        <Label className="text-white">Job Seeker</Label>
                    </Radio.Content>
                </Radio>
                <Radio value="Recruiter">
                    <Radio.Control>
                        <Radio.Indicator />
                    </Radio.Control>
                    <Radio.Content>
                        <Label className="text-white">Recruiter</Label>
                    </Radio.Content>
                </Radio>

            </RadioGroup>

            {/* Buttons */}
            <div className="flex gap-3 pt-2">
                <Button
                    type="submit"
                    color="primary"
                    className="flex-1 h-11 rounded-xl font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 hover:opacity-90 transition-all"
                    isLoading={isLoading}
                    isDisabled={isGoogleLoading}
                >
                    {!isLoading && <FiCheck size={18} />}
                    Sign Up
                </Button>

                <Button
                    type="reset"
                    variant="flat"
                    className="flex-1 h-11 rounded-xl border border-zinc-800 bg-zinc-900 text-zinc-300 hover:bg-zinc-800 transition-all"
                    isDisabled={isLoading || isGoogleLoading}
                >
                    Reset
                </Button>
            </div>

            {/* Divider */}
            <div className="relative flex items-center justify-center py-1">
                <div className="absolute w-full border-t border-zinc-800"></div>
                <span className="relative bg-zinc-950 px-3 text-xs uppercase tracking-widest text-zinc-500">
                    Or Continue With
                </span>
            </div>

            {/* Google */}
            <Button
                type="button"
                variant="flat"
                className="h-12 w-full rounded-xl border border-zinc-800 bg-zinc-900 hover:bg-zinc-800 text-white font-medium transition-all"
                onClick={handleGoogleSignIn}
                isLoading={isGoogleLoading}
                isDisabled={isLoading}
            >
                {!isGoogleLoading && (
                    <FaGoogle size={18} className="text-red-400 mr-2" />
                )}
                Continue with Google
            </Button>

            {/* Footer */}
            <p className="text-center text-sm text-zinc-400">
                Already have an account?{" "}
                <Link
                    href="/sign-in"
                    className="font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                >
                    Sign In
                </Link>
            </p>
        </Form>
    );
}