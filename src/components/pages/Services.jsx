import "./Services.css";
export const Services = () => {
  return (
    <>


    {/* Intro */}
    <section className=" flex flex-col lg:flex-row bg-white p-10 lg:mb-20 px-10 sm:px-20 lg:px-0 lg:py-20">
      <div className="text-center lg:text-left lg:pl-40 w-full lg:w-1/2 flex flex-col  justify-center order-2 lg:order-1">
      <div >
        <h1 className="text-5xl 2xl:pr-40 font-bold text-secondary xl:text-6xl 2xl:text-7xl cursor-default mt-5 lg:mt-0 pb-10">Accelerate Your Business with Tailored IT Solutions</h1>
        <p className="text-lg 2xl:pr-40 2xl:text-xl text-secondary cursor-default font-montserrat pb-10">We transform your business requirements into effective, customized software solutions. Let us be your partner in driving innovation and starting your technology journey today.</p>
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



    {/* Solutions Offered */}
    <section className="bg-white w-full">
      <div className="flex justify-center">
        <div className="grid grid-cols-1 w-full">
          <article className="bg-white h-full flex flex-col">
            <div className="flex flex-col custom-lg:flex-col lg:flex-row justify-center items-center rounded-lg w-full gap-2 lg:gap-4 xl:gap-6 bg-secondary p-6 lg:p-10">
              <div className=" w-20 sm:w-24 lg:w-28 h-20 sm:h-24 lg:h-28 my-2 md:my-4">
                <div className="imgdiv">
                  {/* <img
                    alt="Software Development"
                    src="https://tis-tis-io-asset-prd.s3.eu-central-1.amazonaws.com/software_development_a9ec408a2f.png"
                    decoding="async"
                    className="imgstyle"
                    sizes="100vw"
                  /> */}
                </div>
              </div>
              <h2 className="text-white text-4xl lg:text-7xl font-bold cursor-default text-center custom-lg:text-center md:text-left lg:text-left">
                Solutions Offered
              </h2>
            </div>
            <section className="flex flex-col flex-auto">
              <section className="py-20 bg-white">
                <h2 className="text-center lg:text-left text-4xl lg:text-7xl font-bold lg:pl-20 pb-4 cursor-default text-primary">
                Software Development
                </h2>
                <h3
                  className="text-center lg:text-left text-2xl lg:text-4xl font-bold lg:pl-20 cursor-default text-secondary">
                  We Provide various solutions ...
                </h3>
                <div className="flex justify-center">
                  <div
                    className="w-full flex items-center mx-10 lg:mx-20 gap-0 xl:gap-20">
                    <div
                      className="grid grid-cols-1 lg:grid-cols-3 grid-rows-6 lg:grid-rows-2 pt-20 gap-6 w-full lg:w-auto">
                      <div
                        className="lg:col-span-1 lg:row-span-1 lg:col-start-1 row-start-1 lg:row-start-1">
                        <article
                          className="h-full rounded-lg shadow-lg p-6 bg-white cursor-default">
                          <h2
                            className="text-2xl text-center text-primary font-semibold pb-10 pt-2">
                            Web Development
                          </h2>
                          <div
                            className="cards"
                          >
                            <p
                              className="text-secondary text-lg text-justify font-montserrat"
                            >
                              Our team specializes in creating dynamic, 
                              user-friendly websites and web applications that are responsive and scalable. 
                              From custom-built sites to full-fledged e-commerce platforms, we ensure a seamless experience across all devices
                            </p>
                          </div>
                        </article>
                      </div>
                      <div className="lg:col-span-1 lg:row-span-1 lg:col-start-2 row-start-2 lg:row-start-1">
                        <article
                          className="h-full rounded-lg shadow-lg p-6 bg-white cursor-default"
                        >
                          <h2
                            className="text-2xl text-center text-primary font-semibold pb-10 pt-2"
                          >
                            Mobile Application Development
                          </h2>
                          <div
                            className="cards"
                          >
                            <p
                              className="text-secondary text-lg text-justify font-montserrat"
                            >
                              Reach your customers on the go with our mobile application development services. Whether you&apos;re looking for native apps or cross-platform solutions, we deliver powerful and engaging mobile experiences.
                            </p>
                          </div>
                        </article>
                      </div>
                      <div
                        className="lg:col-span-1 lg:row-span-1 lg:col-start-3 row-start-3 lg:row-start-1"
                      >
                        <article
                          className="h-full rounded-lg shadow-lg p-6 bg-white cursor-default"
                        >
                          <h2
                            className="text-2xl text-center text-primary font-semibold pb-10 pt-2"
                          >
                            Custom Software Development
                          </h2>
                          <div
                            className="cards"
                          >
                            <p
                              className="text-secondary text-lg text-justify font-montserrat"
                            >
                              We develop custom software solutions to address your unique business challenges.
                              Our focus is on creating scalable and adaptable systems that align perfectly with your requirements.
                            </p>
                          </div>
                        </article>
                      </div>
                      <div
                        className="lg:col-span-1 lg:row-span-1 lg:col-start-1 row-start-4 lg:row-start-2"
                      >
                        <article
                          className="h-full rounded-lg shadow-lg p-6 bg-white cursor-default"
                        >
                          <h2
                            className="text-2xl text-center text-primary font-semibold pb-10 pt-2"
                          >
                            DevOps & Automation
                          </h2>
                          <div
                            className="cards"
                          >
                            <p
                              className="text-secondary text-lg text-justify font-montserrat"
                            >
                              Accelerate your software development and deployment process with our DevOps services.
                              We implement automation solutions that reduce manual efforts, increase efficiency, and ensure faster releases.
                            </p>
                          </div>
                        </article>
                      </div>
                      <div
                        className="lg:col-span-1 lg:row-span-1 lg:col-start-2 row-start-5 lg:row-start-2"
                      >
                        <article
                          className="h-full rounded-lg shadow-lg p-6 bg-white cursor-default"
                        >
                          <h2
                            className="text-2xl text-center text-primary font-semibold pb-10 pt-2"
                          >
                            IT Consulting & Strategy
                          </h2>
                          <div
                            className="cards"
                          >
                            <p
                              className="text-secondary text-lg text-justify font-montserrat"
                            >
                              Our consulting team helps you choose the right technologies, optimize processes, 
                              and build a strategy for growth. We provide guidance on digital transformation, project management, and software architecture.
                            </p>
                          </div>
                        </article>
                      </div>
                      <div
                        className="lg:col-span-1 lg:row-span-1 lg:col-start-3 row-start-6 lg:row-start-2"
                      >
                        <article
                          className="h-full rounded-lg shadow-lg p-6 bg-white cursor-default"
                        >
                          <h2
                            className="text-2xl text-center text-primary font-semibold pb-10 pt-2"
                          >
                            Cloud Solutions
                          </h2>
                          <div
                            className="cards"
                          >
                            <p
                              className="text-secondary text-lg text-justify font-montserrat"
                            >
                              We offer robust cloud integration and deployment services, allowing your business to scale effortlessly.
                               Our cloud solutions provide you with flexibility, security, and cost-effectiveness.
                            </p>
                          </div>
                        </article>
                      </div>
                    </div>
                    <div
                      className="h-0 lg:h-60 w-0 xl:w-3/4 flex justify-center items-center"
                    >
                      <div
                        className="CustomImage__ImageWrapper-sc-ij29c8-0 eowpXj h-0 lg:h-full w-0 xl:w-full"
                      >
                        <div
                          className="imgdiv"
                        >
                          {/* <img
                            alt="Java"
                            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                            decoding="async"
                           className="imgg"
                          /> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="py-20 bg-primary">
                <h2
                  className="text-center lg:text-left text-4xl lg:text-7xl font-bold lg:pl-20 pb-4 cursor-default text-secondary"
                >
                  Data Solutions & Analytics
                </h2>
                <h3
                  className="text-center lg:text-left text-2xl lg:text-4xl font-bold lg:pl-20 cursor-default text-white"
                >
                  We also provide data related solutions such as ...
                </h3>
                <div className="flex justify-center">
                  <div
                    className="w-full flex items-center mx-10 lg:mx-20 gap-0 xl:gap-20 flex-row-reverse"
                  >
                    <div
                      className="grid grid-cols-1 lg:grid-cols-3 grid-rows-6 lg:grid-rows-2 pt-20 gap-6 w-full lg:w-auto"
                    >
                      <div
                        className="lg:col-span-1 lg:row-span-1 lg:col-start-1 row-start-1 lg:row-start-1"
                      >
                        <article
                          className="h-full rounded-lg shadow-lg p-6 bg-white cursor-default"
                        >
                          <h2
                            className="text-2xl text-center text-primary font-semibold pb-10 pt-2"
                          >
                            Generative AI Solutions
                          </h2>
                          <div
                            className="cards"
                          >
                            <p
                              className="text-secondary text-lg text-justify font-montserrat"
                            >
                              Utilizing AI models to automate creative processes and decision-making, including content generation and intelligent recommendations.
                            </p>
                          </div>
                        </article>
                      </div>
                      <div
                        className="lg:col-span-1 lg:row-span-1 lg:col-start-2 row-start-2 lg:row-start-1"
                      >
                        <article
                          className="h-full rounded-lg shadow-lg p-6 bg-white cursor-default"
                        >
                          <h2
                            className="text-2xl text-center text-primary font-semibold pb-10 pt-2"
                          >
                            Data Analysis & ETL Services
                          </h2>
                          <div
                            className="cards"
                          >
                            <p
                              className="text-secondary text-lg text-justify font-montserrat"
                            >
                              Building and managing ETL pipelines and data solutions to gather, transform, and analyze data for actionable business insights.
                            </p>
                          </div>
                        </article>
                      </div>
                      <div
                        className="lg:col-span-1 lg:row-span-1 lg:col-start-3 row-start-3 lg:row-start-1"
                      >
                        <article
                          className="h-full rounded-lg shadow-lg p-6 bg-white cursor-default"
                        >
                          <h2
                            className="text-2xl text-center text-primary font-semibold pb-10 pt-2"
                          >
                            Robotic Process Automation (RPA)
                          </h2>
                          <div
                            className="cards"
                          >
                            <p
                              className="text-secondary text-lg text-justify font-montserrat"
                            >
                              Automating repetitive business processes to enhance efficiency and reduce errors with leading RPA tools like UiPath and Blue Prism
                            </p>
                          </div>
                        </article>
                      </div>
                      <div
                        className="lg:col-span-1 lg:row-span-1 lg:col-start-1 row-start-4 lg:row-start-2"
                      >
                        <article
                          className="h-full rounded-lg shadow-lg p-6 bg-white cursor-default"
                        >
                          <h2
                            className="text-2xl text-center text-primary font-semibold pb-10 pt-2"
                          >
                            Machine Learning & Predictive Analytics
                          </h2>
                          <div
                            className="cards"
                          >
                            <p
                              className="text-secondary text-lg text-justify font-montserrat"
                            >
                              Applying machine learning models to predict trends, detect fraud, and drive intelligent decision-making in real-time.
                            </p>
                          </div>
                        </article>
                      </div>
                      <div
                        className="lg:col-span-1 lg:row-span-1 lg:col-start-2 row-start-5 lg:row-start-2"
                      >
                        <article
                          className="h-full rounded-lg shadow-lg p-6 bg-white cursor-default"
                        >
                          <h2
                            className="text-2xl text-center text-primary font-semibold pb-10 pt-2"
                          >
                            Big Data Solutions
                          </h2>
                          <div
                            className="cards"
                          >
                            <p
                              className="text-secondary text-lg text-justify font-montserrat"
                            >
                              Harnessing the power of big data with advanced tools like Hadoop and Spark to process and analyze massive datasets for business intelligence.
                            </p>
                          </div>
                        </article>
                      </div>
                      <div
                        className="lg:col-span-1 lg:row-span-1 lg:col-start-3 row-start-6 lg:row-start-2"
                      >
                        <article
                          className="h-full rounded-lg shadow-lg p-6 bg-white cursor-default"
                        >
                          <h2
                            className="text-2xl text-center text-primary font-semibold pb-10 pt-2"
                          >
                            Image Processing Solutions
                          </h2>
                          <div
                            className="cards"
                          >
                            <p
                              className="text-secondary text-lg text-justify font-montserrat"
                            >
                              Leveraging advanced image processing technologies for applications like object detection, facial recognition, image enhancement, and automated tagging.
                            </p>
                          </div>
                        </article>
                      </div>
                    </div>
                    <div
                      className="h-0 lg:h-60 w-0 xl:w-3/4 flex justify-center items-center"
                    >
                      <div
                        className="CustomImage__ImageWrapper-sc-ij29c8-0 eowpXj h-0 lg:h-full w-0 xl:w-full"
                      >
                        <div
                          className="imgdiv"
                        >
                          {/* <img
                              alt="GO"
                              src="https://tis-tis-io-asset-prd.s3.eu-central-1.amazonaws.com/golang_logo_cf5f7506f5.png"
                              decoding="async"
                              className="imgg" />
                          <img
                            alt="GO"
                            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                            decoding="async"
                           className="imgg" 
                          />*/}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </section>
          </article>
        </div>
      </div>
    </section>



    {/* P2P Solution Offered */}
    <section className="bg-white w-full">
      <div className="flex justify-center">
        <div className="grid grid-cols-1 w-full">
          <article className="bg-white h-full flex flex-col">
            <div className="flex flex-col custom-lg:flex-col lg:flex-row justify-center items-center rounded-lg w-full gap-2 lg:gap-4 xl:gap-6 bg-secondary p-6 lg:p-10">
              <div className=" w-20 sm:w-24 lg:w-28 h-20 sm:h-24 lg:h-28 my-2 md:my-4">
                <div className="imgdiv">
                  {/* <img
                    alt="Software Development"
                    src="https://tis-tis-io-asset-prd.s3.eu-central-1.amazonaws.com/software_development_a9ec408a2f.png"
                    decoding="async"
                    className="imgstyle"
                    sizes="100vw"
                  /> */}
                </div>
              </div>
              <h2 className="text-white text-4xl lg:text-7xl font-bold cursor-default text-center custom-lg:text-center md:text-left lg:text-left">
                  P2P Connect
              </h2>
            </div>
            <section className="flex flex-col flex-auto">
              <section className="py-20 bg-primary">
                <h2
                  className="text-center lg:text-left text-4xl lg:text-7xl font-bold lg:pl-20 pb-4 cursor-default text-secondary"
                >
                  How P2P Connect Works
                </h2>
                <h3
                  className="text-center lg:text-left text-2xl lg:text-4xl font-bold lg:pl-20 cursor-default text-white"
                >
                  We believe in the power of collaboration. P2P Connect is our unique peer-to-peer platform designed for developers and IT professionals to come together, share knowledge, and solve problems in real-time.
                </h3>
                <div className="flex justify-center">
                  <div
                    className="w-full flex items-center mx-10 lg:mx-20 gap-0 xl:gap-20 flex-row-reverse"
                  >
                    <div
                      className="grid grid-cols-1 lg:grid-cols-3 grid-rows-6 lg:grid-rows-2 pt-20 gap-6 w-full lg:w-auto"
                    >
                      <div
                        className="lg:col-span-1 lg:row-span-1 lg:col-start-1 row-start-1 lg:row-start-1"
                      >
                        <article
                          className="h-full rounded-lg shadow-lg p-6 bg-white cursor-default"
                        >
                          <h2
                            className="text-2xl text-center text-primary font-semibold pb-10 pt-2"
                          >
                            1. Post Your Issue
                          </h2>
                          <div
                            className="cards"
                          >
                            <p
                              className="text-secondary text-lg text-justify font-montserrat"
                            >
                              Are you stuck on a specific problem in your project? Post your issue with detailed information on the platform, whether it’s a bug, implementation challenge, or a general question.</p>
                          </div>
                        </article>
                      </div>
                      <div
                        className="lg:col-span-1 lg:row-span-1 lg:col-start-2 row-start-2 lg:row-start-1"
                      >
                        <article
                          className="h-full rounded-lg shadow-lg p-6 bg-white cursor-default"
                        >
                          <h2
                            className="text-2xl text-center text-primary font-semibold pb-10 pt-2"
                          >
                            2. Connect with Experts
                          </h2>
                          <div
                            className="cards"
                          >
                            <p
                              className="text-secondary text-lg text-justify font-montserrat"
                            >
                              Once your issue is posted, experienced developers from our community will review it and offer their expertise to help you solve the problem. You can also select developers based on their skills and past reviews.</p>
                          </div>
                        </article>
                      </div>
                      <div
                        className="lg:col-span-1 lg:row-span-1 lg:col-start-3 row-start-3 lg:row-start-1"
                      >
                        <article
                          className="h-full rounded-lg shadow-lg p-6 bg-white cursor-default"
                        >
                          <h2
                            className="text-2xl text-center text-primary font-semibold pb-10 pt-2"
                          >
                           3. Real-Time Collaboration
                          </h2>
                          <div
                            className="cards"
                          >
                            <p
                              className="text-secondary text-lg text-justify font-montserrat"
                            >
                              Collaborate in real-time using our integrated tools. Whether it&apos;s via chat, video calls, or shared coding environments, you can work alongside experts as they guide you through resolving the issue.</p>
                          </div>
                        </article>
                      </div>
                      <div
                        className="lg:col-span-1 lg:row-span-1 lg:col-start-1 row-start-4 lg:row-start-2"
                      >
                        <article
                          className="h-full rounded-lg shadow-lg p-6 bg-white cursor-default"
                        >
                          <h2
                            className="text-2xl text-center text-primary font-semibold pb-10 pt-2"
                          >
                            4. Dynamic Pricing Based on Complexity
                          </h2>
                          <div
                            className="cards"
                          >
                            <p
                              className="text-secondary text-lg text-justify font-montserrat"
                            >
                             We offer a flexible pricing model, where the cost of the service is based on the complexity and urgency of your issue. You only pay for what you need!</p>
                          </div>
                        </article>
                      </div>
                      <div
                        className="lg:col-span-1 lg:row-span-1 lg:col-start-2 row-start-5 lg:row-start-2"
                      >
                        <article
                          className="h-full rounded-lg shadow-lg p-6 bg-white cursor-default"
                        >
                          <h2
                            className="text-2xl text-center text-primary font-semibold pb-10 pt-2"
                          >
                            5. Become a Contributor
                          </h2>
                          <div
                            className="cards"
                          >
                            <p
                              className="text-secondary text-lg text-justify font-montserrat"
                            >
                              Are you an experienced developer? Join our community and help others by solving issues they face. Earn rewards, enhance your skills, and build a reputation as a problem solver in the development community.</p>
                          </div>
                        </article>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </section>
          </article>
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
  );
};