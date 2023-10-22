import lemon from "@/assets/decorations/lemon.png";
import matcha from "@/assets/decorations/matcha.png";

import { Title } from "@/components/Title";
import { RoundedBox } from "@/components/RoundedBox";
import { WaveUp, WaveDown } from "@/components/Wave";
import { useTranslation } from "react-i18next";

export const About = () => {
  const { t } = useTranslation();

  return (
    <>
      <div id="about"></div>
      <section className="bg-white">
        <div className="relative">
          <WaveUp fill="white" />
        </div>
        <div className="container mt-[7.56rem] md:mt-[14.7rem] pb-[3.25rem]">
          <Title>{t("about.title")}</Title>
          <div className="relative">
            <div className="bg-cover z-10 absolute w-[8.0625rem] h-[8.375rem] left-48 bottom-0 md:w-[11.5625rem] md:h-48 md:left-[18.5rem]" style={{ backgroundImage: `url('${lemon}')` }}></div>
          </div>
          <div className="flex flex-col gap-8 justify-between lg:flex-row lg:gap-48">
            <div className="">
              <p className="text-secondary mt-8 whitespace-pre-line">{t("about.description")}</p>
            </div>
            <div className="self-center lg:self-start">
              <RoundedBox>
                <div className="flex flex-col w-full h-full justify-center px-12">
                  <p className="text-primary text-xl md:text-2xl font-extrabold inline-block">
                    {t("about.slogan")}
                  </p>
                </div>
              </RoundedBox>
              <div className="relative">
                <div className="bg-cover z-10 absolute w-[16.75rem] aspect-square top-[-5rem] right-[-1.5rem] lg:w-[34.75rem] lg:right-0 lg:left-[-10rem]" style={{ backgroundImage: `url('${matcha}')` }}></div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <WaveDown fill="white" />
        </div>
      </section>
    </>
  )
};
