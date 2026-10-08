import React from "react";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        {/* 404 */}
        <h1 className="text-[120px] sm:text-[160px] font-extrabold leading-none text-[#4F46E5]">
          404
        </h1>

        <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-[#1F2937]">
          Looks like this page got lost!
        </h2>

        <p className="mt-4 text-gray-500 text-base sm:text-lg leading-relaxed">
          We couldn't find the page you're looking for. Maybe it's time to
          reconnect and head back to your friends.
        </p>

        <Link
          href="/"
          className="inline-flex items-center justify-center mt-8 px-6 py-3 rounded-xl bg-[#4F46E5] text-white font-semibold hover:bg-[#4338CA] transition-colors duration-200"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
