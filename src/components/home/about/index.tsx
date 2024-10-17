const About = () => {
  return (
    <section className=" py-16 px-8 text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Section */}
        <div className="text-left w-[80vw">
          <h2 className="text-5xl font-bold  mb-6">Who Are We?</h2>
          <p className="text-xl  leading-relaxed mb-6">
            Google Developer Group (GDG) GTBIT is a community of technology enthusiasts and professionals who come together to learn, collaborate, and grow. Whether you’re new to tech or an experienced developer, GDG GTBIT provides a space to enhance your skills, network with like-minded people, and create innovative solutions.
          </p>
          <p className="text-xl  leading-relaxed">
            Join us in creating impact and empowering others through technology. We host events, workshops, and hands-on learning experiences to ensure you stay at the forefront of the tech world.
          </p>
        </div>

      
      </div>
    </section>
  );
};

export default About;
