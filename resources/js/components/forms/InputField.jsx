import clsx from "clsx";
import React from "react";

export default function InputField({
    type = "text",
    name,
    label,
    placeholder = "",
    required = true,
    className = "",
    onChange = () => {},
    value = "",
    error = null,
}) {
    return (
        <div className="flex flex-col gap-2">
            {label && (
                <label className="font-medium" htmlFor={name}>
                    {label}
                </label>
            )}
            <input
                className={clsx(
                    "border border-neutral-200 outline-none p-3 rounded focus:ring-4 ring-green-500/50 transition duration-300",
                    className,
                    error && 'border-rose-500 ring-rose-500/50'
                )}
                type={type}
                name={name}
                id={name}
                placeholder={placeholder}
                required={required}
                value={value}
                onChange={onChange}
            />
            <div
                className={clsx(
                    "text-sm text-rose-500 transition duration-300",
                    error ? "h-4 translate-x-0" : "h-0 opacity-0 translate-x-full"
                )}
            >
                {error}
            </div>
        </div>
    );
}
