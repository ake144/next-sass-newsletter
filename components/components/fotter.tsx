import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white w-full dark:bg-gray-950">
      <div className="w-full px-4 pb-8 pt-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-md">
          <strong className="block text-center text-xl font-bold text-gray-900 sm:text-3xl dark:text-white">
            Want us to email you with the latest blockbuster news?
          </strong>

          <form className="mt-6">
            <div className="relative max-w-lg">
              <label htmlFor="email" className="sr-only"> Email </label>
              <input
                className="w-full rounded-full border-gray-200 bg-gray-100 p-4 pe-32 text-sm font-medium dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                id="email"
                type="email"
                placeholder="john@doe.com"
              />
              <button
                className="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-32">
          {/* Social Media Links */}
          <div className="mx-auto max-w-sm lg:max-w-none">
            <p className="mt-4 text-center text-gray-500 lg:text-left lg:text-lg dark:text-gray-400">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium natus quod eveniet
              aut perferendis distinctio iusto repudiandae, provident velit earum?
            </p>
            <div className="mt-6 flex justify-center gap-4 lg:justify-start">
              {/* Social Media Icons */}
              {/* Replace "#" with actual links */}
              <a
                className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only"> Facebook </span>
                {/* Add Facebook SVG Icon */}
              </a>
              {/* Add other social media links similarly */}
            </div>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-1 gap-8 text-center lg:grid-cols-3 lg:text-left">
            {/* Add Footer Links Here */}
          </div>
        </div>

        <div className="mt-16 border-t border-gray-100 pt-8 dark:border-gray-800">
          <p className="text-center text-xs/relaxed text-gray-500 dark:text-gray-400">
            © Company 2022. All rights reserved.
            <br />
            Created with{' '}
            <a
              href="#"
              className="text-gray-700 underline transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
            >
              Laravel
            </a>{' '}
            and{' '}
            <a
              href="#"
              className="text-gray-700 underline transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
            >
              Laravel Livewire
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;