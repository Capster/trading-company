import leaf from "@/assets/decorations/leaf.png";
import medal from "@/assets/medal.svg"
import paper from "@/assets/paper.svg"
import noGmo from "@/assets/no-gmo.svg"

import { Title } from "@/components/Title";
import { useTranslation } from "react-i18next";

interface BenefitProps {
  text: string,
  image: string,
}

const Benefit = ({ text, image }: BenefitProps) => (
  <figure className="bg-white p-6 flex-1 rounded-2xl flex flex-col justify-between">
    <div className="h-12"><img src={image} alt="Icon" /></div>
    <figcaption className="mt-6 text-secondary text-sm md:text-base">{text}</figcaption>
  </figure>
);

export const Benefits = () => {
  const { t } = useTranslation();

  return (
    <section id="benefits">
      <div className="container mt-12 lg:mt-40">
        <Title>{t("benefits.title")}</Title>
        <div className="relative">
          <div className="bg-cover z-[-10] absolute w-[4.506rem] h-[9.8995rem] rotate-45 blur-[2px] left-[-3rem] top-[25rem] lg:top-[-4rem] lg:left-[36.69rem]" style={{ backgroundImage: `url('${leaf}')` }}></div>
        </div>
        <div className="relative">
          <div className="bg-cover absolute rotate-[225deg] right-[-2.5rem] bottom-[-6.5rem] md:top-[-10rem] md:right-0 w-[5.30575rem] h-[11.65656rem] md:w-[7.84525rem] md:h-[17.23575rem]" style={{ backgroundImage: `url('${leaf}')` }}></div>
        </div>
        <div className="flex flex-col mt-9 gap-6 lg:flex-row">
          <Benefit text={t("benefits.benefit1")} image={medal} />
          <Benefit text={t("benefits.benefit2")} image={paper} />
          <Benefit text={t("benefits.benefit3")} image={noGmo} />
        </div>
      </div>
    </section>
  );
};
