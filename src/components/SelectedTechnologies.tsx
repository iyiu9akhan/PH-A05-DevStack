import { FiPlus } from "react-icons/fi";
import type { technologiesDataType } from "../types/technologiesType";
import type { Dispatch, SetStateAction } from "react";
import { toast } from "react-toastify";

interface SelectedTechnologiesProps {
  selectedCard: technologiesDataType[];
  setSelectedCard: Dispatch<SetStateAction<technologiesDataType[]>>;
}

function SelectedTechnologies({
  selectedCard,
  setSelectedCard,
}: SelectedTechnologiesProps) {
  const isBlank = selectedCard.length === 0;

  const handleRemove = (technologies: technologiesDataType) => {
    const currentSelectedTechnologies = selectedCard.filter(
      (selectedCard) => selectedCard.name != technologies.name,
    );
    setSelectedCard(currentSelectedTechnologies);
    toast.success(`${technologies.name} removed from your stack!`);
    // console.log(currentSelectedTechnologies)
  };
  const handleRemoveAll = () => {
    setSelectedCard([]);
    toast.success(`All technologies removed from your stack!`);
  };
  return (
    <>
      <div className="p-5.25 border border-[#F1F5F9] rounded-2xl bg-[#ffffff]">
        <h1 className="capitalize font-primary font-bold text-[16px] leading-6 text-[#0F172A] mb-1">
          your stack
        </h1>
        {isBlank ? (
          <>
            {" "}
            <p className="font-primary text-[12px] leading-4 text-[#94A3B8] mb-4">
              No technologies selected yet.
            </p>
            <div className="lg:px-15.5 py-6 border border-dashed border-[#E2E8F0] rounded-xl">
              <p className="font-primary text-[12px] lg:text-[11px] leading-4 text-[#94A3B8] text-center mb-0.75 lg:mb-0">
                Your stack is empty.
              </p>
            </div>
          </>
        ) : (
          <>
            {" "}
            <p className="font-primary text-[12px] leading-4 text-[#94A3B8] mb-4">
              {selectedCard.length} Technology Selected
            </p>
            <div className=" flex flex-col gap-1 justify-center pb-12">
              {selectedCard.map((technologies: technologiesDataType, index) => {
                return (
                  <div
                    key={index}
                    className="flex items-center justify-between rounded-lg border border-[#E2E8F0] px-2.5 py-2.75 "
                  >
                    <div className="flex items-center gap-2">
                      <img src={technologies.mobile_icon} alt="#svelte_icon" />
                      <div className="flex flex-col">
                        <p className="font-primary font-bold text-[10px]  text-[#0F172A] capitalize">
                          {technologies.name}
                        </p>
                        <p className="font-primary font-bold text-[6px]  text-[#94A3B8] capitalize">
                          {technologies.category}
                        </p>
                      </div>
                    </div>
                    <span onClick={() => handleRemove(technologies)}>
                      <FiPlus className="text-[#94A3B8] rotate-45 size-6 lg:cursor-pointer" />
                    </span>
                  </div>
                );
              })}
            </div>
            <button
              onClick={handleRemoveAll}
              className="capitalize py-1.75 border border-[#ED8C85] rounded-lg w-full text-[#D82C20] font-secondary font-semibold text-[14px] leading-4 cursor-pointer hover:bg-[#D82C20] hover:text-[#ffffff] transition-colors duration-300 mb-3.25"
            >
              remove all
            </button>
          </>
        )}
      </div>
    </>
  );
}

export default SelectedTechnologies;
