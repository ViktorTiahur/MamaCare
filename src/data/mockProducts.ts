import { ProductDetail } from "@/types/productInterface";

const mockProducts: ProductDetail[] = [
  {
    id: "11",
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
      en: "Outfits to embolden her as she grows from a baby into an exploring, inquisitive toddler! This girls’ collection is designed to be easily dressed up or down, giving you freedom to create a flexible wardrobe of casual day-to-day and special occasion outfits. Patterns are subtle – intertwining foliage, delicate trailing floral, trellis motifs; colours are fresh - leafy greens, soft pinks and a hint of delicate heather; and finishing touches are intricately embroidered for a subtle but lasting impression. A complete outfit! Textured woven dungarees with matching headband set. Dungarees with adjustable button fastening on strap, patch pocket and stylish turned up cuffs. Matching bow headband, features elasticated and velcro fastening, so is easy to adjust and comfy to wear. Our Baby to Toddler collection features stylish and comfy elevated basics and day-to-day clothing that can be co-ordinated or worn as separates, for a wardrobe thats easy to wear and looks adorable. A thoughtful range with attention to detail in every piece, fabrics and fastenings have been well considered, to be ultra-comfortable, wearable, effortless and easy to care for. The ultimate collection of quality timeless pieces that will let your little one explore the world in comfort and style.Soft and durable silicone snack plate shaped like a bunny — perfect for toddlers and mess-free meals. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur quas, distinctio id dolorem laborum illum! Eaque provident laborum possimus illum tenetur nemo aspernatur. Maiores consectetur dolor quos harum deleniti aspernatur?",
      uk: "М'яка та міцна силіконова тарілка у формі зайчика — ідеально для малюків та безладних перекусів.",
    },
    materials: {
      en: "100% BPA-free food-grade silicone. Microwave and dishwasher safe.",
      uk: "100% харчовий силікон без BPA. Підходить для мікрохвильовки та посудомийки. 100% харчовий силікон без BPA. Підходить для мікрохвильовки та посудомийки. 100% харчовий силікон без BPA. Підходить для мікрохвильовки та посудомийки. 100% харчовий силікон без BPA. Підходить для мікрохвильовки та посудомийки. 100% харчовий силікон без BPA. Підходить для мікрохвильовки та посудомийки. ",
    },
    reviews: [
      {
        id: "r1",
        author: "Anna",
        rating: 5,
        text: {
        en: "We had a fantastic experience shopping at MamaCare's online store! ",
        uk: "Ми мали чудовий досвід покупок в інтернет-магазині **MamaCare**! Сайт був простим у навігації, а описи товарів — детальними та корисними. Підтримка клієнтів була на найвищому рівні — Сара швидко відповіла на всі наші запитання та надала професійні поради, зробивши процес легким і безтурботним. Завдяки її допомозі ми почувались впевнено у своєму виборі. Дуже рекомендуємо **MamaCare** для бездоганного онлайн-шопінгу!",
        } ,
        date: "2024-12-02",
        avatar: "/images/avatars/anna.png",
        
      },
      {
        id: "r2",
        author: "Oleh",
        rating: 5,
          text: {
         en: "We had a fantastic experience shopping at MamaCare's online store! The website was easy to navigate, and the product descriptions were detailed and helpful. Customer support was outstanding—Sarah promptly answered all our questions and provided expert guidance, making the process smooth and stress-free. Thanks to her help, we felt confident in our purchase. Highly recommend MamaCare for a seamless online shopping experience!",
        uk: "Ми мали чудовий досвід покупок в інтернет-магазині **MamaCare**! Сайт був простим у навігації, а описи товарів — детальними та корисними. Підтримка клієнтів була на найвищому рівні — Сара швидко відповіла на всі наші запитання та надала професійні поради, зробивши процес легким і безтурботним. Завдяки її допомозі ми почувались впевнено у своєму виборі. Дуже рекомендуємо **MamaCare** для бездоганного онлайн-шопінгу!",
        } ,
        date: "2025-01-14",
        avatar: "/images/avatars/anna.png",
      },
      {
        id: "r3",
        author: "Oleh",
        rating: 3,
          text: {
         en: "We had a fantastic experience shopping at MamaCare's online store! The website was easy to navigate, and the product descriptions were detailed and helpful. Customer support was outstanding—Sarah promptly answered all our questions and provided expert guidance, making the process smooth and stress-free. Thanks to her help, we felt confident in our purchase. Highly recommend MamaCare for a seamless online shopping experience!",
        uk: "Ми мали чудовий досвід покупок в інтернет-магазині **MamaCare**! Сайт був простим у навігації, а описи товарів — детальними та корисними. Підтримка клієнтів була на найвищому рівні — Сара швидко відповіла на всі наші запитання та надала професійні поради, зробивши процес легким і безтурботним. Завдяки її допомозі ми почувались впевнено у своєму виборі. Дуже рекомендуємо **MamaCare** для бездоганного онлайн-шопінгу!",
        } ,
        date: "2025-01-14",
        avatar: "/images/avatars/anna.png",
      },
      {
        id: "r4",
        author: "Oleh",
        rating: 5,
          text: {
         en: "We had a fantastic experience shopping at MamaCare's online store! The website was easy to navigate, and the product descriptions were detailed and helpful. Customer support was outstanding—Sarah promptly answered all our questions and provided expert guidance, making the process smooth and stress-free. Thanks to her help, we felt confident in our purchase. Highly recommend MamaCare for a seamless online shopping experience!",
        uk: "Ми мали чудовий досвід покупок в інтернет-магазині **MamaCare**! Сайт був простим у навігації, а описи товарів — детальними та корисними. Підтримка клієнтів була на найвищому рівні — Сара швидко відповіла на всі наші запитання та надала професійні поради, зробивши процес легким і безтурботним. Завдяки її допомозі ми почувались впевнено у своєму виборі. Дуже рекомендуємо **MamaCare** для бездоганного онлайн-шопінгу!",
        } ,
        date: "2025-01-14",
        avatar: "/images/avatars/anna.png",
      },
      {
        id: "r5",
        author: "Oleh",
        rating: 2,
          text: {
         en: "We had a fantastic experience shopping at MamaCare's online store! The website was easy to navigate, and the product descriptions were detailed and helpful. Customer support was outstanding—Sarah promptly answered all our questions and provided expert guidance, making the process smooth and stress-free. Thanks to her help, we felt confident in our purchase. Highly recommend MamaCare for a seamless online shopping experience!",
        uk: "Ми мали чудовий досвід покупок в інтернет-магазині **MamaCare**! Сайт був простим у навігації, а описи товарів — детальними та корисними. Підтримка клієнтів була на найвищому рівні — Сара швидко відповіла на всі наші запитання та надала професійні поради, зробивши процес легким і безтурботним. Завдяки її допомозі ми почувались впевнено у своєму виборі. Дуже рекомендуємо **MamaCare** для бездоганного онлайн-шопінгу!",
        } ,
        date: "2025-01-14",
        avatar: "/images/avatars/anna.png",
      },
      {
        id: "r6",
        author: "Паприпрапa",
        rating: 4,
        text: {
        en: "We had a fantastic experience shopping at MamaCare's online store! The website was easy to navigate, and the product descriptions were detailed and helpful. Customer support was outstanding—Sarah promptly answered all our questions and provided expert guidance, making the process smooth and stress-free. Thanks to her help, we felt confident in our purchase. Highly recommend MamaCare for a seamless online shopping experience!",
        uk: "Ми мали чудовий досвід покупок в інтернет-магазині **MamaCare**! Сайт був простим у навігації, а описи товарів — детальними та корисними. Підтримка клієнтів була на найвищому рівні — Сара швидко відповіла на всі наші запитання та надала професійні поради, зробивши процес легким і безтурботним. Завдяки її допомозі ми почувались впевнено у своєму виборі. Дуже рекомендуємо **MamaCare** для бездоганного онлайн-шопінгу!",
        } ,
        date: "2024-12-02",
        avatar: "/images/avatars/anna.png",
        
      },
      {
        id: "r7",
        author: "Oleапрапрh",
        rating: 2,
          text: {
         en: "We had a fantastic experience shopping at MamaCare's online store! The website was easy to navigate, and the product descriptions were detailed and helpful. Customer support was outstanding—Sarah promptly answered all our questions and provided expert guidance, making the process smooth and stress-free. Thanks to her help, we felt confident in our purchase. Highly recommend MamaCare for a seamless online shopping experience!",
        uk: "Ми мали чудовий досвід покупок в інтернет-магазині **MamaCare**! Сайт був простим у навігації, а описи товарів — детальними та корисними. Підтримка клієнтів була на найвищому рівні — Сара швидко відповіла на всі наші запитання та надала професійні поради, зробивши процес легким і безтурботним. Завдяки її допомозі ми почувались впевнено у своєму виборі. Дуже рекомендуємо **MamaCare** для бездоганного онлайн-шопінгу!",
        } ,
        date: "2025-01-14",
        avatar: "/images/avatars/anna.png",
      },
      {
        id: "r8",
        author: "Oleh",
        rating: 2,
          text: {
         en: "We had a fantastic experience shopping at MamaCare's online store! The website was easy to navigate, and the product descriptions were detailed and helpful. Customer support was outstanding—Sarah promptly answered all our questions and provided expert guidance, making the process smooth and stress-free. Thanks to her help, we felt confident in our purchase. Highly recommend MamaCare for a seamless online shopping experience!",
        uk: "Ми мали чудовий досвід покупок в інтернет-магазині **MamaCare**! Сайт був простим у навігації, а описи товарів — детальними та корисними. Підтримка клієнтів була на найвищому рівні — Сара швидко відповіла на всі наші запитання та надала професійні поради, зробивши процес легким і безтурботним. Завдяки її допомозі ми почувались впевнено у своєму виборі. Дуже рекомендуємо **MamaCare** для бездоганного онлайн-шопінгу!",
        } ,
        date: "2025-01-14",
        avatar: "/images/avatars/anna.png",
      },
      {
        id: "r9",
        author: "Oleh",
        rating: 5,
          text: {
         en: "We had a fantastic experience shopping at MamaCare's online store! The website was easy to navigate, and the product descriptions were detailed and helpful. Customer support was outstanding—Sarah promptly answered all our questions and provided expert guidance, making the process smooth and stress-free. Thanks to her help, we felt confident in our purchase. Highly recommend MamaCare for a seamless online shopping experience!",
        uk: "Ми мали чудовий досвід покупок в інтернет-магазині **MamaCare**! Сайт був простим у навігації, а описи товарів — детальними та корисними. Підтримка клієнтів була на найвищому рівні — Сара швидко відповіла на всі наші запитання та надала професійні поради, зробивши процес легким і безтурботним. Завдяки її допомозі ми почувались впевнено у своєму виборі. Дуже рекомендуємо **MamaCare** для бездоганного онлайн-шопінгу!",
        } ,
        date: "2025-01-14",
        avatar: "/images/avatars/anna.png",
      },
      {
        id: "r10",
        author: "Oleh",
        rating: 2,
          text: {
         en: "We had a fantastic experience shopping at MamaCare's online store! The website was easy to navigate, and the product descriptions were detailed and helpful. Customer support was outstanding—Sarah promptly answered all our questions and provided expert guidance, making the process smooth and stress-free. Thanks to her help, we felt confident in our purchase. Highly recommend MamaCare for a seamless online shopping experience!",
        uk: "Ми мали чудовий досвід покупок в інтернет-магазині **MamaCare**! Сайт був простим у навігації, а описи товарів — детальними та корисними. Підтримка клієнтів була на найвищому рівні — Сара швидко відповіла на всі наші запитання та надала професійні поради, зробивши процес легким і безтурботним. Завдяки її допомозі ми почувались впевнено у своєму виборі. Дуже рекомендуємо **MamaCare** для бездоганного онлайн-шопінгу!",
        } ,
        date: "2025-01-14",
        avatar: "/images/avatars/anna.png",
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
    ],
  },
  {
    id: "12",
    category: {
      en: "Pick&Buy",
      uk: "Обери&Купи",
    },
    subcategory: {
      en: "Feeding",
      uk: "Годування",
    },
    name: {
      en: "Sniffer Soothers Nose + Face",
      uk: "Вологі серветки для носа",
    },
    image: "/images/preview/1.png",
    date: "2025-01-01",
    description: {
      en: "Gentle and effective wipes infused with soothing eucalyptus. Great for toddlers during cold season. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur quas, distinctio id dolorem laborum illum! Eaque provident laborum possimus illum tenetur nemo aspernatur. Maiores consectetur dolor quos harum deleniti aspernatur?",
      uk: "Делікатні та ефективні серветки з евкаліптом. Чудово підходять для малюків у холодний сезон.",
    },
    materials: {
      en: "Infused with eucalyptus and chamomile. 100% biodegradable material.",
      uk: "З евкаліптом та ромашкою. 100% біорозкладний матеріал.",
    },
    reviews: [
      {
        id: "r6",
        author: "Marta",
        rating: 5,
          text: {
         en: "We had a fantastic experience shopping at MamaCare's online store! The website was easy to navigate, and the product descriptions were detailed and helpful. Customer support was outstanding—Sarah promptly answered all our questions and provided expert guidance, making the process smooth and stress-free. Thanks to her help, we felt confident in our purchase. Highly recommend MamaCare for a seamless online shopping experience!",
        uk: "Ми мали чудовий досвід покупок в інтернет-магазині **MamaCare**! Сайт був простим у навігації, а описи товарів — детальними та корисними. Підтримка клієнтів була на найвищому рівні — Сара швидко відповіла на всі наші запитання та надала професійні поради, зробивши процес легким і безтурботним. Завдяки її допомозі ми почувались впевнено у своєму виборі. Дуже рекомендуємо **MamaCare** для бездоганного онлайн-шопінгу!",
        } ,
        date: "2025-02-10",
        avatar: "/images/avatars/anna.png",
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
    availableColors: ['red', 'green'],
    availableSizes: ["M"],
    defaultColor: "Red"
  },
  {
    id: "13",
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
        id: "r7",
        author: "Olha",
        rating: 5,
        text: "Amazing variety! Perfect for gifting.",
        date: "2025-03-01",
        avatar: "/images/avatars/anna.png",
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
    id: "14",
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
        id: "r8",
        author: "Taras",
        rating: 4,
        text: "Very soft and nice prints. A bit tight in size L.",
        date: "2025-02-25",
        avatar: "/images/avatars/anna.png",
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
    id: "51",
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
        id: "r9",
        author: "Yulia",
        rating: 5,
        text: "Looks great and my daughter loves chewing on it.",
        date: "2025-04-03",
        avatar: "/images/avatars/anna.png",
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
  }, {
    id: "16",
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
        id: "r10",
        author: "Anna",
        rating: 5,
        text: "My baby loves it! Very soft and cute design.",
        date: "2024-12-02",
        avatar: "/images/avatars/anna.png",
      },
      {
        id: "r12",
        author: "Oleh",
        rating: 1,
        text: "Great plate, but a bit small.",
        date: "2025-01-14",
        avatar: "/images/avatars/anna.png",
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
    id: "17",
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
        id: "r13",
        author: "Marta",
        rating: 5,
        text: "Soothing and refreshing. A must-have during winter.",
        date: "2025-02-10",
        avatar: "/images/avatars/anna.png",
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
    id: "18",
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
        id: "r14",
        author: "Olha",
        rating: 5,
        text: "Amazing variety! Perfect for gifting.",
        date: "2025-03-01",
        avatar: "/images/avatars/anna.png",
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
    id: "49",
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
        id: "r15",
        author: "Taras",
        rating: 4,
        text: "Very soft and nice prints. A bit tight in size L.",
        date: "2025-02-25",
        avatar: "/images/avatars/anna.png",
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
    id: "15",
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
        id: "r16",
        author: "Yulia",
        rating: 5,
        text: "Looks great and my daughter loves chewing on it.",
        date: "2025-04-03",
        avatar: "/images/avatars/anna.png",
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
