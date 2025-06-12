import car1 from "../assets/car1.webp";
import car2 from "../assets/car2.webp";
import car3 from "../assets/car3.webp";
import car4 from "../assets/car4.webp";
import car5 from "../assets/car5.webp";
import car6 from "../assets/car6.webp";
import car7 from "../assets/car7.webp";

const logos = [car1, car2, car3, car4, car5, car6, car7];

const PartnerLogos = () => (
  <section className="bg-white py-8">
    <div className="max-w-3xl mx-auto grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-6 place-items-center">
      {logos.map((logo, idx) => (
        <img
          key={idx}
          src={logo}
          alt={`Partner ${idx + 1}`}
          className="h-6 md:h-8 object-contain  hover:grayscale-0 transition"
        />
      ))}
    </div>
  </section>
);

export default PartnerLogos;
