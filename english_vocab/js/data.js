// ============================================================
// 英语影视词汇学习 - 场景与单词数据
// ============================================================

// 18个场景
const scenes = [
  {
    "id": "coffee",
    "emoji": "☕",
    "name": "咖啡厅/奶茶店点餐",
    "freq": "🔥"
  },
  {
    "id": "friends",
    "emoji": "🤝",
    "name": "交朋友/社交",
    "freq": "🔥"
  },
  {
    "id": "phone",
    "emoji": "📞",
    "name": "电话/消息沟通",
    "freq": "🔥"
  },
  {
    "id": "restaurant",
    "emoji": "🍽️",
    "name": "餐厅吃饭",
    "freq": "🔥"
  },
  {
    "id": "shopping",
    "emoji": "🛍️",
    "name": "购物消费",
    "freq": "🔥"
  },
  {
    "id": "transport",
    "emoji": "🚗",
    "name": "问路出行",
    "freq": "🔥"
  },
  {
    "id": "supermarket",
    "emoji": "🛒",
    "name": "超市/市场购物",
    "freq": "🟡"
  },
  {
    "id": "hospital",
    "emoji": "🏥",
    "name": "看病买药",
    "freq": "🟡"
  },
  {
    "id": "weather",
    "emoji": "🌤️",
    "name": "聊天气",
    "freq": "🟡"
  },
  {
    "id": "job",
    "emoji": "💼",
    "name": "上班/求职面试",
    "freq": "🟡"
  },
  {
    "id": "chat",
    "emoji": "☕",
    "name": "日常闲聊",
    "freq": "🟡"
  },
  {
    "id": "neighbor",
    "emoji": "🏠",
    "name": "邻里/社区相处",
    "freq": "🟡"
  },
  {
    "id": "travel",
    "emoji": "🏨",
    "name": "旅行住宿",
    "freq": "🟢"
  },
  {
    "id": "movie",
    "emoji": "🎬",
    "name": "看电影/演出",
    "freq": "🟢"
  },
  {
    "id": "online_shopping",
    "emoji": "🛵",
    "name": "网上购物",
    "freq": "🟢"
  },
  {
    "id": "gift",
    "emoji": "🍰",
    "name": "过节送礼",
    "freq": "🟢"
  },
  {
    "id": "fitness",
    "emoji": "🏋️",
    "name": "运动健身",
    "freq": "🟢"
  },
  {
    "id": "barber",
    "emoji": "💇",
    "name": "理发/美容",
    "freq": "🟢"
  },
  {
    "id": "takeout",
    "emoji": "🛵",
    "name": "点外卖/取外卖",
    "freq": "🔥"
  }
];

