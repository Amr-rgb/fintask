const Hero = () => {
  return (
    <div className="container mx-auto px-4 py-20 lg:py-32">
      <div className="flex flex-col items-center text-center">
        <HeroTitle />

        <p className="mt-8 max-w-[18rem] md:max-w-sm xl:max-w-lg opacity-[.72] font-medium md:text-lg">
          Plan projects, stay on track, and deliver on time without overworking
          your team.
        </p>

        <button className="mt-10 btn bg-purple border-darkPurple shadow-darkPurple text-white font-bold flex items-center">
        <span className="block mr-4 w-5 h-5 rounded-full border-[3px] border-white"></span>
        Try Now - Free!
        </button>

        <div className="mt-8 mb-10 flex items-center space-x-2">
          <img src="/assets/icons/CheckCircle.svg" alt="" />
          <p>Excellent 4.9 out of 5</p>
          <img src="/assets/sitejabber.png" alt="" />
        </div>

        <img className="max-w-[90vw] translate-x-[2%]" src="/assets/hero-img.png" alt="" />
      </div>

      <div className="hidden xl:block">
      <img className="-z-10 absolute top-[23rem] -left-6" src="/assets/hero-left-img.png" alt="" />
      <img className="-z-10 absolute top-[15rem] -right-14" src="/assets/hero-right-img.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;

const HeroTitle = () => {
  return (
    <h1 className="font-bold text-[calc(.8rem+3vw)] sm:text-[calc(1.2rem+3.5vw)] xl:text-[4rem] flex flex-col items-center space-y-2">
      <span className="w-fit flex items-center">
        <span className="mr-4">Manage Your</span>
        <img
          className="w-[calc(1.5rem+15vw)] max-w-min"
          src="/assets/hero-title-1.png"
          alt=""
        />
        <span className="ml-2">Teams</span>
      </span>

      <span className="w-fit flex items-center">
        <img
          className="w-[calc(1.5rem+27vw)] max-w-min"
          src="/assets/hero-title-2.png"
          alt=""
        />
        <span className="ml-2 text-[#FC4F24] line-through">Productivity</span>
      </span>
    </h1>
  );
};
