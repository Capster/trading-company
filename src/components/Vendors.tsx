import marshmallow from "@/assets/decorations/marshmallow.png";
import { Title } from "@/components/Title";
import { vendors } from "@/data/vendors";
import { useTranslation } from "react-i18next";

interface Vendor {
  url: string,
  image: string,
  width?: number,
}

const Vendor = ({ url, image, width }: Vendor) => (
  <a href={url} className="bg-white rounded-2xl px-3 min-w-[9.5rem] w-full h-24 lg:h-32 flex justify-center items-center hover:shadow-[0_8px_16px_0_rgba(119,101,169,0.15)]">
    <img src={image} style={{width: width ? `${width}rem` : `auto`}} />
  </a>
);

export const Vendors = () => {
  const { t } = useTranslation();

  return (
    <>
      <div id="vendors"></div>
      <section>
        <div className="container mt-[16rem]">
          <Title>{t("vendors.title")}</Title>
          <div className="relative">
            <div className="bg-cover absolute rotate-[-45deg] left-[12.5rem] bottom-[-3rem] w-[7.3382rem] h-[9.43728rem] md:left-[20rem]" style={{ backgroundImage: `url('${marshmallow}')` }}></div>
          </div>
          <div className="overflow-x-auto lg:overflow-x-visible">
            <div className="mt-9 gap-2 grid grid-cols-[repeat(4,minmax(9.5rem,1fr))] grid-rows-2 lg:w-auto lg:gap-4">
            {
              vendors.map(({ image, url, width }, index) => (
                <Vendor image={image} key={index} url={url} width={width} />
              ))
            }
            </div>
          </div>
        </div>
      </section>
    </>
  )
};
