import { WaveUp, WaveDown } from "@/components/Wave";

const Map = () => (
  <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Afb307abce8f87b3a572f360382a34a329909df88974c70d277e5dfad5cf96c34&&amp;source=constructor&amp;scroll=false" width="100%" height="100%"></iframe>
);

interface AddressProps {
  type: string,
  content: string,
}

const Address = ({ type, content }: AddressProps) => (
  <div>
    <p className="text-sm text-primary">{type}</p>
    <p className="text-secondary mt-1">{content}</p>
  </div>
);

const Information = () => (
  <address className="not-italic z-10 w-[37.5rem] p-6 md:p-8 bg-white rounded-2xl flex flex-col gap-6 h-max">
    <p className="text-primary md:text-lg font-extrabold">ООО «Трейдинг Компани»</p>
    <div>
      <a href="tel:+74951111234" className="text-secondary block text-2xl sm:text-4xl/[150%] font-extrabold">+7(495)111-1234</a>
      <a href="mailto:contact@trading-company.ru" className="text-primary font-extrabold mt-1 underline">
        contact@trading-company.ru
      </a>
    </div>
    <div className="flex flex-col gap-3">
      <Address
        type="Юридический адрес:"
        content="109428, г. Москва, ул. Михайлова, 4А, этаж 3, каб 308"
      />
      <Address
        type="Фактический адрес:"
        content="119049, г. Москва, ул. Коровий Вал, 5, этаж 5 каб. 511"
      />
    </div>
  </address>
);

export const Contacts = () => (
  <section id="contacts">
    <div className="mt-[5.01rem]">
      <div className="w-screen">
        <div className="top-0 left-0 w-full h-[51.5625rem] relative">
          <div className="relative">
            <WaveDown fill="#F9F6FF" />
          </div>
          <Map />
          <div className="absolute inset-0">
            <div className="flex container items-end justify-center h-full lg:items-center lg:justify-start">
              <Information />
            </div>
          </div>
          <div className="relative">
            <WaveUp fill="#F9F6FF" />
          </div>
        </div>
      </div>
    </div>
  </section>
);
