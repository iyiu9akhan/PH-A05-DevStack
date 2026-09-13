import Container from "./Container";
import react_icon from "../assets/technologies/react.png";
// import react_mobile_icon from "../assets/technologies/react_mobile.png";
// import vuejs_icon from "../assets/technologies/vuejs.png";
import svelte_icon from "../assets/technologies/svelte.png";
// import nextjs_icon from "../assets/technologies/nextjs.png";
import { FaStar } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { use } from "react";
import type { technologiesProps } from "../types/technologiesType";

function Technologies({ technologies_info }: technologiesProps) {
  const technologies = use(technologies_info);
  console.log(technologies);

  return (
    <>
      <div className="pb-14.25 lg:pb-22 bg-[#FBFBFC] lg:bg-[#ffffff]">
        <Container>
          <div className="lg:px-8">
            <h1 className="font-secondary font-bold text-[24px] leading-8 text-[#111827] lg:font-extrabold lg:text-[36px] lg:leading-10  lg:text-[#0F172A] mb-1 lg:mb-2 text-center lg:text-left pt-7.75 lg:mt-0">
              Explore the{" "}
              <span className="bg-linear-to-r from-[#EC4899]  to-[#8B5CF6] bg-clip-text text-transparent">
                Technologies
              </span>
            </h1>
            <p className="font-secondary lg:font-primary text-[12px] lg:text-[16px] leading-4 lg:leading-6 text-[#6B7280] lg:text-[#64748B] mb-5 lg:mb-10 text-center lg:text-left">
              Pick one technology per category to build your ideal stack.
            </p>
          </div>

          <div className="px-4 lg:px-8 grid lg:grid-cols-4 items-start gap-5 lg:gap-8">
            <div className="grid lg:grid-cols-3 lg:col-span-3 gap-3.5 lg:gap-5">
              {technologies.map((data, index:number) => {
                return (
                  <div key={index} className="border border-[#F1F5F9] rounded-2xl p-4 lg:p-5 bg-[#ffffff]">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <img
                          src={data.web_icon}
                          alt="#tech_icon"
                          className="hidden lg:block"
                        />
                        <img
                          src={data.mobile_icon}
                          alt="#tech_icon"
                          className="block lg:hidden"
                        />
                        <p className="block lg:hidden font-secondary font-bold text-[16px] leading-5 text-[#111827]">
                          {data.name}
                        </p>
                      </div>
                      <p className="px-2.5 py-0.5 font-secondary lg:font-primary font-bold lg:font-semibold text-[10.4px] lg:text-[11.5px] leading-[15.6px] lg:leading-[17.3px] text-[#0369A1] lg:text-[#0EA5E9] bg-[#E0F2FE] lg:bg-[#F0F9FF] rounded-full border border-[#E0F2FE] capitalize">
                        {data.badge}
                      </p>
                    </div>
                    <p className="hidden lg:block font-primary font-bold text-[18px] text-[#0F172A] mb-1.5">
                     {data.name}
                    </p>
                    <p className="font-secondary text-[12px] min-h-18.75 lg:text-[13px] leading-[19.5px] text-[#4B5563] lg:text-[#64748B] pb-4 border-b border-[#F8FAFC]">
                     {data.description}
                    </p>
                    <div className="mt-4 flex items-center justify-between mb-[9.3px] lg:mb-4">
                      <p className="px-2 py-0.5 font-secondary lg:font-primary lg:font-medium text-[11px] leading-[16.5px] text-[#4B5563] lg:text-[#475569] bg-[#F1F5F9]/80 rounded-sm capitalize">
                        {data.category}
                      </p>
                      <p className="font-secondary lg:font-primary lg:font-medium text-[11px] leading-[16.5px] text-[#6B7280] lg:text-[#64748B]">
                        {data.difficulty}
                      </p>
                      <div className="flex items-center gap-[4.8px]">
                        <FaStar className="text-[#FBBF24]" />
                        <p className="font-primary font-semibold text-[11px] leading-[#16.5] text-[#F59E0B] lg:text-[#334155]">
                         {data.rating}
                        </p>
                      </div>
                    </div>
                    <button className="font-secondary lg:font-primary md:font-medium text-[12px] leading-4 text-[#ffffff] w-full py-2.5 rounded-lg bg-[#111827] lg:bg-[#0A0F1D] cursor-pointer">
                      Add to Stack
                    </button>
                  </div>
                );
              })}

            </div>
            <div className="lg:col-span-1">
              <div className="p-5.25 border border-[#F1F5F9] rounded-2xl bg-[#ffffff]">
                <h1 className="capitalize font-primary font-bold text-[16px] leading-6 text-[#0F172A] mb-1">
                  your stack
                </h1>
                <p className="font-primary text-[12px] leading-4 text-[#94A3B8] mb-4">
                  No technologies selected yet.
                </p>
                <div className="lg:px-15.5 py-6 border border-dashed border-[#E2E8F0] rounded-xl">
                  <p className="font-primary text-[12px] lg:text-[11px] leading-4 text-[#94A3B8] text-center mb-0.75 lg:mb-0">
                    Your stack is empty.
                  </p>
                </div>
              </div>

              <div className="p-5.25 border border-[#F1F5F9] rounded-2xl bg-[#ffffff]">
                <h1 className="capitalize font-primary font-bold text-[16px] leading-6 text-[#0F172A] mb-1">
                  your stack
                </h1>
                <p className="font-primary text-[12px] leading-4 text-[#94A3B8] mb-4">
                  2 Technology Selected
                </p>
                <div className=" flex flex-col gap-1 justify-center pb-12">
                  <div className="flex items-center justify-between rounded-lg border border-[#E2E8F0] px-2.5 py-2.75 ">
                    <div className="flex items-center gap-2">
                      <img src={svelte_icon} alt="#svelte_icon" />
                      <div className="flex flex-col">
                        <p className="font-primary font-bold text-[10px]  text-[#0F172A] capitalize">
                          svelte
                        </p>
                        <p className="font-primary font-bold text-[6px]  text-[#94A3B8] capitalize">
                          frontend
                        </p>
                      </div>
                    </div>
                    <FiPlus className="text-[#94A3B8] rotate-45 size-6 lg:cursor-pointer" />
                  </div>
                  <div className="flex items-center justify-between rounded-lg border border-[#E2E8F0] px-2.5 py-2.75 ">
                    <div className="flex items-center gap-2">
                      <img src={react_icon} alt="#svelte_icon" />
                      <div className="flex flex-col">
                        <p className="font-primary font-bold text-[10px]  text-[#0F172A] capitalize">
                          react
                        </p>
                        <p className="font-primary font-bold text-[6px]  text-[#94A3B8] capitalize">
                          Database
                        </p>
                      </div>
                    </div>
                    <FiPlus className="text-[#94A3B8] rotate-45 size-6 lg:cursor-pointer" />
                  </div>
                </div>
                <button className="capitalize py-1.75 border border-[#ED8C85] rounded-lg w-full text-[#D82C20] font-secondary font-semibold text-[14px] leading-4 cursor-pointer hover:bg-[#D82C20] hover:text-[#ffffff] transition-colors duration-300 mb-3.25">
                  remove all
                </button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Technologies;
