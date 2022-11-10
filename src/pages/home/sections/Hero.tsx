import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="body-font text-gray-600">
      <div className="container mx-auto flex flex-col items-center px-5 py-24 md:flex-row">
        <div className="mb-16 flex flex-col items-center text-center md:mb-0 md:w-1/2 md:items-start md:pr-16 md:text-left lg:flex-grow lg:pr-24">
          <h1 className="title-font mb-4 text-3xl font-medium text-gray-900 sm:text-4xl">
            The body achieves what the
            <br className="hidden lg:inline-block" />
            mind believes
          </h1>
          <p className="mb-8 leading-relaxed">
            If you want to improve your fitness then you are in the right place.
            I'm a certified fitness trainer and a nutritionist, who can guide
            you to achieve your goals.
          </p>
          <div className="flex justify-center">
            <Link
              to="/services"
              className="inline-flex rounded border-0 bg-blue-500 py-2 px-6 text-lg text-white hover:bg-indigo-600 focus:outline-none"
            >
              Explore Services
            </Link>
          </div>
        </div>
        <div className="w-5/6 md:w-1/2 lg:w-full lg:max-w-lg">
          <img
            className="rounded object-cover object-center"
            alt="hero"
            src="https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
