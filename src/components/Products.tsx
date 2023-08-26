import { Title } from "@/components/Title";
import { Button } from "@/components/Button";
import { products } from "@/data/products"
import * as Tabs from '@radix-ui/react-tabs';

interface ItemProps {
  name: string,
  image: string,
}

const Item = ({ name, image }: ItemProps) => (
  <figure className="bg-white rounded-3 p-6 w-full flex-1 rounded-2xl flex flex-col justify-between">
    <img src={image} alt={name}/>
    <figcaption className="mt-3 font-bold text-secondary leading-6 text-sm md:text-base">{name}</figcaption>
  </figure>
);

interface TriggerProps {
  children: React.ReactNode,
  value: string,
}

const Trigger = ({ children, value }: TriggerProps) => (
  <Tabs.Trigger
    className="px-8 py-2 font-bold text-secondary rounded-full transition-all data-[state=active]:bg-white data-[state=active]:shadow-[0_4px_12px_0_rgba(112,64,244,0.15)] hover:bg-[rgba(112,64,244,0.10)]"
    value={value}
  >
    {children}
  </Tabs.Trigger>
);

const List = ({ children }: { children: React.ReactNode }) => (
  <Tabs.List className="rounded-full p-1 gap-1 bg-[rgba(112,64,244,0.10)] flex justify-between w-min">
    {children}
  </Tabs.List>
);

export const Products = () => (
  <section id="products">
    <div className="container mt-36 md:mt-[16rem] flex flex-col gap-6">
      <Title>Продукция</Title>
      <Tabs.Root defaultValue={products.at(0)?.id}>
        <div className="flex justify-between mb-6">
          <List>
            {
              products.map(({ name, id }, index) => (
                <Trigger key={index} value={id}>
                  {name}
                </Trigger>
              ))
            }
          </List>
          <Button href="/" className="z-20 hidden lg:block">В интернет-магазин</Button>
        </div>
        {
          products.map(({ id, content }, index) => (
            <Tabs.Content key={index} className="grid grid-cols-2 grid-rows-2 gap-2 md:gap-6 empty:gap-0 md:grid-rows-1 md:grid-cols-4" value={id}>
              {
                content.map(({ image, name }, index) => (
                  <Item image={image} name={name} key={index} />
                ))
              }
            </Tabs.Content>
          ))
        }
      </Tabs.Root>
      <div className="text-center">
        <Button href="/" className="z-20 inline-block lg:hidden">В интернет-магазин</Button>
      </div>
    </div>
  </section>
);
