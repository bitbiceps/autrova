const HeroSection = () => {
  return (
    <div className="bg-[url('https://a.travel-assets.com/flex/flexmanager/images/2019/08/19/CR_Hero.jpg')] bg-cover bg-center py-20">
      <div className="max-w-4xl mx-auto text-center">
        {/* Blurred backdrop box */}
        <div>
          <div className="text-3xl font-bold mb-4 text-white">
            <div>Cheap Car Rentals</div>
            <a
              href="tel:+18557616979"
              className="inline-block text-white px-2 text-base font-medium transition bg-black/40 backdrop-blur-sm "
            >
              📞 +1-855-761-6979
            </a>
          </div>
          <p className="text-white text-sm mb-6 max-w-xl mx-auto bg-black/40 backdrop-blur-sm ">
            Book your rental car quickly and easily with our agents. Tap below
            to call now.
          </p>

          {/* Click-to-call Button */}
          <a
            href="tel:+18557616979"
            className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-full text-base font-medium transition"
          >
            Call Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
