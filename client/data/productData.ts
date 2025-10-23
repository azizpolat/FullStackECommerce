import { ProductsType } from "../types";

const products: ProductsType = [
  {
    id: 1,
    name: "Adidas CoreFit T-Shirt",
    shortDescription:
      "Hafif, esnek ve nefes alabilen kumaşıyla günlük spor ve antrenmanlar için ideal t-shirt.",
    description:
      "Adidas CoreFit T-Shirt, esnek yapısı ve teri hızla dışarı atan kumaşı sayesinde gün boyu konfor sağlar. Spor yaparken ya da günlük kullanımda şık ve rahat bir tercih sunar. Modern kesimiyle tarzınızı tamamlar.",
    price: 39.9,
    sizes: ["s", "m", "l", "xl", "xxl"],
    colors: ["gray", "purple", "green"],
    images: {
      gray: "/products/1g.png",
      purple: "/products/1p.png",
      green: "/products/1gr.png",
    },
  },
  {
    id: 2,
    name: "Puma Ultra Warm Zip",
    shortDescription:
      "Soğuk havalarda sıcak tutan, şık tasarımlı fermuarlı sweatshirt.",
    description:
      "Puma Ultra Warm Zip, yumuşak ve kalın dokusu ile serin günlerde ekstra sıcaklık sunar. Rahat kesimi sayesinde hareket özgürlüğü sağlarken fermuarlı yapısıyla kolay giyilip çıkarılır. Spor kombinlerinizi tamamlayan modern bir parçadır.",
    price: 59.9,
    sizes: ["s", "m", "l", "xl"],
    colors: ["gray", "green"],
    images: { gray: "/products/2g.png", green: "/products/2gr.png" },
  },
  {
    id: 3,
    name: "Nike Air Essentials Pullover",
    shortDescription:
      "Yumuşak kumaşıyla konforlu, hafif ve spor tarzı tamamlayan kapüşonlu sweatshirt.",
    description:
      "Nike Air Essentials Pullover, günlük kullanım için ideal hafif yapısıyla öne çıkar. Ter tutmayan kumaşı, uzun süreli konfor sunar. Minimal tasarımı sayesinde spor giyimden sokak stiline kadar çok yönlü kullanım imkanı sağlar.",
    price: 69.9,
    sizes: ["s", "m", "l"],
    colors: ["green", "blue", "black"],
    images: {
      green: "/products/3gr.png",
      blue: "/products/3b.png",
      black: "/products/3bl.png",
    },
  },
  {
    id: 4,
    name: "Nike Dri Flex T-Shirt",
    shortDescription:
      "Esnek kumaşıyla maksimum hareket özgürlüğü sunan hafif spor t-shirt.",
    description:
      "Nike Dri Flex T-Shirt, teri hızla emip dışarı atan Dri-FIT teknolojisiyle egzersiz boyunca kuru ve rahat kalmanızı sağlar. Vücuda uyumlu esnek kesimi, spor aktivitelerinde performansınızı artırır.",
    price: 29.9,
    sizes: ["s", "m", "l"],
    colors: ["white", "pink"],
    images: { white: "/products/4w.png", pink: "/products/4p.png" },
  },
  {
    id: 5,
    name: "Under Armour StormFleece",
    shortDescription:
      "Rüzgar ve hafif yağmura dayanıklı, sıcak tutan çok amaçlı ceket.",
    description:
      "Under Armour StormFleece, suya dayanıklı yüzeyi ve iç kısmındaki yumuşak dokusuyla sizi hava şartlarından korur. Günlük kullanımda şıklık, açık havada ise fonksiyonellik sunar. Spor ve outdoor aktiviteler için mükemmel bir seçimdir.",
    price: 49.9,
    sizes: ["s", "m", "l"],
    colors: ["red", "orange", "black"],
    images: {
      red: "/products/5r.png",
      orange: "/products/5o.png",
      black: "/products/5bl.png",
    },
  },
  {
    id: 6,
    name: "Nike Air Max 270",
    shortDescription:
      "Konforlu tabanı ve şık tasarımıyla spor ve günlük kullanım için ideal ayakkabı.",
    description:
      "Nike Air Max 270, özel hava yastıklı tabanı sayesinde üstün yastıklama ve konfor sağlar. Modern görünümüyle hem spor kombinlerinizde hem de günlük yaşamda rahatlıkla tercih edebilirsiniz. Hafif yapısıyla gün boyu kullanım kolaylığı sunar.",
    price: 59.9,
    sizes: ["40", "42", "43", "44"],
    colors: ["gray", "white"],
    images: { gray: "/products/6g.png", white: "/products/6w.png" },
  },
  {
    id: 7,
    name: "Nike Ultraboost Pulse",
    shortDescription:
      "Enerji dönüşümü sağlayan tabanıyla koşu ve antrenman için geliştirilmiş performans ayakkabısı.",
    description:
      "Nike Ultraboost Pulse, koşucular için özel tasarlanan esnek tabanı sayesinde her adımda enerji dönüşümü sağlar. Ayağı saran yapısı ve nefes alabilen kumaşı ile uzun süreli kullanımlarda bile konfor sunar. Hem spor hem de günlük kullanım için uygundur.",
    price: 69.9,
    sizes: ["40", "42", "43"],
    colors: ["gray", "pink"],
    images: { gray: "/products/7g.png", pink: "/products/7p.png" },
  },
  {
    id: 8,
    name: "Levi’s Classic Denim",
    shortDescription:
      "Dayanıklı kumaşı ve zamansız tasarımıyla gardıropların vazgeçilmez kot pantolonu.",
    description:
      "Levi’s Classic Denim, klasik kesimi ve dayanıklı kumaşıyla uzun ömürlü kullanım sağlar. Modern detaylarla yenilenen tasarımı, hem günlük hem de casual kombinlerinizde şıklığı ön plana çıkarır. Rahat oturuşuyla gün boyu konfor sunar.",
    price: 59.9,
    sizes: ["s", "m", "l"],
    colors: ["blue", "green"],
    images: { blue: "/products/8b.png", green: "/products/8gr.png" },
  },
];

export default products;
