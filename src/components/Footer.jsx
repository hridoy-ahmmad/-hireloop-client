import { LogoFacebook, LogoLinkedin } from "@gravity-ui/icons";
import Link from "next/link";
;
export default function Footer() {
    return (
        <footer className="bg-[#050505] text-gray-400">
            <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 py-12 md:py-16">

                {/* Top Section */}
                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">

                    {/* Logo Section */}
                    <div>
                        logo

                        <p className="mt-5 max-w-xs text-sm leading-7 text-gray-500">
                            The AI-native career platform. Built for people
                            who take their work seriously.
                        </p>

                        <div className="mt-8 flex gap-3">
                            {/* Social Icons */}
                        </div>
                    </div>

                    {/* Product */}
                    <div>
                        <h3 className="mb-5 text-sm font-semibold text-indigo-500">
                            Product
                        </h3>

                        <ul className="space-y-3 text-sm">
                            <li><a href="#">Job discovery</a></li>
                            <li><a href="#">Worker AI</a></li>
                            <li><a href="#">Companies</a></li>
                            <li><a href="#">Salary data</a></li>
                        </ul>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h3 className="mb-5 text-sm font-semibold text-indigo-500">
                            Navigations
                        </h3>

                        <ul className="space-y-3 text-sm">
                            <li><a href="#">Help center</a></li>
                            <li><a href="#">Career library</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="mb-5 text-sm font-semibold text-indigo-500">
                            Resources
                        </h3>

                        <ul className="space-y-3 text-sm">
                            <li><a href="#">Brand Guideline</a></li>
                            <li><a href="#">Newsroom</a></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-12 border-t border-neutral-900 pt-6">
                    <div className="flex flex-col items-center gap-4 text-center text-xs text-gray-500 md:flex-row md:justify-between md:text-left">

                        <p>
                            Copyright 2024 - Programming Hero
                        </p>

                        <div className="flex flex-wrap justify-center gap-4">
                            <a href="#">Terms & Policy</a>
                            <a href="#">Privacy Guideline</a>
                        </div>

                    </div>
                </div>
            </div>
        </footer>
    );
}
