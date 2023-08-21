interface Item {
  name: string,
  image: string,
}

interface Category {
  id: string,
  name: string,
  content: Item[],
};

export const products: Array<Category> = [
  {
    id: "drinks",
    name: "Напитки",
    content: [
      { name: "Матча Латте Имбирный Gold Kili", image: "/products/matcha-latte-with-ginger.png" },
      { name: "Имбирный чай Латте с мёдом Gold Kili", image: "/products/ginger-tea-latte.png" },
      { name: "Матча Латте Gold Kili", image: "/products/matcha-latte.png" },
      { name: "Имбирь натуральный Gold Kili", image: "/products/ginger-bag.png" },
    ],
  },
  {
    id: "marshmallow",
    name: "Маршмеллоу",
    content: [
      { name: "Имбирь натуральный Gold Kili", image: "/products/ginger-bag.png" },
      { name: "Матча Латте Имбирный Gold Kili", image: "/products/matcha-latte-with-ginger.png" },
      { name: "Имбирный чай Латте с мёдом Gold Kili", image: "/products/ginger-tea-latte.png" },
      { name: "Матча Латте Gold Kili", image: "/products/matcha-latte.png" },
    ],
  },
  {
    id: "candys",
    name: "Конфеты",
    content: [
      { name: "Жевательный мармелад Ход Дог Gummi Zone", image: "/products/gummi-doggie.png" },
      { name: "Имбирные жевательные конфеты с куркумой и манго FunBites", image: "/products/funbites-mango.png" },
      { name: "Жевательный мармелад Бургер Gummi Zone", image: "/products/gummi-burger.png" },
      { name: "Имбирные жевательные конфеты с куркумой и апельсином FunBites", image: "/products/funbites-orange.png" },
    ],
  }
];
