import "./About.css";
import { TeamMember } from "../teamMember/TeamMember";

import adarshImg from '../../assets/profile/Adarsh.jpg';

export const About = () => {

  const members = [
    {
      name: "Adarsh BP",
      role: "Co-Founder",
      imageSrc: adarshImg,
      description:
        "Full-stack developer with 5 years of experience building dynamic and scalable applications. Skilled in generative AI, cloud platforms (AWS, GCP, Azure), and DevOps tools like Docker and Kubernetes, Enjoys turning innovative ideas into practical, user-focused solutions. Outside of coding, enjoys collaborating on innovative projects and driving teams towards success."
    },
    {
      name: "Pachee",
      role: "Co-Founder",
      imageSrc: "https://tis-tis-io-asset-prd.s3.eu-central-1.amazonaws.com/small_Quincy_ed046e1ae5.png?w=3840&q=100",
      description:
        "Passion for creating intuitive, high-performing user interfaces. Skilled in integrating AI/ML solutions and leveraging cloud technologies to enhance web experiences. Experienced in Kubernetes for scalable deployments, ensuring seamless application performance. Enjoys blending cutting-edge technologies with user-focused design to build efficient, modern web applications.",
    },
    {
      name: "Arjun Rao",
      role: "Backend Developer",
      imageSrc: "https://tis-tis-io-asset-prd.s3.eu-central-1.amazonaws.com/Image_81486ba661.jpeg?w=3840&q=100",
      description:
        "Backend developer with expertise in Java and Kafka, specializing in building scalable, high-performance applications. Experienced in designing and maintaining robust systems that handle large data flows efficiently. Passionate about optimizing backend architectures and ensuring seamless integration between distributed services. Enjoys tackling complex technical challenges and delivering reliable, scalable solutions.",
    },
    {
      name: "Amruth BV",
      role: "Data Analyst",
      imageSrc: "https://tis-tis-io-asset-prd.s3.eu-central-1.amazonaws.com/small_Dudas_Krisz_432b61fe4f.png?w=3840&q=100",
      description:
        "Data analyst with a knack for transforming complex data into insightful dashboards that drive decision-making. Proficient in using various tools and techniques to visualize data effectively. An active open-source contributor who loves collaborating with the community. When not analyzing data, enjoys exploring the depths of Linux and experimenting with new technologies.",
    },
  ];
  
  return <>

    {/* Heading */}
    <section className="w-full">
      <div className="aboutus-background flex flex-col justify-center items-center lg:items-start lg:justify-end w-full">
        <h1 className="  text-center lg:text-left text-white text-4xl lg:text-6xl font-bold cursor-default lg:m-20 lg:w-3/5">
        This is what we are </h1>
      </div>
    </section>

    {/* Vision */}
    <section className="lg:pl-20 xl:pl-40 mt-10 cursor-default">
      <h5 className="text-secondary text-3xl lg:text-5xl font-bold text-center lg:text-left">Our</h5>
      <h5 className="pb-5 lg:pb-10 text-primary text-3xl lg:text-5xl l font-bold text-center lg:text-left">
      Vision 
      </h5>
      <h3 className="text-1xl lg:text-2xl  text-secondary text-center lg:text-left">
      We believe in transparency, creativity, and trust. Our focus is on building strong partnerships to deliver innovative solutions that empower your business for the future.
      </h3>

    </section>

    {/* Culture */}
    <section className="lg:pl-20 xl:pl-40 mt-10 cursor-default">
      <h5 className="text-secondary text-3xl lg:text-5xl font-bold text-center lg:text-left">Our</h5>
      <h5 className="pb-5 lg:pb-10 text-primary text-3xl lg:text-5xl l font-bold text-center lg:text-left">
        Culture 
      </h5>
    </section>

    {/* Culture heading */}
    <section >
    <div className="pb-20">
      <section className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-4 gap-6 px-10 sm:px-20 md:px-20 lg:px-20 xl:px-40 pt-10 cursor-default">
        <article className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="font-bold text-primary text-3xl pb-6 text-center">
            Skilled IT Professionals
          </h2>
          <div className="opac">
            <p className="text-secondary text-lg text-justify font-montserrat">
            Our expert team specializes in various technologies and process. We deliver clean, maintainable code, with a focus on automation and best practices, so your solutions are built to last.</p>
          </div>
        </article>
        <article className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="font-bold text-primary text-3xl pb-6 text-center">Focused Solutions</h2>
          <div className="opac">
            <p className="text-secondary text-lg text-justify font-montserrat">
            Combining various technical expertise with a business mindset, we design tailored solutions that drive growth. Our goal is to deliver long-term value and help you scale with confidence.</p>
          </div>
        </article>
        <article className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="font-bold text-primary text-3xl pb-6 text-center">P2P Developer Connect</h2>
          <div className="opac">
            <p className="text-secondary text-lg text-justify font-montserrat">
            Introducing P2P Developer Connect—a peer-to-peer platform where businesses and developers collaborate to solve challenges. With flexible pricing and expert support, innovation is just a connection away.</p>
          </div>
        </article>
        <article className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="font-bold text-primary text-3xl pb-6 text-center">Open and Direct Communication</h2>
          <div className="opac">
            <p className="text-secondary text-lg text-justify font-montserrat">
            Clear, honest communication is the cornerstone of our work. We keep things simple and transparent, ensuring smooth collaboration and successful outcomes.</p>
          </div>
        </article>
      </section>
    </div>
    </section>

    {/* Meet our team  */}
    <section className="lg:pl-20 xl:pl-40  cursor-default">
      <h5 className="text-secondary text-3xl lg:text-5xl font-bold text-center lg:text-left">Meet Our</h5>
      <h5 className="pb-5 lg:pb-10 text-primary text-3xl lg:text-5xl l font-bold text-center lg:text-left">
        Talents 
      </h5>
    </section>

    <section className="w-full flex justify-center">
      <div className="px-10 sm:px-20 md:px-20 lg:px-20 xl:px-40 py-12 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 w-full gap-6">
          {members.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              role={member.role}
              imageSrc={member.imageSrc}
              description={member.description}
            />
          ))}
        </div>
      </div>
    </section>
  </>
};

