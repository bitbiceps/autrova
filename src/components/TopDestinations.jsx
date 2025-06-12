import orlando from "../assets/orlando.webp";
import losangeles from "../assets/los-angeles.webp";
import lasvegas from "../assets/las-vegas.jpeg";
import tampa from "../assets/tampa.webp";
import sanfrancisco from "../assets/san-francisco.webp";
import phoenix from "../assets/phoenix.webp";

const destinations = [
  { name: "Orlando", img: orlando },
  { name: "Los Angeles", img: losangeles },
  { name: "Las Vegas", img: lasvegas },
  { name: "Tampa", img: tampa },
  { name: "San Francisco", img: sanfrancisco },
  { name: "Phoenix", img: phoenix },
];

const TopDestinations = () => (
  <section className="bg-white py-12 px-4">
    <h2 className="text-2xl font-semibold text-center mb-10">
      Top Destinations
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
      {destinations.map((city, index) => (
        <div key={index} className="text-center">
          <p className="mb-2 font-medium text-gray-800">{city.name}</p>
          <img
            src={city.img}
            alt={city.name}
            className="w-full h-48 object-cover rounded-md shadow-sm"
          />
        </div>
      ))}
    </div>
  </section>
);

export default TopDestinations;
