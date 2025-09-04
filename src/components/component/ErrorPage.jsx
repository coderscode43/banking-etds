import React from "react";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error); // Optional: Log for debugging

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gray-100 px-4 text-center">
      <h1 className="mb-4 text-6xl font-bold text-lime-600">Oops!</h1>
      <p className="mb-2 text-xl text-gray-700">Something went wrong.</p>
      {error?.status && (
        <p className="mb-2 text-lg text-gray-600">Error {error.status}</p>
      )}
      <p className="text-md mb-6 font-semibold text-red-600">
        {error?.statusText || error?.message || "Unknown error"}
      </p>
      <button
        onClick={() => window.location.reload()}
        className="cursor-pointer rounded-lg bg-lime-600 px-4 py-2 text-white hover:bg-lime-700"
      >
        Reload Page
      </button>
    </div>
  );
}
