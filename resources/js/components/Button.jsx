import clsx from "clsx";
import React from "react";

export default function Button({
    label = "Submit",
    type = "button",
    onClick = () => {},
    className = "",
    disabled = false
}) {
    return (
        <button
            className={clsx(
                "font-medium px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 active:bg-green-600 active:scale-[.98] focus:ring-4 active:ring-4 ring-green-500/50 transition duration-300",
                className,
                disabled && "opacity-50 cursor-not-allowed"
            )}
            onClick={onClick}
            type={type}
            disabled={disabled}
        >
            {label}
        </button>
    );
}
