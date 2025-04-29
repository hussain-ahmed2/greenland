import { Link } from '@inertiajs/react';
import React from 'react'

export default function Button({ href = '#', label, isPrimary = true }) {
  return (
      <Link href={href} className={`block w-fit px-6 py-4 rounded-lg font-medium hover:bg-neutral-600 active:bg-neutral-600 hover:text-white active:text-white transition ${isPrimary ? 'bg-primary' : 'bg-white'}`}>
          {label}
      </Link>
  );
}
