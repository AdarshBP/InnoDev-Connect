
import "./Home.css";

export const Home = () => {
  return (
    <>

    {/* Intro */}
    <section className=" flex flex-col lg:flex-row bg-white p-10 lg:mb-20 px-10 sm:px-20 lg:px-0 lg:py-20">
      <div className="text-center lg:text-left lg:pl-40 w-full lg:w-1/2 flex flex-col  justify-center order-2 lg:order-1">
      <div >
        <h1 className="text-5xl 2xl:pr-40 font-bold text-secondary xl:text-6xl 2xl:text-7xl cursor-default mt-5 lg:mt-0 pb-10">Boost Your Business with Cutting-Edge IT Solutions</h1>
        <p className="text-lg 2xl:pr-40 2xl:text-xl text-secondary cursor-default font-montserrat pb-10">Our expert development teams, specializing in various technology help drive your business forward with tailored, modern software solutions designed for your unique needs.</p>
      </div>
      <div className="flex justify-center flex-col lg:flex-row lg:justify-start lg:space-x-2">
        <a className="transition transition-all cursor-pointer font-workSans border-2 rounded-lg text-white bg-primary border-primary hover:bg-white hover:border-primary hover:text-primary lg:mr-3 py-5 lg:w-52 text-center font-bold text-xl" href="/about">View our Team</a>
        <a className="transition transition-all cursor-pointer font-workSans border-2 rounded-lg text-secondary border-secondary hover:text-white hover:border-secondary hover:bg-secondary mt-4 lg:mt-0 py-5 lg:w-52 text-center font-bold text-xl" href="/contact">Get in Touch</a>
      </div>
      </div>
      <div className="relative w-full lg:w-1/2 flex items-center justify-center order-1 lg:order-2">
        <div className="rounded-lg lg:absolute lg:h-full lg:w-2/5 xl:w-3/5 bg-primary">
        </div>
      </div>
    </section>

    {/* Process */}
    <section className="bg-white mb-20 cursor-default">
      <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center px-10 pb-10 lg:px-40">
        <section className="cursor-default">
          <h2 className="uppercase pb-2 text-lg font-bold text-gray-500 text-center lg:text-left font-montserrat">Ideation process</h2>
          <h3 className="text-secondary text-5xl lg:text-7xl font-bold text-center lg:text-left">How we can assist</h3>
          <h4 className="pb-5 lg:pb-10 text-primary text-5xl lg:text-7xl font-bold text-center lg:text-left">your business</h4>
        </section>
        <div className="relative">
          <div className="absolute text-primary -top-1 -left-7 lg:-top-3 lg:-left-3.2 font-bold z-10 text-4xl lg:text-7xl">3D</div>
          <h2 className="relative text-secondary text-2xl lg:text-5xl font-bold z-20">approach</h2>
        </div>
      </div>
      <div className="relative flex justify-center mx-10 lg:mx-20 border-primary-300 lg:border-l-0">
        <div className="absolute lg:flex lg:flex-wrap lg:content-end lg:justify-center h-full w-full">
          <div className="z-10 absolute left-0 lg:left-auto top-6 lg:top-1/2 w-1 lg:w-3/4 h-5/6 lg:h-1 flex justify-center bg-primary-300">
        </div>
      </div>
        <div className="z-20 w-full mx-10 lg:mx-20 grid grid-cols-1 lg:grid-cols-5 lg:grid-rows-1">
          <div className="relative lg:col-span-1 lg:col-start-1 lg:row-span-1 lg:row-start-1 lg:row-end-2 mb-10 lg:mb-0">
            <section>
              <div className="flex justify-center bg-primary-300/50 rounded-lg mb-6 p-4">
              <h2 className="text-center font-bold text-2xl text-primary">Discover</h2>
              </div>
              <div className="opac">
                <div className="lg:pb-10 text-lg text-secondary font-montserrat">
                  <p>We work <strong>together</strong>to transform your business vision into clear, actionable requirements.</p>
                </div>
              </div>
              <div className="absolute top-4 -left-3.625 lg:top-auto lg:inset-x-0 lg:-bottom-10 flex justify-center">
                <div className="flex justify-center text-secondary border-4 border-primary-300 rounded-full w-10 h-10 lg:w-20 lg:h-20 bg-white">
                  <div className="flex flex-wrap content-center font-bold text-2xl">1</div>
                </div>
              </div>
            </section>
          </div>
          <div className="relative lg:col-span-1 lg:col-start-3 lg:row-span-1 lg:row-start-1 mb-10 lg:mb-0">
            <section>
              <div className="flex justify-center bg-primary-300/50 rounded-lg mb-6 p-4">
                <h2 className="text-center font-bold text-2xl text-primary">Develop</h2>
              </div><div className="opac">
              <div className="lg:pb-10 text-lg text-secondary font-montserrat">
                <p>We build your solution iteratively using <strong>agile methodologies</strong>ensuring adaptability to your needs.</p>
              </div>
              </div>
              <div className="absolute top-4 -left-3.625 lg:top-auto lg:inset-x-0 lg:-bottom-10 flex justify-center">
                <div className="flex justify-center text-secondary border-4 border-primary-300 rounded-full w-10 h-10 lg:w-20 lg:h-20 bg-white">
                  <div className="flex flex-wrap content-center font-bold text-2xl">2</div>
                </div>
              </div>
            </section>
          </div>
          <div className="relative pb-0 lg:col-span-1 lg:col-start-5 lg:row-span-1 lg:row-start-1">
            <section>
                  <div className="flex justify-center bg-primary-300/50 rounded-lg mb-6 p-4">
                    <h2 className="text-center font-bold text-2xl text-primary">Deploy</h2>
                  </div>
                  <div className="opac">
                    <div className="lg:pb-10 text-lg text-secondary font-montserrat">
                      <p>We <strong>deliver</strong> your solution to the user and, if needed, and provide continuous support to ensure it evolves with your business.</p>
                    </div>
                  </div>
                  <div className="absolute top-4 -left-3.625 lg:top-auto lg:inset-x-0 lg:-bottom-10 flex justify-center">
                    <div className="flex justify-center text-secondary border-4 border-primary-300 rounded-full w-10 h-10 lg:w-20 lg:h-20 bg-white">
                      <div className="flex flex-wrap content-center font-bold text-2xl">3</div>
                    </div>
                  </div>
            </section>
          </div>
        </div>
      </div>
    </section>


    {/* Quote  */}
    <section className="bg-secondary cursor-default">
    <div className="py-10 lg:py-28 px-10 sm:px-20 md:px-20 lg:px-20 xl:px-40">
        <div className="opac">
            <h2 className="text-white font-bold text-3xl lg:text-5xl">
                While our teams facilitate the best IT solution for your company, we make sure your experience is hassle-free.
            </h2>
            <h3 className="mt-10 text-primary font-bold text-lg sm:text-xl lg:text-4xl">
                #TogetherWeDevelopYourSuccess
            </h3>
        </div>
    </div>
    </section>


    {/* Our Culture  */}
    <section className="relative mb-20 lg:mb-0 2xl:mb-52 lg:bg-top bg-none lg:bg-no-repeat lg:bg-cover w-full">
      <div className="CustomImage__ImageWrapper-sc-ij29c8-0 hijDem h-cultureH hidden 2xl:block">
        <div
          style={{
            display: 'block',
            overflow: 'hidden',
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            boxSizing: 'border-box',
            margin: 0
          }}
        >
          <img
            alt="Our Team Spirit"
            src="https://tis-tis-io-asset-prd.s3.eu-central-1.amazonaws.com/DSC_01563_0a9da12b65.png"
            decoding="async"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              boxSizing: 'border-box',
              padding: 0,
              border: 'none',
              margin: 'auto',
              display: 'block',
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        </div>
      </div>
      <div className="relative 2xl:absolute lg:top-1/2 xl:top-2/3">
        <div className="flex flex-col md:flex-col lg:flex-row items-center justify-between pt-10 px-10 sm:px-20 md:px-20 lg:px-20 xl:px-40">
          <p className=" text-secondary text-5xl font-bold cursor-default ">
            Our Culture
          </p>
          <a
            className="transition-all cursor-pointer font-workSans border-2 rounded-lg text-white bg-primary border-primary hover:bg-white hover:border-primary hover:text-primary mt-6 md:mt-6 lg:mt-0 py-4 px-10 w-full md:w-full lg:w-auto text-center font-bold text-xl hover:bg-secondary hover:border-secondary"
            href="join-the-team"
          >
            Join Us
          </a>
        </div>
        <section className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-4 gap-6 px-10 sm:px-20 md:px-20 lg:px-20 xl:px-40 pt-10 cursor-default">
          <article className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="font-bold text-primary text-3xl pb-6 text-center">
              Transparent & Direct
            </h2>
            <div style={{ opacity: 1, transform: 'none' }}>
              <p className="text-secondary text-lg text-justify font-montserrat">
                We believe in open communication and honesty. Our approach is straightforward, fostering an environment where collaboration thrives.
              </p>
            </div>
          </article>
          <article className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="font-bold text-primary text-3xl pb-6 text-center">
              Expertise
            </h2>
            <div style={{ opacity: 1, transform: 'none' }}>
              <p className="text-secondary text-lg text-justify font-montserrat">
                Our team comprises experts in Java, PHP, React, Angular, Vue.js, and AWS. We prioritize clean code, simplicity, thorough code reviews, and automated testing to ensure long-lasting and reliable solutions.
              </p>
            </div>
          </article>
          <article className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="font-bold text-primary text-3xl pb-6 text-center">
              Results-Oriented
            </h2>
            <div style={{ opacity: 1, transform: 'none' }}>
              <p className="text-secondary text-lg text-justify font-montserrat">
                We blend technical proficiency with business insight and a critical perspective to craft solutions that drive value for your company. Our goal is to enhance your business with every project.
              </p>
            </div>
          </article>
          <article className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="font-bold text-primary text-3xl pb-6 text-center">
              Reliable
            </h2>
            <div style={{ opacity: 1, transform: 'none' }}>
              <p className="text-secondary text-lg text-justify font-montserrat">
                We stand by our clients, offering guidance and support. We take pride in our commitment to delivering the best solutions with responsibility and enthusiasm.
              </p>
            </div>
          </article>
        </section>
      </div>
    </section>


    {/* Latest JOB openings  */}
    <section className=" lg:pt-20 xl:pt-25 2xl:pt-40 px-10 sm:px-20 md:px-20 lg:px-20 xl:px-40">
      <div className="flex flex-col lg:flex-row lg:items-center space-y-10 lg:space-y-0 space-x-0 lg:space-x-20">
        <div className="lg:w-1/2">

        </div>
        <div className="lg:w-1/2">
          <section className="cursor-default">
            <h2 className="uppercase pb-2 text-lg font-bold text-gray-500 text-center lg:text-left font-montserrat">
              Latest Positions
            </h2>
            <h3 className="text-secondary text-5xl lg:text-7xl font-bold text-center lg:text-left">
              Check out the
            </h3>
            <h4 className="pb-5 lg:pb-10 text-primary text-5xl lg:text-7xl font-bold text-center lg:text-left">
              latest jobs
            </h4>
          </section>
          <div style={{ opacity: 1, transform: 'none' }}>
            <p className="text-secondary text-xl lg:w-3/5 mb-12 cursor-default text-center lg:text-left font-montserrat">
              We are looking for highly skilled developers to join our team. Check out our latest positions and apply online.
            </p>
          </div>
          <div className="flex justify-center flex-col lg:flex-row lg:justify-start my-6">
            <a
              className="transition transition-all cursor-pointer font-workSans border-2 rounded-lg text-white bg-primary border-primary hover:bg-white hover:border-primary hover:text-primary lg:mr-3 py-5 lg:w-52 text-center font-bold text-xl"
              href="/join-the-team"
            >
              View Positions
            </a>
            <a
              className="transition transition-all cursor-pointer font-workSans border-2 rounded-lg text-secondary border-secondary hover:text-white hover:border-secondary hover:bg-secondary mt-4 lg:mt-0 lg:mr-3 py-5 lg:w-52 text-center font-bold text-xl"
              href="/contact"
            >
              Meet the Team
            </a>
          </div>
        </div>
      </div>
    </section>

    {/* Contact us */}
    <section className=" grid justify-items-center my-20 lg:my-40 px-10 sm:px-20 md:px-20 lg:px-20 xl:px-40 py-12 rounded-lg ">
      <div className="w-full max-w-3xl lg:max-w-2xl text-center">
        <h2 className="text-primary text-4xl lg:text-5xl font-extrabold mb-6">
          Let&apos;s Connect and Drive Innovation Together
        </h2>
        <p className="text-secondary text-lg lg:text-xl mb-8">
          We’re excited to explore how we can help you or your company achieve new heights. Reach out to us and let&apos;s start a conversation.
        </p>
        <a
          className="transition-transform duration-300 transform hover:scale-105 cursor-pointer font-workSans border-2 rounded-lg text-white bg-primary border-primary hover:bg-white hover:border-primary hover:text-primary py-4 px-8 font-bold text-lg lg:text-xl"
          href="/contact"
        >
          Contact Us
        </a>
      </div>
    </section>

    </>
    
  )
};