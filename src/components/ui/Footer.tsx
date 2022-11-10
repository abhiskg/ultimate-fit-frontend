import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="custom-width mx-auto flex flex-col flex-wrap  py-10 md:flex-row md:flex-nowrap md:items-center lg:items-start">
        <div className="mx-auto w-64 flex-shrink-0 text-center md:mx-0 md:text-left">
          <a className="title-font flex items-center justify-center font-medium text-gray-900 md:justify-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 rounded-full bg-blue-500 p-2 text-white"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <circle cx="18" cy="4" r="1" />
              <path d="M3 9l4.5 1l3 2.5" />
              <path d="M13 21v-8l3 -5.5" />
              <path d="M8 4.5l4 2l4 1l4 3.5l-2 3.5" />
            </svg>

            <span className="ml-3 text-xl">Ultimate Fit</span>
          </a>
          <p className="mt-2 text-sm text-gray-500">
            The body achieves what the mind believes
          </p>
        </div>
        <div className="-mb-10 mt-10 flex flex-grow flex-wrap justify-between text-center md:mt-5 md:pl-20 md:text-left">
          <Link
            to="/home"
            className="title-font mb-3 text-sm font-medium tracking-widest text-gray-900"
          >
            Home
          </Link>

          <Link
            to="/services"
            className="title-font mb-3 text-sm font-medium tracking-widest text-gray-900"
          >
            Services
          </Link>

          <Link
            to="/blog"
            className="title-font mb-3 text-sm font-medium tracking-widest text-gray-900"
          >
            Blog
          </Link>

          <Link
            to="/login"
            className="title-font mb-3 text-sm font-medium tracking-widest text-gray-900"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="title-font mb-3 text-sm font-medium tracking-widest text-gray-900"
          >
            Register
          </Link>
        </div>
      </div>

      <div className="bg-gray-100">
        <div className="custom-width mx-auto flex flex-col flex-wrap py-4  sm:flex-row">
          <p className="text-center text-sm text-gray-500 sm:text-left">
            © 2022 Tailblocks —
            <a
              href="https://www.facebook.com/Abhiskg20"
              rel="noopener noreferrer"
              className="ml-1 text-gray-600"
              target="_blank"
            >
              @abhishek
            </a>
          </p>
          <span className="mt-2 inline-flex justify-center sm:ml-auto sm:mt-0 sm:justify-start">
            <a className="text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-5 w-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-5 w-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-5 w-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="h-5 w-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
