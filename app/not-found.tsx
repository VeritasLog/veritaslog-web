import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-md text-center">
        <h1 className="text-6xl font-extrabold">404</h1>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
          Page not found.
        </p>
        <Link
          href="/"
          className="mt-6 inline-block rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-black/90"
        >
          Go home
        </Link>
      </div>
    </div>
  );
}
