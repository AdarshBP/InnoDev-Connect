
import "./Home.css";

export const Home = () => {
  return (
    <>
    <section className="Hero__StyledHero-sc-u4j4a2-0 kiXtYP flex flex-col lg:flex-row bg-white p-10 lg:mb-20 px-10 sm:px-20 lg:px-0 lg:py-20">
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
    
    </>
    
  )
};