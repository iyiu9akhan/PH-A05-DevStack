import { FaStar } from "react-icons/fa";
import type { technologiesDataType } from "../types/technologiesType";
import { useState, type Dispatch, type SetStateAction } from "react";
import { toast } from "react-toastify";

interface technologiesCardProps {
  data: technologiesDataType;
  selectedCard: technologiesDataType[];
  setSelectedCard: Dispatch<SetStateAction<technologiesDataType[]>>;
}

function TechnologiesCard({
  data,
  selectedCard,
  setSelectedCard,
}: technologiesCardProps) {
  const [isSelected, setIsSelected] = useState(false);

  const handleBtn = () => {
    setIsSelected(true);
    toast.success(`${data.name} added to your stack!`);
    setSelectedCard([...selectedCard, data]);
  };

  return (
    <div className="border border-[#F1F5F9] rounded-2xl p-4 lg:p-5 bg-[#ffffff]">
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
      <button
        disabled={isSelected}
        onClick={handleBtn}
        className={`font-secondary lg:font-primary md:font-medium text-[12px] leading-4 text-[#ffffff] w-full py-2.5 rounded-lg bg-[#111827] lg:bg-[#0A0F1D] capitalize ${isSelected ? "cursor-not-allowed opacity-50" : "cursor-pointer"}`}
      >
        {isSelected ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
}

export default TechnologiesCard;
