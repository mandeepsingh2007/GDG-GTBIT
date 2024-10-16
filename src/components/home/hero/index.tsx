const Hero = () => {
    return (
        <div className="relative h-[70vh]  bg-cover bg-center" style={{ backgroundImage: "url('/Images/tempHero.svg')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
                <h1 className="text-3xl md:text-7xl font-bold text-white mb-2">Google Developer Group</h1>
                <h2 className="text-3xl text-white">GTBIT</h2>
            </div>
        </div>
    );
};

export default Hero;
