/* ==========================================================================
   FOOD COURT - Interactive AR Web Menu Controller
   ========================================================================== */

// --- TRANSLATION DICTIONARY (5 LANGUAGES) ---
const TRANSLATIONS = {
  en: {
    cat_starters: "Starters",
    cat_main: "Main Course",
    cat_desserts: "Desserts",
    cat_drinks: "Drinks",
    choose_language: "Choose Language",
    add_to_items: "Add to Items",
    view_items: "View Items",
    view_in_space: "View in your space",
    drag_to_rotate: "Drag to rotate",
    loading_3d: "Loading 3D Dish...",
    description: "Description",
    nutrition_info: "Nutritional Information",
    dietary_info: "Dietary Info & Ingredients",
    calories: "Calories",
    carbs: "Carbohydrates",
    sugars: "Sugars",
    protein: "Protein",
    fat: "Fat",
    slide_hint: "Slide down to view full 3D model",
    your_items: "Your Items",
    bill_summary: "Bill Summary",
    subtotal: "Subtotal",
    taxes_charges: "Taxes & Charges",
    total_amount: "Total Amount",
    continue_ordering: "Place Order / Call Waiter",
    item_added: "Item added to basket!",
    order_success: "🎉 Order sent to waiter! Bon Appétit!",
    ar_hint: "Tap title for 3D View",
    photo_hint: "Tap photo"
  },
  fr: {
    cat_starters: "Entrées",
    cat_main: "Plats Principaux",
    cat_desserts: "Desserts",
    cat_drinks: "Boissons",
    choose_language: "Choisir la langue",
    add_to_items: "Ajouter au panier",
    view_items: "Voir les articles",
    view_in_space: "Voir dans votre espace",
    drag_to_rotate: "Glisser pour tourner",
    loading_3d: "Chargement du modèle 3D...",
    description: "Description",
    nutrition_info: "Informations nutritionnelles",
    dietary_info: "Info diététique & ingrédients",
    calories: "Calories",
    carbs: "Glucides",
    sugars: "Sucres",
    protein: "Protéines",
    fat: "Lipides",
    slide_hint: "Glisser vers le bas pour voir le modèle 3D",
    your_items: "Vos Articles",
    bill_summary: "Récapitulatif de la note",
    subtotal: "Sous-total",
    taxes_charges: "Taxes et frais",
    total_amount: "Montant total",
    continue_ordering: "Passer la commande / Appeler le serveur",
    item_added: "Article ajouté au panier !",
    order_success: "🎉 Commande envoyée au serveur ! Bon Appétit !",
    ar_hint: "Appuyez pour la vue 3D",
    photo_hint: "Appuyez sur la photo"
  },
  de: {
    cat_starters: "Vorspeisen",
    cat_main: "Hauptgerichte",
    cat_desserts: "Desserts",
    cat_drinks: "Getränke",
    choose_language: "Sprache wählen",
    add_to_items: "Hinzufügen",
    view_items: "Artikel anzeigen",
    view_in_space: "In Ihrem Raum anzeigen",
    drag_to_rotate: "Zum Drehen ziehen",
    loading_3d: "3D-Modell wird geladen...",
    description: "Beschreibung",
    nutrition_info: "Nährwertangaben",
    dietary_info: "Ernährungsinfo & Zutaten",
    calories: "Kalorien",
    carbs: "Kohlenhydrate",
    sugars: "Zucker",
    protein: "Eiweiß",
    fat: "Fett",
    slide_hint: "Wischen Sie nach unten, um das 3D-Modell zu sehen",
    your_items: "Ihre Auswahl",
    bill_summary: "Rechnungsübersicht",
    subtotal: "Zwischensumme",
    taxes_charges: "Steuern & Gebühren",
    total_amount: "Gesamtsumme",
    continue_ordering: "Bestellung aufgeben / Kellner rufen",
    item_added: "Artikel zum Warenkorb hinzugefügt!",
    order_success: "🎉 Bestellung an den Kellner gesendet! Guten Appetit!",
    ar_hint: "Für 3D-Ansicht tippen",
    photo_hint: "Foto antippen"
  },
  zh: {
    cat_starters: "前菜 / 小吃",
    cat_main: "主菜",
    cat_desserts: "甜品",
    cat_drinks: "饮品",
    choose_language: "选择语言",
    add_to_items: "加入购物袋",
    view_items: "查看已选项目",
    view_in_space: "在您的空间查看 (AR)",
    drag_to_rotate: "拖动旋转视角",
    loading_3d: "正在加载 3D 模型...",
    description: "菜品介绍",
    nutrition_info: "营养成分信息",
    dietary_info: "饮食标签与原料",
    calories: "卡路里",
    carbs: "碳水化合物",
    sugars: "糖分",
    protein: "蛋白质",
    fat: "脂肪",
    slide_hint: "下滑可完整查看 3D 模型",
    your_items: "您的购物袋",
    bill_summary: "账单明细",
    subtotal: "小计",
    taxes_charges: "税费与服务费",
    total_amount: "总金额",
    continue_ordering: "提交订单 / 呼叫服务员",
    item_added: "已成功加入购物袋！",
    order_success: "🎉 订单已发送给服务员！祝您用餐愉快！",
    ar_hint: "点击标题查看 3D",
    photo_hint: "点击图片"
  },
  hi: {
    cat_starters: "स्टार्टर्स",
    cat_main: "मुख्य भोजन",
    cat_desserts: "मिठाइयां",
    cat_drinks: "पेय पदार्थ",
    choose_language: "भाषा चुनें",
    add_to_items: "बास्केट में जोड़ें",
    view_items: "वस्तुएं देखें",
    view_in_space: "अपने कमरे में AR में देखें",
    drag_to_rotate: "घुमाने के लिए खींचें",
    loading_3d: "3D मॉडल लोड हो रहा है...",
    description: "विवरण",
    nutrition_info: "पोषण संबंधी जानकारी",
    dietary_info: "आहार संबंधी जानकारी और सामग्री",
    calories: "कैलोरी",
    carbs: "कार्बोहाइड्रेट",
    sugars: "शर्करा",
    protein: "प्रोटीन",
    fat: "वसा",
    slide_hint: "3D मॉडल देखने के लिए नीचे स्लाइड करें",
    your_items: "आपकी वस्तुएं",
    bill_summary: "बिल का विवरण",
    subtotal: "उप-योग",
    taxes_charges: "कर और शुल्क",
    total_amount: "कुल राशि",
    continue_ordering: "ऑर्डर दें / वेटर को बुलाएं",
    item_added: "आइटम बास्केट में जोड़ा गया!",
    order_success: "🎉 ऑर्डर वेटर को भेज दिया गया है! भोजन का आनंद लें!",
    ar_hint: "3D दृश्य के लिए नाम पर टैप करें",
    photo_hint: "फोटो टैप करें"
  }
};

