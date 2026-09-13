import Container from "./Container";
import { use, useState } from "react";
import type {
  technologiesDataType,
  technologiesProps,
} from "../types/technologiesType";
import TechnologiesCard from "./TechnologiesCard";
import SelectedTechnologies from "./SelectedTechnologies";

function Technologies({ technologies_info }: technologiesProps) {
  const technologies = use(technologies_info);
  const [selectedCard, setSelectedCard] = useState<technologiesDataType[]>([]);

  return (
    <>
      <div className="pb-14.25 lg:pb-22 bg-[#FBFBFC] lg:bg-[#ffffff]">
        <Container>
          <div className="lg:px-8">
            <h1 className="font-secondary font-bold text-[24px] leading-8 text-[#111827] lg:font-extrabold lg:text-[36px] lg:leading-10  lg:text-[#0F172A] mb-1 lg:mb-2 text-center lg:text-left pt-7.75 lg:mt-0">
              Explore the{" "}
              <span className="bg-(image:--gradient-primary-brand) bg-clip-text text-transparent">
                Technologies
              </span>
            </h1>
            <p className="font-secondary lg:font-primary text-[12px] lg:text-[16px] leading-4 lg:leading-6 text-[#6B7280] lg:text-[#64748B] mb-5 lg:mb-10 text-center lg:text-left">
              Pick one technology per category to build your ideal stack.
            </p>
          </div>

          <div className="px-4 lg:px-8 grid md:grid-cols-3 lg:grid-cols-4 items-start gap-5 lg:gap-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 md:col-span-2 lg:col-span-3 gap-3.5 lg:gap-5">
              {technologies.map((data, index: number) => {
                const isSelected = selectedCard.some(
                  (item) => item.name === data.name,
                );
                return (
                  <TechnologiesCard
                    key={index}
                    data={data}
                    isSelected={isSelected}
                    selectedCard={selectedCard}
                    setSelectedCard={setSelectedCard}
                  />
                );
              })}
            </div>

            <div className="lg:col-span-1">
              <SelectedTechnologies
                selectedCard={selectedCard}
                setSelectedCard={setSelectedCard}
              />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Technologies;
