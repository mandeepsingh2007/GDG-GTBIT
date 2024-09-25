const Hero = () => {
    return (
        <div className="relative h-[90vh]  bg-cover bg-center" style={{ backgroundImage: "url('/Images/gdgHero.png')" }}>
            <div className="flex flex-col items-center justify-center h-full text-center">
                <h1 className="text-7xl font-bold text-white mb-2">Google Developer Group</h1>
                <h2 className="text-3xl text-white">GTBIT</h2>
            </div>
        </div>
    );
};

export default Hero;