// --- DISHES CATALOG DATA (MAURITIAN CUISINE) ---
const DISHES_DATA = [
  // STARTERS (Rs. 350)
  {
    id: "gateau_piment",
    category: "starters",
    price: 350,
    image: "Meshy_AI_gateau-piment-front-clean.png",
    model: "Meshy_AI_gateau_piment_0722040138_image-to-3d-texture-v1.glb",
    i18n: {
      en: {
        title: "Gâteau Piment",
        subtitle: "(Mauritian Chili Bites)",
        desc: "Famous Mauritian crispy split pea fritters infused with green chilies, cilantro, cumin, and fresh spring onions. Crunchy on the outside and fluffy inside."
      },
      fr: {
        title: "Gâteau Piment",
        subtitle: "(Beignets de piment mauriciens)",
        desc: "Célèbres beignets mauriciens croustillants au pois cassés, piments verts, coriandre et oignons frais."
      },
      de: {
        title: "Gâteau Piment",
        subtitle: "(Mauritische Chili-Bällchen)",
        desc: "Berühmte mauritische knusprige Erbsen-Bällchen mit grünen Chilis, Koriander, Kreuzkümmel und Frühlingszwiebeln."
      },
      zh: {
        title: "辣椒饼 (Gâteau Piment)",
        subtitle: "(毛里求斯香辣豌豆饼)",
        desc: "毛里求斯经典金黄酥脆豌豆饼，融入新鲜青辣椒、香菜、孜然与葱花，外酥里嫩。"
      },
      hi: {
        title: "गातो पिमेंट (Gâteau Piment)",
        subtitle: "(मॉरीशस चिली बाइट्स)",
        desc: "हरी मिर्च, धनिया, जीरा और ताजे प्याज के साथ तैयार किए गए प्रसिद्ध मॉरीशस कुरकुरे मटर के पकोड़े।"
      }
    },
    nutrition: { calories: "280 kcal", carbs: "30 g", sugars: "2 g", protein: "12 g", fat: "14 g" },
    dietary: [
      { icon: "🌱", label: "Vegetarian" },
      { icon: "🌾", label: "Gluten Free" },
      { icon: "🌶️", label: "Spicy Accent" }
    ]
  },
  {
    id: "boulettes",
    category: "starters",
    price: 350,
    image: "Meshy_AI_boulettes-front-clean.png",
    model: "Meshy_AI_boulettes_dim_sum_0722040126_image-to-3d-texture-v1.glb",
    i18n: {
      en: {
        title: "Boulettes Dim Sum",
        subtitle: "(Steamed Mauritian Dumplings)",
        desc: "Traditional steamed Sino-Mauritian dumplings filled with seasoned chayote squash, chicken, and aromatic herbs served in a fragrant clear bouillon broth."
      },
      fr: {
        title: "Boulettes Dim Sum",
        subtitle: "(Bouchées mauriciennes à la vapeur)",
        desc: "Bouchées traditionnelles au chouchou et au poulet servies dans un bouillon chaud parfumé."
      },
      de: {
        title: "Boulettes Dim Sum",
        subtitle: "(Mauritische Teigtaschen)",
        desc: "Gedämpfte mauritische Teigtaschen gefüllt mit würzigem Chayote-Gemüse und Hähnchen in klarer Brühe."
      },
      zh: {
        title: "毛里求斯烧卖 (Boulettes)",
        subtitle: "(传统清蒸蒸饺汤)",
        desc: "融合华裔风味的蒸烧卖，内馅为香脆佛手瓜与鸡肉，搭配清甜芳香的热汤。"
      },
      hi: {
        title: "बुलेट्स (Boulettes Dim Sum)",
        subtitle: "(स्टीम्ड डंपलिंग्स)",
        desc: "चायोटे और स्वादिष्ट चिकन से भरे स्टीम्ड मॉरीशस डंपलिंग्स, जो एक सुगंधित सूप के साथ परोसे जाते हैं।"
      }
    },
    nutrition: { calories: "190 kcal", carbs: "22 g", sugars: "1 g", protein: "14 g", fat: "6 g" },
    dietary: [
      { icon: "🍲", label: "Steamed" },
      { icon: "💧", label: "Low Fat" },
      { icon: "🌙", label: "Halal" }
    ]
  },
  {
    id: "seafood_gratin",
    category: "starters",
    price: 350,
    image: "Meshy_AI_seafood-gratin-front-clean.png",
    model: "Meshy_AI_seafood_gratin_0722040146_image-to-3d-texture-v1.glb",
    i18n: {
      en: {
        title: "Seafood Gratin",
        subtitle: "(Gratin de Fruits de Mer)",
        desc: "Fresh Indian Ocean shrimp and tender calamari baked in a velvety garlic and cream Béchamel sauce, topped with golden melted cheese."
      },
      fr: {
        title: "Gratin de Fruits de Mer",
        subtitle: "(Spécialité aux crevettes & calamars)",
        desc: "Crevettes et calamars cuits dans une béchamel à l'ail et nappés de fromage doré fondant."
      },
      de: {
        title: "Meeresfrüchte-Gratin",
        subtitle: "(Gratin de Fruits de Mer)",
        desc: "Frische Garnelen und Tintenfisch in cremiger Knoblauch-Sauce mit schmelzendem Käse überbacken."
      },
      zh: {
        title: "焗烤海鲜 (Seafood Gratin)",
        subtitle: "(蒜香奶酪焗虾与鱿鱼)",
        desc: "新鲜印度洋鲜虾与柔嫩鱿鱼，融合浓郁蒜香白汁，覆盖金黄融化奶酪焗烤而成。"
      },
      hi: {
        title: "सीफूड ग्रैटिन (Seafood Gratin)",
        subtitle: "(ब्राउन चीज गार्लिक झींगा)",
        desc: "लहसुन और क्रीम सॉस में पके हुए ताजे झींगे और स्क्विड, जिनके ऊपर सुनहरा पिघला हुआ पनीर होता है।"
      }
    },
    nutrition: { calories: "260 kcal", carbs: "15 g", sugars: "3 g", protein: "18 g", fat: "16 g" },
    dietary: [
      { icon: "🦐", label: "Seafood" },
      { icon: "🥛", label: "Contains Milk" }
    ]
  },

  // MAIN COURSE (Rs. 550)
  {
    id: "bol_renverse",
    category: "main",
    price: 550,
    image: "Meshy_AI_bol-renverse-front-clean.png",
    model: "Meshy_AI_bol_renverse_bowl_0722040114_image-to-3d-texture-v1.glb",
    i18n: {
      en: {
        title: "Bol Renversé",
        subtitle: "(Magic Upside Down Bowl)",
        desc: "Mauritius iconic dish featuring stir-fried chicken, crisp bok choy, mushrooms, and soy sauce layered with fragrant jasmine rice, topped with a sunny-side-up fried egg."
      },
      fr: {
        title: "Bol Renversé",
        subtitle: "(Spécialité culte mauricienne)",
        desc: "Poulet sauté, bok choy, champignons et riz parfumé, couronné d'un œuf au plat coulant."
      },
      de: {
        title: "Bol Renversé",
        subtitle: "(Magische umgekehrte Schüssel)",
        desc: "Mauritisches Kultgericht mit gebratenem Hähnchen, Bok Choy, Pilzen und Reis mit Spiegelei."
      },
      zh: {
        title: "翻转碗饭 (Bol Renversé)",
        subtitle: "(毛里求斯招牌太阳蛋盖饭)",
        desc: "毛里求斯传奇美食！特制炒鸡肉、鲜嫩上海青、香菇与特调酱汁，与茉莉香米翻转成型，顶部覆以流心煎蛋。"
      },
      hi: {
        title: "बोल रेन्वर्स (Bol Renversé)",
        subtitle: "(मैजिक अपसाइड डाउन राइस)",
        desc: "चिकन, सब्जी और मशरूम के साथ भुने हुए सुगंधित चावल जिसके ऊपर एक हाफ-फ्राई अंडा रखा होता है।"
      }
    },
    nutrition: { calories: "310 kcal", carbs: "45 g", sugars: "4 g", protein: "16 g", fat: "10 g" },
    dietary: [
      { icon: "🍳", label: "Contains Egg" },
      { icon: "🌙", label: "Halal" }
    ]
  },
  {
    id: "cari_ourite",
    category: "main",
    price: 550,
    image: "Meshy_AI_cari-ourite-front-clean.png",
    model: "Meshy_AI_cari_ourite_curry_0722040155_image-to-3d-texture-v1.glb",
    i18n: {
      en: {
        title: "Cari Ourite",
        subtitle: "(Mauritian Octopus Curry)",
        desc: "Tender octopus simmered slow in authentic Creole curry spices, ripe tomatoes, curry leaves, turmeric, and garlic. Rich and comforting."
      },
      fr: {
        title: "Cari Ourite",
        subtitle: "(Curry d'ourite / poulpe mauricien)",
        desc: "Poulpe tendre mijoté dans une sauce curry créole aux tomates fraîches et feuilles de kari."
      },
      de: {
        title: "Cari Ourite",
        subtitle: "(Mauritisches Oktopus-Curry)",
        desc: "Zarter Oktopus langsam geschmort in kreolischen Gewürzen, frischen Tomaten und Curryblättern."
      },
      zh: {
        title: "克里奥尔咖喱八爪鱼 (Cari Ourite)",
        subtitle: "(毛里求斯传统章鱼咖喱)",
        desc: "鲜嫩章鱼融入传统克里奥尔咖喱香料、鲜番茄、香叶与蒜蓉慢火炖煮，浓郁芳香。"
      },
      hi: {
        title: "कारी ओराइट (Cari Ourite)",
        subtitle: "(मॉरीशस ऑक्टोपस करी)",
        desc: "कड़ी पत्ता, टमाटर और लहसुन के साथ प्रामाणिक क्रियोल मसालों में धीमी आंच पर पकाया गया कोमल ऑक्टोपस।"
      }
    },
    nutrition: { calories: "230 kcal", carbs: "18 g", sugars: "5 g", protein: "22 g", fat: "9 g" },
    dietary: [
      { icon: "🐙", label: "Seafood" },
      { icon: "🌾", label: "Gluten Free" },
      { icon: "🌶️", label: "Spicy" }
    ]
  },
  {
    id: "mauritian_biryani",
    category: "main",
    price: 550,
    image: "Meshy_AI_mauritian-biryani-front-clean.png",
    model: "Meshy_AI_mauritian_biryani_0722040204_image-to-3d-texture-v1.glb",
    i18n: {
      en: {
        title: "Mauritian Chicken Biryani",
        subtitle: "(Fragrant Spiced Rice)",
        desc: "Aromatic Basmati rice slow-cooked in a sealed vessel with marinated chicken, potatoes, saffron, mint, fried onions, and whole spices."
      },
      fr: {
        title: "Briani au Poulet",
        subtitle: "(Briani mauricien traditionnel)",
        desc: "Riz Basmati mariné au poulet, pommes de terre, safran, menthe et oignons frits."
      },
      de: {
        title: "Mauritisches Biryani",
        subtitle: "(Duftender Gewürzreis)",
        desc: "Aaromatischer Basmati-Reis langsam gekocht mit mariniertem Hähnchen, Kartoffeln, Safran und Minze."
      },
      zh: {
        title: "毛里求斯鸡肉比利亚尼 (Biryani)",
        subtitle: "(藏红花香料印式烤米饭)",
        desc: "选用长粒香米，与腌制嫩鸡肉、金黄土豆块、藏红花、薄荷叶及炸洋葱一同封罐慢炖。"
      },
      hi: {
        title: "मॉरीशस चिकन बिरयानी (Biryani)",
        subtitle: "(सुगंधित बासमती चावल)",
        desc: "मसालेदार चिकन, आलू, केसर, पुदीना और तले हुए प्याज के साथ धीमी आंच पर पकाई गई प्रामाणिक बिरयानी।"
      }
    },
    nutrition: { calories: "340 kcal", carbs: "48 g", sugars: "3 g", protein: "20 g", fat: "12 g" },
    dietary: [
      { icon: "🌾", label: "Gluten Free" },
      { icon: "🌙", label: "Halal" }
    ]
  },

  // DESSERTS (Rs. 250)
  {
    id: "poudine_mais",
    category: "desserts",
    price: 250,
    image: "Meshy_AI_coconut-cake-front-clean.png",
    model: "Meshy_AI_coconut_cake_slice_0722041510_image-to-3d-texture-v1.glb",
    i18n: {
      en: {
        title: "Poudine Maïs",
        subtitle: "(Corn Pudding Cake)",
        desc: "A nostalgic Mauritian sweet made from yellow polenta cornmeal, milk, sugar, vanilla, and topped with delicate desiccated coconut."
      },
      fr: {
        title: "Poudine Maïs",
        subtitle: "(Gâteau de polenta à la noix de coco)",
        desc: "Dessert traditionnel mauricien à base de maïs, lait, vanille et saupoudré de coco râpée."
      },
      de: {
        title: "Poudine Maïs",
        subtitle: "(Mauritischer Maispudding-Kuchen)",
        desc: "Traditionelles mauritisches Desserts aus Maismehl, Milch, Vanille und Kokosraspeln."
      },
      zh: {
        title: "玉蜀黍椰丝糕 (Poudine Maïs)",
        subtitle: "(毛里求斯经典玉米糕)",
        desc: "毛里求斯怀旧甜点，选用玉米粉、鲜牛奶、白糖与香草精精心蒸制，表面撒满细雪椰丝。"
      },
      hi: {
        title: "पुदीने मैस (Poudine Maïs)",
        subtitle: "(कॉर्न पुडिंग केक)",
        desc: "स्वीट कॉर्न, दूध, चीनी और वेनिला से बनी एक पारंपरिक मॉरीशस मिठाई, जिसके ऊपर सूखा कद्दूकस किया हुआ नारियल होता है।"
      }
    },
    nutrition: { calories: "245 kcal", carbs: "32 g", sugars: "18 g", protein: "4 g", fat: "10 g" },
    dietary: [
      { icon: "🌱", label: "Vegetarian" },
      { icon: "🥛", label: "Contains Milk" },
      { icon: "🌾", label: "Gluten Free" }
    ]
  },
  {
    id: "bananes_flambees",
    category: "desserts",
    price: 250,
    image: "Meshy_AI_bananes-flambees-front-clean.png",
    model: "Meshy_AI_bananes_flambees_0722035930_image-to-3d-texture-v1.glb",
    i18n: {
      en: {
        title: "Bananes Flambées",
        subtitle: "(Flambéed Bananas with Rum)",
        desc: "Ripe local bananas sautéed in butter, brown sugar, and orange juice, flambéed live with local dark Mauritian rum."
      },
      fr: {
        title: "Bananes Flambées",
        subtitle: "(Au rhum brun mauricien)",
        desc: "Bananes sautées au beurre et sucre de canne, flambées au rhum brun mauricien."
      },
      de: {
        title: "Flambierte Bananen",
        subtitle: "(Bananes Flambées mit Rum)",
        desc: "Reife Bananen in Butter und Braunzucker geschwenkt und mit mauritischem Rum flambiert."
      },
      zh: {
        title: "火焰朗姆酒香蕉 (Bananes Flambées)",
        subtitle: "(焦糖黄油煎香蕉)",
        desc: "熟透香蕉置于黄油、红糖与鲜橙汁中煎至金黄，倒入毛里求斯黑朗姆酒火焰点燃。"
      },
      hi: {
        title: "बनाने फ्लेम्बीज़ (Bananes Flambées)",
        subtitle: "(फ्लेम्ब्ड केले और रम)",
        desc: "मक्खन, ब्राउन शुगर और संतरे के रस में भुने हुए पके केले, जिन्हें मॉरीशस डार्क रम के साथ फ्लेम किया जाता है।"
      }
    },
    nutrition: { calories: "210 kcal", carbs: "38 g", sugars: "26 g", protein: "2 g", fat: "6 g" },
    dietary: [
      { icon: "🌱", label: "Vegetarian" },
      { icon: "🌾", label: "Gluten Free" }
    ]
  },
  {
    id: "napolitaine",
    category: "desserts",
    price: 250,
    image: "Meshy_AI_napolitaine-front-clean.png",
    model: "Meshy_AI_napolitaine_cookie_0722035956_image-to-3d-texture-v1.glb",
    i18n: {
      en: {
        title: "Napolitaine",
        subtitle: "(Mauritian Pink Jam Cookies)",
        desc: "Two crumbly melt-in-your-mouth shortbread biscuits sandwiched with strawberry jam and coated in smooth pink icing."
      },
      fr: {
        title: "Napolitaine",
        subtitle: "(Sablés mauriciens au glaçage rose)",
        desc: "Deux sablés fondants superposés de confiture de fraise et enrobés d'un glaçage rose."
      },
      de: {
        title: "Napolitaine",
        subtitle: "(Rosa Marmeladen-Kekse)",
        desc: "Zwei mürbe Mürbeteigkekse gefüllt mit Erdbeermarmelade und rosa Zuckerguss."
      },
      zh: {
        title: "拿破仑粉红曲奇 (Napolitaine)",
        subtitle: "(草莓酱夹心黄油饼干)",
        desc: "毛里求斯标志性甜食，两块入口即化的香酥黄油饼干夹着草莓果酱，外层裹上粉红糖霜。"
      },
      hi: {
        title: "नेपोलिटेन (Napolitaine)",
        subtitle: "(पिंक जैम कुकीज़)",
        desc: "स्ट्रॉबेरी जैम से भरे और गुलाबी आइसिंग से ढके दो कुरकुरे शॉर्टब्रेड बिस्कुट।"
      }
    },
    nutrition: { calories: "380 kcal", carbs: "56 g", sugars: "28 g", protein: "4 g", fat: "16 g" },
    dietary: [
      { icon: "🌱", label: "Vegetarian" },
      { icon: "🍪", label: "Sweet Treat" }
    ]
  },

  // DRINKS (Rs. 300)
  {
    id: "alouda",
    category: "drinks",
    price: 300,
    image: "Meshy_AI_milkshake-glass-front-clean.png",
    model: "Meshy_AI_alouda_milkshake_glas_0722035711_image-to-3d-texture-v1.glb",
    i18n: {
      en: {
        title: "Alouda Milkshake",
        subtitle: "(Basil Seed & Agar Gel Drink)",
        desc: "Refreshing cooled sweet milk beverage infused with vanilla syrup, soaked basil seeds (tukmaria), and grated agar-agar jelly strands."
      },
      fr: {
        title: "Alouda glacé",
        subtitle: "(Boisson au basilic & gelée)",
        desc: "Boisson mauricienne rafraîchissante au lait doucereux, graines de basilic et gelée d'agar-agar."
      },
      de: {
        title: "Alouda Milchshake",
        subtitle: "(Basilikumsamen & Agar-Drink)",
        desc: "Erfrischendes süßes Milchgetränk mit Vanillesirup, Basilikumsamen und Agar-Agar-Streifen."
      },
      zh: {
        title: "阿鲁达罗勒籽奶昔 (Alouda)",
        subtitle: "(毛里求斯特色凉爽奶昔)",
        desc: "毛里求斯最受欢迎的冰镇甜奶饮品，加入香草糖浆、膨润罗勒籽与琼脂洋菜果冻丝。"
      },
      hi: {
        title: "अलौडा मिल्कशेक (Alouda)",
        subtitle: "(तुलसी के बीज और अगर-अगर ड्रिंक)",
        desc: "वेनिला सिरप, भीगे हुए तुलसी के बीज और अगर-अगर जेली के साथ ठंडा मीठा दूध।"
      }
    },
    nutrition: { calories: "180 kcal", carbs: "26 g", sugars: "22 g", protein: "5 g", fat: "6 g" },
    dietary: [
      { icon: "🌱", label: "Vegetarian" },
      { icon: "🥛", label: "Contains Milk" },
      { icon: "❄️", label: "Chilled" }
    ]
  },
  {
    id: "bois_cheri_tea",
    category: "drinks",
    price: 300,
    image: "Meshy_AI_tea-cup-front-clean.png",
    model: "Meshy_AI_bois_cheri_tea_cup_0722035605_image-to-3d-texture-v1.glb",
    i18n: {
      en: {
        title: "Bois Chéri Vanilla Tea",
        subtitle: "(Highland Black Tea)",
        desc: "Authentic island black tea harvested from the lush Bois Chéri highland tea fields, subtly infused with natural sweet vanilla."
      },
      fr: {
        title: "Thé à la Vanille Bois Chéri",
        subtitle: "(Thé noir des hauts plateaux)",
        desc: "Thé noir d'exception cultivé aux hauts plateaux de Bois Chéri, aromatisé à la vanille."
      },
      de: {
        title: "Bois Chéri Vanille-Tee",
        subtitle: "(Schwarzer Hochland-Tee)",
        desc: "Echter schwarzer Tee von den mauritischen Hochland-Feldern mit natürlichem Vanille-Aroma."
      },
      zh: {
        title: "博舍里香草红茶 (Bois Chéri)",
        subtitle: "(毛里求斯高山红茶)",
        desc: "采摘自毛里求斯博舍里高山茶园的高级红茶，融合天然甜美香草香气。"
      },
      hi: {
        title: "बोइस चेरी वेनिला चाय (Bois Chéri Tea)",
        subtitle: "(हाईलैंड ब्लैक टी)",
        desc: "बोइस चेरी के चाय बागानों से ली गई काली चाय, प्राकृतिक वेनिला सुगंध के साथ।"
      }
    },
    nutrition: { calories: "15 kcal", carbs: "2 g", sugars: "1 g", protein: "0 g", fat: "0 g" },
    dietary: [
      { icon: "🌿", label: "Organic" },
      { icon: "🌾", label: "Gluten Free" },
      { icon: "☕", label: "Hot Beverage" }
    ]
  },
  {
    id: "rhum_arrange",
    category: "drinks",
    price: 300,
    image: "Meshy_AI_rum-bottle-front-clean.png",
    model: "Meshy_AI_rhum_arrange_bottle_0722035647_image-to-3d-texture-v1.glb",
    i18n: {
      en: {
        title: "Rhum Arrangé",
        subtitle: "(Artisanal Spiced Rum)",
        desc: "Traditional Mauritian agricultural rum macerated with local tropical spices, cinnamon sticks, roasted vanilla beans, and wild honey."
      },
      fr: {
        title: "Rhum Arrangé",
        subtitle: "(Rhum artisanal épicé)",
        desc: "Rhum mauricien macéré aux épices locales, bâtons de cannelle et gousses de vanille."
      },
      de: {
        title: "Rhum Arrangé",
        subtitle: "(Gewürzter Rum)",
        desc: "Traditioneller mauritischer Rum mazeriert mit Gewürzen, Zimt, Vanille und Honig."
      },
      zh: {
        title: "毛里求斯香料朗姆酒 (Rhum Arrangé)",
        subtitle: "(手工浸泡热带香料朗姆)",
        desc: "毛里求斯传统农业朗姆酒，加入本地热带香料、肉桂棒、炙烤香草豆与野生蜂蜜浸泡。"
      },
      hi: {
        title: "रम अरेंज (Rhum Arrangé)",
        subtitle: "(मसालेदार मॉरीशस रम)",
        desc: "स्थानीय मसालों, दालचीनी और वेनिला के साथ तैयार की गई पारंपरिक मॉरीशस रम।"
      }
    },
    nutrition: { calories: "220 kcal", carbs: "12 g", sugars: "10 g", protein: "0 g", fat: "0 g" },
    dietary: [
      { icon: "🍹", label: "Artisanal Spiced" },
      { icon: "🌾", label: "Gluten Free" }
    ]
  }
];

