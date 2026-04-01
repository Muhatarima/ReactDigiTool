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
          <div className="relative bg-white border border-gray-200 rounded-2xl p-10 text-center min-h-[270px] flex flex-col items-center justify-center">
            <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gradient-to-r from-[#4F39F6] to-[#8B2CF5] text-white text-sm font-semibold flex items-center justify-center">
              01
            </div>

            <div className="w-20 h-20 rounded-full bg-purple-100 flex items-center justify-center mb-6">
              <img src="/assets/user.png" alt="" className="w-10 h-10 object-contain" />
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
              <img src="/assets/package.png" alt="" className="w-10 h-10 object-contain" />
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
              <img src="/assets/rocket.png" alt="" className="w-10 h-10 object-contain" />
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