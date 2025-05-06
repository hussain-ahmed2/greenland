import React from "react";
import RootLayout from "../../components/layouts/RootLayout";
import InputField from "../../components/forms/InputField";
import Button from "../../components/Button";
import { useForm } from "@inertiajs/react";

export default function Login() {
    const { data, setData, post, errors, processing, reset, setError, wasSuccessful } = useForm({
            email: "",
            password: "",
        });
    
        function handleSubmit(event) {
            event.preventDefault();
            post('/login', {
                onSuccess: () => reset(),
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
                <h1 className="text-3xl font-extrabold text-center mb-5">
                    Login
                </h1>
                <form onSubmit={handleSubmit} className="space-y-4">
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

                    <Button
                        type="submit"
                        label="Login"
                        className="w-full"
                        disabled={processing}
                    />
                </form>
            </div>
        </RootLayout>
    );
}
