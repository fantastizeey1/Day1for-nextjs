"use client"


import Link from 'next/link';
import { useRouter } from 'next/navigation';





export default function Custom404() {
    const router = useRouter();

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-6xl font-bold text-gray-800">404</h1>
            <p className="mt-4 text-lg text-gray-600">Oops! The page you&apos;re looking for doesn&apos;t exist.</p>
            <div className="mt-6">
                <button
                    onClick={() => router.back()}
                    className="px-4 py-2 mr-4 text-sm font-medium text-white bg-blue-500 rounded hover:bg-blue-400"
                >
                    Go Back
                </button>
                <Link href="/">
                    <a className="px-4 py-2 text-sm font-medium text-white bg-green-500 rounded hover:bg-green-400">
                        Go Home
                    </a>
                </Link>
            </div>
        </div>
    );
}
