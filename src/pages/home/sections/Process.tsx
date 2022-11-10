const Process = () => {
  return (
    <section className="bg-white py-10 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            How does it work?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-gray-600">
            Here are the steps to get a service.
          </p>
        </div>

        <div className="relative mt-12 lg:mt-20">
          <div className="absolute inset-x-0 top-2 hidden md:block md:px-20 lg:px-28 xl:px-44">
            <img
              className="w-full"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg"
              alt=""
            />
          </div>

          <div className="relative grid grid-cols-1 gap-y-12 gap-x-12 text-center md:grid-cols-3">
            <div>
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-gray-200 bg-white shadow">
                <span className="text-xl font-semibold text-gray-700"> 1 </span>
              </div>
              <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">
                Create a free account
              </h3>
              <p className="mt-4 text-base text-gray-600">
                Create a free account with your name, email, photo and password
                or login via Google.
              </p>
            </div>

            <div>
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-gray-200 bg-white shadow">
                <span className="text-xl font-semibold text-gray-700"> 2 </span>
              </div>
              <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">
                Choose your Service
              </h3>
              <p className="mt-4 text-base text-gray-600">
                Please go through every services and choose what's best for you
                according to your goal.
              </p>
            </div>

            <div>
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-gray-200 bg-white shadow">
                <span className="text-xl font-semibold text-gray-700"> 3 </span>
              </div>
              <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">
                Pay & Launch
              </h3>
              <p className="mt-4 text-base text-gray-600">
                Pay for the service and your service will be start, I'll then
                knock you and will provide further instruction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