// --- APP STATE ENGINE ---
class AppEngine {
  constructor() {
    this.activeLang = 'en';
    this.activeCategory = 'starters';
    this.basket = []; // [{ dishId, quantity }]
    this.selectedDishForModal = null;
    this.selectedDishFor3D = null;
    
    // Bottom Sheet Gesture State
    this.sheetStartY = 0;
    this.sheetCurrentY = 0;
    this.isDraggingSheet = false;

    this.initDOM();
    this.bindEvents();
    this.render();
  }

  initDOM() {
    // Pages
    this.homePage = document.getElementById('homePage');
    this.arViewPage = document.getElementById('arViewPage');

    // Modals
    this.langModal = document.getElementById('langModal');
    this.itemDetailModal = document.getElementById('itemDetailModal');
    this.basketModal = document.getElementById('basketModal');

    // Buttons
    this.langBtn = document.getElementById('langBtn');
    this.basketBtn = document.getElementById('basketBtn');
    this.closeLangModal = document.getElementById('closeLangModal');
    this.closeItemModal = document.getElementById('closeItemModal');
    this.closeBasketModal = document.getElementById('closeBasketModal');
    this.clearBasketBtn = document.getElementById('clearBasketBtn');
    this.closeArBtn = document.getElementById('closeArBtn');
    this.arLaunchBtn = document.getElementById('arLaunchBtn');
    this.floatingBillBtn = document.getElementById('floatingBillBtn');

    // Containers
    this.dishesList = document.getElementById('dishesList');
    this.categoriesNav = document.getElementById('categoriesNav');
    this.basketCountBadge = document.getElementById('basketCountBadge');
    this.floatingBillBar = document.getElementById('floatingBillBar');
    this.floatingBillCount = document.getElementById('floatingBillCount');
    this.floatingBillTotal = document.getElementById('floatingBillTotal');
    this.activeLangCode = document.getElementById('activeLangCode');

    // Modal Item Controls
    this.modalDishImg = document.getElementById('modalDishImg');
    this.modalDishTitle = document.getElementById('modalDishTitle');
    this.modalDishSubtitle = document.getElementById('modalDishSubtitle');
    this.modalDishPrice = document.getElementById('modalDishPrice');
    this.modalQtyMinus = document.getElementById('modalQtyMinus');
    this.modalQtyPlus = document.getElementById('modalQtyPlus');
    this.modalQtyVal = document.getElementById('modalQtyVal');
    this.modalAddToCartBtn = document.getElementById('modalAddToCartBtn');

    // 3D Viewer & Bottom Sheet Elements
    this.dish3dViewer = document.getElementById('dish3dViewer');
    this.modelProgressBar = document.getElementById('modelProgressBar');
    this.arBottomSheet = document.getElementById('arBottomSheet');
    this.arSheetHandle = document.getElementById('arSheetHandle');
    this.arDishTitle = document.getElementById('arDishTitle');
    this.arDishSubtitle = document.getElementById('arDishSubtitle');
    this.arDishPrice = document.getElementById('arDishPrice');
    this.arDishDesc = document.getElementById('arDishDesc');
    this.nutriCalories = document.getElementById('nutriCalories');
    this.nutriCarbs = document.getElementById('nutriCarbs');
    this.nutriSugars = document.getElementById('nutriSugars');
    this.nutriProtein = document.getElementById('nutriProtein');
    this.nutriFat = document.getElementById('nutriFat');
    this.dietaryBadges = document.getElementById('dietaryBadges');
    this.arSheetAddCartBtn = document.getElementById('arSheetAddCartBtn');

    // Basket Elements
    this.basketItemsList = document.getElementById('basketItemsList');
    this.billSubtotal = document.getElementById('billSubtotal');
    this.billTotalAmount = document.getElementById('billTotalAmount');
    this.placeOrderBtn = document.getElementById('placeOrderBtn');

    // Toast
    this.toast = document.getElementById('toast');
    this.toastMsg = document.getElementById('toastMsg');
  }

