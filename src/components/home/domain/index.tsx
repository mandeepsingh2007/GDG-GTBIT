import { DOMAIN } from "@/constants/domain";
import DomainCard from "./card";

const Domain = () => {
    return (
        <section className="py-12 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold  mb-8">Our Domains</h2>
          <p className="text-gray-600 text-lg mb-12">Explore the various domains that form the core of GDG GTBIT and join the one that aligns with your passion.</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {DOMAIN.map((domain, index) => (
                        <DomainCard 
                            key={index}
                            title={domain.title}
                            description={domain.description}
                        />
                    ))}
     
          </div>
        </div>
      </section>
      
    );
  };
  
  export default Domain;
  