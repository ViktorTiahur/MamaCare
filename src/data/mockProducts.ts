import { ProductDetail } from "@/types/productInterface";

const mockProducts: ProductDetail[] = [
  {
    id: "1",
    name: {
      en: "Silicone Snack Plate - Bunny na barabani",
      uk: "Силіконова тарілка для перекусів - Зайчик",
    },
    category: {
      en: "Pick&Buy",
      uk: "Обери&Купи",
    },
    subcategory: {
      en: "Feeding",
      uk: "Годування",
    },
    image: "/images/preview/1.png",
    date: "2025-01-01",
    description: {
      en: "Soft and durable silicone snack plate shaped like a bunny — perfect for toddlers and mess-free meals.",
      uk: "М'яка та міцна силіконова тарілка у формі зайчика — ідеально для малюків та безладних перекусів.",
    },
    materials: {
      en: "100% BPA-free food-grade silicone. Microwave and dishwasher safe.",
      uk: "100% харчовий силікон без BPA. Підходить для мікрохвильовки та посудомийки.",
    },
    reviews: [
      {
        id: "r1",
        author: "Anna",
        rating: 5,
        text: "My baby loves it! Very soft and cute design.",
        date: "2024-12-02",
      },
      {
        id: "r2",
        author: "Oleh",
        rating: 1,
        text: "Great plate, but a bit small.",
        date: "2025-01-14",
      },
    ],
    price: 25,
    brand: "SoftCare",
    availableColors: ["Black", "Grey", "Green", 'Yellow', 'Red'],
    availableSizes: ["S", "M", "L"],
    defaultColor: "Black",
    defaultSize: "M",
    maxQuantity: 10,
    age: 2,
    images: [
      "/images/preview/1.png",
      "/images/preview/1-2.png",
      "/images/preview/1-3.png",
      "/images/preview/1.png",
      "/images/preview/1-2.png",
      "/images/preview/1-3.png",
    ],
  },
  {
    id: "2",
    category: {
      en: "Pick&Buy",
      uk: "Обери&Купи",
    },
    subcategory: {
      en: "Feeding",
      uk: "Годування",
    },
    name: {
      en: "Sniffer Soothers Nose + Face Wipes",
      uk: "Вологі серветки для носа та обличчя Sniffer Soothers",
    },
    image: "/images/preview/1.png",
    date: "2025-01-01",
    description: {
      en: "Gentle and effective wipes infused with soothing eucalyptus. Great for toddlers during cold season.",
      uk: "Делікатні та ефективні серветки з евкаліптом. Чудово підходять для малюків у холодний сезон.",
    },
    materials: {
      en: "Infused with eucalyptus and chamomile. 100% biodegradable material.",
      uk: "З евкаліптом та ромашкою. 100% біорозкладний матеріал.",
    },
    reviews: [
      {
        id: "r3",
        author: "Marta",
        rating: 5,
        text: "Soothing and refreshing. A must-have during winter.",
        date: "2025-02-10",
      },
    ],
    price: 4.55,
    brand: {
      en: "EcoMama",
      uk: "EcoMama"
    },
    defaultSize: "One Size",
    maxQuantity: 20,
    age: 1,
    images: ["/images/preview/2.png", "/images/preview/2-2.png"],
    availableColors: [],
    availableSizes: [],
    defaultColor: ""
  },
  {
    id: "3",
    category: {
      en: "Pick&Buy",
      uk: "Обери&Купи",
    },
    subcategory: {
      en: "Feeding",
      uk: "Годування",
    },
    name: {
      en: "Baby Boy Box for Toddlers (1+ Year)",
      uk: "Подарункова коробка для хлопчика (1+ рік)",
    },
    image: "/images/preview/1.png",
    date: "2025-01-01",
    description: {
      en: "A curated gift box for boys aged 1+ with premium products including toys, snacks, and bath essentials.",
      uk: "Подарункова коробка для хлопчиків 1+ з іграшками, перекусами та засобами для купання.",
    },
    materials: {
      en: "Cotton textiles, wooden toys, organic snacks. Recycled packaging.",
      uk: "Бавовняний текстиль, дерев'яні іграшки, органічні перекуси. Перероблена упаковка.",
    },
    reviews: [
      {
        id: "r4",
        author: "Olha",
        rating: 5,
        text: "Amazing variety! Perfect for gifting.",
        date: "2025-03-01",
      },
    ],
    price: 350,
    brand: {
      en: "MamaCare",
      uk: "MamaCare",
    },
    availableColors: ["Blue", "Beige"],
    availableSizes: ["Box"],
    images: [
      "/images/preview/3.png",
      "/images/preview/3-2.png",
      "/images/preview/3-3.png",
    ],
    defaultColor: "",
    defaultSize: "",
    maxQuantity: 0,
    age: 0
  },
  {
    id: "4",
    category: {
      en: "Pick&Buy",
      uk: "Обери&Купи",
    },
    subcategory: {
      en: "Feeding",
      uk: "Годування",
    },
    name: {
      en: "Organic Cotton Onesie Set",
      uk: "Набір боді з органічної бавовни",
    },
    image: "/images/preview/1.png",
    date: "2025-01-01",
    description: {
      en: "Set of 3 organic cotton onesies with cute animal prints. Soft, breathable and gentle on baby skin.",
      uk: "Набір з 3 боді з органічної бавовни з милими принтами. М'які, дихаючі та ніжні для шкіри малюка.",
    },
    materials: {
      en: "100% organic cotton. GOTS certified. Machine washable.",
      uk: "100% органічна бавовна. Сертифікат GOTS. Можна прати в машинці.",
    },
    reviews: [
      {
        id: "r5",
        author: "Taras",
        rating: 4,
        text: "Very soft and nice prints. A bit tight in size L.",
        date: "2025-02-25",
      },
    ],
    price: 29.99,
    brand: {
      en: "PureBaby",
      uk: "PureBaby",
    },
    availableColors: ["White", "Pink", "Mint"],
    availableSizes: ["S", "M", "L"],
    defaultColor: "White",
    defaultSize: "M",
    maxQuantity: 15,
    images: [],
    age: 0
  },
  {
    id: "5",
    category: {
      en: "Pick&Buy",
      uk: "Обери&Купи",
    },
    subcategory: {
      en: "Feeding",
      uk: "Годування",
    },
    name: {
      en: "Natural Wooden Teething Ring",
      uk: "Дерев'яне кільце для прорізування зубів",
    },
    image: "/images/preview/1.png",
    date: "2025-01-01",
    description: {
      en: "Handmade wooden teething ring with soft silicone beads. Safe, durable and calming for teething babies.",
      uk: "Ручна робота: дерев'яне кільце з силіконовими намистинами. Безпечне, міцне та заспокійливе для малюків.",
    },
    materials: {
      en: "Beech wood, food-grade silicone. Handmade. Non-toxic finish.",
      uk: "Бук, харчовий силікон. Ручна робота. Нетоксичне покриття.",
    },
    reviews: [
      {
        id: "r6",
        author: "Yulia",
        rating: 5,
        text: "Looks great and my daughter loves chewing on it.",
        date: "2025-04-03",
      },
    ],
    price: 12.5,
    brand: {
      en: "LittleWood",
      uk: "LittleWood",
    },
    availableColors: ["Natural", "Grey", "Blush"],
    availableSizes: ["One Size"],
    defaultColor: "Natural",
    defaultSize: "One Size",
    maxQuantity: 30,
    age: 0,
    images: ["/images/preview/5.png", "/images/preview/5-2.png"],
  }]
export default mockProducts;
