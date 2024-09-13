"use client";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { authFormSchema } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import FormInput from "./FormInput";

const AuthForm = ({ type }: { type: string }) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const formSchema = authFormSchema(type);

    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        mode: "onChange",
        defaultValues: {
            email: "",
            password: "",
        },
    });

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        setIsLoading(true);
        console.log(values);
        setIsLoading(false);
    }

    return (
        <section className="auth-form">
            <header className="flex flex-col gap-5 md:gap-8">
                <Link
                    href="/"
                    className="cursor-pointer flex items-center gap-1"
                >
                    <Image
                        src="/icons/logo.svg"
                        width={34}
                        height={34}
                        alt="Horizon logo"
                    />
                    <h1 className="text-26 font-imb-plex-serif font-bold text-black-1">
                        Simple Banking
                    </h1>
                </Link>
                <div className="flex flex-col gap-1 md:gap-3">
                    <h1 className="text-24 lg:text-36 font-semibold text-gray-900">
                        {user
                            ? "Link Account"
                            : type === "sign-in"
                              ? "Sign In"
                              : "Sign up"}
                    </h1>
                    <p className="text-16 font normal text-gray-600">
                        {user
                            ? "Link your account to get started"
                            : "Please enter your details"}
                    </p>
                </div>
            </header>
            {user ? (
                <div className="flex flex-col gap-4">{/* PlaidLink */}</div>
            ) : (
                <>
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="space-y-8"
                        >
                            {type === "sign-up" && (
                                <>
                                    <div className="flex gap-4">
                                        <FormInput
                                            control={form.control}
                                            name="firstName"
                                            placeholder="Enter your first name"
                                            label="First name"
                                        />
                                        <FormInput
                                            control={form.control}
                                            name="lastName"
                                            placeholder="Enter your last name"
                                            label="Last name"
                                        />
                                    </div>

                                    <FormInput
                                        control={form.control}
                                        name="address1"
                                        placeholder="Enter your address"
                                        label="Address"
                                    />
                                    <div className="flex gap-4">
                                        <FormInput
                                            control={form.control}
                                            name="state"
                                            placeholder="Example: NY"
                                            label="State"
                                        />
                                        <FormInput
                                            control={form.control}
                                            name="postalCode"
                                            placeholder="Enter your postal code"
                                            label="Postal Code"
                                        />
                                    </div>
                                    <div className="flex gap-4">
                                        <FormInput
                                            control={form.control}
                                            name="dateOfBirth"
                                            placeholder="YYYY-MM-DD"
                                            label="Date of birth"
                                        />
                                        <FormInput
                                            control={form.control}
                                            name="ssn"
                                            placeholder="Example: 1234"
                                            label="SSN"
                                        />
                                    </div>
                                </>
                            )}
                            <FormInput
                                control={form.control}
                                name="email"
                                placeholder="Enter your email"
                                label="Email"
                            />
                            <FormInput
                                control={form.control}
                                name="password"
                                placeholder="Enter your password"
                                label="Password"
                            />
                            <div className="flex flex-col gap-4">
                                <Button
                                    type="submit"
                                    className="form-btn"
                                    disabled={isLoading}
                                >
                                    {isLoading ? (
                                        <>
                                            <Loader2
                                                size={20}
                                                className="animate-spin"
                                            />{" "}
                                            &nbsp; Loading...
                                        </>
                                    ) : type === "sing-in" ? (
                                        "Sign In"
                                    ) : (
                                        "Sign up"
                                    )}
                                </Button>
                            </div>
                        </form>
                    </Form>
                    <footer className="flex justify-center gap-1">
                        <p className="text-gray-600 text-14 font-normal">
                            {type === "sign-in"
                                ? "Don't have an account"
                                : "Already have an account"}
                        </p>
                        <Link
                            href={type === "sign-in" ? "/sign-up" : "/sign-in"}
                            className="form-link"
                        >
                            {type === "sign-in" ? "Sign-up" : "Sign-in"}
                        </Link>
                    </footer>
                </>
            )}
        </section>
    );
};

export default AuthForm;
