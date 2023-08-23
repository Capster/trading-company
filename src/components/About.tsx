import lemon from "@/assets/decorations/lemon.png";
import matcha from "@/assets/decorations/matcha.png";

import { Title } from "@/components/Title";
import { RoundedBox } from "@/components/RoundedBox";
import { WaveUp, WaveDown } from "@/components/Wave";

const description = "Основанная в 2016 году, российская компания Trading Company имеет большой потенциал и надежную репутацию. \n\n Мы являемся эксклюзивным поставщиком брендов Gummi Zone, Gold Kili, Fun Bites, Corniche на территории России. Мы гордимся нашими  уникальными партнерами и брендами, которые используют все самые натуральные ингредиенты и высокие стандарты качества. Мы постоянно стремимся предложить лучшее для наших потребителей. В настоящее время мы сотрудничаем с ведущими дистрибьюторскими компаниями в большинстве регионов России и имеем контракты с местными и федеральными сетями.";

export const About = () => (
  <section className="bg-white" id="about">
    <div className="relative">
      <WaveUp fill="white" />
    </div>
    <div className="container mt-[7.56rem] md:mt-[14.7rem] pb-[3.25rem]">
      <Title>О компании</Title>
      <div className="relative">
        <div className="bg-cover z-10 absolute w-[8.0625rem] h-[8.375rem] left-48 bottom-0 md:w-[11.5625rem] md:h-48 md:left-[18.5rem]" style={{ backgroundImage: `url('${lemon}')` }}></div>
      </div>
      <div className="flex flex-col gap-8 justify-between lg:flex-row lg:gap-48">
        <div className="">
          <p className="text-secondary mt-8 whitespace-pre-line">{description}</p>
        </div>
        <div className="self-center lg:self-start">
          <RoundedBox>
            <div className="flex flex-col w-full h-full justify-center px-12">
              <p className="text-primary text-xl md:text-2xl font-extrabold inline-block">
                Мы строим отношения с нашими партнерами на основе взаимной выгоды, честности, ответственности и дисциплины!
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
);
