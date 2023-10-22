interface Category {
  id: string,
  name: string,
  content: string[],
}

export const products: Category[] = [
  {
    id: "drinks",
    name: "Напитки",
    content: [
      "matcha-latte-with-ginger",
      "ginger-tea-latte",
      "matcha-latte",
      "ginger-bag",
    ],
  },
  {
    id: "marshmallow",
    name: "Маршмеллоу",
    content: [
      "corniche-snow-white",
      "corniche-mango",
      "corniche-mini",
      "corniche-jelly",
    ],
  },
  {
    id: "candys",
    name: "Конфеты",
    content: [
      "gummi-doggie",
      "funbites-mango",
      "gummi-burger",
      "funbites-orange",
    ],
  }
];
