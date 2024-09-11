// pages/404.tsx
"use client";

import Button from "@/components/Button";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white dark:bg-secondary px-4">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-gray-200 dark:text-gray-700">
          404
        </h1>
        <p className="text-2xl font-bold tracking-tight text-secondary sm:text-4xl dark:text-white">
          Uh-oh!
        </p>
        <p className="mt-4 text-gray-500 dark:text-gray-400">
          We can&apos;t find that page.
        </p>
        <Button
          href="/"
          className="mt-6 inline-block rounded bg-primary px-5 py-3 text-sm font-medium text-white hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          label="Go back home"
        />
      </div>
    </div>
  );
};

export default NotFound;
