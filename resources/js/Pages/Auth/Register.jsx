import React from "react";
import RootLayout from "../../components/layouts/RootLayout";
import InputField from "../../components/forms/InputField";
import Button from "../../components/Button";
import { Link, useForm } from "@inertiajs/react";

export default function Register() {
    const { data, setData, post, errors, processing, reset, setError } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    function handleSubmit(event) {
        event.preventDefault();
        post('/register', {
            onSuccess: () => reset()
        });
    }

    function handleChange(event) {
        const {name, value} = event.target;
        setData(name, value);
        if (errors[name]) setError(name);
    }

    return (
        <RootLayout>
            <div className="max-w-[40rem] mx-auto my-10 rounded-lg">
                <h1 className="text-3xl font-extrabold text-center mb-5">Register</h1>
                <p className="text-center mb-3 text-neutral-500">Create an account</p>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <InputField
                        name="name"
                        label="Name"
                        placeholder="Enter Your Name"
                        value={data.name}
                        onChange={handleChange}
                        error={errors.name}
                    />
                    <InputField
                        name="email"
                        label="Email"
                        type="email"
                        placeholder="Enter Your Name"
                        value={data.email}
                        onChange={handleChange}
                        error={errors.email}
                    />
                    <InputField
                        name="password"
                        label="Password"
                        type="password"
                        placeholder="Enter Your Name"
                        value={data.password}
                        onChange={handleChange}
                        error={errors.password}
                    />
                    <InputField
                        name="password_confirmation"
                        label="Confirm Password"
                        type="password"
                        placeholder="Enter Your Name"
                        value={data.password_confirmation}
                        onChange={handleChange}
                        error={errors.password_confirmation}
                    />

                    <Button type="submit" label="Register" className="w-full" disabled={processing} />
                </form>
                <div>
                    <div className="mt-3 text-neutral-500 text-center">
                        Already have an account?&nbsp;
                        <Link href="/login" className="text-green-500 hover:underline" prefetch>
                            Login
                        </Link>
                    </div>
                </div>
            </div>
        </RootLayout>
    );
}
