function Footer() {
  return (
    <>
      <section className="bg-gradient-to-r from-[#4F39F6] to-[#C117F5] text-white py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Ready To Transform Your Workflow?
          </h2>

          <p className="text-sm md:text-base text-white/90 max-w-2xl mx-auto mb-8">
            Join thousands of professionals who are already using DigiTools to work smarter.
            <br />
            Start your free trial today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-5">
            <button className="btn bg-white text-purple-600 border-none rounded-full px-7 hover:bg-white">
              Explore Products
            </button>

            <button className="btn btn-outline text-white border-white rounded-full px-7 hover:bg-white hover:text-purple-600">
              View Pricing
            </button>
          </div>

          <p className="text-sm text-white/80">
            14-day free trial • No credit card required • Cancel anytime
          </p>
        </div>
      </section>

      <footer className="bg-[#07142B] text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
            <div className="lg:col-span-2">
              <h2 className="text-5xl font-bold mb-5">DigiTools</h2>
              <p className="text-slate-300 leading-8 max-w-sm">
                Premium digital tools for creators,
                <br />
                professionals, and businesses. Work smarter
                <br />
                with our suite of powerful tools.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-5">Product</h3>
              <ul className="space-y-4 text-slate-300">
                <li><a href="#" className="hover:text-white">Features</a></li>
                <li><a href="#" className="hover:text-white">Pricing</a></li>
                <li><a href="#" className="hover:text-white">Templates</a></li>
                <li><a href="#" className="hover:text-white">Integrations</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-5">Company</h3>
              <ul className="space-y-4 text-slate-300">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Press</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-5">Resources</h3>
              <ul className="space-y-4 text-slate-300 mb-8">
                <li><a href="#" className="hover:text-white">Documentation</a></li>
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Community</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>

              <div>
                <h3 className="text-xl font-semibold mb-4">Social Links</h3>
                <div className="flex items-center gap-3">
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-white text-[#07142B] flex items-center justify-center font-semibold"
                  >
                    ▶
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-white text-[#07142B] flex items-center justify-center font-semibold"
                  >
                    f
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-white text-[#07142B] flex items-center justify-center font-semibold"
                  >
                    X
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-700 mt-14 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
            <p>© 2026 DigiTools. All rights reserved.</p>

            <div className="flex gap-6">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
              <a href="#" className="hover:text-white">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;