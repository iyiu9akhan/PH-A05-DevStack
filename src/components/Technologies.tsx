import Container from "./Container";
import react_icon from "../assets/technologies/react.png";
import react_mobile_icon from "../assets/technologies/react_mobile.png";
import vuejs_icon from "../assets/technologies/vuejs.png";
import svelte_icon from "../assets/technologies/svelte.png";
import nextjs_icon from "../assets/technologies/nextjs.png";
import { FaStar } from "react-icons/fa";

function Technologies() {
  return (
    <>
      <Container>
        <div className="lg:px-8">
          <h1 className="font-secondary font-bold text-[24px] leading-8 text-[#111827] lg:font-extrabold lg:text-[36px] lg:leading-10  lg:text-[#0F172A] mb-1 lg:mb-2 text-center lg:text-left mt-7.75 lg:mt-0">
            Explore the{" "}
            <span className="bg-linear-to-r from-[#EC4899]  to-[#8B5CF6] bg-clip-text text-transparent">
              Technologies
            </span>
          </h1>
          <p className="font-secondary lg:font-primary text-[12px] lg:text-[16px] leading-4 lg:leading-6 text-[#6B7280] lg:text-[#64748B] mb-5 lg:mb-10 text-center lg:text-left">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        <div className="px-4 lg:px-8 grid lg:grid-cols-4 items-start gap-8">
          <div className="grid lg:grid-cols-3 col-span-3 gap-3.5 lg:gap-5">

            <div className="border border-[#F1F5F9] rounded-2xl p-4 lg:p-5">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <img src={react_icon} alt="#react_icon" className="hidden lg:block"/>
                  <img src={react_mobile_icon} alt="#react_icon" className="block lg:hidden"/>
                  <p className="block lg:hidden font-secondary font-bold text-[16px] leading-5 text-[#111827]">
                    React
                  </p>
                </div>
                <p className="px-2.5 py-0.5 font-secondary lg:font-primary font-bold lg:font-semibold text-[10.4px] lg:text-[11.5px] leading-[15.6px] lg:leading-[17.3px] text-[#0369A1] lg:text-[#0EA5E9] bg-[#E0F2FE] lg:bg-[#F0F9FF] rounded-full border border-[#E0F2FE] capitalize">
                  popular
                </p>
              </div>
              <p className="hidden lg:block font-primary font-bold text-[18px] text-[#0F172A] mb-1.5">
                React
              </p>
              <p className="font-secondary text-[12px] lg:text-[13px] leading-[19.5px] text-[#4B5563] lg:text-[#64748B] pb-4 border-b border-[#F8FAFC]">
                A declarative, component-based JavaScript library for building
                modern user interfaces.
              </p>
              <div className="mt-4 flex items-center justify-between mb-[9.3px] lg:mb-4">
                <p className="px-2 py-0.5 font-secondary lg:font-primary lg:font-medium text-[11px] leading-[16.5px] text-[#4B5563] lg:text-[#475569] bg-[#F1F5F9]/80 rounded-sm capitalize">
                  Frontend
                </p>
                <p className="font-secondary lg:font-primary lg:font-medium text-[11px] leading-[16.5px] text-[#6B7280] lg:text-[#64748B]">
                  Beginner-Friendly
                </p>
                <div className="flex items-center gap-[4.8px]">
                  <FaStar className="text-[#FBBF24]" />
                  <p className="font-primary font-semibold text-[11px] leading-[#16.5] text-[#F59E0B] lg:text-[#334155]">
                    4.9
                  </p>
                </div>
              </div>
              <button className="font-secondary lg:font-primary md:font-medium text-[12px] leading-4 text-[#ffffff] w-full py-2.5 rounded-lg bg-[#111827] lg:bg-[#0A0F1D] cursor-pointer">
                Add to Stack
              </button>
            </div>

            <div className="border border-[#F1F5F9] rounded-2xl p-5">
              <div className="flex items-center justify-between mb-3">
                <img src={vuejs_icon} alt="#react_icon" />
                <p className="px-2.5 py-0.5 font-primary font-semibold text-[11.5px] leading-[17.3px] text-[#059669] bg-[#ECFDF5] rounded-full border border-[#D1FAE5] capitalize">
                  Versatile
                </p>
              </div>
              <p className="font-primary font-bold text-[18px] text-[#0F172A] mb-1.5">
                Vue.js
              </p>
              <p className="font-primary text-[13px] leading-[19.5px] text-[#64748B] pb-4 border-b border-[#F8FAFC]">
                An approachable, performant, and versatile framework for
                building web user interfaces.
              </p>
              <div className="mt-4 flex items-center justify-between mb-4">
                <p className="px-2 py-0.5 font-primary font-medium text-[11px] leading-[16.5px] text-[#475569] bg-[#F1F5F9]/80 rounded-sm capitalize">
                  Frontend
                </p>
                <p className="font-primary font-medium text-[11px] leading-[16.5px] text-[#64748B]">
                  Beginner-Friendly
                </p>
                <div className="flex items-center gap-[4.8px]">
                  <FaStar className="text-[#FBBF24]" />
                  <p className="font-primary font-semibold text-[11px] leading-[#16.5] text-[#334155]">
                    4.8
                  </p>
                </div>
              </div>
              <button className=" font-primary font-medium text-[12px] leading-4 text-[#ffffff] w-full py-2.5 rounded-lg bg-[#0A0F1D] cursor-pointer">
                Add to Stack
              </button>
            </div>

            <div className="border border-[#F1F5F9] rounded-2xl p-5">
              <div className="flex items-center justify-between mb-3">
                <img src={svelte_icon} alt="#react_icon" />
                <p className="px-2.5 py-0.5 font-primary font-semibold text-[11.5px] leading-[17.3px] text-[#EA580C] bg-[#FFF7ED] rounded-full border border-[#FFEDD5] capitalize">
                  fast
                </p>
              </div>
              <p className="font-primary font-bold text-[18px] text-[#0F172A] mb-1.5">
                Svelte
              </p>
              <p className="font-primary text-[13px] leading-[19.5px] text-[#64748B] pb-4 border-b border-[#F8FAFC]">
                Cybernetically enhanced web apps with compile-time reactivity
                and zero virtual DOM overhead.
              </p>
              <div className="mt-4 flex items-center justify-between mb-4">
                <p className="px-2 py-0.5 font-primary font-medium text-[11px] leading-[16.5px] text-[#475569] bg-[#F1F5F9]/80 rounded-sm capitalize">
                  Frontend
                </p>
                <p className="font-primary font-medium text-[11px] leading-[16.5px] text-[#64748B]">
                  Intermediate
                </p>
                <div className="flex items-center gap-[4.8px]">
                  <FaStar className="text-[#FBBF24]" />
                  <p className="font-primary font-semibold text-[11px] leading-[#16.5] text-[#334155]">
                    4.8
                  </p>
                </div>
              </div>
              <button className=" font-primary font-medium text-[12px] leading-4 text-[#ffffff] w-full py-2.5 rounded-lg bg-[#0A0F1D] cursor-pointer">
                Add to Stack
              </button>
            </div>

            <div className="border border-[#F1F5F9] rounded-2xl p-5">
              <div className="flex items-center justify-between mb-3">
                <img src={nextjs_icon} alt="#react_icon" />
                <p className="px-2.5 py-0.5 font-primary font-semibold text-[11.5px] leading-[17.3px] text-[#7E22CE] bg-[#F3E8FF] rounded-full border border-[#E9D5FF] capitalize">
                  SSR / Edge
                </p>
              </div>
              <p className="font-primary font-bold text-[18px] text-[#0F172A] mb-1.5">
                Next.js
              </p>
              <p className="font-primary text-[13px] leading-[19.5px] text-[#64748B] pb-4 border-b border-[#F8FAFC]">
                The React framework for full-stack web applications with hybrid
                static & server rendering.
              </p>
              <div className="mt-4 flex items-center justify-between mb-4">
                <p className="px-2 py-0.5 font-primary font-medium text-[11px] leading-[16.5px] text-[#475569] bg-[#F1F5F9]/80 rounded-sm capitalize">
                  Frontend
                </p>
                <p className="font-primary font-medium text-[11px] leading-[16.5px] text-[#64748B]">
                  Intermediate
                </p>
                <div className="flex items-center gap-[4.8px]">
                  <FaStar className="text-[#FBBF24]" />
                  <p className="font-primary font-semibold text-[11px] leading-[#16.5] text-[#334155]">
                    4.9
                  </p>
                </div>
              </div>
              <button className=" font-primary font-medium text-[12px] leading-4 text-[#ffffff] w-full py-2.5 rounded-lg bg-[#0A0F1D] cursor-pointer">
                Add to Stack
              </button>
            </div>
          </div>

          <div className="col-span-1 p-5.25 border border-[#F1F5F9] rounded-2xl">
            <h1 className="capitalize font-primary font-bold text-[16px] leading-6 text-[#0F172A] mb-1">
              your stack
            </h1>
            <p className="font-primary text-[12px] leading-4 text-[#94A3B8] mb-4">
              No technologies selected yet.
            </p>
            <div className="pl-15.5 pr-15.5 py-6 border border-dashed border-[#E2E8F0] rounded-xl">
              <p className="font-primary text-[11px] leading-4 text-[#94A3B8] text-center ">
                Your stack is empty.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Technologies;
