import React from "react";

const KpiCard = ({ title, value }) => {
  return (
    <div className="flex justify-between bg-white dark:bg-zinc-900 rounded-2xl bg-neutral-primary-soft  max-w-sm p-6 border border-default dark:border-zinc-700 rounded-base shadow-xs hover:bg-neutral-secondary-medium">
      <section>
        <h3 className="mb-3 text-xl font-semibold tracking-tight  text-heading leading-8">
          {title}
        </h3>
        <p className="text-body text-2xl font-semibold tracking-widest mb-3">
          {value}
        </p>
        <div className="text-xs font-sans flex items-center gap-x-1">
          trend title
          <svg
            className="w-4 h-4 text-green-400 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M5.575 13.729C4.501 15.033 5.43 17 7.12 17h9.762c1.69 0 2.618-1.967 1.544-3.271l-4.881-5.927a2 2 0 0 0-3.088 0l-4.88 5.927Z"
              clipRule="evenodd"
            />
          </svg>
          <p className="text-green-400 font-sans tracking-wider"> 70.5%</p>
        </div>
      </section>
      <svg
        className="w-6 h-6 text-gray-600 dark:text-white border rounded-sm p-1 hidden lg:block"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M9 7V2.221a2 2 0 0 0-.5.365L4.586 6.5a2 2 0 0 0-.365.5H9Zm2 0V2h7a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9h5a2 2 0 0 0 2-2Zm2-2a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2h-3Zm0 3a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2h-3Zm-6 4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-6Zm8 1v1h-2v-1h2Zm0 3h-2v1h2v-1Zm-4-3v1H9v-1h2Zm0 3H9v1h2v-1Z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
};

export default KpiCard;
