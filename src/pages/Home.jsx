import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroSection from "../components/Hero";
import KeyBenefits from "../components/KeyBenifits";
import PartnerLogos from "../components/PartnersLogos";
import RentingInfo from "../components/RentingInfo";
import TopDestinations from "../components/TopDestinations";

const Home = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <PartnerLogos />
      <KeyBenefits />
      <TopDestinations />
      <RentingInfo />
      <Footer />
    </>
  );
};

export default Home;