// 完整词汇数据
const vocabulary = {
  "coffee": [
    {
      "id": "coffee_01",
      "word": "welcome",
      "phonetic": "/ˈwelkəm/",
      "definition": "used to greet someone who has just arrived",
      "usage": "进店时服务员说的欢迎语，也可用作欢迎",
      "examples": [
        "Welcome to our café!",
        "You're welcome to sit anywhere."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "coffee_02",
      "word": "greet",
      "phonetic": "/ɡriːt/",
      "definition": "to welcome or say hello to someone",
      "usage": "打招呼、迎接，高考阅读高频词",
      "examples": [
        "The barista greeted me with a smile.",
        "She greeted us as we walked in."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "coffee_03",
      "word": "available",
      "phonetic": "/əˈveɪləbl/",
      "definition": "able to be used or obtained",
      "usage": "可用的、有空的，高考必考",
      "examples": [
        "Is this table available?",
        "We have available seats by the window."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "coffee_04",
      "word": "offer",
      "phonetic": "/ˈɒfər/",
      "definition": "to provide or present something",
      "usage": "提供、给予，高考高频动词",
      "examples": [
        "We offer a variety of coffee.",
        "Can I offer you something to drink?"
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "coffee_05",
      "word": "menu",
      "phonetic": "/ˈmenjuː/",
      "definition": "a list of available food and drinks",
      "usage": "菜单，日常生活中很常用",
      "examples": [
        "Can I see the menu, please?",
        "The menu has many options."
      ],
      "exam": false,
      "scenes": []
    },
    {
      "id": "coffee_06",
      "word": "recommend",
      "phonetic": "/ˌrekəˈmend/",
      "definition": "to suggest something as good or suitable",
      "usage": "推荐，高考作文常用词",
      "examples": [
        "What do you recommend?",
        "I recommend the latte, it's our best seller."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "coffee_07",
      "word": "special",
      "phonetic": "/ˈspeʃl/",
      "definition": "better or different from what is usual",
      "usage": "特制的、特别的、特价品",
      "examples": [
        "What's today's special?",
        "We have a special offer on cold brew."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "coffee_08",
      "word": "option",
      "phonetic": "/ˈɒpʃn/",
      "definition": "a choice you can make",
      "usage": "选择、选项，高考阅读高频词",
      "examples": [
        "We have several milk options.",
        "What options do you have for sugar-free?"
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "coffee_09",
      "word": "popular",
      "phonetic": "/ˈpɒpjələr/",
      "definition": "liked by many people",
      "usage": "受欢迎的、流行的，高考高频形容词",
      "examples": [
        "This is our most popular drink.",
        "Matcha latte is very popular nowadays."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "coffee_10",
      "word": "variety",
      "phonetic": "/vəˈraɪəti/",
      "definition": "many different types of something",
      "usage": "多样性、种类，高考阅读词",
      "examples": [
        "We offer a variety of coffee beans.",
        "There's a wide variety of flavors to choose from."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "coffee_11",
      "word": "order",
      "phonetic": "/ˈɔːrdər/",
      "definition": "to ask for food or drink in a restaurant",
      "usage": "点单、订购；也可作名词表顺序",
      "examples": [
        "Are you ready to order?",
        "I'd like to order a caramel macchiato."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "coffee_12",
      "word": "regular",
      "phonetic": "/ˈreɡjələr/",
      "definition": "of the usual or standard size; normal",
      "usage": "常规尺寸的；规律的，高考高频词",
      "examples": [
        "I'll have a regular coffee, please.",
        "Regular or large?"
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "coffee_13",
      "word": "medium",
      "phonetic": "/ˈmiːdiəm/",
      "definition": "in the middle between small and large",
      "usage": "中杯、中等的，高考必考",
      "examples": [
        "A medium latte, please.",
        "I prefer medium roast coffee."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "coffee_14",
      "word": "size",
      "phonetic": "/saɪz/",
      "definition": "how big or small something is",
      "usage": "尺寸、大小，口语常用",
      "examples": [
        "What size would you like?",
        "We have small, medium and large sizes."
      ],
      "exam": false,
      "scenes": []
    },
    {
      "id": "coffee_15",
      "word": "extra",
      "phonetic": "/ˈekstrə/",
      "definition": "more than what is usual or expected",
      "usage": "额外的、附加的，高考高频词",
      "examples": [
        "I'd like an extra shot of espresso.",
        "Is there an extra charge for soy milk?"
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "coffee_16",
      "word": "flavor",
      "phonetic": "/ˈfleɪvər/",
      "definition": "the taste of food or drink",
      "usage": "风味、口味",
      "examples": [
        "What flavors do you have?",
        "Vanilla is my favorite flavor."
      ],
      "exam": false,
      "scenes": []
    },
    {
      "id": "coffee_17",
      "word": "prefer",
      "phonetic": "/prɪˈfɜːr/",
      "definition": "to like one thing more than another",
      "usage": "更喜欢，高考作文高频词",
      "examples": [
        "I prefer iced coffee in summer.",
        "Which do you prefer, hot or iced?"
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "coffee_18",
      "word": "cream",
      "phonetic": "/kriːm/",
      "definition": "the thick white liquid from milk",
      "usage": "奶油、奶精",
      "examples": [
        "With cream and sugar, please.",
        "Would you like some whipped cream on top?"
      ],
      "exam": false,
      "scenes": []
    },
    {
      "id": "coffee_19",
      "word": "syrup",
      "phonetic": "/ˈsɪrəp/",
      "definition": "a sweet liquid made from sugar",
      "usage": "糖浆（如 vanilla syrup 香草糖浆）",
      "examples": [
        "Can I add vanilla syrup?",
        "The caramel syrup makes it taste amazing."
      ],
      "exam": false,
      "scenes": []
    },
    {
      "id": "coffee_20",
      "word": "amount",
      "phonetic": "/əˈmaʊnt/",
      "definition": "how much of something there is",
      "usage": "数量、数额，高考必考词",
      "examples": [
        "A small amount of sugar is enough.",
        "The amount of caffeine in espresso is high."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "coffee_21",
      "word": "contain",
      "phonetic": "/kənˈteɪn/",
      "definition": "to have something inside",
      "usage": "包含、含有，高考高频动词",
      "examples": [
        "Does this contain dairy?",
        "This drink contains caffeine."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "coffee_22",
      "word": "pay",
      "phonetic": "/peɪ/",
      "definition": "to give money for something",
      "usage": "支付、付款",
      "examples": [
        "I'll pay by card.",
        "Let me pay for the coffee."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "coffee_23",
      "word": "change",
      "phonetic": "/tʃeɪndʒ/",
      "definition": "money returned after paying more than needed; to become different",
      "usage": "零钱、找零；改变，高考必考多义词",
      "examples": [
        "Keep the change.",
        "Do you have change for a 100?"
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "coffee_24",
      "word": "receipt",
      "phonetic": "/rɪˈsiːt/",
      "definition": "a piece of paper showing what you bought",
      "usage": "收据、小票，高考阅读理解词",
      "examples": [
        "Can I get a receipt, please?",
        "Here's your receipt."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "coffee_25",
      "word": "total",
      "phonetic": "/ˈtoʊtl/",
      "definition": "the final amount of money",
      "usage": "总计、总额，高考高频词",
      "examples": [
        "Your total is 32 yuan.",
        "The total comes to 45 dollars."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "coffee_26",
      "word": "expensive",
      "phonetic": "/ɪkˈspensɪv/",
      "definition": "costing a lot of money",
      "usage": "昂贵的，高考高频形容词",
      "examples": [
        "This coffee is a bit expensive.",
        "Is the large size more expensive?"
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "coffee_27",
      "word": "afford",
      "phonetic": "/əˈfɔːrd/",
      "definition": "to have enough money to buy something",
      "usage": "负担得起，高考必考",
      "examples": [
        "I can't afford coffee every day.",
        "Can you afford the new iPhone?"
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "coffee_28",
      "word": "delicious",
      "phonetic": "/dɪˈlɪʃəs/",
      "definition": "tasting very good",
      "usage": "美味的，口语常用",
      "examples": [
        "This coffee is delicious!",
        "The cake tastes delicious."
      ],
      "exam": false,
      "scenes": []
    },
    {
      "id": "coffee_29",
      "word": "bitter",
      "phonetic": "/ˈbɪtər/",
      "definition": "having a strong, unpleasant taste",
      "usage": "苦的，高考阅读词汇",
      "examples": [
        "Black coffee is a bit bitter.",
        "I don't like bitter drinks."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "coffee_30",
      "word": "smooth",
      "phonetic": "/smuːð/",
      "definition": "having an even and pleasant texture; not bitter",
      "usage": "口感顺滑的，高考阅读词",
      "examples": [
        "The latte is very smooth.",
        "This blend is smoother than the other one."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "coffee_31",
      "word": "fresh",
      "phonetic": "/freʃ/",
      "definition": "newly made or harvested",
      "usage": "新鲜的，高考高频形容词",
      "examples": [
        "The coffee tastes so fresh.",
        "We only use fresh milk."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "coffee_32",
      "word": "satisfy",
      "phonetic": "/ˈsætɪsfaɪ/",
      "definition": "to make someone pleased by meeting their needs",
      "usage": "使满意，高考高频动词",
      "examples": [
        "This drink satisfies my coffee craving.",
        "Are you satisfied with the service?"
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "coffee_33",
      "word": "sugar",
      "phonetic": "/ˈʃʊɡər/",
      "definition": "a sweet substance used in food and drink",
      "usage": "糖，咖啡厅常用词",
      "examples": [
        "Do you need any sugar for your coffee?",
        "I take my coffee with two sugars."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "coffee_34",
      "word": "ice",
      "phonetic": "/aɪs/",
      "definition": "frozen water",
      "usage": "冰，点冷饮常用",
      "examples": [
        "I'd like it with less ice, please.",
        "Can I have extra ice in my drink?"
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "coffee_35",
      "word": "cup",
      "phonetic": "/kʌp/",
      "definition": "a small container for drinking",
      "usage": "杯子，点单常用",
      "examples": [
        "A cup of coffee, please.",
        "Can I have a larger cup?"
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "coffee_36",
      "word": "take away",
      "phonetic": "/teɪk əˈweɪ/",
      "definition": "to buy food/drink to eat elsewhere",
      "usage": "外带，咖啡厅常用短语",
      "examples": [
        "Is this for here or take away?",
        "I'd like a latte to take away, please."
      ],
      "exam": false,
      "scenes": []
    },
    {
      "id": "coffee_37",
      "word": "decaf",
      "phonetic": "/ˈdiːkæf/",
      "definition": "coffee with most of the caffeine removed",
      "usage": "低因咖啡、无咖啡因咖啡",
      "examples": [
        "Do you have decaf coffee?",
        "I'll have a decaf latte, please."
      ],
      "exam": false,
      "scenes": []
    },
    {
      "id": "coffee_38",
      "word": "stir",
      "phonetic": "/stɜːr/",
      "definition": "to mix a liquid by moving a spoon around",
      "usage": "搅拌",
      "examples": [
        "Please stir the coffee well.",
        "I need a spoon to stir my drink."
      ],
      "exam": false,
      "scenes": []
    }
  ,
    {
      "id": "coffee_50",
      "word": "Barista",
      "cn": "\u5496\u5561\u5e08",
      "example": "Your Barista made a beautiful latte art for you.",
      "ex_cn": "\u4f60\u7684\u5496\u5561\u5e08\u7ed9\u4f60\u505a\u4e86\u6f02\u4eae\u7684\u62c9\u82b1\u3002"
    },
    {
      "id": "coffee_51",
      "word": "latte art",
      "cn": "\u62ff\u94c1\u62c9\u82b1",
      "example": "Wow, the latte art on this cappuccino is amazing!",
      "ex_cn": "\u54c7\uff0c\u8fd9\u676f\u5361\u5e03\u5947\u8bfa\u4e0a\u7684\u62c9\u82b1\u592a\u68d2\u4e86\uff01"
    },
    {
      "id": "coffee_52",
      "word": "oat milk",
      "cn": "\u71d5\u9ea6\u5976",
      "example": "Can I swap regular milk for oat milk in my latte?",
      "ex_cn": "\u6211\u7684\u62ff\u94c1\u53ef\u4ee5\u628a\u666e\u901a\u5976\u6362\u6210\u71d5\u9ea6\u5976\u5417\uff1f"
    },
    {
      "id": "coffee_53",
      "word": "cold brew",
      "cn": "\u51b7\u8403\u5496\u5561",
      "example": "I prefer cold brew in summer - it's smoother and less acidic.",
      "ex_cn": "\u590f\u5929\u6211\u66f4\u559c\u6b22\u51b7\u8403\uff0c\u53e3\u611f\u66f4\u987a\u6ed1\uff0c\u9178\u5ea6\u66f4\u4f4e\u3002"
    },
    {
      "id": "coffee_54",
      "word": "refill",
      "cn": "\u7eed\u676f",
      "example": "Does this cafe offer free refills on drip coffee?",
      "ex_cn": "\u8fd9\u5bb6\u5e97\u6ef4\u6ee4\u5496\u5561\u53ef\u4ee5\u514d\u8d39\u7eed\u676f\u5417\uff1f"
    },
    {
      "id": "coffee_55",
      "word": "caffeine",
      "cn": "\u5496\u5561\u56e0",
      "example": "I'm trying to cut down on caffeine, so I'll have a decaf.",
      "ex_cn": "\u6211\u6b63\u5728\u51cf\u5c11\u5496\u5561\u56e0\u6444\u5165\uff0c\u7ed9\u6211\u6765\u676f\u4f4e\u56e0\u7684\u5427\u3002"
    },
    {
      "id": "coffee_56",
      "word": "pastry",
      "cn": "\u9165\u76ae\u7cd5\u70b9",
      "example": "Their croissant is the most popular pastry here.",
      "ex_cn": "\u4ed6\u4eec\u7684\u53ef\u9882\u662f\u8fd9\u91cc\u6700\u53d7\u6b22\u8fce\u7684\u9165\u76ae\u7cd5\u70b9\u3002"
    },
    {
      "id": "coffee_57",
      "word": "blend",
      "cn": "\u6df7\u5408\u5496\u5561\u8c46",
      "example": "This house blend has notes of chocolate and caramel.",
      "ex_cn": "\u8fd9\u6b3e\u5e97\u5185\u70d8\u7119\u6df7\u5408\u8c46\u6709\u5de7\u514b\u529b\u548c\u7126\u7cd6\u7684\u98ce\u5473\u3002"
    },
    {
      "id": "coffee_58",
      "word": "cozy",
      "cn": "\u8212\u9002\u60ec\u610f\u7684",
      "example": "This cafe has such a cozy vibe - I could stay here all day.",
      "ex_cn": "\u8fd9\u5bb6\u5e97\u6c1b\u56f4\u592a\u8212\u670d\u4e86\uff0c\u6211\u80fd\u5f85\u4e00\u6574\u5929\u3002"
    },
    {
      "id": "coffee_59",
      "word": "reusable cup",
      "cn": "\u53ef\u91cd\u590d\u4f7f\u7528\u676f",
      "example": "Bring your own reusable cup and get a discount.",
      "ex_cn": "\u81ea\u5e26\u676f\u53ef\u4ee5\u4eab\u53d7\u6298\u6263\u3002"
    },
    {
      "id": "coffee_60",
      "word": "loyalty card",
      "cn": "\u4f1a\u5458\u79ef\u5206\u5361",
      "example": "After your 10th coffee, the next one is free with our loyalty card.",
      "ex_cn": "\u4e70\u6ee110\u676f\u5496\u5561\uff0c\u4e0b\u4e00\u676f\u7528\u4f1a\u5458\u5361\u514d\u8d39\u3002"
    },
    {
      "id": "coffee_61",
      "word": "sustainable",
      "cn": "\u53ef\u6301\u7eed\u7684",
      "example": "They only use sustainable coffee beans and eco-friendly packaging.",
      "ex_cn": "\u4ed6\u4eec\u53ea\u7528\u53ef\u6301\u7eed\u5496\u5561\u8c46\u548c\u73af\u4fdd\u5305\u88c5\u3002"
    },
    {
      "id": "coffee_62",
      "word": "single origin",
      "cn": "\u5355\u4e00\u4ea7\u5730",
      "example": "This single origin Ethiopian coffee has a fruity flavor.",
      "ex_cn": "\u8fd9\u6b3e\u57c3\u585e\u4fc4\u6bd4\u4e9a\u5355\u4e00\u4ea7\u5730\u5496\u5561\u6709\u679c\u9999\u3002"
    },
    {
      "id": "coffee_63",
      "word": "almond milk",
      "cn": "\u674f\u4ec1\u5976",
      "example": "I always get almond milk in my latte because I'm lactose intolerant.",
      "ex_cn": "\u6211\u62ff\u94c1\u4e00\u76f4\u52a0\u674f\u4ec1\u5976\uff0c\u56e0\u4e3a\u6211\u4e73\u7cd6\u4e0d\u8010\u53d7\u3002"
    }
  ],
  "friends": [
    {
      "id": "friends_01",
      "word": "introduce",
      "phonetic": "/ˌɪntrəˈduːs/",
      "definition": "to tell someone your name so you can meet",
      "usage": "介绍、引见，高考必考动词",
      "examples": [
        "Let me introduce myself.",
        "Can I introduce my friend to you?"
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "friends_02",
      "word": "pleased",
      "phonetic": "/pliːzd/",
      "definition": "happy or glad",
      "usage": "高兴的、满意的（Pleased to meet you 是社交经典表达）",
      "examples": [
        "Pleased to meet you!",
        "I'm pleased to finally meet you in person."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "friends_03",
      "word": "approach",
      "phonetic": "/əˈproʊtʃ/",
      "definition": "to come near to someone; a way of doing something",
      "usage": "接近；方法，高考高频多义词",
      "examples": [
        "He approached me at the party.",
        "What's the best approach to start a conversation?"
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "friends_04",
      "word": "familiar",
      "phonetic": "/fəˈmɪliər/",
      "definition": "well-known or easily recognized",
      "usage": "熟悉的，高考阅读高频词",
      "examples": [
        "You look familiar. Have we met before?",
        "I'm not familiar with this place."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "friends_05",
      "word": "common",
      "phonetic": "/ˈkɑːmən/",
      "definition": "happening often; shared by two or more people",
      "usage": "共同的、常见的，高考必考",
      "examples": [
        "We have a lot in common.",
        "It's common to ask about hobbies."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "friends_06",
      "word": "hobby",
      "phonetic": "/ˈhɑːbi/",
      "definition": "an activity you enjoy doing in your free time",
      "usage": "爱好，高考必考话题词",
      "examples": [
        "What are your hobbies?",
        "My hobby is reading and hiking."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "friends_07",
      "word": "interest",
      "phonetic": "/ˈɪntrəst/",
      "definition": "something you enjoy doing or learning about",
      "usage": "兴趣、爱好；利息（不同含义），高考高频词",
      "examples": [
        "We share the same interests.",
        "What are you interested in?"
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "friends_08",
      "word": "attitude",
      "phonetic": "/ˈætɪtuːd/",
      "definition": "the way you think or feel about something",
      "usage": "态度，高考必考抽象名词",
      "examples": [
        "She has a positive attitude towards life.",
        "What's your attitude towards making friends online?"
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "friends_09",
      "word": "personality",
      "phonetic": "/ˌpɜːrsəˈnæləti/",
      "definition": "someone's character, who they really are",
      "usage": "个性、性格，高考词汇",
      "examples": [
        "She has a great personality.",
        "I like people with a sense of humor."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "friends_10",
      "word": "awesome",
      "phonetic": "/ˈɔːsəm/",
      "definition": "very good, impressive",
      "usage": "太棒了，口语高频",
      "examples": [
        "You're awesome!",
        "That's an awesome idea."
      ],
      "exam": false,
      "scenes": []
    },
    {
      "id": "friends_11",
      "word": "admire",
      "phonetic": "/ədˈmaɪər/",
      "definition": "to respect someone for what they are or do",
      "usage": "钦佩、欣赏，高考阅读词",
      "examples": [
        "I admire your courage.",
        "She admires people who work hard."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "friends_12",
      "word": "impress",
      "phonetic": "/ɪmˈpres/",
      "definition": "to make someone feel admiration",
      "usage": "给……留下深刻印象，高考高频",
      "examples": [
        "I'm impressed by your English.",
        "His story impressed everyone."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "friends_13",
      "word": "generous",
      "phonetic": "/ˈdʒenərəs/",
      "definition": "willing to give more than expected",
      "usage": "慷慨的、大方的，高考阅读词汇",
      "examples": [
        "That's very generous of you.",
        "She's a generous person."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "friends_14",
      "word": "contact",
      "phonetic": "/ˈkɑːntækt/",
      "definition": "to communicate with someone; a person you know",
      "usage": "联系；联系人，高考高频",
      "examples": [
        "How can I contact you?",
        "Let's stay in contact."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "friends_15",
      "word": "social",
      "phonetic": "/ˈsoʊʃl/",
      "definition": "relating to meeting people and spending time with them",
      "usage": "社交的，高考阅读词",
      "examples": [
        "Do you have social media?",
        "She's very social and makes friends easily."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "friends_16",
      "word": "follow",
      "phonetic": "/ˈfɑːloʊ/",
      "definition": "to go after someone; to subscribe to someone online",
      "usage": "跟随、关注，高考高频动词",
      "examples": [
        "Follow me on Instagram.",
        "Can I follow you?"
      ],
      "exam": false,
      "scenes": []
    },
    {
      "id": "friends_17",
      "word": "connect",
      "phonetic": "/kəˈnekt/",
      "definition": "to join or link together",
      "usage": "连接、联系，高考必考",
      "examples": [
        "Let's connect on LinkedIn.",
        "We connected immediately when we first met."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "friends_18",
      "word": "invite",
      "phonetic": "/ɪnˈvaɪt/",
      "definition": "to ask someone to go somewhere or do something",
      "usage": "邀请，高考高频动词",
      "examples": [
        "Can I invite you for coffee?",
        "She invited me to her party."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "friends_19",
      "word": "available",
      "phonetic": "/əˈveɪləbl/",
      "definition": "free to do something; not busy",
      "usage": "有空的，高考必考",
      "examples": [
        "Are you available this weekend?",
        "I'm not available on Friday."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "friends_20",
      "word": "schedule",
      "phonetic": "/ˈskedʒuːl/",
      "definition": "a plan of things to be done at certain times",
      "usage": "日程安排，高考高频词",
      "examples": [
        "Let's schedule a time to meet.",
        "What's your schedule like?"
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "friends_21",
      "word": "arrange",
      "phonetic": "/əˈreɪndʒ/",
      "definition": "to plan or organize something ahead of time",
      "usage": "安排，高考作文高频词",
      "examples": [
        "I'll arrange a time for us to meet.",
        "Can you arrange the meeting?"
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "friends_22",
      "word": "confirm",
      "phonetic": "/kənˈfɜːrm/",
      "definition": "to say that something is true or definite",
      "usage": "确认，高考高频",
      "examples": [
        "Please confirm if you can come.",
        "I'll confirm the time later."
      ],
      "exam": true,
      "scenes": []
    }
,
    {
      "id": "friends_23",
      "word": "trust",
      "phonetic": "/trʌst/",
      "definition": "to believe that someone is honest",
      "usage": "信任，社交核心词",
      "examples": [
        "I trust you completely.",
        "Trust is the foundation of any friendship."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "friends_24",
      "word": "honest",
      "phonetic": "/ˈɒnɪst/",
      "definition": "telling the truth; not lying",
      "usage": "诚实的，高考高频",
      "examples": [
        "To be honest, I really like your outfit.",
        "She's an honest and reliable friend."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "friends_25",
      "word": "hang out",
      "phonetic": "/hæŋ aʊt/",
      "definition": "to spend time with someone",
      "usage": "一起玩、闲逛，口语高频",
      "examples": [
        "Do you want to hang out this weekend?",
        "We often hang out at the mall."
      ],
      "exam": false,
      "scenes": []
    },
    {
      "id": "friends_26",
      "word": "support",
      "phonetic": "/səˈpɔːrt/",
      "definition": "to help someone when they need it",
      "usage": "支持，高考高频",
      "examples": [
        "Friends should support each other.",
        "Thank you for your support."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "friends_27",
      "word": "sense of humor",
      "phonetic": "/sens əv ˈhjuːmər/",
      "definition": "the ability to find things funny",
      "usage": "幽默感，交友常见话题",
      "examples": [
        "He has a great sense of humor.",
        "I love people with a good sense of humor."
      ],
      "exam": false,
      "scenes": []
    },
    {
      "id": "friends_28",
      "word": "close",
      "phonetic": "/kloʊs/",
      "definition": "having a strong relationship",
      "usage": "亲密的，高考高频",
      "examples": [
        "We are very close friends.",
        "She's one of my closest friends."
      ],
      "exam": true,
      "scenes": []
    }
  ,
    {
      "id": "friends_50",
      "word": "vibe",
      "cn": "\u6c1b\u56f4/\u6c14\u573a",
      "example": "We have the same vibe - I feel like we've known each other forever.",
      "ex_cn": "\u6211\u4eec\u6c14\u573a\u592a\u5408\u4e86\uff0c\u611f\u89c9\u50cf\u8ba4\u8bc6\u5f88\u4e45\u4e86\u3002"
    },
    {
      "id": "friends_51",
      "word": "cringe",
      "cn": "\u5c34\u5c2c/\u793e\u6b7b",
      "example": "That joke was so cringe, I wanted to hide.",
      "ex_cn": "\u90a3\u4e2a\u7b11\u8bdd\u592a\u5c34\u5c2c\u4e86\uff0c\u6211\u60f3\u94bb\u5730\u7f1d\u3002"
    },
    {
      "id": "friends_52",
      "word": "ghost",
      "cn": "\u73a9\u6d88\u5931/\u65ad\u8054",
      "example": "We went on three dates and then he totally ghosted me.",
      "ex_cn": "\u6211\u4eec\u7ea6\u4f1a\u4e86\u4e09\u6b21\uff0c\u7136\u540e\u4ed6\u5b8c\u5168\u6d88\u5931\u4e86\u3002"
    },
    {
      "id": "friends_53",
      "word": "flex",
      "cn": "\u70ab\u8000/\u663e\u6446",
      "example": "Sorry for the flex, but I just got promoted!",
      "ex_cn": "\u62b1\u6b49\u6211\u561a\u745f\u4e00\u4e0b\uff0c\u6211\u521a\u5347\u804c\u4e86\uff01"
    },
    {
      "id": "friends_54",
      "word": "bounce",
      "cn": "\u79bb\u5f00/\u95ea\u4eba",
      "example": "It's getting late, I'm gonna bounce. Catch you later!",
      "ex_cn": "\u4e0d\u65e9\u4e86\uff0c\u6211\u5148\u64a4\u4e86\u3002\u56de\u5934\u89c1\uff01"
    },
    {
      "id": "friends_55",
      "word": "stan",
      "cn": "\u94c1\u7c89/\u72c2\u70ed\u652f\u6301",
      "example": "I totally stan that singer - I've been to all her concerts.",
      "ex_cn": "\u6211\u662f\u90a3\u4e2a\u6b4c\u624b\u7684\u94c1\u7c89\uff0c\u5979\u7684\u6bcf\u573a\u6f14\u5531\u4f1a\u6211\u90fd\u53bb\u4e86\u3002"
    },
    {
      "id": "friends_56",
      "word": "slay",
      "cn": "\u8d85\u68d2/\u60ca\u8273",
      "example": "You absolutely slayed that presentation! Everyone loved it.",
      "ex_cn": "\u4f60\u7684\u5c55\u793a\u592a\u68d2\u4e86\uff01\u5927\u5bb6\u90fd\u8d85\u559c\u6b22\u3002"
    },
    {
      "id": "friends_57",
      "word": "low-key",
      "cn": "\u4f4e\u8c03\u5730/\u6084\u6084\u5730",
      "example": "I'm low-key obsessed with this new coffee shop.",
      "ex_cn": "\u6211\u6709\u70b9\u4e0a\u5934\u90a3\u5bb6\u65b0\u5496\u5561\u5e97\u3002"
    },
    {
      "id": "friends_58",
      "word": "squad",
      "cn": "\u6b7b\u515a\u5708/\u5c0f\u56e2\u4f53",
      "example": "My squad and I hang out every Friday night.",
      "ex_cn": "\u6211\u548c\u6211\u7684\u6b7b\u515a\u4eec\u6bcf\u5468\u4e94\u665a\u4e0a\u4e00\u8d77\u73a9\u3002"
    },
    {
      "id": "friends_59",
      "word": "bond",
      "cn": "\u611f\u60c5\u8054\u7ed3",
      "example": "We bonded over our love for K-pop and Korean food.",
      "ex_cn": "\u56e0\u4e3a\u90fd\u559c\u6b22K-pop\u548c\u97e9\u56fd\u6599\u7406\uff0c\u6211\u4eec\u4e00\u62cd\u5373\u5408\u3002"
    },
    {
      "id": "friends_60",
      "word": "mutual",
      "cn": "\u5171\u540c\u7684/\u4e92\u5173",
      "example": "We have a mutual friend who introduced us.",
      "ex_cn": "\u6211\u4eec\u6709\u4e2a\u5171\u540c\u670b\u53cb\u4ecb\u7ecd\u6211\u4eec\u8ba4\u8bc6\u7684\u3002"
    },
    {
      "id": "friends_61",
      "word": "reconnect",
      "cn": "\u91cd\u65b0\u8054\u7cfb",
      "example": "I reconnected with my college roommate after ten years.",
      "ex_cn": "\u65f6\u9694\u5341\u5e74\u6211\u548c\u5927\u5b66\u5ba4\u53cb\u53c8\u91cd\u65b0\u8054\u7cfb\u4e0a\u4e86\u3002"
    },
    {
      "id": "friends_62",
      "word": "unmatched",
      "cn": "\u65e0\u4eba\u80fd\u53ca\u7684",
      "example": "Your energy is unmatched - I love being around you!",
      "ex_cn": "\u4f60\u7684\u80fd\u91cf\u65e0\u4eba\u80fd\u53ca\uff0c\u8ddf\u4f60\u5728\u4e00\u8d77\u592a\u5f00\u5fc3\u4e86\uff01"
    },
    {
      "id": "friends_63",
      "word": "no cap",
      "cn": "\u771f\u7684/\u4e0d\u9a97\u4f60",
      "example": "No cap, this is the best pizza I've ever had.",
      "ex_cn": "\u4e0d\u5439\u4e0d\u9ed1\uff0c\u8fd9\u662f\u6211\u5403\u8fc7\u6700\u597d\u5403\u7684\u62ab\u8428\u3002"
    }
  ],
  "phone": [
    {
      "id": "phone_01",
      "word": "hello",
      "phonetic": "/həˈloʊ/",
      "definition": "used when answering the phone or greeting",
      "usage": "接电话第一句",
      "examples": [
        "Hello, who's speaking?",
        "Hello, this is John."
      ],
      "exam": false,
      "scenes": []
    },
    {
      "id": "phone_02",
      "word": "speaking",
      "phonetic": "/ˈspiːkɪŋ/",
      "definition": "used to say that you are the person someone is calling",
      "usage": "对，是我（电话用语）",
      "examples": [
        "Speaking. / This is he speaking.",
        "Who's speaking, please?"
      ],
      "exam": false,
      "scenes": []
    },
    {
      "id": "phone_03",
      "word": "available",
      "phonetic": "/əˈveɪləbl/",
      "definition": "free to talk or meet",
      "usage": "有空的、可联系的，高考必考",
      "examples": [
        "Is Mr. Wang available?",
        "She's not available right now."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "phone_04",
      "word": "moment",
      "phonetic": "/ˈmoʊmənt/",
      "definition": "a very short period of time",
      "usage": "片刻、瞬间，高考高频词",
      "examples": [
        "Just a moment, please.",
        "Hold on a moment."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "phone_05",
      "word": "connect",
      "phonetic": "/kəˈnekt/",
      "definition": "to join or put someone through on phone",
      "usage": "转接、接通，高考必考",
      "examples": [
        "Let me connect you to her.",
        "I'm trying to connect to the manager."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "phone_06",
      "word": "transfer",
      "phonetic": "/trænsˈfɜːr/",
      "definition": "to move someone from one place to another; to redirect a call",
      "usage": "转接（电话）；转移，高考词汇",
      "examples": [
        "I'll transfer you to the sales department.",
        "The call was transferred to my boss."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "phone_07",
      "word": "reach",
      "phonetic": "/riːtʃ/",
      "definition": "to get in touch with someone",
      "usage": "联系到某人，高考高频动词",
      "examples": [
        "You can reach me at this number.",
        "I can't reach her right now."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "phone_08",
      "word": "contact",
      "phonetic": "/ˈkɑːntækt/",
      "definition": "to get in touch with someone",
      "usage": "联系，高考高频",
      "examples": [
        "Please contact us by email.",
        "I'll contact you later."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "phone_09",
      "word": "message",
      "phonetic": "/ˈmesɪdʒ/",
      "definition": "information sent to someone",
      "usage": "消息、留言，高考必考",
      "examples": [
        "Can I leave a message?",
        "Please pass on the message to her."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "phone_10",
      "word": "leave",
      "phonetic": "/liːv/",
      "definition": "to go away; to let something stay",
      "usage": "离开；留下，高考高频多义词",
      "examples": [
        "Can I leave a message?",
        "Please leave your name and number."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "phone_11",
      "word": "return",
      "phonetic": "/rɪˈtɜːrn/",
      "definition": "to come back; to give back",
      "usage": "回拨；返回；归还，高考必考",
      "examples": [
        "I'll return your call later.",
        "Please return my call when you're free."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "phone_12",
      "word": "remind",
      "phonetic": "/rɪˈmaɪnd/",
      "definition": "to help someone remember something",
      "usage": "提醒，高考高频动词",
      "examples": [
        "Please remind her to call me back.",
        "I reminded him about the meeting."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "phone_13",
      "word": "signal",
      "phonetic": "/ˈsɪɡnəl/",
      "definition": "the sound or image sent electronically",
      "usage": "信号，高考阅读词",
      "examples": [
        "The signal is bad here.",
        "I have a weak signal."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "phone_14",
      "word": "repeat",
      "phonetic": "/rɪˈpiːt/",
      "definition": "to say something again",
      "usage": "重复，高考必考",
      "examples": [
        "Could you repeat that, please?",
        "The signal is bad, please repeat."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "phone_15",
      "word": "interrupt",
      "phonetic": "/ˌɪntəˈrʌpt/",
      "definition": "to stop someone from speaking",
      "usage": "打断，高考阅读词汇",
      "examples": [
        "Sorry to interrupt, but...",
        "Don't interrupt me while I'm talking."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "phone_16",
      "word": "disturb",
      "phonetic": "/dɪˈstɜːrb/",
      "definition": "to interrupt someone and stop them from what they are doing",
      "usage": "打扰，高考词汇",
      "examples": [
        "Sorry to disturb you.",
        "Please do not disturb."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "phone_17",
      "word": "later",
      "phonetic": "/ˈleɪtər/",
      "definition": "at a time in the future",
      "usage": "稍后、回头见，口语常用",
      "examples": [
        "I'll call you later.",
        "Talk to you later!"
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "phone_18",
      "word": "regard",
      "phonetic": "/rɪˈɡɑːrd/",
      "definition": "to think of someone in a certain way; respect",
      "usage": "问候（Best regards）；认为，高考高频",
      "examples": [
        "Give my best regards to your family.",
        "I regard her as a good friend."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "phone_19",
      "word": "promise",
      "phonetic": "/ˈprɑːmɪs/",
      "definition": "to tell someone you will definitely do something",
      "usage": "承诺、保证，高考必考",
      "examples": [
        "I promise I'll call you tomorrow.",
        "Keep your promise."
      ],
      "exam": true,
      "scenes": []
    }
,
    {
      "id": "phone_20",
      "word": "text",
      "phonetic": "/tekst/",
      "definition": "to send a written message by phone",
      "usage": "发短信，日常口语高频",
      "examples": [
        "I'll text you the address.",
        "Text me when you get home."
      ],
      "exam": false,
      "scenes": []
    },
    {
      "id": "phone_21",
      "word": "hang up",
      "phonetic": "/hæŋ ʌp/",
      "definition": "to end a phone call",
      "usage": "挂断电话",
      "examples": [
        "Don't hang up, I need to tell you something.",
        "He hung up on me!"
      ],
      "exam": false,
      "scenes": []
    },
    {
      "id": "phone_22",
      "word": "voicemail",
      "phonetic": "/ˈvɔɪsmeɪl/",
      "definition": "a recorded message left when you miss a call",
      "usage": "语音信箱",
      "examples": [
        "Please leave a message after the beep.",
        "I got your voicemail and will call back."
      ],
      "exam": false,
      "scenes": []
    },
    {
      "id": "phone_23",
      "word": "ring",
      "phonetic": "/rɪŋ/",
      "definition": "to make the sound of a phone",
      "usage": "响铃，电话常用",
      "examples": [
        "The phone is ringing.",
        "Please turn your phone to silent mode."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "phone_24",
      "word": "missed call",
      "phonetic": "/mɪst kɔːl/",
      "definition": "a call you did not answer",
      "usage": "未接来电",
      "examples": [
        "You have three missed calls.",
        "I saw your missed call, sorry I was busy."
      ],
      "exam": false,
      "scenes": []
    },
    {
      "id": "phone_25",
      "word": "reply",
      "phonetic": "/rɪˈplaɪ/",
      "definition": "to answer someone",
      "usage": "回复，高考必考",
      "examples": [
        "I replied to your message.",
        "Please reply as soon as possible."
      ],
      "exam": true,
      "scenes": []
    }
  ,
    {
      "id": "phone_50",
      "word": "tap",
      "cn": "\u70b9\u51fb/\u8f7b\u89e6",
      "example": "Just tap the screen to answer the call.",
      "ex_cn": "\u8f7b\u89e6\u5c4f\u5e55\u5c31\u80fd\u63a5\u7535\u8bdd\u3002"
    },
    {
      "id": "phone_51",
      "word": "swipe",
      "cn": "\u6ed1\u52a8",
      "example": "Swipe right to accept the call, left to decline.",
      "ex_cn": "\u53f3\u6ed1\u63a5\u542c\uff0c\u5de6\u6ed1\u62d2\u63a5\u3002"
    },
    {
      "id": "phone_52",
      "word": "DM",
      "cn": "\u79c1\u4fe1",
      "example": "Slide into my DMs if you want to chat more!",
      "ex_cn": "\u60f3\u591a\u804a\u804a\u5c31\u79c1\u4fe1\u6211\uff01"
    },
    {
      "id": "phone_53",
      "word": "mute",
      "cn": "\u9759\u97f3",
      "example": "I always mute the group chat when it gets too noisy.",
      "ex_cn": "\u7fa4\u804a\u592a\u5435\u7684\u65f6\u5019\u6211\u4e00\u822c\u76f4\u63a5\u9759\u97f3\u3002"
    },
    {
      "id": "phone_54",
      "word": "block",
      "cn": "\u62c9\u9ed1",
      "example": "He kept sending spam, so I blocked him.",
      "ex_cn": "\u4ed6\u4e00\u76f4\u53d1\u5783\u573e\u6d88\u606f\uff0c\u6211\u628a\u4ed6\u62c9\u9ed1\u4e86\u3002"
    },
    {
      "id": "phone_55",
      "word": "spam",
      "cn": "\u5783\u573e\u4fe1\u606f",
      "example": "I keep getting spam calls from unknown numbers.",
      "ex_cn": "\u6211\u4e00\u76f4\u6536\u5230\u964c\u751f\u53f7\u7801\u7684\u9a9a\u6270\u7535\u8bdd\u3002"
    },
    {
      "id": "phone_56",
      "word": "archive",
      "cn": "\u5f52\u6863",
      "example": "I archive old conversations to keep my chat list clean.",
      "ex_cn": "\u6211\u628a\u65e7\u5bf9\u8bdd\u5f52\u6863\uff0c\u4fdd\u6301\u804a\u5929\u5217\u8868\u6e05\u723d\u3002"
    },
    {
      "id": "phone_57",
      "word": "screenshot",
      "cn": "\u622a\u5c4f",
      "example": "Please don't screenshot our private conversation.",
      "ex_cn": "\u8bf7\u4e0d\u8981\u622a\u5c4f\u6211\u4eec\u7684\u79c1\u5bc6\u5bf9\u8bdd\u3002"
    },
    {
      "id": "phone_58",
      "word": "read receipt",
      "cn": "\u5df2\u8bfb\u56de\u6267",
      "example": "I turned off read receipts so people don't know when I've seen their message.",
      "ex_cn": "\u6211\u5173\u4e86\u5df2\u8bfb\u56de\u6267\uff0c\u8fd9\u6837\u522b\u4eba\u4e0d\u77e5\u9053\u6211\u770b\u4e86\u6d88\u606f\u3002"
    },
    {
      "id": "phone_59",
      "word": "forward",
      "cn": "\u8f6c\u53d1",
      "example": "Could you forward me that meeting message?",
      "ex_cn": "\u4f60\u80fd\u628a\u5f00\u4f1a\u90a3\u6761\u6d88\u606f\u8f6c\u53d1\u7ed9\u6211\u5417\uff1f"
    },
    {
      "id": "phone_60",
      "word": "pin",
      "cn": "\u7f6e\u9876",
      "example": "I pin my best friend's chat so I never miss her messages.",
      "ex_cn": "\u6211\u628a\u95fa\u871c\u7684\u804a\u5929\u7f6e\u9876\u4e86\uff0c\u8fd9\u6837\u4e0d\u4f1a\u6f0f\u6d88\u606f\u3002"
    },
    {
      "id": "phone_61",
      "word": "notification",
      "cn": "\u901a\u77e5",
      "example": "I turned off notifications for that app, it was too distracting.",
      "ex_cn": "\u6211\u628a\u90a3\u4e2a\u5e94\u7528\u7684\u901a\u77e5\u5173\u4e86\uff0c\u592a\u5206\u5fc3\u4e86\u3002"
    },
    {
      "id": "phone_62",
      "word": "emoji",
      "cn": "\u8868\u60c5\u7b26\u53f7",
      "example": "She replied with just an emoji, and I had no idea what she meant.",
      "ex_cn": "\u5979\u5c31\u56de\u4e86\u4e00\u4e2a\u8868\u60c5\uff0c\u6211\u5b8c\u5168\u6ca1\u61c2\u5565\u610f\u601d\u3002"
    },
    {
      "id": "phone_63",
      "word": "status",
      "cn": "\u5728\u7ebf\u72b6\u6001",
      "example": "His status says he's online, but he's not replying.",
      "ex_cn": "\u4ed6\u7684\u72b6\u6001\u663e\u793a\u5728\u7ebf\uff0c\u4f46\u662f\u4e0d\u56de\u6211\u6d88\u606f\u3002"
    }
  ],
  "restaurant": [
    {
      "id": "restaurant_01",
      "word": "reserve",
      "phonetic": "/rɪˈzɜːrv/",
      "definition": "to book a table or seat in advance",
      "usage": "预订（座位、房间），高考高频",
      "examples": [
        "I'd like to reserve a table for two.",
        "Can I reserve a table by the window?"
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "restaurant_02",
      "word": "book",
      "phonetic": "/bʊk/",
      "definition": "to arrange to have something at a future time",
      "usage": "预订，口语常用",
      "examples": [
        "I booked a table for 7 pm.",
        "Is it fully booked tonight?"
      ],
      "exam": false,
      "scenes": []
    },
    {
      "id": "restaurant_03",
      "word": "available",
      "phonetic": "/əˈveɪləbl/",
      "definition": "free to be used; not taken",
      "usage": "有空位的，高考必考",
      "examples": [
        "Do you have any tables available?",
        "Sorry, no tables are available right now."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "restaurant_04",
      "word": "arrange",
      "phonetic": "/əˈreɪndʒ/",
      "definition": "to plan or make preparations",
      "usage": "安排，高考作文词",
      "examples": [
        "I've arranged a table for us.",
        "Let me arrange the seating."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "restaurant_05",
      "word": "recommend",
      "phonetic": "/ˌrekəˈmend/",
      "definition": "to suggest something good",
      "usage": "推荐，高考高频",
      "examples": [
        "What do you recommend?",
        "The chef recommends today's special."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "restaurant_06",
      "word": "appetizer",
      "phonetic": "/ˈæpətaɪzər/",
      "definition": "a small dish before the main meal",
      "usage": "开胃菜、前菜，高考阅读词",
      "examples": [
        "We'd like two appetizers to start.",
        "What appetizers do you have?"
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "restaurant_07",
      "word": "main course",
      "phonetic": "/meɪn kɔːrs/",
      "definition": "the largest or most important part of a meal",
      "usage": "主菜",
      "examples": [
        "What would you like for your main course?",
        "I'll have the steak as my main course."
      ],
      "exam": false,
      "scenes": []
    },
    {
      "id": "restaurant_08",
      "word": "dessert",
      "phonetic": "/dɪˈzɜːrt/",
      "definition": "sweet food eaten at the end of a meal",
      "usage": "甜点、甜品，高考话题词",
      "examples": [
        "Would you like dessert?",
        "Their chocolate cake is the best dessert."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "restaurant_09",
      "word": "allergy",
      "phonetic": "/ˈælərdʒi/",
      "definition": "a medical condition that causes you to react badly to something",
      "usage": "过敏，高考阅读词",
      "examples": [
        "I have a nut allergy.",
        "Does this dish contain any allergens?"
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "restaurant_10",
      "word": "avoid",
      "phonetic": "/əˈvɔɪd/",
      "definition": "to stay away from something",
      "usage": "避免，高考高频动词",
      "examples": [
        "I need to avoid spicy food.",
        "I'm trying to avoid sugar."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "restaurant_11",
      "word": "replace",
      "phonetic": "/rɪˈpleɪs/",
      "definition": "to put something new in the place of something else",
      "usage": "替换，高考高频",
      "examples": [
        "Can I replace the fries with a salad?",
        "Replace the butter with olive oil."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "restaurant_12",
      "word": "separate",
      "phonetic": "/ˈsepəreɪt/",
      "definition": "to divide or keep apart",
      "usage": "分开的；分开，高考必考",
      "examples": [
        "Can we have separate checks?",
        "Keep the sauce separate, please."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "restaurant_13",
      "word": "request",
      "phonetic": "/rɪˈkwest/",
      "definition": "to ask for something in a polite way",
      "usage": "请求、要求，高考高频",
      "examples": [
        "I have a special request.",
        "He requested a table near the window."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "restaurant_14",
      "word": "flavor",
      "phonetic": "/ˈfleɪvər/",
      "definition": "the taste of food",
      "usage": "味道、风味，高考阅读词",
      "examples": [
        "This dish has a unique flavor.",
        "I love the flavor of garlic."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "restaurant_15",
      "word": "spicy",
      "phonetic": "/ˈspaɪsi/",
      "definition": "having a strong, hot flavor from spices",
      "usage": "辣的，高频口语词",
      "examples": [
        "This is too spicy for me.",
        "Is it very spicy?"
      ],
      "exam": false,
      "scenes": []
    },
    {
      "id": "restaurant_16",
      "word": "tender",
      "phonetic": "/ˈtendər/",
      "definition": "easy to cut or chew; soft",
      "usage": "嫩的（肉类等），高考阅读词",
      "examples": [
        "The steak is very tender.",
        "This beef is tender and juicy."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "restaurant_17",
      "word": "worth",
      "phonetic": "/wɜːrθ/",
      "definition": "having a certain value; good enough to justify",
      "usage": "值得的，高考必考",
      "examples": [
        "This restaurant is worth a visit.",
        "Is the price worth it?"
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "restaurant_18",
      "word": "bill",
      "phonetic": "/bɪl/",
      "definition": "a piece of paper showing how much you need to pay",
      "usage": "账单，口语常用",
      "examples": [
        "Can I have the bill, please?",
        "The bill, please."
      ],
      "exam": false,
      "scenes": []
    },
    {
      "id": "restaurant_19",
      "word": "treat",
      "phonetic": "/triːt/",
      "definition": "to pay for someone else's food or drink",
      "usage": "请客、款待，高考高频词",
      "examples": [
        "Let me treat you this time.",
        "It's my treat."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "restaurant_20",
      "word": "separate",
      "phonetic": "/ˈsepəreɪt/",
      "definition": "not together; divided",
      "usage": "分开的（各自付账），高考必考",
      "examples": [
        "We'd like separate bills.",
        "Can we pay separately?"
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "restaurant_21",
      "word": "include",
      "phonetic": "/ɪnˈkluːd/",
      "definition": "to contain as part of something",
      "usage": "包含，高考高频动词",
      "examples": [
        "Does the price include service charge?",
        "The meal includes a drink."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "restaurant_22",
      "word": "service",
      "phonetic": "/ˈsɜːrvɪs/",
      "definition": "work done for customers",
      "usage": "服务，高考高频",
      "examples": [
        "The service here is excellent.",
        "Is service charge included?"
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "restaurant_23",
      "word": "tip",
      "phonetic": "/tɪp/",
      "definition": "extra money given to a waiter for good service",
      "usage": "小费，高考阅读词",
      "examples": [
        "Should we leave a tip?",
        "A 10% tip is customary."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "restaurant_24",
      "word": "generous",
      "phonetic": "/ˈdʒenərəs/",
      "definition": "giving more than is necessary",
      "usage": "慷慨的，高考阅读词汇",
      "examples": [
        "The portions here are generous.",
        "That's a generous tip."
      ],
      "exam": true,
      "scenes": []
    }
,
    {
      "id": "restaurant_25",
      "word": "waiter",
      "phonetic": "/ˈweɪtər/",
      "definition": "a person who serves food in a restaurant",
      "usage": "服务员，餐厅常用",
      "examples": [
        "Waiter, can I have the menu?",
        "Our waiter was very friendly."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "restaurant_26",
      "word": "portion",
      "phonetic": "/ˈpɔːrʃn/",
      "definition": "the amount of food served to one person",
      "usage": "份量",
      "examples": [
        "The portions here are huge.",
        "Can I have a smaller portion?"
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "restaurant_27",
      "word": "to go",
      "phonetic": "/tə ɡoʊ/",
      "definition": "to take food away from a restaurant",
      "usage": "外带，口语常用",
      "examples": [
        "Two burgers to go, please.",
        "Is this for here or to go?"
      ],
      "exam": false,
      "scenes": []
    },
    {
      "id": "restaurant_28",
      "word": "rare",
      "phonetic": "/reər/",
      "definition": "cooked for a short time (steak)",
      "usage": "三分熟（牛排熟度）",
      "examples": [
        "I'd like my steak rare, please.",
        "How would you like your steak? Rare, medium, or well-done?"
      ],
      "exam": false,
      "scenes": []
    },
    {
      "id": "restaurant_29",
      "word": "leftover",
      "phonetic": "/ˈleftoʊvər/",
      "definition": "food not eaten at a meal",
      "usage": "剩菜、剩饭",
      "examples": [
        "Can I get a box for the leftovers?",
        "We had pizza leftovers for breakfast."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "restaurant_30",
      "word": "roast",
      "phonetic": "/roʊst/",
      "definition": "to cook food in an oven or over fire",
      "usage": "烤的，点菜常用",
      "examples": [
        "I'll have the roast chicken.",
        "The roast beef is very tender."
      ],
      "exam": true,
      "scenes": []
    }
  ,
    {
      "id": "restaurant_50",
      "word": "waitlist",
      "cn": "\u7b49\u4f4d/\u6392\u961f",
      "example": "The restaurant is fully booked, so we're on the waitlist.",
      "ex_cn": "\u9910\u5385\u90fd\u8ba2\u6ee1\u4e86\uff0c\u6211\u4eec\u5728\u7b49\u4f4d\u3002"
    },
    {
      "id": "restaurant_51",
      "word": "plant-based",
      "cn": "\u690d\u7269\u57fa/\u7eaf\u7d20",
      "example": "More restaurants are adding plant-based options to their menus.",
      "ex_cn": "\u8d8a\u6765\u8d8a\u591a\u9910\u5385\u5728\u83dc\u5355\u4e0a\u52a0\u5165\u690d\u7269\u57fa\u9009\u9879\u3002"
    },
    {
      "id": "restaurant_52",
      "word": "QR code menu",
      "cn": "\u626b\u7801\u70b9\u9910",
      "example": "Scan the QR code on the table to see the full menu.",
      "ex_cn": "\u626b\u684c\u4e0a\u7684\u4e8c\u7ef4\u7801\u5c31\u80fd\u770b\u5230\u5b8c\u6574\u83dc\u5355\u3002"
    },
    {
      "id": "restaurant_53",
      "word": "fusion",
      "cn": "\u878d\u5408\u83dc",
      "example": "This fusion restaurant mixes Japanese and Italian cuisines.",
      "ex_cn": "\u8fd9\u5bb6\u878d\u5408\u83dc\u9910\u5385\u628a\u65e5\u6599\u548c\u610f\u9910\u7ed3\u5408\u4e86\u3002"
    },
    {
      "id": "restaurant_54",
      "word": "delivery",
      "cn": "\u5916\u5356\u914d\u9001",
      "example": "Let's just order delivery tonight.",
      "ex_cn": "\u4eca\u665a\u70b9\u5916\u5356\u5427\u3002"
    },
    {
      "id": "restaurant_55",
      "word": "foodie",
      "cn": "\u5403\u8d27/\u7f8e\u98df\u8fbe\u4eba",
      "example": "My sister is a total foodie - she knows every good spot in town.",
      "ex_cn": "\u6211\u59d0\u662f\u4e2a\u5730\u9053\u5403\u8d27\uff0c\u57ce\u91cc\u54ea\u5bb6\u597d\u5403\u5979\u90fd\u77e5\u9053\u3002"
    },
    {
      "id": "restaurant_56",
      "word": "craving",
      "cn": "\u7279\u522b\u60f3\u5403",
      "example": "I'm having a serious craving for hotpot right now.",
      "ex_cn": "\u6211\u73b0\u5728\u7279\u522b\u60f3\u5403\u706b\u9505\u3002"
    },
    {
      "id": "restaurant_57",
      "word": "takeout",
      "cn": "\u5916\u5356/\u5916\u5e26",
      "example": "We got Chinese takeout and watched a movie at home.",
      "ex_cn": "\u6211\u4eec\u70b9\u4e86\u4e2d\u9910\u5916\u5356\uff0c\u5728\u5bb6\u770b\u7535\u5f71\u3002"
    },
    {
      "id": "restaurant_58",
      "word": "dip",
      "cn": "\u8638\u9171",
      "example": "Can I have extra dip for my fries, please?",
      "ex_cn": "\u80fd\u7ed9\u6211\u591a\u4e00\u4efd\u85af\u6761\u8638\u9171\u5417\uff1f"
    },
    {
      "id": "restaurant_59",
      "word": "garnish",
      "cn": "\u88c5\u9970/\u914d\u83dc",
      "example": "The dish arrived beautifully garnished with fresh herbs.",
      "ex_cn": "\u83dc\u54c1\u4e0a\u684c\u65f6\u7528\u65b0\u9c9c\u9999\u8349\u88c5\u9970\u5f97\u5f88\u6f02\u4eae\u3002"
    },
    {
      "id": "restaurant_60",
      "word": "pairing",
      "cn": "\u642d\u914d\uff08\u9152/\u98df\u7269\uff09",
      "example": "The waiter recommended a red wine pairing for the steak.",
      "ex_cn": "\u670d\u52a1\u5458\u63a8\u8350\u4e86\u548c\u725b\u6392\u642d\u914d\u7684\u7ea2\u9152\u3002"
    },
    {
      "id": "restaurant_61",
      "word": "doggy bag",
      "cn": "\u6253\u5305\u888b",
      "example": "Could I get a doggy bag for the leftovers?",
      "ex_cn": "\u80fd\u7ed9\u6211\u4e2a\u6253\u5305\u888b\u88c5\u5269\u83dc\u5417\uff1f"
    },
    {
      "id": "restaurant_62",
      "word": "table for one",
      "cn": "\u4e00\u4eba\u98df",
      "example": "Table for one, please. I'm dining solo tonight.",
      "ex_cn": "\u4e00\u4f4d\u7528\u9910\uff0c\u8c22\u8c22\u3002\u4eca\u665a\u4e00\u4e2a\u4eba\u5403\u3002"
    }
  ],
  "shopping": [
    {
      "id": "shopping_01",
      "word": "browse",
      "phonetic": "/braʊz/",
      "definition": "to look at items casually without buying",
      "usage": "随便看看、浏览，高考阅读词",
      "examples": [
        "I'm just browsing, thanks.",
        "She browsed through the store for an hour."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "shopping_02",
      "word": "display",
      "phonetic": "/dɪˈspleɪ/",
      "definition": "to show something for people to see",
      "usage": "展示、陈列，高考高频",
      "examples": [
        "The new products are on display.",
        "They displayed the items in the window."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "shopping_03",
      "word": "selection",
      "phonetic": "/sɪˈlekʃn/",
      "definition": "a group of things to choose from",
      "usage": "选择、精选品，高考阅读词",
      "examples": [
        "They have a wide selection of shoes.",
        "The store offers a good selection."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "shopping_04",
      "word": "fit",
      "phonetic": "/fɪt/",
      "definition": "to be the right size for someone",
      "usage": "合身、适合，高考高频动词",
      "examples": [
        "Can I try this on to see if it fits?",
        "This dress fits me perfectly."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "shopping_05",
      "word": "size",
      "phonetic": "/saɪz/",
      "definition": "the measurement of something",
      "usage": "尺码、大小",
      "examples": [
        "What size do you wear?",
        "Do you have this in a smaller size?"
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "shopping_06",
      "word": "cotton",
      "phonetic": "/ˈkɑːtn/",
      "definition": "a natural fabric used for making clothes",
      "usage": "棉、棉布，高考阅读词",
      "examples": [
        "Is this made of cotton?",
        "Cotton is more comfortable in summer."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "shopping_07",
      "word": "material",
      "phonetic": "/məˈtɪriəl/",
      "definition": "what something is made of",
      "usage": "材质、材料，高考必考",
      "examples": [
        "What material is this dress made of?",
        "This material is easy to wash."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "shopping_08",
      "word": "comfortable",
      "phonetic": "/ˈkʌmfərtəbl/",
      "definition": "giving physical ease and relaxation",
      "usage": "舒适的，高考高频形容词",
      "examples": [
        "These shoes are very comfortable.",
        "I prefer comfortable clothes."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "shopping_09",
      "word": "suitable",
      "phonetic": "/ˈsuːtəbl/",
      "definition": "right or appropriate for a particular person or purpose",
      "usage": "合适的，高考阅读高频词",
      "examples": [
        "This dress is suitable for the party.",
        "Is this suitable for a job interview?"
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "shopping_10",
      "word": "price",
      "phonetic": "/praɪs/",
      "definition": "the amount of money you pay for something",
      "usage": "价格，高考必考",
      "examples": [
        "What's the price of this?",
        "The price is reasonable."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "shopping_11",
      "word": "discount",
      "phonetic": "/ˈdɪskaʊnt/",
      "definition": "a reduction in the usual price",
      "usage": "折扣，高考阅读词",
      "examples": [
        "Is there any discount?",
        "I got a 20% discount."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "shopping_12",
      "word": "bargain",
      "phonetic": "/ˈbɑːrɡən/",
      "definition": "something bought for a good price",
      "usage": "便宜货；讨价还价，高考阅读词",
      "examples": [
        "This was a real bargain!",
        "I bargained with the seller and got a lower price."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "shopping_13",
      "word": "offer",
      "phonetic": "/ˈɒfər/",
      "definition": "a special deal or promotion",
      "usage": "特价、优惠，高考高频动词",
      "examples": [
        "We have a special offer this week.",
        "Buy one get one free is a great offer."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "shopping_14",
      "word": "budget",
      "phonetic": "/ˈbʌdʒɪt/",
      "definition": "the amount of money you plan to spend",
      "usage": "预算，高考阅读词",
      "examples": [
        "I need to stay within my budget.",
        "This is over my budget."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "shopping_15",
      "word": "afford",
      "phonetic": "/əˈfɔːrd/",
      "definition": "to have enough money to buy",
      "usage": "负担得起，高考必考",
      "examples": [
        "I can't afford it right now.",
        "Can you afford this?"
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "shopping_16",
      "word": "cash",
      "phonetic": "/kæʃ/",
      "definition": "money in the form of coins or notes",
      "usage": "现金",
      "examples": [
        "I'll pay in cash.",
        "Do you accept cash?"
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "shopping_17",
      "word": "card",
      "phonetic": "/kɑːrd/",
      "definition": "a plastic card used to pay for things",
      "usage": "银行卡、信用卡",
      "examples": [
        "Can I pay by card?",
        "Credit card is fine."
      ],
      "exam": false,
      "scenes": []
    },
    {
      "id": "shopping_18",
      "word": "exchange",
      "phonetic": "/ɪksˈtʃeɪndʒ/",
      "definition": "to give something and receive something else",
      "usage": "交换、退换，高考高频",
      "examples": [
        "Can I exchange this for a larger size?",
        "What's the exchange policy?"
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "shopping_19",
      "word": "refund",
      "phonetic": "/ˈriːfʌnd/",
      "definition": "money given back when you return something",
      "usage": "退款，高考阅读词",
      "examples": [
        "I'd like a refund, please.",
        "Can I get a full refund?"
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "shopping_20",
      "word": "receipt",
      "phonetic": "/rɪˈsiːt/",
      "definition": "proof of purchase",
      "usage": "收据、小票，高考阅读词",
      "examples": [
        "I need the receipt for a refund.",
        "Keep your receipt."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "shopping_21",
      "word": "guarantee",
      "phonetic": "/ˌɡærənˈtiː/",
      "definition": "a promise that something will work or be fixed",
      "usage": "保修、保证，高考阅读词",
      "examples": [
        "This product comes with a one-year guarantee.",
        "Is there a guarantee?"
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "shopping_22",
      "word": "quality",
      "phonetic": "/ˈkwɑːləti/",
      "definition": "how good or bad something is",
      "usage": "质量，高考高频词",
      "examples": [
        "The quality of this product is excellent.",
        "You get what you pay for in terms of quality."
      ],
      "exam": true,
      "scenes": []
    }
,
    {
      "id": "shopping_23",
      "word": "try on",
      "phonetic": "/traɪ ɒn/",
      "definition": "to put on clothes to see if they fit",
      "usage": "试穿",
      "examples": [
        "Can I try this on?",
        "The fitting room is over there."
      ],
      "exam": false,
      "scenes": []
    },
    {
      "id": "shopping_24",
      "word": "sale",
      "phonetic": "/seɪl/",
      "definition": "a period when items are sold at lower prices",
      "usage": "打折、促销季，高考高频",
      "examples": [
        "Is this on sale?",
        "The store is having a big sale this weekend."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "shopping_25",
      "word": "color",
      "phonetic": "/ˈkʌlər/",
      "definition": "red, blue, green, etc.",
      "usage": "颜色，购物常见",
      "examples": [
        "Do you have this in other colors?",
        "I prefer the blue color."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "shopping_26",
      "word": "fitting room",
      "phonetic": "/ˈfɪtɪŋ ruːm/",
      "definition": "a room in a store where you try on clothes",
      "usage": "试衣间",
      "examples": [
        "Where is the fitting room?",
        "The fitting room is at the back of the store."
      ],
      "exam": false,
      "scenes": []
    },
    {
      "id": "shopping_27",
      "word": "checkout",
      "phonetic": "/ˈtʃekaʊt/",
      "definition": "the place where you pay in a store",
      "usage": "收银台、结账",
      "examples": [
        "Please proceed to the checkout.",
        "There's a long line at the checkout."
      ],
      "exam": false,
      "scenes": []
    },
    {
      "id": "shopping_28",
      "word": "price tag",
      "phonetic": "/praɪs tæɡ/",
      "definition": "a label showing how much something costs",
      "usage": "价格标签",
      "examples": [
        "The price tag says 50 dollars.",
        "I can't find the price tag on this item."
      ],
      "exam": false,
      "scenes": []
    }
  ,
    {
      "id": "shopping_50",
      "word": "window shopping",
      "cn": "\u53ea\u770b\u4e0d\u4e70",
      "example": "I'm just window shopping today - no purchases planned.",
      "ex_cn": "\u6211\u4eca\u5929\u5c31\u968f\u4fbf\u901b\u901b\uff0c\u6ca1\u6253\u7b97\u4e70\u4e1c\u897f\u3002"
    },
    {
      "id": "shopping_51",
      "word": "haul",
      "cn": "\u8d2d\u7269\u6536\u83b7",
      "example": "Check out my shopping haul from the weekend sale!",
      "ex_cn": "\u770b\u770b\u6211\u5468\u672b\u5927\u4fc3\u7684\u6218\u5229\u54c1\uff01"
    },
    {
      "id": "shopping_52",
      "word": "thrift",
      "cn": "\u4e8c\u624b/\u53e4\u7740",
      "example": "I love thrift shopping - you find unique pieces for cheap.",
      "ex_cn": "\u6211\u559c\u6b22\u901b\u4e8c\u624b\u5e97\uff0c\u80fd\u6dd8\u5230\u4fbf\u5b9c\u53c8\u72ec\u7279\u7684\u5355\u54c1\u3002"
    },
    {
      "id": "shopping_53",
      "word": "price match",
      "cn": "\u4ef7\u683c\u5339\u914d",
      "example": "Does this store offer price matching?",
      "ex_cn": "\u8fd9\u5bb6\u5e97\u80fd\u4ef7\u683c\u5339\u914d\u5417\uff1f"
    },
    {
      "id": "shopping_54",
      "word": "vintage",
      "cn": "\u590d\u53e4/\u4e2d\u53e4",
      "example": "This vintage bag is from the 90s - it's so unique.",
      "ex_cn": "\u8fd9\u4e2a\u4e2d\u53e4\u5305\u662f90\u5e74\u4ee3\u7684\uff0c\u771f\u7684\u5f88\u72ec\u7279\u3002"
    },
    {
      "id": "shopping_55",
      "word": "capsule wardrobe",
      "cn": "\u80f6\u56ca\u8863\u6a71",
      "example": "I'm building a capsule wardrobe with just 30 essential pieces.",
      "ex_cn": "\u6211\u6b63\u5728\u6253\u9020\u4e00\u4e2a\u53ea\u542b30\u4ef6\u5fc5\u9700\u54c1\u7684\u80f6\u56ca\u8863\u6a71\u3002"
    },
    {
      "id": "shopping_56",
      "word": "final sale",
      "cn": "\u6e05\u4ed3\u7279\u4ef7",
      "example": "This is a final sale item - no returns or exchanges.",
      "ex_cn": "\u8fd9\u662f\u6e05\u4ed3\u7279\u4ef7\u5546\u54c1\uff0c\u4e0d\u63a5\u53d7\u9000\u6362\u3002"
    },
    {
      "id": "shopping_57",
      "word": "pre-order",
      "cn": "\u9884\u552e",
      "example": "The new collection is available for pre-order now.",
      "ex_cn": "\u65b0\u7cfb\u5217\u73b0\u5df2\u5f00\u653e\u9884\u552e\u3002"
    },
    {
      "id": "shopping_58",
      "word": "gift receipt",
      "cn": "\u793c\u54c1\u6536\u636e",
      "example": "Can I get a gift receipt with this purchase?",
      "ex_cn": "\u8fd9\u4ef6\u5546\u54c1\u80fd\u7ed9\u4e00\u5f20\u793c\u54c1\u6536\u636e\u5417\uff1f"
    },
    {
      "id": "shopping_59",
      "word": "loyalty program",
      "cn": "\u4f1a\u5458\u8ba1\u5212",
      "example": "Sign up for our loyalty program and earn points.",
      "ex_cn": "\u52a0\u5165\u6211\u4eec\u7684\u4f1a\u5458\u8ba1\u5212\uff0c\u8d2d\u7269\u79ef\u5206\u3002"
    },
    {
      "id": "shopping_60",
      "word": "sustainable fashion",
      "cn": "\u53ef\u6301\u7eed\u65f6\u5c1a",
      "example": "I'm trying to buy more sustainable fashion brands.",
      "ex_cn": "\u6211\u6b63\u5728\u591a\u4e70\u53ef\u6301\u7eed\u65f6\u5c1a\u54c1\u724c\u3002"
    },
    {
      "id": "shopping_61",
      "word": "try-on",
      "cn": "\u8bd5\u7a7f",
      "example": "I spent an hour trying on dresses at the mall.",
      "ex_cn": "\u6211\u5728\u5546\u573a\u82b1\u4e86\u4e00\u5c0f\u65f6\u8bd5\u7a7f\u88d9\u5b50\u3002"
    }
  ],
  "transport": [
    {
      "id": "transport_01",
      "word": "direction",
      "phonetic": "/dəˈrekʃn/",
      "definition": "the way someone or something is going",
      "usage": "方向，高考必考",
      "examples": [
        "Can you tell me the direction to the station?",
        "I'm going in the wrong direction."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "transport_02",
      "word": "location",
      "phonetic": "/loʊˈkeɪʃn/",
      "definition": "a particular place or position",
      "usage": "位置、地点，高考高频",
      "examples": [
        "Could you tell me the location of the museum?",
        "What's your current location?"
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "transport_03",
      "word": "nearby",
      "phonetic": "/ˌnɪrˈbaɪ/",
      "definition": "close to where you are; not far away",
      "usage": "附近的，高考阅读词",
      "examples": [
        "Is there a supermarket nearby?",
        "I'm looking for a nearby restaurant."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "transport_04",
      "word": "opposite",
      "phonetic": "/ˈɑːpəzɪt/",
      "definition": "on the other side; completely different",
      "usage": "对面的；相反的，高考高频",
      "examples": [
        "The bank is opposite the station.",
        "The supermarket is on the opposite side."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "transport_05",
      "word": "corner",
      "phonetic": "/ˈkɔːrnər/",
      "definition": "where two streets meet",
      "usage": "拐角、角落，高考高频词",
      "examples": [
        "Turn left at the corner.",
        "The café is on the corner of Main Street."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "transport_06",
      "word": "straight",
      "phonetic": "/streɪt/",
      "definition": "not bending or curving; in a direct line",
      "usage": "径直的、笔直的，高考必考",
      "examples": [
        "Go straight ahead for two blocks.",
        "Walk straight until you see the traffic lights."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "transport_07",
      "word": "cross",
      "phonetic": "/krɔːs/",
      "definition": "to go from one side to another",
      "usage": "穿过、横穿，高考高频动词",
      "examples": [
        "Cross the street at the crosswalk.",
        "Be careful when crossing the road."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "transport_08",
      "word": "block",
      "phonetic": "/blɑːk/",
      "definition": "a group of buildings between streets",
      "usage": "街区，高考阅读词",
      "examples": [
        "It's three blocks away.",
        "Walk two blocks and turn right."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "transport_09",
      "word": "distance",
      "phonetic": "/ˈdɪstəns/",
      "definition": "the amount of space between two places",
      "usage": "距离，高考必考",
      "examples": [
        "What's the distance from here?",
        "It's a short distance from the hotel."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "transport_10",
      "word": "entrance",
      "phonetic": "/ˈentrəns/",
      "definition": "the way into a place",
      "usage": "入口，高考高频词",
      "examples": [
        "The entrance is on the left.",
        "Where's the main entrance?"
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "transport_11",
      "word": "exit",
      "phonetic": "/ˈeksɪt/",
      "definition": "the way out of a place",
      "usage": "出口，高考高频词",
      "examples": [
        "Take the exit on your right.",
        "Where's the emergency exit?"
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "transport_12",
      "word": "route",
      "phonetic": "/ruːt/",
      "definition": "the way from one place to another",
      "usage": "路线，高考阅读词",
      "examples": [
        "Which bus route goes to the airport?",
        "This route is faster."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "transport_13",
      "word": "transfer",
      "phonetic": "/trænsˈfɜːr/",
      "definition": "to change from one bus/train to another",
      "usage": "换乘、转车，高考词汇",
      "examples": [
        "You need to transfer at Central Station.",
        "Is there a direct bus, or do I need to transfer?"
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "transport_14",
      "word": "platform",
      "phonetic": "/ˈplætfɔːrm/",
      "definition": "the place where you wait for a train",
      "usage": "站台、月台，高考阅读词",
      "examples": [
        "The train leaves from platform 3.",
        "Which platform does the subway arrive at?"
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "transport_15",
      "word": "depart",
      "phonetic": "/dɪˈpɑːrt/",
      "definition": "to leave a place",
      "usage": "出发、离开，高考高频",
      "examples": [
        "The bus departs at 8 am.",
        "What time does the flight depart?"
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "transport_16",
      "word": "arrive",
      "phonetic": "/əˈraɪv/",
      "definition": "to reach a place",
      "usage": "到达，高考必考",
      "examples": [
        "We'll arrive at the station in 10 minutes.",
        "What time do we arrive?"
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "transport_17",
      "word": "delay",
      "phonetic": "/dɪˈleɪ/",
      "definition": "to make something happen later than planned",
      "usage": "延误、延迟，高考高频",
      "examples": [
        "The train is delayed by 20 minutes.",
        "Sorry for the delay."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "transport_18",
      "word": "destination",
      "phonetic": "/ˌdestɪˈneɪʃn/",
      "definition": "the place where someone is going",
      "usage": "目的地，高考必考",
      "examples": [
        "What's your destination?",
        "We've arrived at your destination."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "transport_19",
      "word": "meter",
      "phonetic": "/ˈmiːtər/",
      "definition": "the device in a taxi that shows the fare",
      "usage": "计价器",
      "examples": [
        "Please turn on the meter.",
        "The meter shows 25 yuan."
      ],
      "exam": false,
      "scenes": []
    },
    {
      "id": "transport_20",
      "word": "fare",
      "phonetic": "/feər/",
      "definition": "the money you pay for a journey",
      "usage": "车费，高考阅读词",
      "examples": [
        "What's the fare to the airport?",
        "The bus fare is 2 yuan."
      ],
      "exam": true,
      "scenes": []
    }
,
    {
      "id": "transport_21",
      "word": "intersection",
      "phonetic": "/ˌɪntərˈsekʃn/",
      "definition": "a place where two roads cross",
      "usage": "十字路口、交叉路口",
      "examples": [
        "Turn left at the next intersection.",
        "There's a traffic light at that intersection."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "transport_22",
      "word": "pedestrian",
      "phonetic": "/pəˈdestriən/",
      "definition": "a person walking on the street",
      "usage": "行人，高考阅读词",
      "examples": [
        "Watch out for pedestrians.",
        "This is a pedestrian-only street."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "transport_23",
      "word": "traffic light",
      "phonetic": "/ˈtræfɪk laɪt/",
      "definition": "a signal that controls traffic with red, yellow and green lights",
      "usage": "红绿灯",
      "examples": [
        "Wait for the green traffic light to cross.",
        "Turn right at the traffic light."
      ],
      "exam": false,
      "scenes": []
    },
    {
      "id": "transport_24",
      "word": "subway",
      "phonetic": "/ˈsʌbweɪ/",
      "definition": "an underground train system",
      "usage": "地铁，出行常用",
      "examples": [
        "Let's take the subway to the city center.",
        "The subway station is just around the corner."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "transport_25",
      "word": "GPS",
      "phonetic": "/ˌdʒiː piː ˈes/",
      "definition": "a system that shows your location on a map",
      "usage": "导航系统",
      "examples": [
        "Let me check the GPS for directions.",
        "My GPS says we're almost there."
      ],
      "exam": false,
      "scenes": []
    },
    {
      "id": "transport_26",
      "word": "round trip",
      "phonetic": "/raʊnd trɪp/",
      "definition": "a journey to a place and back again",
      "usage": "往返行程",
      "examples": [
        "I'd like a round-trip ticket to Beijing.",
        "How much is a round trip?"
      ],
      "exam": true,
      "scenes": []
    }
  ,
    {
      "id": "transport_50",
      "word": "ride-sharing",
      "cn": "\u62fc\u8f66/\u7f51\u7ea6\u8f66",
      "example": "I use ride-sharing apps to get around the city.",
      "ex_cn": "\u6211\u7528\u7f51\u7ea6\u8f66\u5e94\u7528\u5728\u57ce\u5e02\u91cc\u51fa\u884c\u3002"
    },
    {
      "id": "transport_51",
      "word": "e-scooter",
      "cn": "\u7535\u52a8\u6ed1\u677f\u8f66",
      "example": "You can rent an e-scooter and ride to the subway.",
      "ex_cn": "\u4f60\u53ef\u4ee5\u79df\u7535\u52a8\u6ed1\u677f\u8f66\u9a91\u5230\u5730\u94c1\u7ad9\u3002"
    },
    {
      "id": "transport_52",
      "word": "contactless",
      "cn": "\u975e\u63a5\u89e6\u5f0f",
      "example": "Tap your card for contactless payment on the bus.",
      "ex_cn": "\u5728\u516c\u4ea4\u8f66\u4e0a\u5237\u5361\u65e0\u63a5\u89e6\u652f\u4ed8\u3002"
    },
    {
      "id": "transport_53",
      "word": "transit card",
      "cn": "\u4ea4\u901a\u5361",
      "example": "Make sure your transit card has enough balance.",
      "ex_cn": "\u786e\u8ba4\u4ea4\u901a\u5361\u4f59\u989d\u5145\u8db3\u3002"
    },
    {
      "id": "transport_54",
      "word": "rush hour",
      "cn": "\u9ad8\u5cf0\u671f",
      "example": "Avoid the subway during rush hour if you can.",
      "ex_cn": "\u5982\u679c\u53ef\u80fd\u7684\u8bdd\uff0c\u907f\u514d\u9ad8\u5cf0\u671f\u5750\u5730\u94c1\u3002"
    },
    {
      "id": "transport_55",
      "word": "real-time",
      "cn": "\u5b9e\u65f6",
      "example": "The app shows real-time bus arrival info.",
      "ex_cn": "\u8fd9\u4e2aApp\u663e\u793a\u5b9e\u65f6\u516c\u4ea4\u5230\u7ad9\u4fe1\u606f\u3002"
    },
    {
      "id": "transport_56",
      "word": "carpool",
      "cn": "\u62fc\u8f66",
      "example": "We carpool to work to save on gas and tolls.",
      "ex_cn": "\u6211\u4eec\u62fc\u8f66\u4e0a\u73ed\u7701\u6cb9\u94b1\u548c\u8fc7\u8def\u8d39\u3002"
    },
    {
      "id": "transport_57",
      "word": "detour",
      "cn": "\u7ed5\u8def",
      "example": "There's an accident ahead - we need to take a detour.",
      "ex_cn": "\u524d\u9762\u51fa\u4e86\u4e8b\u6545\uff0c\u6211\u4eec\u5f97\u7ed5\u8def\u3002"
    },
    {
      "id": "transport_58",
      "word": "parking spot",
      "cn": "\u505c\u8f66\u4f4d",
      "example": "It's impossible to find a parking spot downtown.",
      "ex_cn": "\u5e02\u4e2d\u5fc3\u6839\u672c\u627e\u4e0d\u5230\u505c\u8f66\u4f4d\u3002"
    },
    {
      "id": "transport_59",
      "word": "speed bump",
      "cn": "\u51cf\u901f\u5e26",
      "example": "Slow down - there's a speed bump coming up.",
      "ex_cn": "\u51cf\u901f\uff0c\u524d\u9762\u6709\u51cf\u901f\u5e26\u3002"
    },
    {
      "id": "transport_60",
      "word": "toll road",
      "cn": "\u6536\u8d39\u516c\u8def",
      "example": "If we take the toll road, we'll save 20 minutes.",
      "ex_cn": "\u8d70\u6536\u8d39\u516c\u8def\u80fd\u770120\u5206\u949f\u3002"
    },
    {
      "id": "transport_61",
      "word": "range anxiety",
      "cn": "\u91cc\u7a0b\u7126\u8651",
      "example": "I get range anxiety when my EV battery drops below 20%.",
      "ex_cn": "\u6211\u7684\u7535\u52a8\u8f66\u7535\u91cf\u4f4e\u4e8e20%\u65f6\u6211\u5c31\u4f1a\u91cc\u7a0b\u7126\u8651\u3002"
    }
  ],
  "supermarket": [
    {
      "id": "supermarket_01",
      "word": "aisle",
      "phonetic": "/aɪl/",
      "definition": "a passage between rows of shelves",
      "usage": "通道、过道（超市里）",
      "examples": [
        "It's in aisle 3.",
        "The bread is in the next aisle."
      ],
      "exam": false,
      "scenes": []
    },
    {
      "id": "supermarket_02",
      "word": "section",
      "phonetic": "/ˈsekʃn/",
      "definition": "a part or area of a larger place",
      "usage": "区域、部分，高考高频词",
      "examples": [
        "Where's the dairy section?",
        "The fruit section is at the back."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "supermarket_03",
      "word": "produce",
      "phonetic": "/ˈprɒdjuːs/",
      "definition": "fresh fruits and vegetables",
      "usage": "农产品（果蔬类），高考阅读词",
      "examples": [
        "The produce section is on the left.",
        "Fresh produce is good for your health."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "supermarket_04",
      "word": "organic",
      "phonetic": "/ɔːrˈɡænɪk/",
      "definition": "grown without chemicals",
      "usage": "有机的，高考阅读词汇",
      "examples": [
        "I prefer organic vegetables.",
        "Organic food is more expensive."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "supermarket_05",
      "word": "fresh",
      "phonetic": "/freʃ/",
      "definition": "recently picked or made",
      "usage": "新鲜的，高考高频",
      "examples": [
        "Is this bread fresh?",
        "The fish looks very fresh."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "supermarket_06",
      "word": "expire",
      "phonetic": "/ɪkˈspaɪər/",
      "definition": "to come to the end of the valid period",
      "usage": "过期，高考阅读词",
      "examples": [
        "This milk expires tomorrow.",
        "Check the expiration date before buying."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "supermarket_07",
      "word": "expiration",
      "phonetic": "/ˌekspəˈreɪʃn/",
      "definition": "the end of a period when something can be used",
      "usage": "到期、截止，高考阅读词",
      "examples": [
        "What's the expiration date?",
        "This yogurt is past its expiration date."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "supermarket_08",
      "word": "discount",
      "phonetic": "/ˈdɪskaʊnt/",
      "definition": "a reduction in price",
      "usage": "折扣、减价",
      "examples": [
        "There's a 50% discount on this item.",
        "Do you offer a student discount?"
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "supermarket_09",
      "word": "coupon",
      "phonetic": "/ˈkuːpɑːn/",
      "definition": "a piece of paper that gives you a discount",
      "usage": "优惠券",
      "examples": [
        "I have a coupon for 10% off.",
        "Can I use this coupon?"
      ],
      "exam": false,
      "scenes": []
    },
    {
      "id": "supermarket_10",
      "word": "receipt",
      "phonetic": "/rɪˈsiːt/",
      "definition": "proof of purchase",
      "usage": "收据",
      "examples": [
        "Don't forget your receipt.",
        "I need this receipt for the warranty."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "supermarket_11",
      "word": "weigh",
      "phonetic": "/weɪ/",
      "definition": "to measure how heavy something is",
      "usage": "称重，高考高频动词",
      "examples": [
        "Please weigh the apples.",
        "Can you weigh this for me?"
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "supermarket_12",
      "word": "quantity",
      "phonetic": "/ˈkwɑːntəti/",
      "definition": "an amount or number of something",
      "usage": "数量，高考高频词",
      "examples": [
        "Buy them in large quantity for a discount.",
        "What quantity do you need?"
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "supermarket_13",
      "word": "compare",
      "phonetic": "/kəmˈpeər/",
      "definition": "to examine how things are similar or different",
      "usage": "比较，高考高频动词",
      "examples": [
        "Compare prices before you buy.",
        "Let's compare these two products."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "supermarket_14",
      "word": "brand",
      "phonetic": "/brænd/",
      "definition": "a product made by a particular company",
      "usage": "品牌，高考阅读词",
      "examples": [
        "Which brand do you prefer?",
        "This brand is more reliable."
      ],
      "exam": true,
      "scenes": []
    }
,
    {
      "id": "supermarket_15",
      "word": "cart",
      "phonetic": "/kɑːrt/",
      "definition": "a metal basket on wheels for carrying items",
      "usage": "购物车",
      "examples": [
        "Grab a cart before you go in.",
        "My cart is full already."
      ],
      "exam": false,
      "scenes": []
    },
    {
      "id": "supermarket_16",
      "word": "basket",
      "phonetic": "/ˈbæskɪt/",
      "definition": "a container for carrying items while shopping",
      "usage": "购物篮",
      "examples": [
        "I only need a basket for a few items.",
        "Can I get a shopping basket?"
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "supermarket_17",
      "word": "scan",
      "phonetic": "/skæn/",
      "definition": "to use a machine to read a barcode",
      "usage": "扫描（条码），收银常用",
      "examples": [
        "The cashier scanned all the items.",
        "Please scan your membership card."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "supermarket_18",
      "word": "barcode",
      "phonetic": "/ˈbɑːrkoʊd/",
      "definition": "a pattern of lines on a product that a scanner reads",
      "usage": "条形码",
      "examples": [
        "The barcode won't scan properly.",
        "The price is checked by scanning the barcode."
      ],
      "exam": false,
      "scenes": []
    },
    {
      "id": "supermarket_19",
      "word": "membership",
      "phonetic": "/ˈmembərʃɪp/",
      "definition": "the state of being a member of a store",
      "usage": "会员身份",
      "examples": [
        "Do you have a membership card?",
        "Members get special discounts."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "supermarket_20",
      "word": "frozen food",
      "phonetic": "/ˈfroʊzn fuːd/",
      "definition": "food that is stored at a very low temperature",
      "usage": "冷冻食品",
      "examples": [
        "The frozen food section is in aisle 6.",
        "Frozen food is convenient but less fresh."
      ],
      "exam": false,
      "scenes": []
    }
  ,
    {
      "id": "supermarket_50",
      "word": "self-checkout",
      "cn": "\u81ea\u52a9\u7ed3\u8d26",
      "example": "The lines are shorter at the self-checkout counters.",
      "ex_cn": "\u81ea\u52a9\u7ed3\u8d26\u7684\u961f\u66f4\u77ed\u3002"
    },
    {
      "id": "supermarket_51",
      "word": "bulk bin",
      "cn": "\u6563\u88c5\u533a",
      "example": "You can buy just what you need from the bulk bins.",
      "ex_cn": "\u6563\u88c5\u533a\u53ef\u4ee5\u6309\u9700\u8d2d\u4e70\u91cf\u3002"
    },
    {
      "id": "supermarket_52",
      "word": "vegan",
      "cn": "\u7eaf\u7d20\u98df\u7684",
      "example": "The supermarket now has a dedicated vegan section.",
      "ex_cn": "\u8d85\u5e02\u73b0\u5728\u6709\u4e86\u4e13\u95e8\u7684\u7eaf\u7d20\u98df\u54c1\u533a\u3002"
    },
    {
      "id": "supermarket_53",
      "word": "gluten-free",
      "cn": "\u65e0\u9eb8\u8d28\u7684",
      "example": "My friend only eats gluten-free products.",
      "ex_cn": "\u6211\u670b\u53cb\u53ea\u5403\u65e0\u9eb8\u8d28\u98df\u54c1\u3002"
    },
    {
      "id": "supermarket_54",
      "word": "best before",
      "cn": "\u6700\u4f73\u98df\u7528\u65e5\u671f",
      "example": "This yogurt is past its best before date.",
      "ex_cn": "\u8fd9\u4e2a\u9178\u5976\u8fc7\u4e86\u6700\u4f73\u98df\u7528\u65e5\u671f\u4e86\u3002"
    },
    {
      "id": "supermarket_55",
      "word": "multi-buy",
      "cn": "\u591a\u4e70\u4f18\u60e0",
      "example": "There's a multi-buy deal - three for the price of two.",
      "ex_cn": "\u6709\u591a\u4e70\u4f18\u60e0\uff0c\u4e70\u4e09\u4ef6\u4ed8\u4e24\u4ef6\u7684\u94b1\u3002"
    },
    {
      "id": "supermarket_56",
      "word": "recycle",
      "cn": "\u56de\u6536",
      "example": "Don't forget to recycle the plastic bags at the front.",
      "ex_cn": "\u522b\u5fd8\u4e86\u628a\u5851\u6599\u888b\u653e\u5230\u5e97\u95e8\u53e3\u7684\u56de\u6536\u5904\u3002"
    },
    {
      "id": "supermarket_57",
      "word": "shopping list",
      "cn": "\u8d2d\u7269\u6e05\u5355",
      "example": "I made a shopping list so I don't forget anything.",
      "ex_cn": "\u6211\u5217\u4e86\u8d2d\u7269\u6e05\u5355\uff0c\u514d\u5f97\u5fd8\u8bb0\u4e70\u4ec0\u4e48\u3002"
    },
    {
      "id": "supermarket_58",
      "word": "free-range",
      "cn": "\u6563\u517b\u7684",
      "example": "I always buy free-range eggs - they taste better.",
      "ex_cn": "\u6211\u4e00\u76f4\u4e70\u6563\u517b\u9e21\u86cb\uff0c\u597d\u5403\u5f88\u591a\u3002"
    },
    {
      "id": "supermarket_59",
      "word": "clean eating",
      "cn": "\u6e05\u6d01\u996e\u98df",
      "example": "She's into clean eating and avoids processed food.",
      "ex_cn": "\u5979\u5d07\u5c1a\u6e05\u6d01\u996e\u98df\uff0c\u4e0d\u5403\u52a0\u5de5\u98df\u54c1\u3002"
    },
    {
      "id": "supermarket_60",
      "word": "aisle end",
      "cn": "\u8d27\u67b6\u7aef\u5934",
      "example": "The best deals are usually at the aisle end.",
      "ex_cn": "\u6700\u5212\u7b97\u7684\u4e1c\u897f\u901a\u5e38\u6446\u5728\u8d27\u67b6\u7aef\u5934\u3002"
    },
    {
      "id": "supermarket_61",
      "word": "club card",
      "cn": "\u4f1a\u5458\u5361",
      "example": "Scan your club card to get member-only prices.",
      "ex_cn": "\u626b\u4f1a\u5458\u5361\u4eab\u53d7\u4f1a\u5458\u4ef7\u3002"
    }
  ],
  "hospital": [
    {
      "id": "hospital_01",
      "word": "symptom",
      "phonetic": "/ˈsɪmptəm/",
      "definition": "a sign of an illness",
      "usage": "症状，高考阅读高频词",
      "examples": [
        "What are your symptoms?",
        "Fever is a common symptom of the flu."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "hospital_02",
      "word": "fever",
      "phonetic": "/ˈfiːvər/",
      "definition": "a high body temperature due to illness",
      "usage": "发烧，高考词汇",
      "examples": [
        "I have a high fever.",
        "She's running a fever."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "hospital_03",
      "word": "cough",
      "phonetic": "/kɒf/",
      "definition": "to force air out of your lungs with a sudden sound",
      "usage": "咳嗽",
      "examples": [
        "I can't stop coughing.",
        "Do you have any cough medicine?"
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "hospital_04",
      "word": "headache",
      "phonetic": "/ˈhedeɪk/",
      "definition": "a pain in your head",
      "usage": "头疼",
      "examples": [
        "I have a bad headache.",
        "This headache won't go away."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "hospital_05",
      "word": "stomachache",
      "phonetic": "/ˈstʌməkeɪk/",
      "definition": "a pain in your stomach",
      "usage": "胃疼、肚子疼",
      "examples": [
        "I have a stomachache.",
        "The food gave me a stomachache."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "hospital_06",
      "word": "prescribe",
      "phonetic": "/prɪˈskraɪb/",
      "definition": "to order medicine by a doctor",
      "usage": "开药方，高考阅读词",
      "examples": [
        "The doctor prescribed some antibiotics.",
        "What did the doctor prescribe?"
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "hospital_07",
      "word": "medicine",
      "phonetic": "/ˈmedɪsn/",
      "definition": "a substance used to treat illness",
      "usage": "药、药物，高考高频",
      "examples": [
        "Take this medicine three times a day.",
        "I need to buy some medicine."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "hospital_08",
      "word": "dose",
      "phonetic": "/doʊs/",
      "definition": "the amount of medicine you should take at one time",
      "usage": "剂量、一剂",
      "examples": [
        "What's the proper dose?",
        "Take one dose after each meal."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "hospital_09",
      "word": "recover",
      "phonetic": "/rɪˈkʌvər/",
      "definition": "to become healthy again",
      "usage": "恢复、康复，高考高频",
      "examples": [
        "I hope you recover soon.",
        "She's recovering from a cold."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "hospital_10",
      "word": "examine",
      "phonetic": "/ɪɡˈzæmɪn/",
      "definition": "to look at someone or something carefully",
      "usage": "检查（身体），高考高频动词",
      "examples": [
        "The doctor examined me carefully.",
        "Let me examine your throat."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "hospital_11",
      "word": "pain",
      "phonetic": "/peɪn/",
      "definition": "physical suffering or hurt",
      "usage": "疼痛，高考必考",
      "examples": [
        "I feel a sharp pain in my chest.",
        "Is the pain severe?"
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "hospital_12",
      "word": "serious",
      "phonetic": "/ˈsɪriəs/",
      "definition": "bad or dangerous; important",
      "usage": "严重的、严肃的，高考高频",
      "examples": [
        "Is it serious, doctor?",
        "Don't worry, it's not serious."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "hospital_13",
      "word": "insurance",
      "phonetic": "/ɪnˈʃʊrəns/",
      "definition": "an agreement to pay for medical costs",
      "usage": "保险，高考阅读词",
      "examples": [
        "Does your insurance cover this?",
        "I have health insurance."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "hospital_14",
      "word": "appointment",
      "phonetic": "/əˈpɔɪntmənt/",
      "definition": "an arranged time to see a doctor",
      "usage": "预约、约定，高考高频",
      "examples": [
        "I need to make an appointment.",
        "Do you have an appointment?"
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "hospital_15",
      "word": "emergency",
      "phonetic": "/iˈmɜːrdʒənsi/",
      "definition": "a serious situation needing immediate action",
      "usage": "紧急情况，高考必考",
      "examples": [
        "This is an emergency!",
        "Where's the emergency room?"
      ],
      "exam": true,
      "scenes": []
    }
,
    {
      "id": "hospital_16",
      "word": "register",
      "phonetic": "/ˈredʒɪstər/",
      "definition": "to put your name on an official list",
      "usage": "挂号、登记，医院常用",
      "examples": [
        "Please register at the front desk first.",
        "I need to register before seeing the doctor."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "hospital_17",
      "word": "blood pressure",
      "phonetic": "/blʌd ˈpreʃər/",
      "definition": "the force of blood pushing against artery walls",
      "usage": "血压",
      "examples": [
        "Let me check your blood pressure.",
        "My blood pressure is a bit high."
      ],
      "exam": false,
      "scenes": []
    },
    {
      "id": "hospital_18",
      "word": "swallow",
      "phonetic": "/ˈswɑːloʊ/",
      "definition": "to make food or drink go down your throat",
      "usage": "吞咽",
      "examples": [
        "Does it hurt when you swallow?",
        "I have trouble swallowing."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "hospital_19",
      "word": "allergy",
      "phonetic": "/ˈælərdʒi/",
      "definition": "a bad reaction to certain foods or substances",
      "usage": "过敏",
      "examples": [
        "I have an allergy to peanuts.",
        "Are you allergic to any medicine?"
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "hospital_20",
      "word": "diagnosis",
      "phonetic": "/ˌdaɪəɡˈnoʊsɪs/",
      "definition": "what a doctor decides is wrong with you",
      "usage": "诊断，高考阅读词",
      "examples": [
        "The doctor gave me a clear diagnosis.",
        "What's the diagnosis, doctor?"
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "hospital_21",
      "word": "pharmacy",
      "phonetic": "/ˈfɑːrməsi/",
      "definition": "a place where medicine is prepared and sold",
      "usage": "药房",
      "examples": [
        "You can get this at the pharmacy.",
        "Is there a 24-hour pharmacy nearby?"
      ],
      "exam": true,
      "scenes": []
    }
  ,
    {
      "id": "hospital_50",
      "word": "telemedicine",
      "cn": "\u8fdc\u7a0b\u533b\u7597",
      "example": "You can book a telemedicine appointment and see the doctor from home.",
      "ex_cn": "\u4f60\u53ef\u4ee5\u9884\u7ea6\u8fdc\u7a0b\u533b\u7597\uff0c\u5728\u5bb6\u770b\u533b\u751f\u3002"
    },
    {
      "id": "hospital_51",
      "word": "outpatient",
      "cn": "\u95e8\u8bca",
      "example": "The outpatient department is on the second floor.",
      "ex_cn": "\u95e8\u8bca\u90e8\u5728\u4e8c\u697c\u3002"
    },
    {
      "id": "hospital_52",
      "word": "medical record",
      "cn": "\u75c5\u5386",
      "example": "Your medical records are stored securely in our system.",
      "ex_cn": "\u4f60\u7684\u75c5\u5386\u8d44\u6599\u5b89\u5168\u4fdd\u5b58\u5728\u7cfb\u7edf\u4e2d\u3002"
    },
    {
      "id": "hospital_53",
      "word": "prescription",
      "cn": "\u5904\u65b9",
      "example": "You need a doctor's prescription to get this medicine.",
      "ex_cn": "\u4f60\u9700\u8981\u533b\u751f\u5904\u65b9\u624d\u80fd\u62ff\u5230\u8fd9\u4e2a\u836f\u3002"
    },
    {
      "id": "hospital_54",
      "word": "checkup",
      "cn": "\u4f53\u68c0",
      "example": "I go for my annual checkup every June.",
      "ex_cn": "\u6211\u6bcf\u5e74\u516d\u6708\u53bb\u505a\u5e74\u5ea6\u4f53\u68c0\u3002"
    },
    {
      "id": "hospital_55",
      "word": "vaccination",
      "cn": "\u75ab\u82d7\u63a5\u79cd",
      "example": "Have you had your flu vaccination this year?",
      "ex_cn": "\u4f60\u4eca\u5e74\u6253\u6d41\u611f\u75ab\u82d7\u4e86\u5417\uff1f"
    },
    {
      "id": "hospital_56",
      "word": "side effect",
      "cn": "\u526f\u4f5c\u7528",
      "example": "The medicine might cause some side effects like dizziness.",
      "ex_cn": "\u8fd9\u4e2a\u836f\u53ef\u80fd\u4f1a\u5f15\u8d77\u5934\u6655\u7b49\u526f\u4f5c\u7528\u3002"
    },
    {
      "id": "hospital_57",
      "word": "surgery",
      "cn": "\u624b\u672f",
      "example": "The surgery went well and he's recovering now.",
      "ex_cn": "\u624b\u672f\u5f88\u987a\u5229\uff0c\u4ed6\u6b63\u5728\u5eb7\u590d\u4e2d\u3002"
    },
    {
      "id": "hospital_58",
      "word": "X-ray",
      "cn": "X\u5149",
      "example": "The doctor ordered an X-ray to check for fractures.",
      "ex_cn": "\u533b\u751f\u5f00\u4e86X\u5149\u68c0\u67e5\u662f\u5426\u6709\u9aa8\u6298\u3002"
    },
    {
      "id": "hospital_59",
      "word": "physical therapy",
      "cn": "\u7269\u7406\u6cbb\u7597",
      "example": "After the injury, I need six weeks of physical therapy.",
      "ex_cn": "\u53d7\u4f24\u540e\u6211\u9700\u8981\u516d\u5468\u7684\u7269\u7406\u6cbb\u7597\u3002"
    },
    {
      "id": "hospital_60",
      "word": "wellness",
      "cn": "\u5065\u5eb7\u4fdd\u5065",
      "example": "Many companies offer wellness programs for employees.",
      "ex_cn": "\u5f88\u591a\u516c\u53f8\u90fd\u63d0\u4f9b\u5458\u5de5\u5065\u5eb7\u4fdd\u5065\u8ba1\u5212\u3002"
    },
    {
      "id": "hospital_61",
      "word": "ER / emergency room",
      "cn": "\u6025\u8bca\u5ba4",
      "example": "If the pain gets worse, go straight to the ER.",
      "ex_cn": "\u5982\u679c\u66f4\u75bc\u4e86\uff0c\u76f4\u63a5\u53bb\u6025\u8bca\u5ba4\u3002"
    }
  ],
  "weather": [
    {
      "id": "weather_01",
      "word": "forecast",
      "phonetic": "/ˈfɔːrkæst/",
      "definition": "a prediction of future weather",
      "usage": "天气预报，高考阅读词",
      "examples": [
        "What's the weather forecast for tomorrow?",
        "The forecast says it will rain."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "weather_02",
      "word": "temperature",
      "phonetic": "/ˈtemprətʃər/",
      "definition": "how hot or cold something is",
      "usage": "温度，高考必考",
      "examples": [
        "The temperature dropped sharply.",
        "What's the temperature today?"
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "weather_03",
      "word": "degree",
      "phonetic": "/dɪˈɡriː/",
      "definition": "a unit for measuring temperature",
      "usage": "度（温度），高考高频多义词",
      "examples": [
        "It's 30 degrees today.",
        "The temperature rose by 5 degrees."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "weather_04",
      "word": "humid",
      "phonetic": "/hjuːˈmɪd/",
      "definition": "having a lot of water in the air",
      "usage": "潮湿的",
      "examples": [
        "It's hot and humid today.",
        "Summer in Shanghai is very humid."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "weather_05",
      "word": "freeze",
      "phonetic": "/friːz/",
      "definition": "to become solid because of cold",
      "usage": "结冰、冻住，高考必考",
      "examples": [
        "The water froze overnight.",
        "It's freezing outside!"
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "weather_06",
      "word": "pour",
      "phonetic": "/pɔːr/",
      "definition": "to rain heavily",
      "usage": "（雨）倾盆而下，高考阅读词",
      "examples": [
        "It's pouring outside.",
        "Don't go out - it's pouring with rain."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "weather_07",
      "word": "drizzle",
      "phonetic": "/ˈdrɪzl/",
      "definition": "light rain with very small drops",
      "usage": "毛毛雨，高考阅读词汇",
      "examples": [
        "It's drizzling outside.",
        "A light drizzle started to fall."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "weather_08",
      "word": "climate",
      "phonetic": "/ˈklaɪmət/",
      "definition": "the usual weather conditions in a place",
      "usage": "气候，高考必考",
      "examples": [
        "The climate here is mild.",
        "Climate change is a global issue."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "weather_09",
      "word": "pleasant",
      "phonetic": "/ˈpleznt/",
      "definition": "nice and enjoyable",
      "usage": "宜人的、愉快的，高考高频",
      "examples": [
        "The weather is pleasant today.",
        "What pleasant weather!"
      ],
      "exam": true,
      "scenes": []
    }
,
    {
      "id": "weather_10",
      "word": "sunny",
      "phonetic": "/ˈsʌni/",
      "definition": "full of sunshine",
      "usage": "晴朗的，天气口语高频",
      "examples": [
        "It's a sunny day today.",
        "I hope it stays sunny for the weekend."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "weather_11",
      "word": "cloudy",
      "phonetic": "/ˈklaʊdi/",
      "definition": "covered with clouds",
      "usage": "多云的",
      "examples": [
        "It's cloudy this morning.",
        "The weather forecast says it will be cloudy."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "weather_12",
      "word": "windy",
      "phonetic": "/ˈwɪndi/",
      "definition": "with a lot of wind",
      "usage": "有风的",
      "examples": [
        "It's too windy to go outside.",
        "Hold onto your hat, it's windy!"
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "weather_13",
      "word": "snow",
      "phonetic": "/snoʊ/",
      "definition": "small white ice crystals that fall from the sky",
      "usage": "雪、下雪",
      "examples": [
        "It's supposed to snow tonight.",
        "Look, it's snowing!"
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "weather_14",
      "word": "umbrella",
      "phonetic": "/ʌmˈbrelə/",
      "definition": "a tool used for protection from rain",
      "usage": "雨伞",
      "examples": [
        "Don't forget your umbrella, it might rain.",
        "I left my umbrella on the bus."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "weather_15",
      "word": "fog",
      "phonetic": "/fɒɡ/",
      "definition": "thick cloud near the ground that makes it hard to see",
      "usage": "雾",
      "examples": [
        "There's heavy fog this morning.",
        "The flight was delayed due to fog."
      ],
      "exam": true,
      "scenes": []
    }
  ,
    {
      "id": "weather_50",
      "word": "heatwave",
      "cn": "\u70ed\u6d6a",
      "example": "There's a heatwave this week - temps will reach 40 degrees.",
      "ex_cn": "\u8fd9\u5468\u6709\u70ed\u6d6a\uff0c\u6c14\u6e29\u5c06\u8fbe\u523040\u5ea6\u3002"
    },
    {
      "id": "weather_51",
      "word": "air quality",
      "cn": "\u7a7a\u6c14\u8d28\u91cf",
      "example": "The air quality index is unhealthy today.",
      "ex_cn": "\u4eca\u5929\u7a7a\u6c14\u8d28\u91cf\u6307\u6570\u4e0d\u5065\u5eb7\u3002"
    },
    {
      "id": "weather_52",
      "word": "UV index",
      "cn": "\u7d2b\u5916\u7ebf\u6307\u6570",
      "example": "The UV index is extremely high today - wear sunscreen!",
      "ex_cn": "\u4eca\u5929\u7d2b\u5916\u7ebf\u6307\u6570\u6781\u9ad8\uff0c\u6d82\u9632\u6652\uff01"
    },
    {
      "id": "weather_53",
      "word": "typhoon",
      "cn": "\u53f0\u98ce",
      "example": "A typhoon is approaching - flights might be cancelled.",
      "ex_cn": "\u53f0\u98ce\u6b63\u5728\u9760\u8fd1\uff0c\u822a\u73ed\u53ef\u80fd\u53d6\u6d88\u3002"
    },
    {
      "id": "weather_54",
      "word": "thunderstorm",
      "cn": "\u96f7\u9635\u96e8",
      "example": "A sudden thunderstorm caught us on our way home.",
      "ex_cn": "\u56de\u5bb6\u8def\u4e0a\u7a81\u7136\u9047\u5230\u4e86\u96f7\u9635\u96e8\u3002"
    },
    {
      "id": "weather_55",
      "word": "smog",
      "cn": "\u96fe\u973e",
      "example": "The smog is so thick you can barely see the buildings.",
      "ex_cn": "\u96fe\u973e\u592a\u4e25\u91cd\u4e86\uff0c\u51e0\u4e4e\u770b\u4e0d\u6e05\u5efa\u7b51\u3002"
    },
    {
      "id": "weather_56",
      "word": "heatstroke",
      "cn": "\u4e2d\u6691",
      "example": "Drink plenty of water to avoid heatstroke.",
      "ex_cn": "\u591a\u559d\u6c34\u4ee5\u9632\u4e2d\u6691\u3002"
    },
    {
      "id": "weather_57",
      "word": "raincoat",
      "cn": "\u96e8\u8863",
      "example": "I always carry a raincoat during the rainy season.",
      "ex_cn": "\u6885\u96e8\u5b63\u6211\u5305\u91cc\u5e38\u5907\u4e00\u4ef6\u96e8\u8863\u3002"
    },
    {
      "id": "weather_58",
      "word": "global warming",
      "cn": "\u5168\u7403\u53d8\u6696",
      "example": "The summers keep getting hotter due to global warming.",
      "ex_cn": "\u56e0\u4e3a\u5168\u7403\u53d8\u6696\uff0c\u590f\u5929\u8d8a\u6765\u8d8a\u70ed\u4e86\u3002"
    },
    {
      "id": "weather_59",
      "word": "weather app",
      "cn": "\u5929\u6c14App",
      "example": "My weather app says it'll rain after 5 pm.",
      "ex_cn": "\u6211\u7684\u5929\u6c14App\u8bf4\u4e0b\u53485\u70b9\u540e\u4f1a\u4e0b\u96e8\u3002"
    },
    {
      "id": "weather_60",
      "word": "drought",
      "cn": "\u5e72\u65f1",
      "example": "The city is experiencing its worst drought in decades.",
      "ex_cn": "\u8fd9\u5ea7\u57ce\u5e02\u6b63\u7ecf\u5386\u51e0\u5341\u5e74\u6765\u6700\u4e25\u91cd\u7684\u5e72\u65f1\u3002"
    },
    {
      "id": "weather_61",
      "word": "air conditioner",
      "cn": "\u7a7a\u8c03",
      "example": "The air conditioner is making a strange noise.",
      "ex_cn": "\u7a7a\u8c03\u53d1\u51fa\u5947\u602a\u7684\u58f0\u97f3\u3002"
    }
  ],
  "job": [
    {
      "id": "job_01",
      "word": "interview",
      "phonetic": "/ˈɪntərvjuː/",
      "definition": "a meeting where you are asked questions for a job",
      "usage": "面试，高考高频词",
      "examples": [
        "I have a job interview tomorrow.",
        "The interview went well."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "job_02",
      "word": "experience",
      "phonetic": "/ɪkˈspɪriəns/",
      "definition": "knowledge or skill gained from doing something",
      "usage": "经验、经历，高考必考",
      "examples": [
        "Do you have any work experience?",
        "I gained a lot of experience from this job."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "job_03",
      "word": "qualification",
      "phonetic": "/ˌkwɑːlɪfɪˈkeɪʃn/",
      "definition": "an exam or skill that makes you suitable for a job",
      "usage": "资格、资质，高考阅读词",
      "examples": [
        "What qualifications do you have?",
        "She has all the qualifications for this position."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "job_04",
      "word": "position",
      "phonetic": "/pəˈzɪʃn/",
      "definition": "a job or role in a company",
      "usage": "职位、岗位，高考高频",
      "examples": [
        "I'm applying for the position of manager.",
        "The position has been filled."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "job_05",
      "word": "salary",
      "phonetic": "/ˈsæləri/",
      "definition": "fixed regular pay for work",
      "usage": "薪水，高考高频词",
      "examples": [
        "What's the starting salary?",
        "The salary is negotiable."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "job_06",
      "word": "employ",
      "phonetic": "/ɪmˈplɔɪ/",
      "definition": "to give someone a job",
      "usage": "雇用，高考高频动词",
      "examples": [
        "The company employs over 1,000 people.",
        "She's employed as a teacher."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "job_07",
      "word": "resign",
      "phonetic": "/rɪˈzaɪn/",
      "definition": "to leave a job officially",
      "usage": "辞职，高考阅读词",
      "examples": [
        "He resigned from his position.",
        "She decided to resign."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "job_08",
      "word": "promote",
      "phonetic": "/prəˈmoʊt/",
      "definition": "to give someone a higher position at work",
      "usage": "晋升、促进，高考高频",
      "examples": [
        "She was promoted to manager.",
        "I got promoted last month."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "job_09",
      "word": "career",
      "phonetic": "/kəˈrɪr/",
      "definition": "a job that you do for a long time",
      "usage": "职业、事业，高考高频",
      "examples": [
        "She has a successful career in teaching.",
        "What career do you want to pursue?"
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "job_10",
      "word": "opportunity",
      "phonetic": "/ˌɒpərˈtuːnəti/",
      "definition": "a chance to do something",
      "usage": "机会，高考必考",
      "examples": [
        "This is a great career opportunity.",
        "Don't miss this opportunity!"
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "job_11",
      "word": "colleague",
      "phonetic": "/ˈkɑːliːɡ/",
      "definition": "someone you work with",
      "usage": "同事，高考词汇",
      "examples": [
        "I get along well with my colleagues.",
        "She's a colleague of mine."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "job_12",
      "word": "deadline",
      "phonetic": "/ˈdedlaɪn/",
      "definition": "the latest time to finish something",
      "usage": "截止日期",
      "examples": [
        "The deadline is next Friday.",
        "We need to meet the deadline."
      ],
      "exam": false,
      "scenes": []
    },
    {
      "id": "job_13",
      "word": "responsible",
      "phonetic": "/rɪˈspɑːnsəbl/",
      "definition": "having a duty to do something",
      "usage": "负责的，高考高频形容词",
      "examples": [
        "I'm responsible for customer service.",
        "She's a responsible employee."
      ],
      "exam": true,
      "scenes": []
    }
,
    {
      "id": "job_14",
      "word": "resume",
      "phonetic": "/rɪˈzjuːm/",
      "definition": "a summary of your education and work experience",
      "usage": "简历，求职常用",
      "examples": [
        "Please send your resume to our HR department.",
        "I need to update my resume."
      ],
      "exam": false,
      "scenes": []
    },
    {
      "id": "job_15",
      "word": "hire",
      "phonetic": "/ˈhaɪər/",
      "definition": "to give someone a job",
      "usage": "雇用，高考高频",
      "examples": [
        "The company decided to hire me.",
        "We're hiring new staff this month."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "job_16",
      "word": "manager",
      "phonetic": "/ˈmænɪdʒər/",
      "definition": "a person in charge of a group of workers",
      "usage": "经理、管理者",
      "examples": [
        "I'd like to speak to the manager.",
        "She's the sales manager."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "job_17",
      "word": "duty",
      "phonetic": "/ˈduːti/",
      "definition": "something you have to do as part of your job",
      "usage": "职责、责任，高考必考",
      "examples": [
        "What are your main duties at work?",
        "It's my duty to ensure everything runs smoothly."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "job_18",
      "word": "overtime",
      "phonetic": "/ˈoʊvərtaɪm/",
      "definition": "time spent working beyond normal hours",
      "usage": "加班",
      "examples": [
        "I had to work overtime last night.",
        "Do you get paid for overtime?"
      ],
      "exam": false,
      "scenes": []
    },
    {
      "id": "job_19",
      "word": "pension",
      "phonetic": "/ˈpenʃn/",
      "definition": "money paid regularly to a retired person",
      "usage": "养老金、退休金，高考阅读词",
      "examples": [
        "The company offers a good pension plan.",
        "He lives on his pension after retirement."
      ],
      "exam": true,
      "scenes": []
    }
  ,
    {
      "id": "job_50",
      "word": "remote work",
      "cn": "\u8fdc\u7a0b\u529e\u516c",
      "example": "I've been doing remote work since last year and love it.",
      "ex_cn": "\u53bb\u5e74\u4ee5\u6765\u6211\u4e00\u76f4\u8fdc\u7a0b\u529e\u516c\uff0c\u5f88\u559c\u6b22\u3002"
    },
    {
      "id": "job_51",
      "word": "hybrid",
      "cn": "\u6df7\u5408\u529e\u516c",
      "example": "Our company has a hybrid model - two days in office.",
      "ex_cn": "\u6211\u4eec\u516c\u53f8\u91c7\u7528\u6df7\u5408\u529e\u516c\uff0c\u4e24\u5929\u53bb\u516c\u53f8\u3002"
    },
    {
      "id": "job_52",
      "word": "layoff",
      "cn": "\u88c1\u5458",
      "example": "There were massive layoffs in the tech industry.",
      "ex_cn": "\u79d1\u6280\u884c\u4e1a\u6709\u5927\u89c4\u6a21\u88c1\u5458\u3002"
    },
    {
      "id": "job_53",
      "word": "onboarding",
      "cn": "\u5165\u804c\u57f9\u8bad",
      "example": "The onboarding process helped me understand the culture.",
      "ex_cn": "\u5165\u804c\u57f9\u8bad\u5e2e\u6211\u4e86\u89e3\u4e86\u516c\u53f8\u6587\u5316\u3002"
    },
    {
      "id": "job_54",
      "word": "performance review",
      "cn": "\u7ee9\u6548\u8003\u6838",
      "example": "I have my annual performance review next week.",
      "ex_cn": "\u4e0b\u5468\u662f\u6211\u7684\u5e74\u5ea6\u7ee9\u6548\u8003\u6838\u3002"
    },
    {
      "id": "job_55",
      "word": "side hustle",
      "cn": "\u526f\u4e1a",
      "example": "Many people have a side hustle for extra income.",
      "ex_cn": "\u5f88\u591a\u4eba\u6709\u526f\u4e1a\u6765\u589e\u52a0\u6536\u5165\u3002"
    },
    {
      "id": "job_56",
      "word": "networking",
      "cn": "\u4eba\u8109\u62d3\u5c55",
      "example": "Industry events are great for networking.",
      "ex_cn": "\u884c\u4e1a\u6d3b\u52a8\u5bf9\u62d3\u5c55\u4eba\u8109\u5f88\u6709\u5e2e\u52a9\u3002"
    },
    {
      "id": "job_57",
      "word": "work-life balance",
      "cn": "\u5de5\u4f5c\u751f\u6d3b\u5e73\u8861",
      "example": "I quit because there was no work-life balance.",
      "ex_cn": "\u6211\u8f9e\u804c\u4e86\uff0c\u56e0\u4e3a\u5b8c\u5168\u6ca1\u6709\u5de5\u4f5c\u751f\u6d3b\u5e73\u8861\u3002"
    },
    {
      "id": "job_58",
      "word": "quit",
      "cn": "\u8f9e\u804c",
      "example": "She decided to quit and start her own business.",
      "ex_cn": "\u5979\u51b3\u5b9a\u8f9e\u804c\u521b\u4e1a\u3002"
    },
    {
      "id": "job_59",
      "word": "burnout",
      "cn": "\u804c\u4e1a\u5026\u6020",
      "example": "Working 80 hours a week led to serious burnout.",
      "ex_cn": "\u6bcf\u5468\u5de5\u4f5c80\u5c0f\u65f6\u5bfc\u81f4\u4e86\u4e25\u91cd\u7684\u804c\u4e1a\u5026\u6020\u3002"
    },
    {
      "id": "job_60",
      "word": "freelance",
      "cn": "\u81ea\u7531\u804c\u4e1a",
      "example": "He switched to freelance to travel more.",
      "ex_cn": "\u4ed6\u8f6c\u505a\u81ea\u7531\u804c\u4e1a\u4e86\uff0c\u8fd9\u6837\u80fd\u591a\u65c5\u884c\u3002"
    },
    {
      "id": "job_61",
      "word": "internship",
      "cn": "\u5b9e\u4e60",
      "example": "I did a summer internship at a startup.",
      "ex_cn": "\u6211\u5728\u4e00\u5bb6\u521d\u521b\u516c\u53f8\u505a\u4e86\u6691\u671f\u5b9e\u4e60\u3002"
    },
    {
      "id": "job_62",
      "word": "job hopping",
      "cn": "\u8df3\u69fd",
      "example": "Job hopping every two years is common in tech.",
      "ex_cn": "\u6bcf\u4e24\u5e74\u8df3\u4e00\u6b21\u69fd\u5728\u79d1\u6280\u884c\u4e1a\u5f88\u5e38\u89c1\u3002"
    }
  ],
  "chat": [
    {
      "id": "chat_01",
      "word": "weekend",
      "phonetic": "/ˈwiːkend/",
      "definition": "Saturday and Sunday",
      "usage": "周末，口语高频",
      "examples": [
        "How was your weekend?",
        "I had a relaxing weekend."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "chat_02",
      "word": "plan",
      "phonetic": "/plæn/",
      "definition": "an idea about what to do in the future",
      "usage": "计划，高考高频",
      "examples": [
        "Do you have any plans for tonight?",
        "Let's make a plan."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "chat_03",
      "word": "recent",
      "phonetic": "/ˈriːsnt/",
      "definition": "happening not long ago",
      "usage": "最近的，高考必考",
      "examples": [
        "Have you seen any good movies recently?",
        "I started learning guitar recently."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "chat_04",
      "word": "mention",
      "phonetic": "/ˈmenʃn/",
      "definition": "to say something quickly or in passing",
      "usage": "提到、说起，高考高频",
      "examples": [
        "You mentioned you like hiking.",
        "Don't mention it."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "chat_05",
      "word": "opinion",
      "phonetic": "/əˈpɪnjən/",
      "definition": "what you think about something",
      "usage": "观点、看法，高考必考",
      "examples": [
        "In my opinion, this movie is great.",
        "What's your opinion on this?"
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "chat_06",
      "word": "agree",
      "phonetic": "/əˈɡriː/",
      "definition": "to share the same opinion",
      "usage": "同意，高考高频动词",
      "examples": [
        "I totally agree with you.",
        "I couldn't agree more."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "chat_07",
      "word": "suppose",
      "phonetic": "/səˈpoʊz/",
      "definition": "to think or believe something is true",
      "usage": "认为、假设，高考必考",
      "examples": [
        "I suppose you're right.",
        "What do you suppose happened?"
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "chat_08",
      "word": "imagine",
      "phonetic": "/ɪˈmædʒɪn/",
      "definition": "to form a picture in your mind",
      "usage": "想象，高考高频",
      "examples": [
        "Can you imagine living abroad?",
        "I can't imagine life without music."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "chat_09",
      "word": "impress",
      "phonetic": "/ɪmˈpres/",
      "definition": "to make someone admire you",
      "usage": "给……留下印象，高考高频",
      "examples": [
        "I was impressed by your speech.",
        "What impressed you most?"
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "chat_10",
      "word": "amazing",
      "phonetic": "/əˈmeɪzɪŋ/",
      "definition": "very good; causing great surprise",
      "usage": "令人惊奇的、太棒了，高考高频",
      "examples": [
        "That's amazing!",
        "The view from the top is amazing."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "chat_11",
      "word": "gossip",
      "phonetic": "/ˈɡɑːsɪp/",
      "definition": "informal talk about other people's lives",
      "usage": "八卦、闲聊",
      "examples": [
        "Don't gossip about others.",
        "We were just having a gossip."
      ],
      "exam": false,
      "scenes": []
    }
,
    {
      "id": "chat_12",
      "word": "guess",
      "phonetic": "/ɡes/",
      "definition": "to give an answer without knowing all the facts",
      "usage": "猜，闲聊常用",
      "examples": [
        "Guess what happened today!",
        "Can you guess where I went?"
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "chat_13",
      "word": "anyway",
      "phonetic": "/ˈeniweɪ/",
      "definition": "used to change the subject or end a conversation",
      "usage": "不管怎样、话说回来，口语高频",
      "examples": [
        "Anyway, let's talk about something else.",
        "That's not important anyway."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "chat_14",
      "word": "laugh",
      "phonetic": "/læf/",
      "definition": "to make sounds because something is funny",
      "usage": "笑，闲聊常用",
      "examples": [
        "You made me laugh so hard!",
        "We laughed about it for hours."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "chat_15",
      "word": "joke",
      "phonetic": "/dʒoʊk/",
      "definition": "something funny that someone says",
      "usage": "笑话、开玩笑",
      "examples": [
        "He told me a really funny joke.",
        "Are you joking?"
      ],
      "exam": false,
      "scenes": []
    },
    {
      "id": "chat_16",
      "word": "actually",
      "phonetic": "/ˈæktʃuəli/",
      "definition": "used to emphasize a fact or correct someone",
      "usage": "实际上、事实上，口语高频",
      "examples": [
        "Actually, I've never been there before.",
        "Actually, that's not what I meant."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "chat_17",
      "word": "seriously",
      "phonetic": "/ˈsɪriəsli/",
      "definition": "in a serious way; used to show you mean it",
      "usage": "认真地说、说真的，口语常用",
      "examples": [
        "Seriously, you need to try this cake.",
        "Are you seriously thinking of quitting?"
      ],
      "exam": false,
      "scenes": []
    }
  ,
    {
      "id": "chat_50",
      "word": "literally",
      "cn": "\u7b80\u76f4/\u771f\u7684",
      "example": "I literally died laughing when he told that story.",
      "ex_cn": "\u4ed6\u8bb2\u90a3\u4e2a\u6545\u4e8b\u7684\u65f6\u5019\u6211\u7b80\u76f4\u7b11\u6b7b\u4e86\u3002"
    },
    {
      "id": "chat_51",
      "word": "random",
      "cn": "\u968f\u673a\u7684/\u7a81\u7136\u7684",
      "example": "She sent me a random meme at 3 am.",
      "ex_cn": "\u5979\u51cc\u6668\u4e09\u70b9\u7a81\u7136\u7ed9\u6211\u53d1\u4e86\u4e2a\u8868\u60c5\u5305\u3002"
    },
    {
      "id": "chat_52",
      "word": "FOMO",
      "cn": "\u9519\u5931\u6050\u60e7",
      "example": "I have major FOMO seeing everyone's travel photos.",
      "ex_cn": "\u770b\u5230\u5927\u5bb6\u65c5\u884c\u7167\u6211\u8d85\u6015\u9519\u8fc7\u3002"
    },
    {
      "id": "chat_53",
      "word": "mood",
      "cn": "\u5fc3\u60c5/\u72b6\u6001",
      "example": "That's so my mood right now - tired and just want to stay home.",
      "ex_cn": "\u90a3\u5b8c\u5168\u662f\u6211\u73b0\u5728\u7684\u72b6\u6001\uff0c\u7d2f\u4e86\u53ea\u60f3\u5b85\u5bb6\u3002"
    },
    {
      "id": "chat_54",
      "word": "no worries",
      "cn": "\u6ca1\u4e8b/\u4e0d\u5ba2\u6c14",
      "example": "Thanks! No worries, happy to help!",
      "ex_cn": "\u8c22\u8c22\uff01\u4e0d\u5ba2\u6c14\uff0c\u4e50\u610f\u5e2e\u5fd9\uff01"
    },
    {
      "id": "chat_55",
      "word": "same here",
      "cn": "\u6211\u4e5f\u662f",
      "example": "I'm starving. Same here, let's eat!",
      "ex_cn": "\u6211\u997f\u6b7b\u4e86\u3002\u6211\u4e5f\u662f\uff0c\u53bb\u5403\u5427\uff01"
    },
    {
      "id": "chat_56",
      "word": "catch up",
      "cn": "\u53d9\u65e7",
      "example": "We should grab coffee and catch up soon!",
      "ex_cn": "\u6211\u4eec\u5e94\u8be5\u627e\u65f6\u95f4\u559d\u5496\u5561\u53d9\u53d9\u65e7\uff01"
    },
    {
      "id": "chat_57",
      "word": "chill",
      "cn": "\u653e\u677e/\u6de1\u5b9a",
      "example": "Just chill, everything will be fine.",
      "ex_cn": "\u653e\u8f7b\u677e\uff0c\u4e00\u5207\u90fd\u4f1a\u597d\u8d77\u6765\u7684\u3002"
    },
    {
      "id": "chat_58",
      "word": "go-to",
      "cn": "\u9996\u9009",
      "example": "This ramen place is my go-to comfort food spot.",
      "ex_cn": "\u8fd9\u5bb6\u62c9\u9762\u5e97\u662f\u6211\u5403\u6cbb\u6108\u98df\u7269\u7684\u9996\u9009\u3002"
    },
    {
      "id": "chat_59",
      "word": "guilty pleasure",
      "cn": "\u7f6a\u6076\u7684\u5feb\u4e50",
      "example": "Binge-watching reality shows is my guilty pleasure.",
      "ex_cn": "\u5237\u771f\u4eba\u79c0\u662f\u6211\u7684\u7f6a\u6076\u5feb\u4e50\u3002"
    },
    {
      "id": "chat_60",
      "word": "tbh",
      "cn": "\u8bf4\u5b9e\u8bdd",
      "example": "TBH, I didn't really like the movie that much.",
      "ex_cn": "\u8bf4\u5b9e\u8bdd\uff0c\u6211\u6ca1\u6709\u90a3\u4e48\u559c\u6b22\u90a3\u90e8\u7535\u5f71\u3002"
    },
    {
      "id": "chat_61",
      "word": "for real",
      "cn": "\u771f\u7684\u5047\u7684",
      "example": "You're moving to Tokyo? For real?",
      "ex_cn": "\u4f60\u8981\u642c\u53bb\u4e1c\u4eac\uff1f\u771f\u7684\u5047\u7684\uff1f"
    }
  ],
  "neighbor": [
    {
      "id": "neighbor_01",
      "word": "neighbor",
      "phonetic": "/ˈneɪbər/",
      "definition": "someone who lives near you",
      "usage": "邻居，高考高频词",
      "examples": [
        "I have friendly neighbors.",
        "Our neighbors are very kind."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "neighbor_02",
      "word": "community",
      "phonetic": "/kəˈmjuːnəti/",
      "definition": "a group of people living in the same area",
      "usage": "社区，高考必考",
      "examples": [
        "Our community has a garden.",
        "Community service is important."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "neighbor_03",
      "word": "environment",
      "phonetic": "/ɪnˈvaɪrənmənt/",
      "definition": "the surroundings or conditions",
      "usage": "环境，高考必考",
      "examples": [
        "We should protect the environment.",
        "The living environment here is nice."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "neighbor_04",
      "word": "noise",
      "phonetic": "/nɔɪz/",
      "definition": "unwanted or loud sound",
      "usage": "噪音，高考高频词",
      "examples": [
        "There's too much noise from the street.",
        "Please keep the noise down."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "neighbor_05",
      "word": "delivery",
      "phonetic": "/dɪˈlɪvəri/",
      "definition": "the act of bringing something to a place",
      "usage": "递送、快递，高考阅读词",
      "examples": [
        "Where should I put the delivery?",
        "The delivery arrived this morning."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "neighbor_06",
      "word": "complain",
      "phonetic": "/kəmˈpleɪn/",
      "definition": "to say you are not satisfied with something",
      "usage": "抱怨、投诉，高考高频动词",
      "examples": [
        "Some neighbors complained about the noise.",
        "I need to complain about the service."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "neighbor_07",
      "word": "friendly",
      "phonetic": "/ˈfrendli/",
      "definition": "kind and pleasant",
      "usage": "友好的，高考高频形容词",
      "examples": [
        "The people in this neighborhood are very friendly.",
        "She gave me a friendly smile."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "neighbor_08",
      "word": "helpful",
      "phonetic": "/ˈhelpfl/",
      "definition": "willing to help; useful",
      "usage": "有帮助的，高考高频",
      "examples": [
        "Our neighbors are very helpful.",
        "Thank you, that was very helpful."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "neighbor_09",
      "word": "harmony",
      "phonetic": "/ˈhɑːrməni/",
      "definition": "a peaceful and friendly relationship",
      "usage": "和谐、融洽，高考阅读词",
      "examples": [
        "We live in harmony with our neighbors.",
        "Social harmony is important."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "neighbor_10",
      "word": "manage",
      "phonetic": "/ˈmænɪdʒ/",
      "definition": "to be in charge of; to succeed in doing",
      "usage": "管理；设法做到，高考高频动词",
      "examples": [
        "She manages the apartment building.",
        "I managed to fix the problem."
      ],
      "exam": true,
      "scenes": []
    }
,
    {
      "id": "neighbor_11",
      "word": "apartment",
      "phonetic": "/əˈpɑːrtmənt/",
      "definition": "a set of rooms to live in, like a flat",
      "usage": "公寓，邻里话题常用",
      "examples": [
        "I live in apartment 3B.",
        "Our apartment building has a shared garden."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "neighbor_12",
      "word": "upstairs",
      "phonetic": "/ˈʌpsteərz/",
      "definition": "on a higher floor",
      "usage": "楼上",
      "examples": [
        "The neighbors upstairs are very noisy.",
        "She lives in the apartment upstairs."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "neighbor_13",
      "word": "downstairs",
      "phonetic": "/daʊnˈsteərz/",
      "definition": "on a lower floor",
      "usage": "楼下",
      "examples": [
        "The family downstairs has a dog.",
        "I can hear music from downstairs."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "neighbor_14",
      "word": "security",
      "phonetic": "/sɪˈkjʊrəti/",
      "definition": "safety measures to protect a place",
      "usage": "安保、安全，高考必考",
      "examples": [
        "Our community has 24-hour security.",
        "Please tell the security guard at the gate."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "neighbor_15",
      "word": "gate",
      "phonetic": "/ɡeɪt/",
      "definition": "a barrier at the entrance of a building or area",
      "usage": "大门、小区入口",
      "examples": [
        "The gate is locked after 10 pm.",
        "Please close the gate behind you."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "neighbor_16",
      "word": "elevator",
      "phonetic": "/ˈelɪveɪtər/",
      "definition": "a machine that carries people up and down in a building",
      "usage": "电梯",
      "examples": [
        "Take the elevator to the 5th floor.",
        "The elevator is out of order."
      ],
      "exam": true,
      "scenes": []
    }
  ,
    {
      "id": "neighbor_50",
      "word": "HOA",
      "cn": "\u4e1a\u4e3b\u534f\u4f1a",
      "example": "The HOA requires approval for exterior changes.",
      "ex_cn": "\u4e1a\u4e3b\u534f\u4f1a\u89c4\u5b9a\u5916\u90e8\u6539\u52a8\u9700\u8981\u5ba1\u6279\u3002"
    },
    {
      "id": "neighbor_51",
      "word": "property management",
      "cn": "\u7269\u4e1a\u7ba1\u7406",
      "example": "Call property management if the elevator breaks.",
      "ex_cn": "\u7535\u68af\u574f\u4e86\u5c31\u7ed9\u7269\u4e1a\u6253\u7535\u8bdd\u3002"
    },
    {
      "id": "neighbor_52",
      "word": "shared space",
      "cn": "\u5171\u4eab\u7a7a\u95f4",
      "example": "The rooftop is a shared space for all residents.",
      "ex_cn": "\u5929\u53f0\u662f\u6240\u6709\u4f4f\u6237\u7684\u5171\u4eab\u7a7a\u95f4\u3002"
    },
    {
      "id": "neighbor_53",
      "word": "package",
      "cn": "\u5feb\u9012\u5305\u88f9",
      "example": "Packages are left at the front desk if you're out.",
      "ex_cn": "\u4f60\u4e0d\u5728\u5bb6\u65f6\u5feb\u9012\u653e\u5728\u524d\u53f0\u3002"
    },
    {
      "id": "neighbor_54",
      "word": "neighborly",
      "cn": "\u7766\u90bb\u53cb\u597d\u7684",
      "example": "It's good to be neighborly with people next door.",
      "ex_cn": "\u548c\u90bb\u5c45\u7766\u90bb\u53cb\u597d\u603b\u662f\u4e0d\u9519\u7684\u3002"
    },
    {
      "id": "neighbor_55",
      "word": "parking permit",
      "cn": "\u505c\u8f66\u8bb8\u53ef\u8bc1",
      "example": "You need a permit to park in the community garage.",
      "ex_cn": "\u5728\u5c0f\u533a\u8f66\u5e93\u505c\u8f66\u9700\u8981\u8bb8\u53ef\u8bc1\u3002"
    },
    {
      "id": "neighbor_56",
      "word": "sublet",
      "cn": "\u8f6c\u79df",
      "example": "I'm subletting my apartment while I travel.",
      "ex_cn": "\u6211\u53bb\u65c5\u884c\u671f\u95f4\u628a\u516c\u5bd3\u8f6c\u79df\u51fa\u53bb\u4e86\u3002"
    },
    {
      "id": "neighbor_57",
      "word": "soundproof",
      "cn": "\u9694\u97f3",
      "example": "The walls aren't soundproof - I hear my neighbor's TV.",
      "ex_cn": "\u5899\u4e0d\u592a\u9694\u97f3\uff0c\u6211\u80fd\u542c\u5230\u90bb\u5c45\u7684\u7535\u89c6\u58f0\u3002"
    },
    {
      "id": "neighbor_58",
      "word": "maintenance fee",
      "cn": "\u7269\u4e1a\u8d39",
      "example": "The maintenance fee covers cleaning and security.",
      "ex_cn": "\u7269\u4e1a\u8d39\u5305\u62ec\u6e05\u6d01\u548c\u5b89\u4fdd\u3002"
    },
    {
      "id": "neighbor_59",
      "word": "lease",
      "cn": "\u79df\u7ea6",
      "example": "We signed a one-year lease with option to renew.",
      "ex_cn": "\u6211\u4eec\u7b7e\u4e86\u4e00\u5e74\u79df\u7ea6\uff0c\u53ef\u7eed\u7ea6\u3002"
    },
    {
      "id": "neighbor_60",
      "word": "landlord",
      "cn": "\u623f\u4e1c",
      "example": "Our landlord is very responsive about repairs.",
      "ex_cn": "\u6211\u4eec\u623f\u4e1c\u5bf9\u7ef4\u4fee\u54cd\u5e94\u5f88\u5feb\u3002"
    },
    {
      "id": "neighbor_61",
      "word": "security camera",
      "cn": "\u76d1\u63a7\u6444\u50cf\u5934",
      "example": "There are security cameras in the lobby.",
      "ex_cn": "\u5927\u5802\u6709\u76d1\u63a7\u6444\u50cf\u5934\u3002"
    }
  ],
  "travel": [
    {
      "id": "travel_01",
      "word": "reservation",
      "phonetic": "/ˌrezərˈveɪʃn/",
      "definition": "an arrangement to keep a room for you",
      "usage": "预订、预约，高考阅读词",
      "examples": [
        "I have a reservation under the name Wang.",
        "Can I make a reservation?"
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "travel_02",
      "word": "check in",
      "phonetic": "/tʃek ɪn/",
      "definition": "to arrive and register at a hotel",
      "usage": "办理入住",
      "examples": [
        "What time can we check in?",
        "We checked in at 3 pm."
      ],
      "exam": false,
      "scenes": []
    },
    {
      "id": "travel_03",
      "word": "check out",
      "phonetic": "/tʃek aʊt/",
      "definition": "to leave a hotel after paying",
      "usage": "退房",
      "examples": [
        "Check-out time is 12 noon.",
        "We need to check out by 11 am."
      ],
      "exam": false,
      "scenes": []
    },
    {
      "id": "travel_04",
      "word": "luggage",
      "phonetic": "/ˈlʌɡɪdʒ/",
      "definition": "bags and suitcases for travel",
      "usage": "行李，高考词汇",
      "examples": [
        "Can I leave my luggage here?",
        "How many pieces of luggage do you have?"
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "travel_05",
      "word": "facility",
      "phonetic": "/fəˈsɪləti/",
      "definition": "a service or feature provided by a place",
      "usage": "设施，高考阅读高频词",
      "examples": [
        "Does the hotel have gym facilities?",
        "The facilities here are excellent."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "travel_06",
      "word": "available",
      "phonetic": "/əˈveɪləbl/",
      "definition": "free for use",
      "usage": "有空的、可使用的，高考必考",
      "examples": [
        "Is breakfast available?",
        "Are there any rooms available?"
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "travel_07",
      "word": "charge",
      "phonetic": "/tʃɑːrdʒ/",
      "definition": "to ask for payment; the cost of something",
      "usage": "收费；费用，高考高频多义词",
      "examples": [
        "Is there an extra charge for wifi?",
        "How much do you charge per night?"
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "travel_08",
      "word": "view",
      "phonetic": "/vjuː/",
      "definition": "what you can see from a place",
      "usage": "景色、视野，高考高频词",
      "examples": [
        "We have a room with a sea view.",
        "The view from the window is beautiful."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "travel_09",
      "word": "cancel",
      "phonetic": "/ˈkænsl/",
      "definition": "to decide that something will not happen",
      "usage": "取消，高考高频动词",
      "examples": [
        "Can I cancel my reservation?",
        "The flight was cancelled due to weather."
      ],
      "exam": true,
      "scenes": []
    }
,
    {
      "id": "travel_10",
      "word": "passport",
      "phonetic": "/ˈpæspɔːrt/",
      "definition": "an official document for traveling abroad",
      "usage": "护照，旅行必备",
      "examples": [
        "Can I see your passport, please?",
        "Make sure your passport is valid."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "travel_11",
      "word": "suite",
      "phonetic": "/swiːt/",
      "definition": "a set of rooms in a hotel",
      "usage": "套房",
      "examples": [
        "We booked a suite with a sea view.",
        "The honeymoon suite is on the top floor."
      ],
      "exam": false,
      "scenes": []
    },
    {
      "id": "travel_12",
      "word": "check-in",
      "phonetic": "/tʃek ɪn/",
      "definition": "the process of arriving and registering at a hotel or airport",
      "usage": "办理入住/值机",
      "examples": [
        "Online check-in is available 24 hours before the flight.",
        "Check-in time is 2 pm."
      ],
      "exam": false,
      "scenes": []
    },
    {
      "id": "travel_13",
      "word": "wake-up call",
      "phonetic": "/ˈweɪk ʌp kɔːl/",
      "definition": "a phone call from the hotel to wake you up",
      "usage": "叫醒服务",
      "examples": [
        "Can I have a wake-up call at 7 am?",
        "Set a wake-up call for tomorrow morning."
      ],
      "exam": false,
      "scenes": []
    },
    {
      "id": "travel_14",
      "word": "room service",
      "phonetic": "/ruːm ˈsɜːrvɪs/",
      "definition": "food and drink delivered to your hotel room",
      "usage": "客房送餐服务",
      "examples": [
        "Let's order room service for dinner.",
        "Room service is available 24 hours."
      ],
      "exam": false,
      "scenes": []
    },
    {
      "id": "travel_15",
      "word": "cancellation",
      "phonetic": "/ˌkænsəˈleɪʃn/",
      "definition": "the act of deciding not to go ahead with a booking",
      "usage": "取消预订",
      "examples": [
        "What's the cancellation policy?",
        "Free cancellation up to 24 hours before."
      ],
      "exam": true,
      "scenes": []
    }
  ,
    {
      "id": "travel_50",
      "word": "staycation",
      "cn": "\u5c45\u5bb6\u5ea6\u5047",
      "example": "We're having a staycation this year - exploring our own city.",
      "ex_cn": "\u4eca\u5e74\u6211\u4eec\u5c45\u5bb6\u5ea6\u5047\uff0c\u63a2\u7d22\u81ea\u5df1\u7684\u57ce\u5e02\u3002"
    },
    {
      "id": "travel_51",
      "word": "Airbnb",
      "cn": "\u6c11\u5bbf",
      "example": "We booked a cozy Airbnb in the mountains.",
      "ex_cn": "\u6211\u4eec\u5728\u5c71\u91cc\u8ba2\u4e86\u4e2a\u6e29\u99a8\u7684\u6c11\u5bbf\u3002"
    },
    {
      "id": "travel_52",
      "word": "all-inclusive",
      "cn": "\u5168\u5305\u5f0f",
      "example": "We booked an all-inclusive resort - everything is covered.",
      "ex_cn": "\u6211\u4eec\u8ba2\u4e86\u5168\u5305\u5f0f\u5ea6\u5047\u6751\uff0c\u4ec0\u4e48\u90fd\u5305\u62ec\u4e86\u3002"
    },
    {
      "id": "travel_53",
      "word": "jet lag",
      "cn": "\u65f6\u5dee",
      "example": "I had terrible jet lag after the 15-hour flight.",
      "ex_cn": "\u98de\u4e8615\u4e2a\u5c0f\u65f6\u540e\u65f6\u5dee\u53cd\u5e94\u5f88\u4e25\u91cd\u3002"
    },
    {
      "id": "travel_54",
      "word": "layover",
      "cn": "\u4e2d\u8f6c\u505c\u7559",
      "example": "We have a three-hour layover in Dubai.",
      "ex_cn": "\u6211\u4eec\u5728\u8fea\u62dc\u4e2d\u8f6c\u505c\u7559\u4e09\u5c0f\u65f6\u3002"
    },
    {
      "id": "travel_55",
      "word": "travel hack",
      "cn": "\u7701\u94b1\u5999\u62db",
      "example": "Here's a travel hack - book flights on Tuesday.",
      "ex_cn": "\u5206\u4eab\u4e00\u4e2a\u65c5\u884c\u7a8d\u95e8\uff1a\u5468\u4e8c\u8ba2\u673a\u7968\u6700\u4fbf\u5b9c\u3002"
    },
    {
      "id": "travel_56",
      "word": "digital nomad",
      "cn": "\u6570\u5b57\u6e38\u6c11",
      "example": "She works remotely while traveling the world - a true digital nomad.",
      "ex_cn": "\u5979\u4e00\u8fb9\u8fdc\u7a0b\u5de5\u4f5c\u4e00\u8fb9\u65c5\u884c\u4e16\u754c\uff0c\u771f\u6b63\u7684\u6570\u5b57\u6e38\u6c11\u3002"
    },
    {
      "id": "travel_57",
      "word": "overbooked",
      "cn": "\u8d85\u552e",
      "example": "The flight was overbooked and they asked for volunteers.",
      "ex_cn": "\u822a\u73ed\u8d85\u552e\u4e86\uff0c\u5728\u5f81\u6c42\u81ea\u613f\u6539\u7b7e\u7684\u4eba\u3002"
    },
    {
      "id": "travel_58",
      "word": "upgrade",
      "cn": "\u5347\u7ea7",
      "example": "We got a free upgrade to a suite!",
      "ex_cn": "\u6211\u4eec\u514d\u8d39\u5347\u7ea7\u5230\u4e86\u5957\u623f\uff01"
    },
    {
      "id": "travel_59",
      "word": "packing list",
      "cn": "\u884c\u674e\u6e05\u5355",
      "example": "I always make a packing list before a trip.",
      "ex_cn": "\u6211\u65c5\u884c\u524d\u603b\u662f\u5217\u4e2a\u884c\u674e\u6e05\u5355\u3002"
    },
    {
      "id": "travel_60",
      "word": "carry-on",
      "cn": "\u624b\u63d0\u884c\u674e",
      "example": "I only travel with a carry-on - no checked luggage.",
      "ex_cn": "\u6211\u65c5\u884c\u53ea\u5e26\u624b\u63d0\u884c\u674e\uff0c\u4e0d\u6258\u8fd0\u3002"
    },
    {
      "id": "travel_61",
      "word": "travel insurance",
      "cn": "\u65c5\u884c\u4fdd\u9669",
      "example": "Never travel without travel insurance - just in case.",
      "ex_cn": "\u65c5\u884c\u4e00\u5b9a\u4e70\u4fdd\u9669\uff0c\u4ee5\u9632\u4e07\u4e00\u3002"
    }
  ],
  "movie": [
    {
      "id": "movie_01",
      "word": "ticket",
      "phonetic": "/ˈtɪkɪt/",
      "definition": "a piece of paper that allows you to enter a place",
      "usage": "票，高考高频词",
      "examples": [
        "I bought two tickets for the movie.",
        "How much is the ticket?"
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "movie_02",
      "word": "seat",
      "phonetic": "/siːt/",
      "definition": "a place to sit",
      "usage": "座位",
      "examples": [
        "Let's find our seats.",
        "We have good seats in the middle."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "movie_03",
      "word": "audience",
      "phonetic": "/ˈɔːdiəns/",
      "definition": "a group of people watching a show",
      "usage": "观众，高考必考",
      "examples": [
        "The audience loved the performance.",
        "There was a large audience."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "movie_04",
      "word": "performance",
      "phonetic": "/pərˈfɔːrməns/",
      "definition": "a show in front of an audience",
      "usage": "表演、演出、表现，高考高频",
      "examples": [
        "The performance was outstanding.",
        "Her performance in the play was amazing."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "movie_05",
      "word": "review",
      "phonetic": "/rɪˈvjuː/",
      "definition": "a judge of how good something is",
      "usage": "评论、评价，高考高频词",
      "examples": [
        "The movie got great reviews.",
        "I read a review before watching it."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "movie_06",
      "word": "recommend",
      "phonetic": "/ˌrekəˈmend/",
      "definition": "to suggest something good",
      "usage": "推荐，高考高频",
      "examples": [
        "I highly recommend this movie.",
        "Can you recommend a good film?"
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "movie_07",
      "word": "plot",
      "phonetic": "/plɑːt/",
      "definition": "the story of a movie or book",
      "usage": "情节，高考阅读词",
      "examples": [
        "The plot was very interesting.",
        "I didn't understand the plot."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "movie_08",
      "word": "character",
      "phonetic": "/ˈkærəktər/",
      "definition": "a person in a movie or story",
      "usage": "角色、人物；性格，高考必考",
      "examples": [
        "The main character is a detective.",
        "I love the characters in this show."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "movie_09",
      "word": "effect",
      "phonetic": "/ɪˈfekt/",
      "definition": "a result; a change caused by something",
      "usage": "效果、影响，高考必考",
      "examples": [
        "The special effects were amazing.",
        "The movie had a powerful effect on me."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "movie_10",
      "word": "scene",
      "phonetic": "/siːn/",
      "definition": "a part of a movie or play",
      "usage": "场景、镜头，高考高频词",
      "examples": [
        "My favorite scene is the ending.",
        "This scene made me cry."
      ],
      "exam": true,
      "scenes": []
    }
,
    {
      "id": "movie_11",
      "word": "director",
      "phonetic": "/dəˈrektər/",
      "definition": "the person who controls making a movie",
      "usage": "导演",
      "examples": [
        "Who's the director of this film?",
        "He's my favorite movie director."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "movie_12",
      "word": "actor",
      "phonetic": "/ˈæktər/",
      "definition": "a person who performs in movies or plays",
      "usage": "演员",
      "examples": [
        "The actors did an amazing job.",
        "Who is your favorite actor?"
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "movie_13",
      "word": "trailer",
      "phonetic": "/ˈtreɪlər/",
      "definition": "a short preview of a movie",
      "usage": "预告片",
      "examples": [
        "Let's watch the trailer first.",
        "The trailer looks really exciting."
      ],
      "exam": false,
      "scenes": []
    },
    {
      "id": "movie_14",
      "word": "screen",
      "phonetic": "/skriːn/",
      "definition": "the surface where a movie is shown",
      "usage": "银幕、屏幕",
      "examples": [
        "IMAX has a much larger screen.",
        "The movie is showing on three screens."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "movie_15",
      "word": "popcorn",
      "phonetic": "/ˈpɒpkɔːrn/",
      "definition": "a snack made from heated corn",
      "usage": "爆米花，看电影标配",
      "examples": [
        "Can we get a large popcorn?",
        "I love buttered popcorn at the movies."
      ],
      "exam": false,
      "scenes": []
    },
    {
      "id": "movie_16",
      "word": "soundtrack",
      "phonetic": "/ˈsaʊndtræk/",
      "definition": "the music from a movie",
      "usage": "原声带、配乐",
      "examples": [
        "The soundtrack of this movie is amazing.",
        "I listen to movie soundtracks while studying."
      ],
      "exam": false,
      "scenes": []
    }
  ,
    {
      "id": "movie_50",
      "word": "spoiler",
      "cn": "\u5267\u900f",
      "example": "No spoilers! I haven't watched the finale yet.",
      "ex_cn": "\u522b\u5267\u900f\uff01\u6211\u8fd8\u6ca1\u770b\u5927\u7ed3\u5c40\u3002"
    },
    {
      "id": "movie_51",
      "word": "binge-watch",
      "cn": "\u5237\u5267/\u4e00\u53e3\u6c14\u770b\u5b8c",
      "example": "I binge-watched the entire series over the weekend.",
      "ex_cn": "\u6211\u5468\u672b\u4e00\u53e3\u6c14\u5237\u5b8c\u4e86\u6574\u90e8\u5267\u3002"
    },
    {
      "id": "movie_52",
      "word": "must-watch",
      "cn": "\u5fc5\u770b",
      "example": "This documentary is a must-watch.",
      "ex_cn": "\u8fd9\u90e8\u7eaa\u5f55\u7247\u5fc5\u770b\u3002"
    },
    {
      "id": "movie_53",
      "word": "box office",
      "cn": "\u7968\u623f",
      "example": "The movie topped the box office for three weeks.",
      "ex_cn": "\u8fd9\u90e8\u7535\u5f71\u8fde\u7eed\u4e09\u5468\u767b\u9876\u7968\u623f\u699c\u9996\u3002"
    },
    {
      "id": "movie_54",
      "word": "remake",
      "cn": "\u7ffb\u62cd",
      "example": "They're doing a live-action remake of my favorite film.",
      "ex_cn": "\u4ed6\u4eec\u8981\u7ffb\u62cd\u6211\u6700\u559c\u6b22\u7684\u7535\u5f71\u771f\u4eba\u7248\u4e86\u3002"
    },
    {
      "id": "movie_55",
      "word": "sequel",
      "cn": "\u7eed\u96c6",
      "example": "The sequel is even better than the original!",
      "ex_cn": "\u7eed\u96c6\u6bd4\u7b2c\u4e00\u90e8\u8fd8\u8981\u597d\u770b\uff01"
    },
    {
      "id": "movie_56",
      "word": "premiere",
      "cn": "\u9996\u6620",
      "example": "We got tickets to the premiere!",
      "ex_cn": "\u6211\u4eec\u5f04\u5230\u4e86\u9996\u6620\u5f0f\u7684\u7968\uff01"
    },
    {
      "id": "movie_57",
      "word": "cast",
      "cn": "\u6f14\u5458\u9635\u5bb9",
      "example": "The cast is insane - all my favorite actors!",
      "ex_cn": "\u6f14\u5458\u9635\u5bb9\u592a\u5f3a\u4e86\uff0c\u5168\u662f\u6211\u559c\u6b22\u7684\u6f14\u5458\uff01"
    },
    {
      "id": "movie_58",
      "word": "cinematography",
      "cn": "\u6444\u5f71",
      "example": "The cinematography in this film is breathtaking.",
      "ex_cn": "\u8fd9\u90e8\u7535\u5f71\u7684\u6444\u5f71\u4ee4\u4eba\u53f9\u4e3a\u89c2\u6b62\u3002"
    },
    {
      "id": "movie_59",
      "word": "IMAX",
      "cn": "\u5de8\u5e55",
      "example": "We watched it in IMAX - the experience was incredible.",
      "ex_cn": "\u6211\u4eec\u5728IMAX\u770b\u7684\uff0c\u4f53\u9a8c\u592a\u9707\u64bc\u4e86\u3002"
    },
    {
      "id": "movie_60",
      "word": "streaming",
      "cn": "\u6d41\u5a92\u4f53",
      "example": "The show is available on all major streaming platforms.",
      "ex_cn": "\u8fd9\u90e8\u5267\u5728\u5404\u5927\u6d41\u5a92\u4f53\u5e73\u53f0\u4e0a\u90fd\u80fd\u770b\u3002"
    },
    {
      "id": "movie_61",
      "word": "plot twist",
      "cn": "\u5267\u60c5\u53cd\u8f6c",
      "example": "The plot twist at the end totally shocked me.",
      "ex_cn": "\u7ed3\u5c3e\u7684\u5267\u60c5\u53cd\u8f6c\u5f7b\u5e95\u9707\u60ca\u4e86\u6211\u3002"
    }
  ],
  "online_shopping": [
    {
      "id": "online_shopping_01",
      "word": "search",
      "phonetic": "/sɜːrtʃ/",
      "definition": "to look for something",
      "usage": "搜索，高考高频动词",
      "examples": [
        "Search for the product on the website.",
        "I searched for a cheaper option."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "online_shopping_02",
      "word": "review",
      "phonetic": "/rɪˈvjuː/",
      "definition": "a customer's opinion of a product",
      "usage": "评价、评论，高考高频",
      "examples": [
        "I always read reviews before buying.",
        "This product has good reviews."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "online_shopping_03",
      "word": "rating",
      "phonetic": "/ˈreɪtɪŋ/",
      "definition": "a score showing how good something is",
      "usage": "评分、等级",
      "examples": [
        "This item has a 4.5-star rating.",
        "The rating is based on customer feedback."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "online_shopping_04",
      "word": "order",
      "phonetic": "/ˈɔːrdər/",
      "definition": "to request something to be made or delivered",
      "usage": "下单、订购，高考高频",
      "examples": [
        "I ordered a new phone online.",
        "Your order has been confirmed."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "online_shopping_05",
      "word": "delivery",
      "phonetic": "/dɪˈlɪvəri/",
      "definition": "the act of bringing goods to your door",
      "usage": "配送、快递",
      "examples": [
        "Free delivery on orders over 100 yuan.",
        "The delivery takes 3-5 days."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "online_shopping_06",
      "word": "ship",
      "phonetic": "/ʃɪp/",
      "definition": "to send goods to a customer",
      "usage": "发货、运送",
      "examples": [
        "Your item has been shipped.",
        "We ship worldwide."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "online_shopping_07",
      "word": "return",
      "phonetic": "/rɪˈtɜːrn/",
      "definition": "to send something back",
      "usage": "退货、退回，高考必考",
      "examples": [
        "Can I return this item?",
        "Free returns within 30 days."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "online_shopping_08",
      "word": "refund",
      "phonetic": "/ˈriːfʌnd/",
      "definition": "money paid back",
      "usage": "退款",
      "examples": [
        "I requested a full refund.",
        "The refund will be processed in 7 days."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "online_shopping_09",
      "word": "track",
      "phonetic": "/træk/",
      "definition": "to follow the progress of something",
      "usage": "追踪（物流），高考高频",
      "examples": [
        "You can track your package online.",
        "Where can I track my order?"
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "online_shopping_10",
      "word": "authentic",
      "phonetic": "/ɔːˈθentɪk/",
      "definition": "real and genuine",
      "usage": "正品、真实的，高考阅读词",
      "examples": [
        "Is this product authentic?",
        "We guarantee 100% authentic items."
      ],
      "exam": true,
      "scenes": []
    }
,
    {
      "id": "online_shopping_NaN",
      "word": "cart",
      "phonetic": "/kɑːrt/",
      "definition": "a list of items you plan to buy online",
      "usage": "购物车（线上）",
      "examples": [
        "Add the item to your cart.",
        "Your shopping cart has 3 items."
      ],
      "exam": false,
      "scenes": []
    },
    {
      "id": "online_shopping_NaN",
      "word": "checkout",
      "phonetic": "/ˈtʃekaʊt/",
      "definition": "the process of paying for items online",
      "usage": "结算、付款",
      "examples": [
        "Proceed to checkout when you're ready.",
        "The checkout process is quick and easy."
      ],
      "exam": false,
      "scenes": []
    },
    {
      "id": "online_shopping_NaN",
      "word": "coupon",
      "phonetic": "/ˈkuːpɑːn/",
      "definition": "a code that gives you a discount",
      "usage": "优惠券",
      "examples": [
        "Enter this coupon code for 10% off.",
        "I found a great coupon online."
      ],
      "exam": false,
      "scenes": []
    },
    {
      "id": "online_shopping_NaN",
      "word": "warehouse",
      "phonetic": "/ˈweərhaʊs/",
      "definition": "a place where goods are stored before shipping",
      "usage": "仓库",
      "examples": [
        "The item ships directly from our warehouse.",
        "Our warehouse is fully stocked."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "online_shopping_NaN",
      "word": "out of stock",
      "phonetic": "/aʊt əv stɒk/",
      "definition": "not available for sale at the moment",
      "usage": "缺货、无货",
      "examples": [
        "Sorry, this item is out of stock.",
        "The product is currently out of stock."
      ],
      "exam": false,
      "scenes": []
    },
    {
      "id": "online_shopping_NaN",
      "word": "discount code",
      "phonetic": "/ˈdɪskaʊnt koʊd/",
      "definition": "a code used to get a price reduction",
      "usage": "折扣码",
      "examples": [
        "Use discount code SAVE20 for 20% off.",
        "I found a discount code for free shipping."
      ],
      "exam": false,
      "scenes": []
    }
  ,
    {
      "id": "online_shopping_50",
      "word": "add to cart",
      "cn": "\u52a0\u5165\u8d2d\u7269\u8f66",
      "example": "Just click add to cart and continue shopping.",
      "ex_cn": "\u70b9\u51fb\u52a0\u5165\u8d2d\u7269\u8f66\u7ee7\u7eed\u9009\u8d2d\u3002"
    },
    {
      "id": "online_shopping_51",
      "word": "wishlist",
      "cn": "\u5fc3\u613f\u5355",
      "example": "I saved the dress to my wishlist for later.",
      "ex_cn": "\u6211\u628a\u88d9\u5b50\u6536\u85cf\u5230\u5fc3\u613f\u5355\u4e86\uff0c\u4ee5\u540e\u518d\u770b\u3002"
    },
    {
      "id": "online_shopping_52",
      "word": "flash sale",
      "cn": "\u9650\u65f6\u62a2\u8d2d",
      "example": "The flash sale starts at midnight - items sell out fast.",
      "ex_cn": "\u9650\u65f6\u62a2\u8d2d\u5348\u591c\u5f00\u59cb\uff0c\u4e1c\u897f\u5f88\u5feb\u5356\u5149\u3002"
    },
    {
      "id": "online_shopping_53",
      "word": "free shipping",
      "cn": "\u5305\u90ae",
      "example": "Spend over 200 yuan and get free shipping.",
      "ex_cn": "\u6ee1200\u5143\u5373\u53ef\u4eab\u53d7\u5305\u90ae\u3002"
    },
    {
      "id": "online_shopping_54",
      "word": "sold out",
      "cn": "\u552e\u7f44",
      "example": "The limited edition sneakers sold out in minutes.",
      "ex_cn": "\u9650\u91cf\u7248\u8fd0\u52a8\u978b\u51e0\u5206\u949f\u5c31\u552e\u7f44\u4e86\u3002"
    },
    {
      "id": "online_shopping_55",
      "word": "customer service",
      "cn": "\u5ba2\u670d",
      "example": "Contact customer service if you have any issues with your order.",
      "ex_cn": "\u8ba2\u5355\u6709\u4efb\u4f55\u95ee\u9898\u8bf7\u8054\u7cfb\u5ba2\u670d\u3002"
    },
    {
      "id": "online_shopping_56",
      "word": "listing",
      "cn": "\u5546\u54c1\u9875",
      "example": "The listing says it ships within 24 hours.",
      "ex_cn": "\u5546\u54c1\u9875\u663e\u793a24\u5c0f\u65f6\u5185\u53d1\u8d27\u3002"
    },
    {
      "id": "online_shopping_57",
      "word": "price drop",
      "cn": "\u964d\u4ef7",
      "example": "I waited for a price drop before buying the laptop.",
      "ex_cn": "\u6211\u7b49\u964d\u4ef7\u624d\u4e70\u4e86\u90a3\u53f0\u7b14\u8bb0\u672c\u7535\u8111\u3002"
    },
    {
      "id": "online_shopping_58",
      "word": "reviewer",
      "cn": "\u8bc4\u4ef7\u8005",
      "example": "Top reviewers said this product is worth every penny.",
      "ex_cn": "\u9ad8\u8d5e\u4e70\u5bb6\u8bf4\u8fd9\u4e2a\u4ea7\u54c1\u7269\u6709\u6240\u503c\u3002"
    },
    {
      "id": "online_shopping_59",
      "word": "live stream",
      "cn": "\u76f4\u64ad\u5e26\u8d27",
      "example": "I bought this from a live stream - the deal was too good.",
      "ex_cn": "\u6211\u662f\u770b\u76f4\u64ad\u4e70\u7684\uff0c\u4ef7\u683c\u5b9e\u5728\u592a\u5212\u7b97\u4e86\u3002"
    },
    {
      "id": "online_shopping_60",
      "word": "restock",
      "cn": "\u8865\u8d27",
      "example": "The item is out of stock but will restock next week.",
      "ex_cn": "\u8fd9\u4ef6\u5546\u54c1\u7f3a\u8d27\uff0c\u4f46\u662f\u4e0b\u5468\u4f1a\u8865\u8d27\u3002"
    },
    {
      "id": "online_shopping_61",
      "word": "subscribe",
      "cn": "\u8ba2\u9605/\u5305\u6708",
      "example": "Subscribe and save 15% on your monthly orders.",
      "ex_cn": "\u8ba2\u9605\u540e\u6bcf\u6708\u8ba2\u8d2d\u53ef\u770115%\u3002"
    },
    {
      "id": "online_shopping_62",
      "word": "pre-order",
      "cn": "\u9884\u8d2d",
      "example": "The new phone is available for pre-order starting next week.",
      "ex_cn": "\u65b0\u624b\u673a\u4e0b\u5468\u5f00\u59cb\u63a5\u53d7\u9884\u8d2d\u3002"
    },
    {
      "id": "online_shopping_63",
      "word": "backorder",
      "cn": "\u7f3a\u8d27\u767b\u8bb0/\u9884\u552e",
      "example": "The item is on backorder and will ship in two weeks.",
      "ex_cn": "\u8be5\u5546\u54c1\u5df2\u767b\u8bb0\u7f3a\u8d27\u9884\u552e\uff0c\u4e24\u5468\u5185\u53d1\u8d27\u3002"
    },
    {
      "id": "online_shopping_64",
      "word": "limited edition",
      "cn": "\u9650\u91cf\u7248",
      "example": "This limited edition sneaker sold out within an hour.",
      "ex_cn": "\u8fd9\u53cc\u9650\u91cf\u7248\u8fd0\u52a8\u978b\u4e00\u5c0f\u65f6\u5185\u5c31\u552e\u7f44\u4e86\u3002"
    },
    {
      "id": "online_shopping_65",
      "word": "bundle",
      "cn": "\u5957\u88c5/\u6346\u7ed1\u9500\u552e",
      "example": "Buy the bundle and save 30% compared to buying separately.",
      "ex_cn": "\u4e70\u5957\u88c5\u6bd4\u5355\u4e70\u770130%\u3002"
    },
    {
      "id": "online_shopping_66",
      "word": "coupon code",
      "cn": "\u4f18\u60e0\u7801",
      "example": "Don't forget to apply the coupon code before checkout.",
      "ex_cn": "\u7ed3\u8d26\u524d\u522b\u5fd8\u4e86\u7528\u4f18\u60e0\u7801\u3002"
    },
    {
      "id": "online_shopping_67",
      "word": "return policy",
      "cn": "\u9000\u6362\u653f\u7b56",
      "example": "Check the return policy before making a purchase.",
      "ex_cn": "\u4e0b\u5355\u524d\u5148\u67e5\u770b\u9000\u6362\u653f\u7b56\u3002"
    },
    {
      "id": "online_shopping_68",
      "word": "tracking number",
      "cn": "\u7269\u6d41\u5355\u53f7",
      "example": "You'll receive a tracking number once the package is shipped.",
      "ex_cn": "\u5305\u88f9\u53d1\u8d27\u540e\u4f60\u4f1a\u6536\u5230\u7269\u6d41\u5355\u53f7\u3002"
    },
    {
      "id": "online_shopping_69",
      "word": "express shipping",
      "cn": "\u52a0\u6025\u914d\u9001",
      "example": "Upgrade to express shipping for next-day delivery.",
      "ex_cn": "\u5347\u7ea7\u5230\u52a0\u6025\u914d\u9001\u53ef\u4ee5\u6b21\u65e5\u8fbe\u3002"
    },
    {
      "id": "online_shopping_70",
      "word": "payment method",
      "cn": "\u652f\u4ed8\u65b9\u5f0f",
      "example": "We accept multiple payment methods including Alipay and credit card.",
      "ex_cn": "\u6211\u4eec\u63a5\u53d7\u591a\u79cd\u652f\u4ed8\u65b9\u5f0f\uff0c\u5305\u62ec\u652f\u4ed8\u5b9d\u548c\u4fe1\u7528\u5361\u3002"
    },
    {
      "id": "online_shopping_71",
      "word": "secure checkout",
      "cn": "\u5b89\u5168\u7ed3\u8d26",
      "example": "Your payment information is protected during secure checkout.",
      "ex_cn": "\u5b89\u5168\u7ed3\u8d26\u8fc7\u7a0b\u4e2d\u4f60\u7684\u652f\u4ed8\u4fe1\u606f\u4f1a\u53d7\u5230\u4fdd\u62a4\u3002"
    },
    {
      "id": "online_shopping_72",
      "word": "buyer protection",
      "cn": "\u4e70\u5bb6\u4fdd\u969c",
      "example": "Buyer protection covers you if the item doesn't arrive.",
      "ex_cn": "\u5982\u679c\u5546\u54c1\u672a\u9001\u8fbe\uff0c\u4e70\u5bb6\u4fdd\u969c\u4f1a\u4e3a\u4f60\u63d0\u4f9b\u4fdd\u62a4\u3002"
    },
    {
      "id": "online_shopping_73",
      "word": "gift card",
      "cn": "\u793c\u54c1\u5361",
      "example": "A gift card is perfect when you're not sure what to buy.",
      "ex_cn": "\u62ff\u4e0d\u51c6\u4e70\u4ec0\u4e48\u7684\u65f6\u5019\uff0c\u793c\u54c1\u5361\u662f\u6700\u4f73\u9009\u62e9\u3002"
    },
    {
      "id": "online_shopping_74",
      "word": "warranty",
      "cn": "\u4fdd\u4fee",
      "example": "This laptop comes with a two-year warranty.",
      "ex_cn": "\u8fd9\u6b3e\u7b14\u8bb0\u672c\u7535\u8111\u9644\u5e26\u4e24\u5e74\u4fdd\u4fee\u3002"
    },
    {
      "id": "online_shopping_75",
      "word": "exchange",
      "cn": "\u6362\u8d27",
      "example": "If it doesn't fit, you can exchange it for a different size.",
      "ex_cn": "\u5982\u679c\u4e0d\u5408\u8eab\uff0c\u53ef\u4ee5\u6362\u5176\u4ed6\u5c3a\u7801\u3002"
    }
  ],
  "gift": [
    {
      "id": "gift_01",
      "word": "celebrate",
      "phonetic": "/ˈselɪbreɪt/",
      "definition": "to enjoy a special event",
      "usage": "庆祝，高考高频动词",
      "examples": [
        "Let's celebrate your birthday!",
        "How do you celebrate the New Year?"
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "gift_02",
      "word": "tradition",
      "phonetic": "/trəˈdɪʃn/",
      "definition": "a long-established custom",
      "usage": "传统，高考必考",
      "examples": [
        "It's a tradition to give red envelopes.",
        "This is an important tradition."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "gift_03",
      "word": "appreciate",
      "phonetic": "/əˈpriːʃieɪt/",
      "definition": "to be grateful for something",
      "usage": "感激、欣赏，高考必考",
      "examples": [
        "I really appreciate your gift.",
        "She appreciated the thoughtful present."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "gift_04",
      "word": "grateful",
      "phonetic": "/ˈɡreɪtfl/",
      "definition": "feeling thankful",
      "usage": "感激的，高考高频词",
      "examples": [
        "I'm so grateful for your kindness.",
        "We are grateful for your support."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "gift_05",
      "word": "festival",
      "phonetic": "/ˈfestɪvl/",
      "definition": "a special day or celebration",
      "usage": "节日，高考必考",
      "examples": [
        "The Spring Festival is coming.",
        "We have many festivals throughout the year."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "gift_06",
      "word": "gather",
      "phonetic": "/ˈɡæðər/",
      "definition": "to come together in a group",
      "usage": "聚集、团聚，高考高频动词",
      "examples": [
        "The whole family gathers during the holiday.",
        "We gathered to celebrate."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "gift_07",
      "word": "generous",
      "phonetic": "/ˈdʒenərəs/",
      "definition": "willing to give more than expected",
      "usage": "慷慨的、大方的，高考阅读词",
      "examples": [
        "She's very generous with her gifts.",
        "Thank you for your generous gift."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "gift_08",
      "word": "symbol",
      "phonetic": "/ˈsɪmbl/",
      "definition": "something that represents something else",
      "usage": "象征，高考必考",
      "examples": [
        "Red is a symbol of good luck.",
        "The gift is a symbol of our friendship."
      ],
      "exam": true,
      "scenes": []
    }
,
    {
      "id": "gift_09",
      "word": "wrap",
      "phonetic": "/ræp/",
      "definition": "to cover a gift with paper",
      "usage": "包装（礼物）",
      "examples": [
        "Can you help me wrap this gift?",
        "The gift is beautifully wrapped."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "gift_10",
      "word": "surprise",
      "phonetic": "/sərˈpraɪz/",
      "definition": "something unexpected that makes you happy",
      "usage": "惊喜，节日送礼常用",
      "examples": [
        "I planned a surprise party for her.",
        "What a lovely surprise!"
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "gift_11",
      "word": "blessing",
      "phonetic": "/ˈblesɪŋ/",
      "definition": "something good that makes you happy",
      "usage": "祝福、幸事",
      "examples": [
        "Wishing you all the best blessings.",
        "Family is a true blessing."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "gift_12",
      "word": "sincere",
      "phonetic": "/sɪnˈsɪr/",
      "definition": "genuine and honest",
      "usage": "真诚的，送祝福常用",
      "examples": [
        "Please accept my sincere wishes.",
        "She gave me a sincere smile."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "gift_13",
      "word": "card",
      "phonetic": "/kɑːrd/",
      "definition": "a piece of thick paper with a message",
      "usage": "贺卡",
      "examples": [
        "I wrote a message in the card.",
        "Don't forget to send a birthday card."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "gift_14",
      "word": "occasion",
      "phonetic": "/əˈkeɪʒn/",
      "definition": "a special event or time",
      "usage": "场合、重大时刻，高考高频",
      "examples": [
        "This is a special occasion.",
        "A gift for a special occasion."
      ],
      "exam": true,
      "scenes": []
    }
  ,
    {
      "id": "gift_50",
      "word": "thoughtful",
      "cn": "\u8d34\u5fc3\u7684",
      "example": "That was such a thoughtful gift - you really know me!",
      "ex_cn": "\u8fd9\u793c\u7269\u592a\u8d34\u5fc3\u4e86\uff0c\u4f60\u771f\u7684\u5f88\u61c2\u6211\uff01"
    },
    {
      "id": "gift_51",
      "word": "handmade",
      "cn": "\u624b\u5de5\u5236\u4f5c\u7684",
      "example": "She gave me a handmade card - it meant so much.",
      "ex_cn": "\u5979\u9001\u4e86\u6211\u4e00\u5f20\u624b\u5de5\u8d3a\u5361\uff0c\u7279\u522b\u6709\u610f\u4e49\u3002"
    },
    {
      "id": "gift_52",
      "word": "gift card",
      "cn": "\u793c\u54c1\u5361",
      "example": "When in doubt, just get a gift card.",
      "ex_cn": "\u4e0d\u77e5\u9053\u9001\u4ec0\u4e48\u7684\u65f6\u5019\uff0c\u5c31\u9001\u793c\u54c1\u5361\u3002"
    },
    {
      "id": "gift_53",
      "word": "wrapping paper",
      "cn": "\u5305\u88c5\u7eb8",
      "example": "I love the pattern on this wrapping paper!",
      "ex_cn": "\u6211\u559c\u6b22\u8fd9\u5f20\u5305\u88c5\u7eb8\u7684\u82b1\u7eb9\uff01"
    },
    {
      "id": "gift_54",
      "word": "gift exchange",
      "cn": "\u793c\u7269\u4ea4\u6362",
      "example": "We do a gift exchange at the office every Christmas.",
      "ex_cn": "\u6211\u4eec\u529e\u516c\u5ba4\u6bcf\u5e74\u5723\u8bde\u8282\u90fd\u4f1a\u6709\u793c\u7269\u4ea4\u6362\u3002"
    },
    {
      "id": "gift_55",
      "word": "DIY",
      "cn": "\u624b\u5de5\u81ea\u5236",
      "example": "She made a DIY photo album - it's so personal.",
      "ex_cn": "\u5979\u505a\u4e86\u4e00\u672c\u624b\u5de5\u76f8\u518c\uff0c\u7279\u522b\u6709\u5fc3\u610f\u3002"
    },
    {
      "id": "gift_56",
      "word": "present",
      "cn": "\u793c\u7269",
      "example": "I got you a little present - hope you like it!",
      "ex_cn": "\u6211\u7ed9\u4f60\u51c6\u5907\u4e86\u4e2a\u5c0f\u793c\u7269\uff0c\u5e0c\u671b\u4f60\u559c\u6b22\uff01"
    },
    {
      "id": "gift_57",
      "word": "regift",
      "cn": "\u8f6c\u9001\u793c\u7269",
      "example": "I'm not going to regift this - it's too nice.",
      "ex_cn": "\u8fd9\u4e2a\u592a\u7cbe\u81f4\u4e86\uff0c\u6211\u4e0d\u5fcd\u5fc3\u8f6c\u9001\u3002"
    },
    {
      "id": "gift_58",
      "word": "unboxing",
      "cn": "\u5f00\u7bb1",
      "example": "I filmed the unboxing of my birthday presents.",
      "ex_cn": "\u6211\u628a\u751f\u65e5\u793c\u7269\u5f00\u7bb1\u62cd\u4e86\u89c6\u9891\u3002"
    },
    {
      "id": "gift_59",
      "word": "keep the receipt",
      "cn": "\u4fdd\u7559\u6536\u636e",
      "example": "Keep the receipt in case you need to exchange it.",
      "ex_cn": "\u4fdd\u7559\u597d\u6536\u636e\uff0c\u4e07\u4e00\u9700\u8981\u6362\u8d27\u3002"
    },
    {
      "id": "gift_60",
      "word": "white elephant",
      "cn": "\u767d\u8c61\u793c\u7269\u4ea4\u6362",
      "example": "We played white elephant at the office party.",
      "ex_cn": "\u6211\u4eec\u5728\u529e\u516c\u5ba4\u6d3e\u5bf9\u4e0a\u73a9\u4e86\u767d\u8c61\u4ea4\u6362\u793c\u7269\u3002"
    },
    {
      "id": "gift_61",
      "word": "sentimental",
      "cn": "\u6709\u7eaa\u5ff5\u610f\u4e49\u7684",
      "example": "This necklace is very sentimental - it was my grandmother's.",
      "ex_cn": "\u8fd9\u6761\u9879\u94fe\u975e\u5e38\u6709\u7eaa\u5ff5\u610f\u4e49\uff0c\u662f\u6211\u7956\u6bcd\u7684\u3002"
    }
  ],
  "fitness": [
    {
      "id": "fitness_01",
      "word": "exercise",
      "phonetic": "/ˈeksərsaɪz/",
      "definition": "physical activity to stay healthy",
      "usage": "锻炼、运动，高考必考",
      "examples": [
        "I exercise three times a week.",
        "Regular exercise is good for health."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "fitness_02",
      "word": "healthy",
      "phonetic": "/ˈhelθi/",
      "definition": "in good physical condition",
      "usage": "健康的，高考高频形容词",
      "examples": [
        "Running is a healthy habit.",
        "I try to eat healthy food."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "fitness_03",
      "word": "strength",
      "phonetic": "/streŋθ/",
      "definition": "the quality of being physically strong",
      "usage": "力量、力气，高考高频",
      "examples": [
        "Weight training builds strength.",
        "I need to improve my strength."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "fitness_04",
      "word": "muscle",
      "phonetic": "/ˈmʌsl/",
      "definition": "body tissue that can be tightened to move parts",
      "usage": "肌肉，高考阅读词",
      "examples": [
        "This exercise works your leg muscles.",
        "I feel my muscles getting stronger."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "fitness_05",
      "word": "regular",
      "phonetic": "/ˈreɡjələr/",
      "definition": "happening at fixed times",
      "usage": "规律的、定期的，高考高频",
      "examples": [
        "I go to the gym on a regular basis.",
        "Regular exercise makes a big difference."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "fitness_06",
      "word": "energy",
      "phonetic": "/ˈenərdʒi/",
      "definition": "the power to be active",
      "usage": "精力、能量，高考必考",
      "examples": [
        "Exercise gives me more energy.",
        "I don't have the energy to work out today."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "fitness_07",
      "word": "improve",
      "phonetic": "/ɪmˈpruːv/",
      "definition": "to become better",
      "usage": "提高、改善，高考高频动词",
      "examples": [
        "I want to improve my fitness level.",
        "My running speed has improved a lot."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "fitness_08",
      "word": "goal",
      "phonetic": "/ɡoʊl/",
      "definition": "something you want to achieve",
      "usage": "目标，高考高频词",
      "examples": [
        "My goal is to run 5km every day.",
        "Set a realistic fitness goal."
      ],
      "exam": true,
      "scenes": []
    }
,
    {
      "id": "fitness_09",
      "word": "workout",
      "phonetic": "/ˈwɜːrkaʊt/",
      "definition": "a session of physical exercise",
      "usage": "锻炼、训练",
      "examples": [
        "I had a great workout at the gym.",
        "A short workout is better than none."
      ],
      "exam": false,
      "scenes": []
    },
    {
      "id": "fitness_10",
      "word": "stretch",
      "phonetic": "/stretʃ/",
      "definition": "to make your body straighter or reach further",
      "usage": "拉伸、伸展，运动前后常用",
      "examples": [
        "Don't forget to stretch before running.",
        "Stretching helps prevent injury."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "fitness_11",
      "word": "sweat",
      "phonetic": "/swet/",
      "definition": "liquid produced by your body when exercising",
      "usage": "出汗、汗水",
      "examples": [
        "I was sweating after the run.",
        "A good workout makes you sweat."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "fitness_12",
      "word": "cardio",
      "phonetic": "/ˈkɑːrdioʊ/",
      "definition": "exercise that makes your heart beat faster",
      "usage": "有氧运动",
      "examples": [
        "Running and swimming are great cardio exercises.",
        "I do 30 minutes of cardio every day."
      ],
      "exam": false,
      "scenes": []
    },
    {
      "id": "fitness_13",
      "word": "yoga",
      "phonetic": "/ˈjoʊɡə/",
      "definition": "a practice of physical postures and breathing",
      "usage": "瑜伽",
      "examples": [
        "I go to yoga class twice a week.",
        "Yoga helps me relax and stay flexible."
      ],
      "exam": false,
      "scenes": []
    },
    {
      "id": "fitness_14",
      "word": "personal trainer",
      "phonetic": "/ˈpɜːrsənl ˈtreɪnər/",
      "definition": "a person who helps you exercise correctly",
      "usage": "私人教练",
      "examples": [
        "My personal trainer pushed me to do better.",
        "A personal trainer can help you reach your goals."
      ],
      "exam": false,
      "scenes": []
    }
  ,
    {
      "id": "fitness_50",
      "word": "HIIT",
      "cn": "\u9ad8\u5f3a\u5ea6\u95f4\u6b47\u8bad\u7ec3",
      "example": "I do 20 minutes of HIIT every morning - it's intense but effective.",
      "ex_cn": "\u6211\u6bcf\u5929\u65e9\u4e0a\u505a20\u5206\u949fHIIT\uff0c\u5f88\u7d2f\u4f46\u6548\u679c\u597d\u3002"
    },
    {
      "id": "fitness_51",
      "word": "plank",
      "cn": "\u5e73\u677f\u652f\u6491",
      "example": "She can hold a plank for over three minutes.",
      "ex_cn": "\u5979\u5e73\u677f\u652f\u6491\u80fd\u6491\u4e09\u5206\u949f\u4ee5\u4e0a\u3002"
    },
    {
      "id": "fitness_52",
      "word": "personal best",
      "cn": "\u4e2a\u4eba\u6700\u597d\u6210\u7ee9",
      "example": "I hit a personal best on my 5K run today!",
      "ex_cn": "\u6211\u4eca\u59295\u516c\u91cc\u8dd1\u51fa\u4e86\u4e2a\u4eba\u6700\u597d\u6210\u7ee9\uff01"
    },
    {
      "id": "fitness_53",
      "word": "sore",
      "cn": "\u9178\u75db\u7684",
      "example": "My legs are so sore after yesterday's workout.",
      "ex_cn": "\u6628\u5929\u7ec3\u5b8c\u817f\u597d\u9178\u75db\u3002"
    },
    {
      "id": "fitness_54",
      "word": "core",
      "cn": "\u6838\u5fc3\u808c\u7fa4",
      "example": "Planks are great for building core strength.",
      "ex_cn": "\u5e73\u677f\u652f\u6491\u5bf9\u953b\u70bc\u6838\u5fc3\u529b\u91cf\u5f88\u6709\u7528\u3002"
    },
    {
      "id": "fitness_55",
      "word": "warm up",
      "cn": "\u70ed\u8eab",
      "example": "Always warm up before exercise to prevent injury.",
      "ex_cn": "\u8fd0\u52a8\u524d\u4e00\u5b9a\u8981\u70ed\u8eab\u4ee5\u9632\u53d7\u4f24\u3002"
    },
    {
      "id": "fitness_56",
      "word": "cool down",
      "cn": "\u653e\u677e/\u51b7\u8eab",
      "example": "Don't skip the cool down - it helps with recovery.",
      "ex_cn": "\u522b\u8df3\u8fc7\u653e\u677e\u73af\u8282\uff0c\u6709\u52a9\u4e8e\u6062\u590d\u3002"
    },
    {
      "id": "fitness_57",
      "word": "gym rat",
      "cn": "\u5065\u8eab\u72c2\u4eba",
      "example": "He goes to the gym every day - total gym rat.",
      "ex_cn": "\u4ed6\u6bcf\u5929\u6ce1\u5065\u8eab\u623f\uff0c\u7edd\u5bf9\u7684\u5065\u8eab\u72c2\u4eba\u3002"
    },
    {
      "id": "fitness_58",
      "word": "protein shake",
      "cn": "\u86cb\u767d\u5976\u6614",
      "example": "I drink a protein shake right after my workout.",
      "ex_cn": "\u6211\u7ec3\u5b8c\u9a6c\u4e0a\u559d\u4e00\u676f\u86cb\u767d\u5976\u6614\u3002"
    },
    {
      "id": "fitness_59",
      "word": "deadlift",
      "cn": "\u786c\u62c9",
      "example": "I can deadlift 80 kilos now - slowly improving!",
      "ex_cn": "\u6211\u73b0\u5728\u80fd\u786c\u62c980\u516c\u65a4\uff0c\u6162\u6162\u8fdb\u6b65\u4e2d\uff01"
    },
    {
      "id": "fitness_60",
      "word": "bodyweight",
      "cn": "\u81ea\u91cd\u8bad\u7ec3",
      "example": "Bodyweight exercises are perfect for home workouts.",
      "ex_cn": "\u81ea\u91cd\u8bad\u7ec3\u975e\u5e38\u9002\u5408\u5c45\u5bb6\u953b\u70bc\u3002"
    },
    {
      "id": "fitness_61",
      "word": "fitness tracker",
      "cn": "\u8fd0\u52a8\u624b\u73af",
      "example": "My fitness tracker says I walked 12,000 steps today.",
      "ex_cn": "\u6211\u7684\u8fd0\u52a8\u624b\u73af\u663e\u793a\u4eca\u5929\u8d70\u4e8612000\u6b65\u3002"
    },
    {
      "id": "fitness_62",
      "word": "resistance band",
      "cn": "\u5f39\u529b\u5e26",
      "example": "Resistance bands are great for home strength training.",
      "ex_cn": "\u5f39\u529b\u5e26\u975e\u5e38\u9002\u5408\u5728\u5bb6\u505a\u529b\u91cf\u8bad\u7ec3\u3002"
    }
  ],
  "barber": [
    {
      "id": "barber_01",
      "word": "style",
      "phonetic": "/staɪl/",
      "definition": "a particular way of cutting or arranging hair",
      "usage": "发型、风格，高考高频",
      "examples": [
        "What style would you like?",
        "I want a new hairstyle."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "barber_02",
      "word": "length",
      "phonetic": "/leŋθ/",
      "definition": "how long something is",
      "usage": "长度，高考必考",
      "examples": [
        "I want my hair shoulder-length.",
        "Can you cut it to this length?"
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "barber_03",
      "word": "trim",
      "phonetic": "/trɪm/",
      "definition": "to cut a small amount off",
      "usage": "修剪、修整",
      "examples": [
        "Just a trim, please.",
        "I need a trim on the ends."
      ],
      "exam": false,
      "scenes": []
    },
    {
      "id": "barber_04",
      "word": "shampoo",
      "phonetic": "/ʃæmˈpuː/",
      "definition": "liquid soap for washing hair",
      "usage": "洗发水；洗头",
      "examples": [
        "I'd like a shampoo and cut.",
        "What shampoo do you recommend?"
      ],
      "exam": false,
      "scenes": []
    },
    {
      "id": "barber_05",
      "word": "appointment",
      "phonetic": "/əˈpɔɪntmənt/",
      "definition": "an arranged time to see someone",
      "usage": "预约，高考高频词",
      "examples": [
        "I have an appointment at 3 pm.",
        "Can I make an appointment?"
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "barber_06",
      "word": "satisfied",
      "phonetic": "/ˈsætɪsfaɪd/",
      "definition": "happy with what you got",
      "usage": "满意的，高考高频形容词",
      "examples": [
        "Are you satisfied with the haircut?",
        "I'm not satisfied with the result."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "barber_07",
      "word": "suit",
      "phonetic": "/suːt/",
      "definition": "to look good on someone",
      "usage": "适合（某人的外表），高考高频动词",
      "examples": [
        "This hairstyle really suits you.",
        "Short hair doesn't suit me."
      ],
      "exam": true,
      "scenes": []
    },
    {
      "id": "barber_08",
      "word": "recommend",
      "phonetic": "/ˌrekəˈmend/",
      "definition": "to suggest something good",
      "usage": "推荐，高考高频",
      "examples": [
        "What hairstyle do you recommend?",
        "I recommend a layered cut for your face shape."
      ],
      "exam": true,
      "scenes": []
    }
,
    {
      "id": "barber_09",
      "word": "haircut",
      "phonetic": "/ˈheərkʌt/",
      "definition": "the act of cutting hair",
      "usage": "理发",
      "examples": [
        "I need a haircut.",
        "Your haircut looks great!"
      ],
      "exam": false,
      "scenes": []
    },
    {
      "id": "barber_10",
      "word": "bangs",
      "phonetic": "/bæŋz/",
      "definition": "hair cut straight across the forehead",
      "usage": "刘海",
      "examples": [
        "I want to have bangs.",
        "Should I get bangs or not?"
      ],
      "exam": false,
      "scenes": []
    },
    {
      "id": "barber_11",
      "word": "layer",
      "phonetic": "/ˈleɪər/",
      "definition": "a style where hair is cut at different lengths",
      "usage": "层次、分层剪发",
      "examples": [
        "I'd like some layers in my hair.",
        "Layered hair looks more voluminous."
      ],
      "exam": false,
      "scenes": []
    },
    {
      "id": "barber_12",
      "word": "blow-dry",
      "phonetic": "/ˈbloʊ draɪ/",
      "definition": "to dry and style hair with a hairdryer",
      "usage": "吹干、吹造型",
      "examples": [
        "Can you blow-dry my hair after the cut?",
        "A blow-dry makes my hair look smooth."
      ],
      "exam": false,
      "scenes": []
    },
    {
      "id": "barber_13",
      "word": "dye",
      "phonetic": "/daɪ/",
      "definition": "to change the color of hair",
      "usage": "染发",
      "examples": [
        "I want to dye my hair brown.",
        "How much does a hair dye cost?"
      ],
      "exam": false,
      "scenes": []
    },
    {
      "id": "barber_14",
      "word": "moustache",
      "phonetic": "/ˈmʌstæʃ/",
      "definition": "hair that grows above a man's upper lip",
      "usage": "胡子（上唇）",
      "examples": [
        "Can you trim my moustache?",
        "He decided to grow a moustache."
      ],
      "exam": false,
      "scenes": []
    }
  ,
    {
      "id": "barber_50",
      "word": "fade",
      "cn": "\u6e10\u53d8\u53d1\u578b",
      "example": "I want a fade on the sides and longer on top.",
      "ex_cn": "\u4e24\u8fb9\u8981\u6e10\u53d8\uff0c\u5934\u9876\u7559\u957f\u4e00\u70b9\u3002"
    },
    {
      "id": "barber_51",
      "word": "undercut",
      "cn": "\u5e95\u524a\u53d1\u578b",
      "example": "The undercut is still a very popular hairstyle.",
      "ex_cn": "\u5e95\u524a\u53d1\u578b\u73b0\u5728\u4ecd\u7136\u5f88\u53d7\u6b22\u8fce\u3002"
    },
    {
      "id": "barber_52",
      "word": "bob",
      "cn": "\u6ce2\u6ce2\u5934",
      "example": "She got a bob haircut and it looks so chic.",
      "ex_cn": "\u5979\u526a\u4e86\u6ce2\u6ce2\u5934\uff0c\u770b\u8d77\u6765\u597d\u65f6\u9ae6\u3002"
    },
    {
      "id": "barber_53",
      "word": "balayage",
      "cn": "\u6cd5\u5f0f\u6311\u67d3",
      "example": "I'm thinking of getting balayage highlights this time.",
      "ex_cn": "\u8fd9\u6b21\u6211\u60f3\u505a\u6cd5\u5f0f\u6311\u67d3\u3002"
    },
    {
      "id": "barber_54",
      "word": "beard trim",
      "cn": "\u4fee\u80e1\u5b50",
      "example": "Can you do a beard trim as well with the haircut?",
      "ex_cn": "\u7406\u53d1\u65f6\u80fd\u987a\u4fbf\u5e2e\u6211\u4fee\u4e00\u4e0b\u80e1\u5b50\u5417\uff1f"
    },
    {
      "id": "barber_55",
      "word": "curly cut",
      "cn": "\u5377\u53d1\u4fee\u526a",
      "example": "I need a curly cut from someone who specializes in curly hair.",
      "ex_cn": "\u6211\u8981\u627e\u4e2a\u4e13\u526a\u5377\u53d1\u7684\u53d1\u578b\u5e08\u3002"
    },
    {
      "id": "barber_56",
      "word": "hair mask",
      "cn": "\u53d1\u819c",
      "example": "I use a hair mask once a week to keep my hair healthy.",
      "ex_cn": "\u6211\u6bcf\u5468\u7528\u4e00\u6b21\u53d1\u819c\u4fdd\u6301\u5934\u53d1\u5065\u5eb7\u3002"
    },
    {
      "id": "barber_57",
      "word": "hair oil",
      "cn": "\u62a4\u53d1\u6cb9",
      "example": "A few drops of hair oil make my hair look shiny.",
      "ex_cn": "\u6ef4\u51e0\u6ef4\u62a4\u53d1\u6cb9\u8ba9\u6211\u7684\u5934\u53d1\u770b\u8d77\u6765\u5f88\u6709\u5149\u6cfd\u3002"
    },
    {
      "id": "barber_58",
      "word": "perm",
      "cn": "\u70eb\u53d1",
      "example": "I'm thinking about getting a perm for more volume.",
      "ex_cn": "\u6211\u60f3\u70eb\u4e2a\u53d1\u589e\u52a0\u53d1\u91cf\u611f\u3002"
    },
    {
      "id": "barber_59",
      "word": "split ends",
      "cn": "\u5206\u53c9",
      "example": "I need a trim - my split ends are getting bad.",
      "ex_cn": "\u9700\u8981\u4fee\u526a\u4e86\uff0c\u5206\u53c9\u8d8a\u6765\u8d8a\u4e25\u91cd\u3002"
    },
    {
      "id": "barber_60",
      "word": "hairline",
      "cn": "\u53d1\u9645\u7ebf",
      "example": "He's been worried about his receding hairline.",
      "ex_cn": "\u4ed6\u4e00\u76f4\u62c5\u5fc3\u81ea\u5df1\u7684\u53d1\u9645\u7ebf\u540e\u79fb\u3002"
    },
    {
      "id": "barber_61",
      "word": "clipper",
      "cn": "\u63a8\u5b50",
      "example": "The barber used clippers for the back and sides.",
      "ex_cn": "\u7406\u53d1\u5e08\u7528\u63a8\u5b50\u63a8\u4e86\u540e\u9762\u548c\u4e24\u8fb9\u3002"
    },
    {
      "id": "barber_62",
      "word": "razor cut",
      "cn": "\u5243\u5200\u4fee\u526a",
      "example": "A razor cut gives the hair a softer, textured look.",
      "ex_cn": "\u5243\u5200\u4fee\u526a\u80fd\u8ba9\u5934\u53d1\u770b\u8d77\u6765\u66f4\u67d4\u548c\u6709\u5c42\u6b21\u3002"
    }
  ],
  "takeout": [
    {
      "id": "takeout_01",
      "word": "delivery",
      "cn": "\u5916\u5356\u914d\u9001",
      "example": "The delivery arrived in 30 minutes.",
      "ex_cn": "\u5916\u535630\u5206\u949f\u5c31\u5230\u4e86\u3002"
    },
    {
      "id": "takeout_02",
      "word": "takeout",
      "cn": "\u5916\u5356/\u5916\u5e26\u98df\u7269",
      "example": "Let's order takeout tonight, I don't feel like cooking.",
      "ex_cn": "\u4eca\u665a\u70b9\u5916\u5356\u5427\uff0c\u4e0d\u60f3\u505a\u996d\u3002"
    },
    {
      "id": "takeout_03",
      "word": "place an order",
      "cn": "\u4e0b\u5355",
      "example": "I placed an order for two pizzas on the app.",
      "ex_cn": "\u6211\u5728App\u4e0a\u4e0b\u4e86\u4e24\u4e2a\u62ab\u8428\u7684\u8ba2\u5355\u3002"
    },
    {
      "id": "takeout_04",
      "word": "estimated time",
      "cn": "\u9884\u8ba1\u65f6\u95f4",
      "example": "The estimated delivery time is 25-30 minutes.",
      "ex_cn": "\u9884\u8ba1\u914d\u9001\u65f6\u95f4\u4e3a25-30\u5206\u949f\u3002"
    },
    {
      "id": "takeout_05",
      "word": "delivery fee",
      "cn": "\u914d\u9001\u8d39",
      "example": "There's a 5 yuan delivery fee for orders under 50 yuan.",
      "ex_cn": "\u4e0d\u6ee150\u5143\u7684\u8ba2\u5355\u6536\u53d65\u5143\u914d\u9001\u8d39\u3002"
    },
    {
      "id": "takeout_06",
      "word": "tip",
      "cn": "\u5c0f\u8d39",
      "example": "I gave the driver a 10 yuan tip for delivering in the rain.",
      "ex_cn": "\u5916\u5356\u9a91\u624b\u5192\u96e8\u9001\u8d27\uff0c\u6211\u7ed9\u4e86\u5341\u5757\u94b1\u5c0f\u8d39\u3002"
    },
    {
      "id": "takeout_07",
      "word": "driver",
      "cn": "\u5916\u5356\u9a91\u624b",
      "example": "The driver is on his way with your order.",
      "ex_cn": "\u5916\u5356\u9a91\u624b\u6b63\u5728\u914d\u9001\u4f60\u7684\u8ba2\u5355\u3002"
    },
    {
      "id": "takeout_08",
      "word": "order tracking",
      "cn": "\u8ba2\u5355\u8ddf\u8e2a",
      "example": "You can check real-time order tracking on the app.",
      "ex_cn": "\u4f60\u53ef\u4ee5\u5728App\u4e0a\u67e5\u770b\u5b9e\u65f6\u8ba2\u5355\u8ddf\u8e2a\u3002"
    },
    {
      "id": "takeout_09",
      "word": "leave at the door",
      "cn": "\u653e\u95e8\u53e3",
      "example": "Please leave the order at the door, I'll pick it up later.",
      "ex_cn": "\u8bf7\u628a\u5916\u5356\u653e\u95e8\u53e3\uff0c\u6211\u7a0d\u540e\u53bb\u62ff\u3002"
    },
    {
      "id": "takeout_10",
      "word": "contactless delivery",
      "cn": "\u65e0\u63a5\u89e6\u914d\u9001",
      "example": "We offer contactless delivery for your safety.",
      "ex_cn": "\u6211\u4eec\u63d0\u4f9b\u65e0\u63a5\u89e6\u914d\u9001\u670d\u52a1\u3002"
    },
    {
      "id": "takeout_11",
      "word": "receipt",
      "cn": "\u5c0f\u7968/\u6536\u636e",
      "example": "The receipt is inside the bag, please check your items.",
      "ex_cn": "\u5c0f\u7968\u5728\u888b\u5b50\u91cc\uff0c\u8bf7\u6838\u5bf9\u8ba2\u5355\u3002"
    },
    {
      "id": "takeout_12",
      "word": "rate",
      "cn": "\u8bc4\u5206",
      "example": "Please rate your delivery experience after receiving the order.",
      "ex_cn": "\u6536\u5230\u5916\u5356\u540e\u8bf7\u4e3a\u8fd9\u6b21\u914d\u9001\u4f53\u9a8c\u8bc4\u5206\u3002"
    },
    {
      "id": "takeout_13",
      "word": "review",
      "cn": "\u8bc4\u4ef7",
      "example": "I wrote a review for the restaurant because the food was amazing.",
      "ex_cn": "\u6211\u7ed9\u8fd9\u5bb6\u5e97\u5199\u4e86\u8bc4\u4ef7\uff0c\u56e0\u4e3a\u592a\u597d\u5403\u4e86\u3002"
    },
    {
      "id": "takeout_14",
      "word": "refund",
      "cn": "\u9000\u6b3e",
      "example": "I requested a refund because the order was wrong.",
      "ex_cn": "\u6211\u7533\u8bf7\u4e86\u9000\u6b3e\uff0c\u56e0\u4e3a\u5f04\u9519\u4e86\u8ba2\u5355\u3002"
    },
    {
      "id": "takeout_15",
      "word": "missing item",
      "cn": "\u6f0f\u9001\u5546\u54c1",
      "example": "There was a missing item in my order - the drink wasn't included.",
      "ex_cn": "\u6211\u7684\u8ba2\u5355\u6f0f\u9001\u4e86\u4e00\u4e2a\u5546\u54c1\u2014\u2014\u996e\u6599\u6ca1\u653e\u8fdb\u53bb\u3002"
    },
    {
      "id": "takeout_16",
      "word": "delivery address",
      "cn": "\u6536\u8d27\u5730\u5740",
      "example": "Make sure your delivery address is correct before placing the order.",
      "ex_cn": "\u4e0b\u5355\u524d\u786e\u8ba4\u914d\u9001\u5730\u5740\u6b63\u786e\u3002"
    },
    {
      "id": "takeout_17",
      "word": "phone number",
      "cn": "\u8054\u7cfb\u7535\u8bdd",
      "example": "The driver will call this phone number if they can't find you.",
      "ex_cn": "\u5916\u5356\u9a91\u624b\u627e\u4e0d\u5230\u4f60\u65f6\u4f1a\u62e8\u6253\u8fd9\u4e2a\u7535\u8bdd\u3002"
    },
    {
      "id": "takeout_18",
      "word": "special instructions",
      "cn": "\u7279\u6b8a\u5907\u6ce8",
      "example": "Add special instructions if you want less ice or extra sauce.",
      "ex_cn": "\u5982\u679c\u5c11\u51b0\u6216\u52a0\u6599\uff0c\u53ef\u4ee5\u5728\u7279\u6b8a\u5907\u6ce8\u91cc\u5199\u4e0a\u3002"
    },
    {
      "id": "takeout_19",
      "word": "chopsticks",
      "cn": "\u7b77\u5b50",
      "example": "Please include two pairs of chopsticks with my order.",
      "ex_cn": "\u8bf7\u968f\u8ba2\u5355\u914d\u4e24\u53cc\u7b77\u5b50\u3002"
    },
    {
      "id": "takeout_20",
      "word": "napkin",
      "cn": "\u9910\u5dfe\u7eb8",
      "example": "Could you add some napkins to the bag, please?",
      "ex_cn": "\u80fd\u5728\u888b\u5b50\u91cc\u653e\u51e0\u5f20\u9910\u5dfe\u7eb8\u5417\uff1f"
    },
    {
      "id": "takeout_21",
      "word": "straw",
      "cn": "\u5438\u7ba1",
      "example": "Don't forget to add a straw for the iced tea.",
      "ex_cn": "\u522b\u5fd8\u4e86\u653e\u5438\u7ba1\u3002"
    },
    {
      "id": "takeout_22",
      "word": "bag",
      "cn": "\u5916\u5356\u888b",
      "example": "Make sure the bag is sealed properly before handing it to the driver.",
      "ex_cn": "\u786e\u4fdd\u5916\u5356\u888b\u5c01\u53e3\u826f\u597d\u518d\u4ea4\u7ed9\u5916\u5356\u5458\u3002"
    },
    {
      "id": "takeout_23",
      "word": "seal",
      "cn": "\u5c01\u53e3/\u5bc6\u5c01",
      "example": "Check that the seal on the food container isn't broken.",
      "ex_cn": "\u68c0\u67e5\u98df\u7269\u76d2\u5b50\u7684\u5c01\u53e3\u662f\u5426\u5b8c\u597d\u3002"
    },
    {
      "id": "takeout_24",
      "word": "reheat",
      "cn": "\u52a0\u70ed",
      "example": "The food tastes best if you reheat it in a pan instead of the microwave.",
      "ex_cn": "\u7528\u9505\u52a0\u70ed\u6bd4\u5fae\u6ce2\u7089\u66f4\u597d\u5403\u3002"
    }
  ]
};

// 获取某个场景的单词列表
// 获取某个场景的单词列表
function getWordsByScene(sceneId) {
  return vocabulary[sceneId] || [];
}

// 获取单个单词详情
function getWordById(sceneId, wordId) {
  const words = vocabulary[sceneId];
  if (!words) return null;
  return words.find(w => w.id === wordId) || null;
}

// 获取场景的组标签
function getFreqLabel(freq) {
  const map = {
    "🔥": "最常用",
    "🟡": "较常用",
    "🟢": "有时用"
  };
  return map[freq] || "";
}
