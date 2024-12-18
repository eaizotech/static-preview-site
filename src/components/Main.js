export default function Main() {
  return (
    <section className="text-gray-600 body-font">
      <div className="max-w-7xl mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 md:ml-24 pt-6 flex flex-col md:items-start md:text-left mb-40 items-center text-center">
          <h1 className="mb-5 sm:text-6xl text-5xl items-center Avenir xl:w-2/2 text-gray-900">
          {/* Empowering your business with cutting-edge technology solutions to unlock its full potential. */}
          {/* Maximize your potential through smarter, faster, and better technology solutions. */}
          {/* Unleash your potential and drive success with our technology expertise */}
          {/* Achieve more with innovative technology solutions designed to elevate your potential. */}
          {/* Maximize Your Potential with Technology */}
          Unlock Your True Potential with Our Technology Solutions
          </h1>
          <p className="mb-4 xl:w-3/4 text-gray-600 text-lg">
            {/* eaizo focused to leverage cutting-edge technology solutions to unlock new goals */}
           {/* eaizo leveraging cutting-edge technology to unlock your goals */}
           At eaizo, we leverage cutting-edge technology to help you achieve and exceed your goals.
          </p>
          <div className="flex justify-center">
            
          </div>
        </div>
        <div className="xl:mr-44 sm:mr-0 sm:mb-28 mb-0 lg:mb-0 mr-48 md:pl-10">
          <img
            className="w-80 md:ml-1 ml-24"
            alt="iPhone-12"
            src="/images/smartphone.svg"
          ></img>
        </div>
      </div>
      <section className="mx-auto" id="services">
        <div className="container px-5 mx-auto lg:px-24 ">
          <div className="flex flex-col w-full mb-4 text-left lg:text-center">
            <h1 className="mb-8 text-2xl Avenir font-semibold text-black">
              Services we are offering
            </h1>
          </div>
          {/* <div className="grid grid-cols-2 gap-16 mb-16 text-center lg:grid-cols-4">
            <div className="flex items-center justify-center">
              <img
                src="/images/Google-Logo.webp"
                alt="Google Logo"
                className="block object-contain h-16 greyC"
              ></img>
            </div>
            <div className="flex items-center justify-center">
              <img
                src="/images/Shopify-Logo.svg"
                alt="Shopify Logo"
                className="block object-contain h-16 greyC"
              ></img>
            </div>
            <div className="flex items-center justify-center">
              <img
                src="/images/Cloudflare-Logo.svg"
                alt="Cloudflare Logo"
                className="block object-contain h-16 greyC"
              ></img>
            </div>
            <div className="flex items-center justify-center">
              <img
                src="/images/PayPal-Logo.png"
                alt="Paypal Logo"
                className="block object-contain h-16 greyC"
              ></img>
            </div>
          </div> */}
          <div className="flex gap-6 flex-row justify-center flex-wrap">
            {
              ["Machine Learning", "Artificial Intelligence", "Data Analytics", "Devops", "Cloud", "Web Apps", "Mobile Apps", "Desktop Apps", "TV Apps", "Watch Apps",  "Embbeded Softwares"].map((domain) => {
                return <div className="text-nowrap px-6 py-4 text-xl border-solid border-cyan-800 border-2 rounded-xl text-gray-500 font-bold cursor-pointer">{domain}</div>
              })
            }

          </div>
        </div>
      </section>
      <div className="grr max-w-7xl pt-20 mx-auto text-center">
        <h1 className="mb-8 text-6xl Avenir font-semibold text-gray-900">
          Less code, less effort, More result.
        </h1>
        <h1 className="mb-8 text-2xl Avenir font-semibold text-gray-600 text-center">
        Streamline your tech collaborations and dedicate your energy to growing your business.
        </h1>
        <div className="container flex flex-col items-center justify-center mx-auto rounded-lg ">
          <img
            className="object-cover object-center  mb-2 g327 border rounded-lg shadow-md"
            alt="Placeholder Image"
            src="./images/management.svg"
          ></img>
        </div>
      </div>
      <section className="relative" id="contact-us">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <div className="py-24 md:py-36">
            <h1 className="mb-5 text-6xl Avenir font-semibold text-gray-900">
            For inquiries or more information
            </h1>
            <h1 className="mb-9 text-2xl font-semibold text-gray-600">
            We're passionate about providing excellent service.  Reach us at {" "}
            <b>eaizoreach@gmail.com</b>
            </h1>
            {/* <input
              placeholder="jack@example.com"
              name="email"
              type="email"
              autoComplete="email"
              className="border border-gray-600 w-1/4 pr-2 pl-2 py-3 mt-2 rounded-md text-gray-800 font-semibold hover:border-gray-900"
            ></input>{" "} */}
            <a
              className="inline-flex items-center px-14 py-3 mt-2 ml-2 font-medium text-white transition duration-500 ease-in-out transform  border rounded-lg bg-gray-900"
              href="mailto:eaizoreach@gmail.com"
            >
              <span className="justify-center">Click here to mail eaizoreach@gmail.com</span>
            </a>
          </div>
        </div>
      </section>
    </section>
  );
}
