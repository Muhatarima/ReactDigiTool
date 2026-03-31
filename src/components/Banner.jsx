function Banner() {
  return (
    <section className="bg-white px-6 md:px-12 lg:px-24 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        <div>
          <span className="inline-block text-sm bg-purple-100 text-purple-600 px-4 py-1 rounded-full mb-4">
            New: AI-Powered Tools Available
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-5">
            Supercharge Your <br /> Digital Workflow
          </h1>

          <p className="text-slate-500 mb-6 max-w-lg">
            Access premium AI tools, design assets, templates, and productivity
            software all in one place. Start creating faster today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="btn bg-purple-600 hover:bg-purple-700 text-white rounded-full border-none px-6">
              Explore Products
            </button>
            <button className="btn btn-outline border-purple-500 text-purple-600 rounded-full px-6">
              Watch Demo
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src="/banner.jpg"
            alt="Digital workflow"
            className="w-full max-w-md rounded-2xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default Banner;