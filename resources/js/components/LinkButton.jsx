import { Link } from '@inertiajs/react';
import React from 'react'

export default function Button({ href = '#', label, isPrimary = true }) {
  return (
      <Link href={href} className={`block w-fit px-6 py-4 rounded-lg font-medium hover:bg-green-600 active:bg-green-600 text-white active:scale-[0.98] transition duration-300 ${isPrimary ? 'bg-green-500' : 'bg-white'}`}>
          {label}
      </Link>
  );
}
