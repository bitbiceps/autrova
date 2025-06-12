import { FaCheckCircle, FaTags, FaMobileAlt } from "react-icons/fa";

const benefits = [
  {
    icon: <FaCheckCircle className="text-blue-600 text-3xl" />,
    label: "A trusted brand",
  },
  {
    icon: <FaTags className="text-blue-600 text-3xl" />,
    label: "Book a car in 3 easy steps",
  },
  {
    icon: <FaMobileAlt className="text-blue-600 text-3xl" />,
    label: "Find great deals",
  },
];

const KeyBenefits = () => (
  <section className="bg-white py-6">
    <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-4 px-4">
      {benefits.map((item, idx) => (
        <div key={idx} className="flex items-center gap-3 text-left">
          <div>{item.icon}</div>
          <p className="text-sm text-gray-800 font-semibold leading-tight">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default KeyBenefits;