  bindEvents() {
    // Language Switcher Toggle
    this.langBtn.addEventListener('click', () => this.showModal(this.langModal));
    this.closeLangModal.addEventListener('click', () => this.hideModal(this.langModal));

    document.querySelectorAll('.lang-option-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const lang = e.currentTarget.getAttribute('data-lang');
        this.setLanguage(lang);
        this.hideModal(this.langModal);
      });
    });

    // Category Tabs Switching
    document.querySelectorAll('.category-tab').forEach(tab => {
      tab.addEventListener('click', (e) => {
        document.querySelectorAll('.category-tab').forEach(t => t.classList.remove('active'));
        e.currentTarget.classList.add('active');
        this.activeCategory = e.currentTarget.getAttribute('data-category');
        this.renderDishes();
      });
    });

    // Item Detail Modal Quantity Controls
    this.modalQtyMinus.addEventListener('click', () => {
      let val = parseInt(this.modalQtyVal.textContent, 10);
      if (val > 1) this.modalQtyVal.textContent = val - 1;
    });

    this.modalQtyPlus.addEventListener('click', () => {
      let val = parseInt(this.modalQtyVal.textContent, 10);
      this.modalQtyVal.textContent = val + 1;
    });

    this.modalAddToCartBtn.addEventListener('click', () => {
      if (this.selectedDishForModal) {
        const qty = parseInt(this.modalQtyVal.textContent, 10);
        this.addToBasket(this.selectedDishForModal.id, qty);
        this.hideModal(this.itemDetailModal);
      }
    });

    this.closeItemModal.addEventListener('click', () => this.hideModal(this.itemDetailModal));

    // Basket Drawer Controls
    this.basketBtn.addEventListener('click', () => this.openBasket());
    this.floatingBillBtn.addEventListener('click', () => this.openBasket());
    this.closeBasketModal.addEventListener('click', () => this.hideModal(this.basketModal));
    this.clearBasketBtn.addEventListener('click', () => this.clearBasket());

    this.placeOrderBtn.addEventListener('click', () => {
      if (this.basket.length === 0) return;
      this.showToast(TRANSLATIONS[this.activeLang].order_success, '🎉');
      this.clearBasket();
      this.hideModal(this.basketModal);
    });

    // 3D View Screen Controls
    this.closeArBtn.addEventListener('click', () => this.close3dView());
    
    // Model Viewer loading complete & error listeners to hide spinner
    if (this.dish3dViewer) {
      this.dish3dViewer.addEventListener('load', () => {
        if (this.modelProgressBar) {
          this.modelProgressBar.classList.add('hide');
          this.modelProgressBar.style.display = 'none';
        }
      });

      this.dish3dViewer.addEventListener('error', () => {
        if (this.modelProgressBar) {
          this.modelProgressBar.classList.add('hide');
          this.modelProgressBar.style.display = 'none';
        }
      });
    }

    // Launch Native Camera AR
    this.arLaunchBtn.addEventListener('click', () => {
      if (this.dish3dViewer && typeof this.dish3dViewer.activateAR === 'function') {
        this.dish3dViewer.activateAR();
      } else {
        this.showToast("AR camera active! Point camera at table surface.", "📷");
      }
    });

    this.arSheetAddCartBtn.addEventListener('click', () => {
      if (this.selectedDishFor3D) {
        this.addToBasket(this.selectedDishFor3D.id, 1);
      }
    });

    // Bottom Sheet Slide Gesture & Click
    this.arSheetHandle.addEventListener('click', () => {
      this.arBottomSheet.classList.toggle('expanded');
      this.arBottomSheet.classList.toggle('collapsed');
    });

    // Touch events for smooth slide-up
    this.arBottomSheet.addEventListener('touchstart', (e) => {
      this.sheetStartY = e.touches[0].clientY;
      this.isDraggingSheet = true;
    }, { passive: true });

    this.arBottomSheet.addEventListener('touchmove', (e) => {
      if (!this.isDraggingSheet) return;
      this.sheetCurrentY = e.touches[0].clientY;
      const diff = this.sheetStartY - this.sheetCurrentY;
      if (diff > 50) {
        this.arBottomSheet.classList.add('expanded');
        this.arBottomSheet.classList.remove('collapsed');
      } else if (diff < -50) {
        this.arBottomSheet.classList.remove('expanded');
        this.arBottomSheet.classList.add('collapsed');
      }
    }, { passive: true });

    this.arBottomSheet.addEventListener('touchend', () => {
      this.isDraggingSheet = false;
    });

    // Backdrop click handlers to close modals
    [this.langModal, this.itemDetailModal, this.basketModal].forEach(modal => {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) this.hideModal(modal);
      });
    });
  }

  setLanguage(lang) {
    this.activeLang = lang;
    this.activeLangCode.textContent = lang.toUpperCase();

    // Update active check in modal
    document.querySelectorAll('.lang-option-btn').forEach(btn => {
      if (btn.getAttribute('data-lang') === lang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Re-render UI labels
    this.translateUI();
    this.renderDishes();
    if (this.selectedDishFor3D) {
      this.update3dSheetData(this.selectedDishFor3D);
    }
    this.updateBasketUI();
  }

  translateUI() {
    const dict = TRANSLATIONS[this.activeLang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });
  }

  render() {
    this.translateUI();
    this.renderDishes();
    this.updateBasketUI();
  }

  renderDishes() {
    const filtered = DISHES_DATA.filter(d => d.category === this.activeCategory);
    this.dishesList.innerHTML = '';

    filtered.forEach(dish => {
      const langData = dish.i18n[this.activeLang] || dish.i18n.en;
      
      const card = document.createElement('div');
      card.className = 'dish-card';
      card.innerHTML = `
        <!-- Dish Image Box (Tap for Photo Detail Popup) -->
        <div class="dish-img-box" data-action="photo" data-id="${dish.id}">
          <img src="${dish.image}" alt="${langData.title}" class="dish-img" loading="lazy">
          <span class="tap-hint-badge">🔍</span>
        </div>

        <!-- Dish Info (Tap Title for 3D View) -->
        <div class="dish-info-box">
          <button class="dish-name-btn" data-action="3d" data-id="${dish.id}">
            <h3 class="dish-title">
              ${langData.title}
              <span class="ar-chip">3D AR</span>
            </h3>
            <span class="dish-subtitle">${langData.subtitle}</span>
          </button>
          
          <div class="dish-price-row">
            <span class="dish-price">Rs. ${dish.price}</span>
            <button class="card-add-btn" data-action="add" data-id="${dish.id}" aria-label="Add to cart">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" width="20" height="20">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </button>
          </div>
        </div>
      `;

      // Event listeners for dual actions
      card.querySelector('[data-action="photo"]').addEventListener('click', () => {
        this.openItemModal(dish);
      });

      card.querySelector('[data-action="3d"]').addEventListener('click', () => {
        this.open3dView(dish);
      });

      card.querySelector('[data-action="add"]').addEventListener('click', () => {
        this.addToBasket(dish.id, 1);
      });

      this.dishesList.appendChild(card);
    });
  }

  // --- ITEM DETAILS POPUP MODAL (Screen 4) ---
  openItemModal(dish) {
    this.selectedDishForModal = dish;
    const langData = dish.i18n[this.activeLang] || dish.i18n.en;

    this.modalDishImg.src = dish.image;
    this.modalDishTitle.textContent = langData.title;
    this.modalDishSubtitle.textContent = langData.subtitle;
    this.modalDishPrice.textContent = `Rs. ${dish.price}`;
    this.modalQtyVal.textContent = '1';

    this.showModal(this.itemDetailModal);
  }

  // --- 3D & AR VIEW SCREEN (Screens 5 & 6) ---
  open3dView(dish) {
    this.selectedDishFor3D = dish;
    
    // Reset loader progress bar visibility for new model load
    if (this.modelProgressBar) {
      this.modelProgressBar.classList.remove('hide');
      this.modelProgressBar.style.display = 'flex';
    }

    // Set 3D GLB src
    this.dish3dViewer.setAttribute('src', dish.model);
    
    // Update bottom sheet content
    this.update3dSheetData(dish);

    // Reset sheet to collapsed
    this.arBottomSheet.classList.remove('expanded');
    this.arBottomSheet.classList.add('collapsed');

    // Switch view
    this.homePage.classList.remove('active');
    this.arViewPage.classList.remove('hidden');
    this.arViewPage.classList.add('active');
  }

  update3dSheetData(dish) {
    const langData = dish.i18n[this.activeLang] || dish.i18n.en;
    
    this.arDishTitle.textContent = langData.title;
    this.arDishSubtitle.textContent = langData.subtitle;
    this.arDishPrice.textContent = `Rs. ${dish.price}`;
    this.arDishDesc.textContent = langData.desc;

    this.nutriCalories.textContent = dish.nutrition.calories;
    this.nutriCarbs.textContent = dish.nutrition.carbs;
    this.nutriSugars.textContent = dish.nutrition.sugars;
    this.nutriProtein.textContent = dish.nutrition.protein;
    this.nutriFat.textContent = dish.nutrition.fat;

    this.dietaryBadges.innerHTML = dish.dietary.map(item => `
      <div class="dietary-badge">
        <span class="badge-icon">${item.icon}</span>
        <span class="badge-text">${item.label}</span>
      </div>
    `).join('');
  }

  close3dView() {
    this.arViewPage.classList.remove('active');
    this.arViewPage.classList.add('hidden');
    this.homePage.classList.add('active');
    this.selectedDishFor3D = null;
  }

  // --- BASKET ENGINE (Screen 3) ---
  addToBasket(dishId, qty = 1) {
    const existing = this.basket.find(i => i.dishId === dishId);
    if (existing) {
      existing.quantity += qty;
    } else {
      this.basket.push({ dishId, quantity: qty });
    }
    this.updateBasketUI();
    this.showToast(TRANSLATIONS[this.activeLang].item_added, '🛒');
  }

  removeFromBasket(dishId) {
    this.basket = this.basket.filter(i => i.dishId !== dishId);
    this.updateBasketUI();
  }

  updateQtyInBasket(dishId, delta) {
    const item = this.basket.find(i => i.dishId === dishId);
    if (item) {
      item.quantity += delta;
      if (item.quantity <= 0) {
        this.removeFromBasket(dishId);
      } else {
        this.updateBasketUI();
      }
    }
  }

  clearBasket() {
    this.basket = [];
    this.updateBasketUI();
  }

  openBasket() {
    this.renderBasketItems();
    this.showModal(this.basketModal);
  }

  updateBasketUI() {
    const totalCount = this.basket.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = this.basket.reduce((sum, item) => {
      const dish = DISHES_DATA.find(d => d.id === item.dishId);
      return sum + (dish ? dish.price * item.quantity : 0);
    }, 0);

    // Update Badges
    this.basketCountBadge.textContent = totalCount;
    this.floatingBillCount.textContent = totalCount;
    this.floatingBillTotal.textContent = `Rs. ${totalPrice}`;

    if (totalCount > 0) {
      this.floatingBillBar.classList.remove('hidden');
    } else {
      this.floatingBillBar.classList.add('hidden');
    }

    this.billSubtotal.textContent = `Rs. ${totalPrice}`;
    this.billTotalAmount.textContent = `Rs. ${totalPrice}`;

    if (!this.basketModal.classList.contains('hidden')) {
      this.renderBasketItems();
    }
  }

  renderBasketItems() {
    this.basketItemsList.innerHTML = '';
    
    if (this.basket.length === 0) {
      this.basketItemsList.innerHTML = `
        <div style="text-align:center; padding: 40px 0; color: var(--text-muted);">
          <p style="font-size: 2rem;">🛍️</p>
          <p style="margin-top: 8px;">Your basket is empty.</p>
        </div>
      `;
      return;
    }

    this.basket.forEach(item => {
      const dish = DISHES_DATA.find(d => d.id === item.dishId);
      if (!dish) return;

      const langData = dish.i18n[this.activeLang] || dish.i18n.en;
      const itemTotal = dish.price * item.quantity;

      const row = document.createElement('div');
      row.className = 'basket-item-row';
      row.innerHTML = `
        <img src="${dish.image}" alt="${langData.title}" class="basket-item-img">
        <div class="basket-item-info">
          <div class="basket-item-title">${langData.title}</div>
          <div class="basket-item-sub">Rs. ${dish.price} x ${item.quantity}</div>
          <div class="basket-item-price">Rs. ${itemTotal}</div>
        </div>
        <div class="basket-qty-ctrl">
          <button class="b-qty-btn" data-action="minus" data-id="${dish.id}">-</button>
          <span style="font-weight:700;">${item.quantity}</span>
          <button class="b-qty-btn" data-action="plus" data-id="${dish.id}">+</button>
        </div>
      `;

      row.querySelector('[data-action="minus"]').addEventListener('click', () => {
        this.updateQtyInBasket(dish.id, -1);
      });

      row.querySelector('[data-action="plus"]').addEventListener('click', () => {
        this.updateQtyInBasket(dish.id, 1);
      });

      this.basketItemsList.appendChild(row);
    });
  }

  // --- MODAL UTILS ---
  showModal(modal) {
    modal.classList.remove('hidden');
  }

  hideModal(modal) {
    modal.classList.add('hidden');
  }

  showToast(msg, icon = '✨') {
    this.toastMsg.textContent = msg;
    document.getElementById('toastIcon').textContent = icon;
    this.toast.classList.remove('hidden');
    setTimeout(() => {
      this.toast.classList.add('hidden');
    }, 2800);
  }
}

// Initialize Application when DOM ready
document.addEventListener('DOMContentLoaded', () => {
  window.app = new AppEngine();
});
