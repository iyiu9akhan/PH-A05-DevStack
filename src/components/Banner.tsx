import Container from "./Container";
import banner_img from "../assets/banner_img.png";

function Banner() {
  return (
    <>
      <Container>
        <div className="pt-[50.25px] lg:pt-35.5 lg:pb-39.5 lg:px-8 flex flex-col lg:flex-row justify-between items-center bg-[#FBFBFC] lg:bg-[#ffffff]">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="font-secondary font-bold lg:font-extrabold text-[30px] lg:text-[60px] leading-[37.5px] lg:leading-15 tracking-[-0.75px] lg:tracking-[-1.5px] text-[#0F172A] mb-3 lg:mb-6 text-center lg:text-left">
              Build Your Ideal
              <br />
              <span className="inline-block bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
                Development Stack
              </span>
            </h1>
            <p className="max-w-142.75 font-secondary lg:font-primary text-[14px] lg:text-[18px] leading-[22.8px] lg:leading-[29.3px] text-[#4B5563] lg:text-[#475569] mb-6.25 lg:mb-10 text-center lg:text-left px-[17.5px] lg:px-0">
              Explore frontend, backend, database, and tooling options, compare
              them side by side, and put together the stack that fits your next
              project.
            </p>
            <div className="flex justify-center lg:block px-5 lg:px-0">
              <button className="capitalize font-secondary lg:font-semibold text-[12px] lg:text-[14px] leading-4 text-[#ffffff] px-5.75 lg:px-2.75 py-3 rounded-lg mr-3 lg:mr-4 bg-linear-to-r from-[#F97316] to-[#EC4899] cursor-pointer">
                explore technologies
              </button>
              <button className="relative capitalize font-secondary lg:font-semibold text-[12px] lg:text-[14px] leading-4 text-[#374151] px-11.5 py-3 rounded-lg border border-[#E5E7EB] overflow-hidden group cursor-pointer transition-colors duration-300">
                  Learn More
              </button>
            </div>
          </div>
          <img
            src={banner_img}
            alt="#banner_img"
            className="mt-[29.65px] lg:mr-17.25"
          />
        </div>
      </Container>
    </>
  );
}

export default Banner;
