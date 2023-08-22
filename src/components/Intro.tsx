import group from "@/assets/decorations/group.png";

import { Title } from "@/components/Title";
import { Button } from "@/components/Button";
import { ArrowDown } from "@/components/Arrow";

export const Intro = () => (
  <section className="container flex flex-col-reverse lg:gap-20 lg:flex-row lg:mt-40">
    <div className="flex-1 flex flex-col justify-center items-center gap-6 lg:items-start">
      <div className="flex flex-col gap-4 text-center lg:text-left">
        <Title>Торговая компания Trading Company</Title>
        <p className="text-lg text-secondary">Предоставляем продукты питания превосходного качества из Азии с 2015 года</p>
      </div>
      <div className="">
        <Button href="#about">Узнать больше</Button>
      </div>
      <a href="#about">
        <ArrowDown className="block lg:hidden"/>
      </a>
    </div>
    <div className="flex-1 relative flex justify-center">
      <div className="bg-cover z-10 w-full max-w-[35.775rem] aspect-[1.09278]" style={{ backgroundImage: `url('${group}')` }}></div>
    </div>
  </section>
);
