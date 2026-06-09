"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaGoogle, FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { FiLogIn } from "react-icons/fi";
import {
    Button,
    FieldError,
    Form,
    Input,
    Label,
    TextField,
} from "@heroui/react";

export default function SignIn() {
    const [isLoading, setIsLoading] = useState(false);
    const [isGoogleLoading, setIsGoogleLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [authError, setAuthError] = useState(null);

    const router = useRouter();

    const onSubmit = async (e) => {
        e.preventDefault();

        setIsLoading(true);
        setAuthError(null);

        const formData = new FormData(e.currentTarget);

        try {
            const { data, error } = await authClient.signIn.email({
                email: formData.get("email"),
                password: formData.get("password"),
            });

            if (error) {
                setAuthError(error.message || "Invalid email or password.");
            } else {
                console.log(data);
                router.push("/");
                router.refresh();
            }
        } catch (err) {
            console.error(err);
            setAuthError("Something went wrong. Please try again.");
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
            console.error(error);
            setAuthError("Google Sign-In failed. Please try again.");
            setIsGoogleLoading(false);
        }
    };

    return (
        <Form
            onSubmit={onSubmit}
            className="w-full max-w-md mx-auto my-8 p-8 flex flex-col gap-5 rounded-3xl border border-white/10 bg-zinc-950/80 backdrop-blur-xl shadow-[0_0_50px_rgba(0,0,0,0.5)] text-white"
        >
            {/* Header */}
            <div className="space-y-2 text-center">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
                    Welcome Back
                </h2>

                <p className="text-sm text-zinc-400">
                    Sign in to continue to your account.
                </p>
            </div>

            {/* Error */}
            {authError && (
                <div className="rounded-2xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                    {authError}
                </div>
            )}

            {/* Email */}
            <TextField
                isRequired
                name="email"
                type="email"
                className="w-full"
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
                        {showPassword ? (
                            <FaRegEyeSlash size={18} />
                        ) : (
                            <FaRegEye size={18} />
                        )}
                    </button>
                </div>

                <FieldError className="mt-1 text-xs text-red-400" />
            </TextField>

            {/* Forgot Password */}
            <div className="flex justify-end">
                <Link
                    href="/forgot-password"
                    className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
                >
                    Forgot Password?
                </Link>
            </div>

            {/* Sign In Button */}
            <Button
                type="submit"
                color="primary"
                className="h-11 rounded-xl font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 hover:opacity-90 transition-all w-full"
                isLoading={isLoading}
                isDisabled={isGoogleLoading}
            >
                {!isLoading && <FiLogIn size={18} />}
                Sign In
            </Button>

            {/* Divider */}
            <div className="relative flex items-center justify-center py-1">
                <div className="absolute w-full border-t border-zinc-800"></div>

                <span className="relative bg-zinc-950 px-3 text-xs uppercase tracking-widest text-zinc-500">
                    Or Continue With
                </span>
            </div>

            {/* Google Sign In */}
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
                Dont have an account?{" "}
                <Link
                    href="/sign-up"
                    className="font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                >
                    Create Account
                </Link>
            </p>
        </Form>
    );
}