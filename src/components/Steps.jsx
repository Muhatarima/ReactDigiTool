function Steps() {
  return (
    <section className="bg-[#f8fafc] py-20">
       <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                <div className="text-center mb-14">
           <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-4">
            Get Started In 3 Steps
          </h2>

          <p className="text-[#94a3b8] text-base md:text-lg">
            Start using premium digital tools in minutes, not hours.


          </p>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="relative bg-white border
          
          border-gray-200 rounded-2xl p-10 text-center min-h-[270px] flex flex-col items-center justify-center">
            <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gradient-to-r from-[#4F39F6] to-[#8B2CF5] text-white text-sm font-semibold flex items-center justify-center">
              01
            </div>

            <div className="w-20 h-20 rounded-full bg-purple-100 flex items-center justify-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                 className="w-10 h-10 text-[#7c3aed]"
                 fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6.75a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 19.125a7.5 7.5 0 1115 0"
                />
              </svg>
            </div>

            <h3 className="text-3xl font-bold text-[#0f172a] mb-3">
              Create Account
            </h3>
            <p className="text-[#94a3b8] leading-7">
              Sign up for free in seconds. No credit card required to get
              started.
            </p>
          </div>

          <div className="relative bg-white border border-gray-200 rounded-2xl p-10 text-center min-h-[270px] flex flex-col items-center justify-center">
            <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gradient-to-r from-[#4F39F6] to-[#8B2CF5] text-white text-sm font-semibold flex items-center justify-center">
              02
            </div>

            <div className="w-20 h-20 rounded-full bg-purple-100 flex items-center justify-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 text-[#7c3aed]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 7.5L12 3 3 7.5m18 0L12 12m9-4.5v9L12 21m9-4.5l-9-4.5m0 9L3 16.5m9 4.5v-9m-9-4.5l9 4.5"
                />
              </svg>
            </div>

            <h3 className="text-3xl font-bold text-[#0f172a] mb-3">
              Choose Products
            </h3>
            <p className="text-[#94a3b8] leading-7">
              Browse our catalog and select the tools that fit your needs.
            </p>
          </div>

          <div className="relative bg-white border border-gray-200 rounded-2xl p-10 text-center min-h-[270px] flex flex-col items-center justify-center">
            <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gradient-to-r from-[#4F39F6] to-[#8B2CF5] text-white text-sm font-semibold flex items-center justify-center">
              03
            </div>

            <div className="w-20 h-20 rounded-full bg-purple-100 flex items-center justify-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 text-[#7c3aed]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.59 14.37a6 6 0 00-5.84-5.84m5.84 5.84L19.5 19.5m-3.91-5.13a6 6 0 11-8.49-8.49m8.49 8.49L9.75 9.75"
                />
              </svg>
            </div>

            <h3 className="text-3xl font-bold text-[#0f172a] mb-3">
              Start Creating
            </h3>
            <p className="text-[#94a3b8] leading-7">
              Download and start using your premium tools immediately.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Steps;