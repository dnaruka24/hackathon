const Drinks = [
  {
    id: 23,
    image:
      " https://i.ytimg.com/vi/J_YVRNVwhiU/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDbkhmCenYknHDhwK8CJ40_OUZLyw",
    title: {
      en: "5 Types Cold Coffee",
      hi: " 5 प्रकार की कोल्ड कॉफी",
    },
    description: {
      en: " Why go out to melt in the melting weather when you can enjoy Cafe style Cold Coffee at home!",
      hi: " गर्मी में बाहर जाकर पिघलने की बजाय घर पर कैफे स्टाइल की कोल्ड कॉफी का मजा क्यों न लें!",
    },
    ingredients: {
      en: [
        // For Coffee Decoction
        "1 cup Water",
        "½ cup Coffee powder",
        "1 ⅓ cup Caster sugar",
        "1/2 Green cardamom",

        // For Iced Coffee
        "6-7 Ice cubes",
        "2 tbsp Prepared Coffee Syrup",
        "½ tbsp Fresh Cream (optional)",
        "¼ cup Milk",

        // For Frappuccino
        "2 ½ tbsp Prepared Coffee Syrup",
        "1 ½ tbsp Condensed milk",
        "5-6 Ice cubes",

        // For Serving
        "1 tbsp Prepared Coffee Syrup",

        // For Iced Mocha
        "1 ½ tbsp Chocolate syrup",
        "5-6 tbsp Prepared Coffee Syrup",
        "1 ½ cup Milk",

        // For Garnish
        "Vanilla ice cream",
        "Chocochips",
        "Coffee powder",
        "Chocolate syrup",

        // For Home Style Iced Coffee
        "2 ½ tbsp Prepared Coffee Syrup",
        "1 tsp Coffee powder",
        "4-5 Ice cubes",
        "A pinch of salt",
        "½ tbsp Fresh Cream (optional)",
        "⅓ cup Milk",

        // For Garnish
        "A pinch of Coffee powder",

        // For Coffee Freakshake
        "3-4 Chocolate cream biscuits",
        "3-4 tbsp Prepared Coffee Syrup",
        "2-3 tbsp Chocolate syrup",
        "1 ¼ cup Milk",
        "1 scoop Vanilla ice cream",

        // For Garnish
        "Chocolate syrup",
        "Chocolate chips",
        "Crushed chocolate cream biscuits",
        "Prepared Coffee Shake",
        "Vanilla ice cream",
        "Crushed chocolate cream biscuits",
        "Whipped cream",
        "Chocolate syrup",
      ],
      hi: [
        // For Coffee Decoction
        "1 कप पानी",
        "½ कप कॉफी पाउडर",
        "1 ⅓ कप कॉस्टर शुगर",
        "½ हरी इलायची",

        // For Iced Coffee
        "6-7 बर्फ के टुकड़े",
        "2 बड़े चम्मच तैयार कॉफी सिरप",
        "½ बड़ा चम्मच ताजा क्रीम (वैकल्पिक)",
        "¼ कप दूध",

        // For Frappuccino
        "2 ½ बड़े चम्मच तैयार कॉफी सिरप",
        "1 ½ बड़ा चम्मच कंडेन्स्ड मिल्क",
        "5-6 बर्फ के टुकड़े",

        // For Serving
        "1 बड़ा चम्मच तैयार कॉफी सिरप",

        // For Iced Mocha
        "1 ½ बड़ा चम्मच चॉकलेट सिरप",
        "5-6 बड़े चम्मच तैयार कॉफी सिरप",
        "1 ½ कप दूध",

        // For Garnish
        "वनीला आइसक्रीम",
        "चोको चिप्स",
        "कॉफी पाउडर",
        "चॉकलेट सिरप",

        // For Home Style Iced Coffee
        "2 ½ बड़े चम्मच तैयार कॉफी सिरप",
        "1 छोटा चम्मच कॉफी पाउडर",
        "4-5 बर्फ के टुकड़े",
        "एक चुटकी नमक",
        "½ बड़ा चम्मच ताजा क्रीम (वैकल्पिक)",
        "⅓ कप दूध",

        // For Garnish
        "एक चुटकी कॉफी पाउडर",

        // For Coffee Freakshake
        "3-4 चॉकलेट बिस्किट",
        "3-4 बड़े चम्मच तैयार कॉफी सिरप",
        "2-3 बड़े चम्मच चॉकलेट सिरप",
        "1 ¼ कप दूध",
        "1 स्कूप वनीला आइसक्रीम",

        // For Garnish
        "चॉकलेट सिरप",
        "चोको चिप्स",
        "चॉकलेट बिस्किट, क्रश किए हुए",
        "तैयार किया हुआ कॉफी शेक",
        "वनीला आइसक्रीम",
        "चॉकलेट बिस्किट, क्रश किए हुए",
        "विप्ड क्रीम",
        "चॉकलेट सिरप",
      ],
    },
    steps: {
      en: [
        {
          section: "For Coffee Decoction",
          instructions: [
            "In a sauce pot, add water, instant coffee powder, castor sugar, and green cardamom. Cook for a while.",
            "Once the sugar is dissolved and cooked, switch off the flame.",
            "Transfer it into a bowl and let it cool at room temperature, or store in the refrigerator for longer use.",
          ],
        },
        {
          section: "For Iced Coffee",
          instructions: [
            "In a glass, add ice cubes.",
            "Pour prepared coffee syrup, fresh cream, and milk.",
            "Stir with a stirrer and serve cold.",
          ],
        },
        {
          section: "For Frappuccino",
          instructions: [
            "In a mixer jar, add coffee syrup, condensed milk, and ice cubes.",
            "Churn until smooth.",
            "Pour some coffee syrup at the bottom of the glass, add the prepared coffee, and serve cold.",
          ],
        },
        {
          section: "For Iced Mocha",
          instructions: [
            "In a glass, add chocolate syrup, prepared coffee syrup, and milk.",
            "Garnish with vanilla ice cream, choco chips, coffee powder, and chocolate syrup.",
            "Serve cold.",
          ],
        },
        {
          section: "For Home Style Ice Coffee",
          instructions: [
            "In a plastic container, add coffee syrup, coffee powder, pinch of salt, ice cubes, fresh cream, and milk.",
            "Cover with a lid and shake well.",
            "Transfer into a serving glass and serve cold.",
          ],
        },
        {
          section: "For Coffee Freakshake",
          instructions: [
            "In a mixer jar, add chocolate cream biscuits, coffee syrup, chocolate syrup, and vanilla ice cream. Grind into a smooth mixture.",
            "Decorate a mason jar by pouring chocolate syrup and colorful sprinkles around the rim.",
            "Add chocolate syrup, chocolate cream biscuits, and prepared coffee mixture into the jar.",
            "Garnish with ice cream, chocolate biscuits, whipped cream, sprinkles, chocolate stick, and drizzle chocolate syrup. Serve cold.",
          ],
        },
      ],
      hi: [
        {
          section: "कॉफी डेकोक्शन के लिए",
          instructions: [
            "एक सॉस पैन में पानी, इंस्टेंट कॉफी पाउडर, कास्टर शुगर और हरी इलायची डालें। थोड़ी देर पकाएं।",
            "जब चीनी अच्छे से घुल जाए और पक जाए, तो गैस बंद कर दें।",
            "इसे एक बाउल में निकालें और कमरे के तापमान पर ठंडा करें या लंबे समय के लिए फ्रिज में स्टोर करें।",
          ],
        },
        {
          section: "आइस्ड कॉफी के लिए",
          instructions: [
            "एक ग्लास में बर्फ के टुकड़े डालें।",
            "तैयार कॉफी सिरप, फ्रेश क्रीम और दूध डालें।",
            "एक स्टिरर की मदद से मिलाएं और ठंडी सर्व करें।",
          ],
        },
        {
          section: "फ्रेपुचीनो के लिए",
          instructions: [
            "मिक्सर जार में कॉफी सिरप, कंडेंस्ड मिल्क और बर्फ के टुकड़े डालें।",
            "अच्छे से ग्राइंड करें।",
            "ग्लास के नीचे थोड़ा कॉफी सिरप डालें, फिर तैयार फ्रेपुचीनो डालें और ठंडा सर्व करें।",
          ],
        },
        {
          section: "आइस्ड मोक्का के लिए",
          instructions: [
            "एक ग्लास में चॉकलेट सिरप, तैयार कॉफी सिरप और दूध डालें।",
            "इसके ऊपर वनीला आइसक्रीम, चोको चिप्स, कॉफी पाउडर और चॉकलेट सिरप डालकर गार्निश करें।",
            "ठंडा सर्व करें।",
          ],
        },
        {
          section: "होम स्टाइल आइस कॉफी के लिए",
          instructions: [
            "एक प्लास्टिक कंटेनर में कॉफी सिरप, कॉफी पाउडर, चुटकी भर नमक, बर्फ के टुकड़े, फ्रेश क्रीम और दूध डालें।",
            "ढक्कन बंद करें और अच्छे से शेक करें।",
            "ग्लास में निकालकर ठंडा सर्व करें।",
          ],
        },
        {
          section: "कॉफी फ्रीकशेक के लिए",
          instructions: [
            "मिक्सर जार में चॉकलेट क्रीम बिस्किट, कॉफी सिरप, चॉकलेट सिरप और वनीला आइसक्रीम डालकर स्मूद ग्राइंड करें।",
            "एक मेसन जार को चॉकलेट सिरप और रंगीन स्प्रिंकल्स से सजाएं।",
            "जार में चॉकलेट सिरप, बिस्किट और तैयार कॉफी डालें।",
            "ऊपर से आइसक्रीम, चॉकलेट बिस्किट, व्हिप क्रीम, स्प्रिंकल्स, चॉकलेट स्टिक डालें और चॉकलेट सिरप डालकर ठंडा सर्व करें।",
          ],
        },
      ],
    },
    category: "Drinks",
    youtubeLink: "https://www.youtube.com/watch?v=J_YVRNVwhiU",
  },

  {
    id: 24,
    image:
      "https://i.ytimg.com/vi/qkzu62cQwCU/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDtTR9DLz-6t0LCTLJfWhJQHNf25A",
    title: {
      en: "Iced Tea",
      hi: "आइस टी",
    },
    description: {
      en: "We love our chai, right? Be it summer or winter, a cuppa is must! Winters ke liye Masala chai done, now time for some Iced Tea.",
      hi: " हम अपनी चाय से प्यार करते हैं, है ना? चाहे गर्मी हो या सर्दी, एक कप चाय तो बनती है! सर्दियों के लिए मसाला चाय हो गई, अब बारी है आइस टी की।",
    },
    ingredients: {
      en: [
        // For Brewing Black Tea
        "1 liter Water",
        "3-4 Black peppercorns",
        "¼ tsp Fennel seeds",
        "Few Tender Mint Stems",
        "A pinch of salt",
        "3 heaped tbsp Tea leaves",
        "10 heaped tbsp Sugar",

        // For Brewing Oolong Tea
        "2 heaped tbsp Oolong tea leaves",
        "½ liter Hot water",

        // For Brewing Green Tea
        "2 heaped tbsp Green tea leaves",
        "½ liter Hot water",

        // For Lemon Ice Tea
        "2 tsp Lemon juice",
        "1 Lime, sliced",
        "Few Mint leaves",
        "1 tsp Sugar",
        "2-4 Ice cubes",
        "Brewed Black Tea",

        // For Garnish
        "Mint sprig",
        "Lime, sliced",

        // For Peach Ice Tea
        "2 tsp Lemon juice",
        "1 Peach, sliced",
        "1 tsp Sugar",
        "2-4 Ice cubes",
        "Brewed Black Tea",

        // Garnish
        "Mint sprig",
        "Peach, sliced",

        // For Watermelon Ice Tea
        "¼ inch Ginger, peeled & sliced",
        "1 tsp Sugar",
        "⅓ cup Watermelon, cubed",
        "1 tsp Honey",
        "1 tsp Lemon juice",
        "1 tbsp Basil seeds, soaked",
        "2-3 Watermelon cubes",
        "2-4 Ice cubes",
        "Brewed Oolong Tea",

        // For Ice Tea Mocktail
        "2-3 tbsp Lemon juice",
        "Prepared Lemon Ice Tea",
        "Prepared Peach Ice Tea",
        "Brewed Black Tea",
        "6-8 Ice cubes",

        // Garnish
        "Mint sprig",
        "Watermelon, sliced",
        "Lime, sliced",
        "1 tsp Basil seeds, soaked",
      ],
      hi: [
        // For Brewing Black Tea
        "1 लीटर पानी",
        "3-4 काली मिर्च के दाने",
        "¼ छोटा चम्मच सौंफ",
        "थोड़े पुदीने के डंठल",
        "एक चुटकी नमक",
        "3 बड़े चम्मच चाय पत्ती",
        "10 बड़े चम्मच चीनी",

        // For Brewing Oolong Tea
        "2 बड़े चम्मच ओलोंग चाय पत्ती",
        "½ लीटर गरम पानी",

        // For Brewing Green Tea
        "2 बड़े चम्मच हरी चाय पत्ती",
        "½ लीटर गरम पानी",

        // For Lemon Ice Tea
        "2 छोटे चम्मच नींबू का रस",
        "1 नींबू, स्लाइस किया हुआ",
        "थोड़ी पुदीना पत्ती",
        "1 छोटा चम्मच चीनी",
        "2-4 बर्फ के टुकड़े",
        "तैयार किया हुआ काली चाय",

        // For Garnish
        "पुदीना पत्ती",
        "नींबू, स्लाइस किया हुआ",

        // For Peach Ice Tea
        "2 छोटे चम्मच नींबू का रस",
        "1 आड़ू, स्लाइस किया हुआ",
        "1 छोटा चम्मच चीनी",
        "2-4 बर्फ के टुकड़े",
        "तैयार किया हुआ काली चाय",

        // Garnish
        "पुदीना पत्ती",
        "आड़ू, स्लाइस किया हुआ",

        // For Watermelon Ice Tea
        "¼ इंच अदरक, छीला और स्लाइस किया हुआ",
        "1 छोटा चम्मच चीनी",
        "⅓ कप तरबूज, टुकड़ों में",
        "1 छोटा चम्मच शहद",
        "1 छोटा चम्मच नींबू का रस",
        "1 बड़ा चम्मच सब्जा बीज, भिगोए हुए",
        "2-3 टुकड़े तरबूज",
        "2-4 बर्फ के टुकड़े",
        "तैयार किया हुआ ओलोंग चाय",

        // For Ice Tea Mocktail
        "2-3 बड़े चम्मच नींबू का रस",
        "तैयार की हुई लेमन आइस टी",
        "तैयार की हुई पीच आइस टी",
        "तैयार की हुई काली चाय",
        "6-8 बर्फ के टुकड़े",

        // Garnish
        "पुदीना पत्ती",
        "तरबूज, स्लाइस किया हुआ",
        "नींबू, स्लाइस किया हुआ",
        "1 छोटा चम्मच सब्जा बीज, भिगोए हुए",
      ],
    },
    steps: {
      en: [
        {
          section: "For Brewing Black Tea",
          instructions: [
            "In a saucepan, add water, black peppercorns, fennel seeds, tender mint stems, a pinch of salt, and tea leaves. Boil for a few minutes.",
            "Add sugar and bring it to a quick boil.",
            "Transfer to a bowl and cool to room temperature or refrigerate.",
            "Keep aside for further use.",
          ],
        },
        {
          section: "For Brewing Oolong Tea",
          instructions: [
            "In a saucepan, bring water to a roaring boil.",
            "In a glass jar, add oolong tea leaves and hot water. Let it brew.",
            "Cool to room temperature or refrigerate.",
          ],
        },
        {
          section: "For Brewing Green Tea",
          instructions: [
            "In a saucepan, bring water to a roaring boil.",
            "In a glass jar, add green tea leaves and hot water. Let it brew.",
            "Cool to room temperature or refrigerate.",
          ],
        },
        {
          section: "For Lemon Ice Tea",
          instructions: [
            "In a highball glass, add lemon juice, sliced lime, mint leaves, and sugar.",
            "Muddle well using a muddler.",
            "Add ice cubes and brewed black tea.",
            "Garnish with a mint sprig and lemon slice. Serve chilled.",
          ],
        },
        {
          section: "For Peach Ice Tea",
          instructions: [
            "In a highball glass, add lemon juice, peach, and sugar.",
            "Muddle well using a muddler.",
            "Add ice cubes and brewed black tea. Stir well.",
            "Garnish with peach and mint sprig. Serve chilled.",
          ],
        },
        {
          section: "For Watermelon Ice Tea",
          instructions: [
            "In a highball glass, add ginger and sugar. Muddle well.",
            "Add watermelon and honey. Crush well.",
            "Add lemon juice, basil seeds, more watermelon, ice cubes, and brewed oolong tea.",
            "Stir well and garnish with watermelon slice, mint sprig, lime slice, and basil seeds. Serve chilled.",
          ],
        },
        {
          section: "For Ice Tea Mocktail",
          instructions: [
            "In a large water jug, add lemon juice, prepared lemon tea, peach tea, and brewed black tea.",
            "Add ice cubes and stir well. Serve chilled.",
          ],
        },
      ],
      hi: [
        {
          section: "ब्लैक टी बनाने के लिए",
          instructions: [
            "एक सॉस पैन में पानी, काली मिर्च, सौंफ, पुदीने की नरम डंठल, एक चुटकी नमक और चाय पत्ती डालें। कुछ मिनट तक उबालें।",
            "चीनी डालें और एक उबाल आने दें।",
            "एक बाउल में छानकर कमरे के तापमान पर ठंडा करें या फ्रिज में रखें।",
            "अगले उपयोग तक अलग रखें।",
          ],
        },
        {
          section: "ऊलोंग टी बनाने के लिए",
          instructions: [
            "एक सॉस पैन में पानी उबालें।",
            "एक ग्लास जार में ऊलोंग टी की पत्तियां और गर्म पानी डालें। कुछ देर के लिए रख दें।",
            "कमरे के तापमान पर ठंडा करें या फ्रिज में रखें।",
          ],
        },
        {
          section: "ग्रीन टी बनाने के लिए",
          instructions: [
            "एक सॉस पैन में पानी उबालें।",
            "एक ग्लास जार में ग्रीन टी की पत्तियां और गर्म पानी डालें। कुछ देर के लिए रख दें।",
            "कमरे के तापमान पर ठंडा करें या फ्रिज में रखें।",
          ],
        },
        {
          section: "लेमन आइस टी के लिए",
          instructions: [
            "एक हाईबॉल ग्लास में नींबू का रस, कटा हुआ नींबू, पुदीने की पत्तियां और चीनी डालें।",
            "मडलर से अच्छे से मसलें।",
            "बर्फ के टुकड़े और तैयार ब्लैक टी डालें।",
            "पुदीने की डंडी और नींबू के स्लाइस से सजाएं। ठंडा परोसें।",
          ],
        },
        {
          section: "पीच आइस टी के लिए",
          instructions: [
            "एक हाईबॉल ग्लास में नींबू का रस, आड़ू और चीनी डालें।",
            "मडलर से अच्छे से मसलें।",
            "बर्फ के टुकड़े और तैयार ब्लैक टी डालें और अच्छे से मिलाएं।",
            "आड़ू के टुकड़े और पुदीने से सजाएं। ठंडा परोसें।",
          ],
        },
        {
          section: "वाटरमेलन आइस टी के लिए",
          instructions: [
            "एक हाईबॉल ग्लास में अदरक और चीनी डालें और मडलर से मसलें।",
            "तरबूज और शहद डालें और अच्छे से मसलें।",
            "नींबू का रस, सब्जा के बीज, और थोड़ा और तरबूज, बर्फ के टुकड़े, और तैयार ऊलोंग टी डालें।",
            "अच्छे से मिलाएं और तरबूज के टुकड़े, पुदीने की डंडी, नींबू स्लाइस और सब्जा के बीज से सजाएं। ठंडा परोसें।",
          ],
        },
        {
          section: "आइस टी मॉकटेल के लिए",
          instructions: [
            "एक बड़े जग में नींबू का रस, तैयार लेमन टी, पीच टी और ब्लैक टी डालें।",
            "बर्फ के टुकड़े डालें और अच्छे से मिलाएं। ठंडा परोसें।",
          ],
        },
      ],
    },
    category: "Drinks",
    youtubeLink: "https://www.youtube.com/watch?v=qkzu62cQwCU",
  },

  {
    id: 25,
    image:
      "https://i.ytimg.com/vi/A3nOgUFcBJM/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDqMmcueoWYKRRGSo_OQ_TN0gDMAg",
    title: {
      en: "Aam Panna",
      hi: "आम पना",
    },
    description: {
      en: "Every season has its own specialties. For instance, summer and aam panna go hand in hand, right? I'll help you prepare the basic Panna Masala, using which you can try making a Panna with your favourite fruit. :)",
      hi: " हर मौसम की अपनी खासियत होती है। जैसे गर्मी और आम पना एक साथ चलते हैं, है ना? मैं आपको बेसिक पना मसाला बनाना सिखाऊंगा, जिससे आप अपने पसंदीदा फल के साथ पना बना सकते हैं। :)",
    },
    ingredients: {
      en: [
        // For Panna Masala
        "¼ cup Cumin seeds",
        "¼ cup Fennel seeds",
        "2-3 Green Cardamom pods",
        "3 heaped tbsp Black peppercorns",
        "½ tbsp Black salt",

        // Aam Panna
        "4 medium raw Mangoes, cut into half",
        "2 cups Water",
        "Salt to taste",
        "1 cup Jaggery",
        "1 inch Ginger, peeled and sliced",
        "1 Green chilli",

        // For Serving Aam Panna
        "2-4 Ice cubes",
        "1 tsp Prepared Masala",
        "¼ cup Mango juice",
        "Cold Water",
        "Raw Mango, sliced for garnish",

        // Pineapple Masala Cooler
        "1 whole Pineapple, roughly chopped",
        "1 ¼ cups Water",
        "Salt to taste",
        "1 cup Sugar",
        "½ inch Ginger, peeled and sliced",
        "1 Green chilli",
        "¼ tsp Saffron strands",

        // For Serving Pineapple Cooler
        "½ Lime juice",
        "2-4 Ice cubes",
        "1 tsp Prepared Masala",
        "Cold Water",

        // Guava Masala Drink
        "4 Guavas, cut into half",
        "1 ¼ cups Water",
        "Salt to taste",
        "1 cup Sugar",
        "2 Dry red chillies",
        "1 tsp Degi Red chilli powder",

        // For Serving Guava Drink
        "½ Lime juice",
        "2-4 Ice cubes",
        "1 tsp Prepared Masala",
        "¼ cup Guava juice",
        "Guava, sliced",
      ],
      hi: [
        // Aam Panna
        "¼ कप जीरा",
        "¼ कप सौंफ",
        "2-3 हरी इलायची",
        "3 बड़े चम्मच काली मिर्च के दाने",
        "½ बड़ा चम्मच काला नमक",
        "4 मध्यम कच्चा आम, आधा काटा हुआ",
        "2 कप पानी",
        "नमक स्वादअनुसार",
        "1 कप गुड़",
        "1 इंच अदरक, छीला और स्लाइस किया हुआ",
        "1 हरी मिर्च",

        // सर्व करने के लिए (Aam Panna)
        "2-4 बर्फ के टुकड़े",
        "1 छोटा चम्मच तैयार किया हुआ मसाला",
        "¼ कप आम का शरबत",
        "ठंडा पानी",
        "कच्चा आम, सजावट के लिए स्लाइस किया हुआ",

        // Pineapple Masala Cooler
        "1 पूरा अनानास, मोटा कटा हुआ",
        "1 ¼ कप पानी",
        "नमक स्वादअनुसार",
        "1 कप चीनी",
        "½ इंच अदरक, छीला और स्लाइस किया हुआ",
        "1 हरी मिर्च",
        "¼ छोटा चम्मच केसर",

        // सर्व करने के लिए (Pineapple Cooler)
        "½ नींबू का रस",
        "2-4 बर्फ के टुकड़े",
        "1 छोटा चम्मच तैयार किया हुआ मसाला",
        "ठंडा पानी",

        // Guava Masala Drink
        "4 अमरूद, आधा काटा हुआ",
        "1 ¼ कप पानी",
        "नमक स्वादअनुसार",
        "1 कप चीनी",
        "2 सूखी लाल मिर्च",
        "1 छोटा चम्मच देगी लाल मिर्च पाउडर",

        // सर्व करने के लिए (Guava Drink)
        "½ नींबू का रस",
        "2-4 बर्फ के टुकड़े",
        "1 छोटा चम्मच तैयार किया हुआ मसाला",
        "¼ कप अमरूद का जूस",
        "अमरूद, स्लाइस किया हुआ",
      ],
    },
    steps: {
      en: [
        {
          section: "Panna Masala",
          instructions: [
            "In a pan, add cumin seeds, fennel seeds, green cardamom pods, black peppercorns, and black salt.",
            "Dry roast them well until aromatic.",
            "Once cooled, transfer to a grinder jar and grind to a fine powder.",
            "Store until further use.",
          ],
        },
        {
          section: "Aam Panna",
          instructions: [
            "In a kadai, add raw mango, water, salt to taste, jaggery, ginger, and green chilli.",
            "Cover and cook on medium flame until the mango is well cooked.",
            "Let it cool completely. Peel the mango skin and scrape the pulp thoroughly.",
            "Grind the pulp into a smooth paste and keep aside.",
          ],
        },
        {
          section: "To Serve Aam Panna",
          instructions: [
            "In a tall glass, take a spoonful of aam panna and add a few ice cubes.",
            "Add a spoonful of prepared masala and mix well.",
            "Pour in mango juice, ice-cold water and mix again.",
            "Garnish with sliced raw mango and serve.",
          ],
        },
        {
          section: "Pineapple Panna",
          instructions: [
            "In a kadai, add pineapple, water, salt to taste, sugar, ginger, and green chilli.",
            "Cover and cook on medium flame until pineapple turns soft.",
            "Remove from heat and let it cool.",
            "Transfer to a grinder jar, add saffron strands and grind to a smooth puree. Keep aside.",
          ],
        },
        {
          section: "To Serve Pineapple Panna",
          instructions: [
            "In a tall glass, take a spoonful of pineapple panna and add lime juice and a few ice cubes.",
            "Add a spoonful of prepared masala and mix well.",
            "Pour in ice-cold water and mix again.",
            "Garnish with a slice of pineapple and serve chilled.",
          ],
        },
        {
          section: "Guava Panna",
          instructions: [
            "In a kadai, add guava, water, salt to taste, sugar, and dry red chillies.",
            "Cover with a lid and cook on medium flame until guavas are soft and cooked.",
            "Remove from heat and let it cool.",
            "Transfer to a grinder jar, add degi red chilli powder and grind to a smooth puree. Keep aside.",
          ],
        },
        {
          section: "To Serve Guava Panna",
          instructions: [
            "In a tall glass, take a spoonful of guava panna and add lime juice and a few ice cubes.",
            "Add a spoonful of prepared masala and mix well.",
            "Pour in guava juice and ice-cold water and stir.",
            "Garnish with a slice of guava and serve chilled.",
          ],
        },
      ],
      hi: [
        {
          section: "पन्ना मसाला",
          instructions: [
            "एक पैन में जीरा, सौंफ, हरी इलायची, काली मिर्च और काला नमक डालें।",
            "इन्हें अच्छे से सूखा भून लें जब तक खुशबू आने लगे।",
            "ठंडा होने पर ग्राइंडर जार में डालकर बारीक पीस लें।",
            "भविष्य में उपयोग के लिए स्टोर करें।",
          ],
        },
        {
          section: "आम पन्ना",
          instructions: [
            "एक कढ़ाई में कच्चा आम, पानी, स्वादानुसार नमक, गुड़, अदरक और हरी मिर्च डालें।",
            "ढककर मध्यम आंच पर तब तक पकाएं जब तक आम अच्छे से पक जाए।",
            "ठंडा होने दें, फिर आम का छिलका निकालें और गूदा निकाल लें।",
            "इसे मिक्सर में डालकर स्मूद पेस्ट बना लें और अलग रख दें।",
          ],
        },
        {
          section: "आम पन्ना परोसने के लिए",
          instructions: [
            "एक लंबे गिलास में एक चम्मच आम पन्ना डालें और कुछ बर्फ के टुकड़े डालें।",
            "एक चम्मच तैयार मसाला डालें और अच्छे से मिलाएं।",
            "अब आम का रस और ठंडा पानी डालें और मिलाएं।",
            "कच्चे आम के स्लाइस से सजाएं और परोसें।",
          ],
        },
        {
          section: "अनानास पन्ना",
          instructions: [
            "एक कढ़ाई में अनानास, पानी, स्वादानुसार नमक, चीनी, अदरक और हरी मिर्च डालें।",
            "ढककर मध्यम आंच पर तब तक पकाएं जब तक अनानास मुलायम न हो जाए।",
            "गैस से उतारकर ठंडा होने दें।",
            "मिक्सर जार में डालें, केसर डालें और स्मूद प्यूरी बना लें। अलग रख दें।",
          ],
        },
        {
          section: "अनानास पन्ना परोसने के लिए",
          instructions: [
            "एक लंबे गिलास में एक चम्मच अनानास पन्ना डालें, नींबू का रस और बर्फ के टुकड़े डालें।",
            "एक चम्मच मसाला डालें और अच्छे से मिलाएं।",
            "ठंडा पानी डालें और फिर से मिलाएं।",
            "अनानास के स्लाइस से सजाएं और ठंडा परोसें।",
          ],
        },
        {
          section: "अमरूद पन्ना",
          instructions: [
            "एक कढ़ाई में अमरूद, पानी, स्वादानुसार नमक, चीनी और सूखी लाल मिर्च डालें।",
            "ढककर मध्यम आंच पर पकाएं जब तक अमरूद नरम और अच्छे से पक न जाए।",
            "गैस से उतारकर ठंडा होने दें।",
            "मिक्सर जार में डालें, देगी मिर्च पाउडर डालें और स्मूद प्यूरी बना लें। अलग रख दें।",
          ],
        },
        {
          section: "अमरूद पन्ना परोसने के लिए",
          instructions: [
            "एक लंबे गिलास में एक चम्मच अमरूद पन्ना डालें, नींबू का रस और बर्फ के टुकड़े डालें।",
            "एक चम्मच मसाला डालें और अच्छे से मिलाएं।",
            "अमरूद का रस और ठंडा पानी डालें और मिलाएं।",
            "अमरूद के स्लाइस से सजाएं और ठंडा परोसें।",
          ],
        },
      ],
    },
    category: "Drinks",
    youtubeLink:
      "https://www.youtube.com/watch?v=A3nOgUFcBJM&list=PLOA_MH94qxpj_Ct8KepOzYXdEzG2Eg8Yq&index=3",
  },

  {
    id: 26,
    image:
      "https://i.ytimg.com/vi/h6oQuHyM8Cw/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDw8SwlkDt43NWnhDWm9k5-be1x9Q",
    title: {
      en: "Mango Falooda",
      hi: "मैंगो फालूदा",
    },
    description: {
      en: "Mango Falooda is a delicious and refreshing dessert that combines the flavors of mango with the unique texture of falooda noodles, topped with nuts and served chilled.",
      hi: " मैंगो फालूदा एक स्वादिष्ट और ताजगी भरा मिठाई है जो आम के स्वाद को फालूदा नूडल्स की अनोखी बनावट के साथ मिलाता है, नट्स के साथ सजाया जाता है और ठंडा परोसा जाता है।",
    },
    ingredients: {
      en: [
        "4 tbsp Rose Syrup",
        "5 gm Agar Agar",
        "½ cup Mango cubes",
        "¼ cup Sabja Seeds, soaked",
        "¼ cup Pistachios & Almonds, blanched & peeled",
        "1 tbsp Granulated sugar",
        "¼ cup Mango Pulp",
        "Vanilla Ice Cream, as required",
        "¼ cup Milk",
        "1 Mango, peeled into thin strips",
        "2 tbsp Condensed Milk",
      ],
      hi: [
        "4 बड़े चम्मच रोज़ सिरप",
        "5 ग्राम अगर अगर",
        "½ कप आम के टुकड़े",
        "¼ कप भीगे हुए सब्जा बीज",
        "¼ कप छिले हुए पिस्ता और बादाम",
        "1 बड़ा चम्मच दानेदार चीनी",
        "¼ कप आम का पल्प",
        "वनीला आइसक्रीम, आवश्यकता अनुसार",
        "¼ कप दूध",
        "1 आम, पतली स्ट्रिप्स में छिला हुआ",
        "2 बड़े चम्मच कंडेंस्ड मिल्क",
      ],
    },
    steps: {
      en: [
        {
          section: "Preparation",
          instructions: [
            "Soak sabja (basil) seeds in water for 30 minutes.",
            "In a pan, heat agar agar with water and rose syrup until it thickens and forms a jelly.",
            "Pour the rose syrup jelly into a glass and refrigerate until set.",
          ],
        },
        {
          section: "Layering",
          instructions: [
            "Once the jelly layer is set in the glass, add mango cubes.",
            "Then add the soaked sabja seeds on top.",
            "Now add a layer of blanched and peeled nuts.",
            "Sprinkle some granulated sugar over the nuts.",
            "Scoop vanilla ice cream over the layers and pour milk on top.",
            "Top with mango strips and drizzle condensed milk.",
          ],
        },
        {
          section: "Garnish & Serve",
          instructions: [
            "Garnish with a dash of rose syrup, a mint sprig, a mango slice, and a sprinkle of black pepper.",
            "Serve chilled.",
          ],
        },
      ],
      hi: [
        {
          section: "तैयारी",
          instructions: [
            "सब्जा बीजों को 30 मिनट के लिए पानी में भिगो दें।",
            "एक पैन में, अगर अगर को पानी और गुलाब सिरप के साथ गर्म करें जब तक वह गाढ़ा होकर जेली जैसा न बन जाए।",
            "गुलाब सिरप जेली को एक गिलास में डालें और सेट होने तक फ्रिज में रखें।",
          ],
        },
        {
          section: "परत जमाना",
          instructions: [
            "जब गिलास में जेली की परत सेट हो जाए, तो उसमें आम के टुकड़े डालें।",
            "फिर उसके ऊपर भीगे हुए सब्जा बीज डालें।",
            "अब छिले हुए और उबाले हुए मेवों की परत डालें।",
            "ऊपर से कुछ दानेदार चीनी छिड़कें।",
            "अब वनीला आइसक्रीम स्कूप करके डालें और ऊपर से दूध डालें।",
            "फिर आम की स्ट्रिप्स और कंडेंस्ड मिल्क डालें।",
          ],
        },
        {
          section: "गार्निश और परोसना",
          instructions: [
            "ऊपर से थोड़ा गुलाब सिरप, पुदीने की पत्ती, आम का टुकड़ा और थोड़ी काली मिर्च छिड़कें।",
            "ठंडा परोसें।",
          ],
        },
      ],
    },
    category: "Drinks",
    youtubeLink:
      "https://www.youtube.com/watch?v=h6oQuHyM8Cw&list=PLOA_MH94qxpj_Ct8KepOzYXdEzG2Eg8Yq&index=6",
  },

  {
    id: 27,
    image:
      "https://i.ytimg.com/vi/t0C7TQqLjtc/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCMqikLncpEEL9Rs0bwlOztRdH0zw",
    title: {
      en: "Masala chai",
      hi: "मसाला चाय",
    },
    description: {
      en: "Masala Chai is a spiced Indian tea brewed with black tea, milk, and a blend of aromatic spices like cardamom, ginger, and cinnamon.",
      hi: "मसाला चाय एक मसालेदार भारतीय चाय है, जो काली चाय, दूध और इलायची, अदरक, दालचीनी जैसे सुगंधित मसालों से बनाई जाती है।",
    },
    ingredients: {
      en: [
        "2½ cups Water",
        "½ inch Ginger, peeled & crushed",
        "4 tsp Sugar",
        "2 tsp Black Tea leaves",
        "1½ cups Milk",
      ],
      hi: [
        "2½ कप पानी",
        "½ इंच अदरक, छिला और कुटा हुआ",
        "4 छोटी चम्मच चीनी",
        "2 छोटी चम्मच काली चाय पत्ती",
        "1½ कप दूध",
      ],
    },
    steps: {
      en: [
        {
          section: "Brewing Chai",
          instructions: [
            "In a saucepot, add water and bring to a boil.",
            "Once it starts boiling, add crushed ginger and let it simmer on medium flame.",
            "Add sugar and black tea leaves and let it boil.",
            "Now add milk and boil for 2–3 minutes.",
          ],
        },
        {
          section: "Serving",
          instructions: [
            "Using a tea strainer, filter the chai and pour into cups.",
            "Serve hot with biscuits.",
          ],
        },
      ],
      hi: [
        {
          section: "चाय बनाना",
          instructions: [
            "एक सॉसपैन में पानी डालें और उबाल आने दें।",
            "जब उबाल आ जाए, तो उसमें कुचली हुई अदरक डालें और मध्यम आंच पर उबालें।",
            "अब उसमें चीनी और काली चाय की पत्तियाँ डालें और उबालें।",
            "अब दूध डालें और 2–3 मिनट तक उबालें।",
          ],
        },
        {
          section: "परोसना",
          instructions: [
            "चाय छलनी की मदद से चाय छानें और कपों में डालें।",
            "गरमा गरम चाय को बिस्किट के साथ परोसें।",
          ],
        },
      ],
    },
    category: "Drinks",
    youtubeLink:
      "https://www.youtube.com/watch?v=t0C7TQqLjtc&list=PLOA_MH94qxpj_Ct8KepOzYXdEzG2Eg8Yq&index=9",
  },

  {
    id: 28,
    image:
      "https://i.ytimg.com/vi/2h68dKqskT0/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBfoh2IVbr1WQh6mjkVYMXw2hbHYQ",
    title: {
      en: "Lassi/ Mohabat ka Sharbat/ Chaas",
      hi: "लस्सी / मोहब्बत का शरबत / छाछ",
    },
    description: {
      en: "Here's your one-stop summer fix. 3 much needed drinks when the mercury hits a Six!!",
      hi: "यहाँ आपका एक ही जगह पर गर्मियों का समाधान है। 3 बहुत जरूरी पेय जब पारा छठे आसमान पर पहुंच जाए!!",
    },
    ingredients: {
      en: [
        // Mohabbat Ka Sharbat
        "½ medium Watermelon, cut into small dice",
        "1 cup Prepared Sugar syrup",
        "4 scoops Vanilla ice cream",
        "⅓ cup Rose syrup",
        "1 liter Milk",
        "10-12 Ice cubes",
        "1½ tbsp Soaked Basil seeds",
        "1 cup Watermelon juice",
        "2-3 tbsp Rose syrup",

        // For Garnish
        "Watermelon",
        "Rose syrup",
        "Soaked Basil seeds",

        // Sugar Syrup
        "1 cup Sugar",
        "1½ cups Water",

        // Cumin Powder
        "2 heaped tbsp Cumin seeds",
        "Salt to taste",

        // Ginger Mint Paste
        "½ inch Ginger (peeled & sliced)",
        "¼ cup Fresh Mint leaves",

        // Chaas
        "10-12 Ice cubes",
        "2 cups Water",
        "Salt to taste",
        "Prepared paste",
        "2 cups Curd, beaten",

        // Garnish for Chaas
        "Roasted Cumin powder",
        "Fresh Mint sprig",
        "Green chili",

        // Lassi
        "5-6 Ice cubes",
        "2 cups Curd, beaten",
        "2-3 tbsp Prepared Sugar syrup",
        "¼ tsp Cardamom powder (optional)",
        "¼ tsp Rose water",

        // Garnish for Lassi
        "Fresh Malai",
        "Saffron strands",
        "Fresh Rose petals",
      ],
      hi: [
        // मोहब्बत का शरबत
        "½ मध्यम तरबूज, छोटे टुकड़ों में कटा हुआ",
        "1 कप तैयार की हुई चाशनी",
        "4 स्कूप वनीला आइसक्रीम",
        "⅓ कप गुलाब का शरबत",
        "1 लीटर दूध",
        "10-12 बर्फ के टुकड़े",
        "1½ टेबलस्पून भीगे हुए सब्जा बीज",
        "1 कप तरबूज़ का रस",
        "2-3 टेबलस्पून गुलाब का शरबत",

        // सजावट के लिए
        "तरबूज",
        "गुलाब का शरबत",
        "भीगे हुए सब्जा बीज",

        // शुगर सिरप के लिए
        "1 कप चीनी",
        "1½ कप पानी",

        // जीरा पाउडर के लिए
        "2 टेबलस्पून जीरा",
        "नमक स्वादानुसार",

        // अदरक-पुदीना पेस्ट के लिए
        "½ इंच अदरक (छिला और कटा हुआ)",
        "¼ कप ताजा पुदीना पत्ता",

        // छाछ के लिए
        "10-12 बर्फ के टुकड़े",
        "2 कप पानी",
        "नमक स्वादानुसार",
        "तैयार किया हुआ पेस्ट",
        "2 कप फेंटा हुआ दही",

        // सजावट (छाछ)
        "भुना हुआ जीरा पाउडर",
        "ताजा पुदीना पत्ता",
        "हरी मिर्च",

        // लस्सी के लिए
        "5-6 बर्फ के टुकड़े",
        "2 कप फेंटा हुआ दही",
        "2-3 टेबलस्पून तैयार की हुई चाशनी",
        "¼ छोटी चम्मच इलायची पाउडर (वैकल्पिक)",
        "¼ छोटी चम्मच गुलाब जल",

        // सजावट (लस्सी)
        "ताजा मलाई",
        "केसर",
        "ताजा गुलाब की पंखुड़ियाँ",
      ],
    },
    steps: {
      en: [
        {
          section: "For Sugar Syrup",
          instructions: [
            "In a saucepan, add sugar, water and simmer it until the sugar melts.",
            "Turn off the flame and keep it aside for further use.",
          ],
        },
        {
          section: "For Cumin Powder",
          instructions: [
            "In a pan, add cumin, salt to taste and roast it for a while until aromatic.",
            "Transfer it to a mortar pestle and grind it coarsely.",
            "Keep it aside for further use.",
          ],
        },
        {
          section: "For Ginger Mint Paste",
          instructions: [
            "In a mortar pestle, add ginger, fresh mint leaves and grind it coarsely.",
            "Keep it aside for further use.",
          ],
        },
        {
          section: "For Mohabbat Ka Sharbat",
          instructions: [
            "In a bowl, add watermelon, prepared sugar syrup, vanilla ice cream, rose syrup, milk, ice cubes, soaked basil seeds, watermelon juice, and mix well.",
            "Keep aside to chill in the refrigerator for a while.",
            "Pour the prepared sharbat in a serving glass, garnish with watermelon, rose syrup and soaked basil seeds.",
            "Serve chilled.",
          ],
        },
        {
          section: "For Chaas",
          instructions: [
            "In a bowl, add ice cubes, water, salt to taste, curd and mix it well.",
            "Keep aside to chill in the refrigerator for a while.",
            "Pour the prepared chaas in a serving glass, garnish with roasted cumin powder, green chili and fresh mint sprig.",
            "Serve chilled.",
          ],
        },
        {
          section: "For Lassi",
          instructions: [
            "In a bowl, add ice cubes, curd, prepared sugar syrup, cardamom powder, rose water and mix it well.",
            "Keep aside to chill in the refrigerator for a while.",
            "Pour the prepared lassi in a serving glass, garnish with fresh malai, saffron strands and fresh rose petals.",
            "Serve chilled.",
          ],
        },
      ],
      hi: [
        {
          section: "शक्कर की चाशनी के लिए",
          instructions: [
            "एक सॉसपैन में चीनी और पानी डालें और तब तक पकाएँ जब तक चीनी पूरी तरह घुल न जाए।",
            "आँच बंद करें और उपयोग के लिए अलग रख दें।",
          ],
        },
        {
          section: "जीरा पाउडर के लिए",
          instructions: [
            "एक पैन में जीरा और स्वादानुसार नमक डालकर खुशबू आने तक भूनें।",
            "अब उसे मूसल में डालकर दरदरा पीस लें।",
            "इस्तेमाल के लिए अलग रख दें।",
          ],
        },
        {
          section: "अदरक-पुदीना पेस्ट के लिए",
          instructions: [
            "मूसल में अदरक और ताजे पुदीने की पत्तियाँ डालकर दरदरा पीस लें।",
            "इस्तेमाल के लिए अलग रख दें।",
          ],
        },
        {
          section: "मोहब्बत का शरबत के लिए",
          instructions: [
            "एक बाउल में तरबूज, तैयार चीनी की चाशनी, वनीला आइसक्रीम, गुलाब सिरप, दूध, बर्फ के टुकड़े, भीगे हुए सब्जा बीज, तरबूज का रस डालें और अच्छी तरह मिलाएँ।",
            "फ्रिज में थोड़ी देर के लिए ठंडा होने रखें।",
            "सर्विंग ग्लास में तैयार शरबत डालें, ऊपर से तरबूज, गुलाब सिरप और सब्जा बीज डालकर गार्निश करें।",
            "ठंडा परोसें।",
          ],
        },
        {
          section: "छाछ के लिए",
          instructions: [
            "एक बाउल में बर्फ के टुकड़े, पानी, स्वादानुसार नमक और दही डालें और अच्छी तरह मिलाएँ।",
            "फ्रिज में थोड़ी देर के लिए ठंडा करें।",
            "तैयार छाछ को ग्लास में डालें, ऊपर से भूना हुआ जीरा पाउडर, हरी मिर्च और पुदीने की पत्तियों से सजाएँ।",
            "ठंडा परोसें।",
          ],
        },
        {
          section: "लस्सी के लिए",
          instructions: [
            "एक बाउल में बर्फ के टुकड़े, दही, तैयार चीनी की चाशनी, इलायची पाउडर, गुलाब जल डालकर अच्छी तरह मिलाएँ।",
            "फ्रिज में ठंडा होने रखें।",
            "तैयार लस्सी को ग्लास में डालें, ऊपर से मलाई, केसर और ताज़े गुलाब की पंखुड़ियों से सजाएँ।",
            "ठंडा परोसें।",
          ],
        },
      ],
    },
    category: "Drinks",
    youtubeLink:
      "https://www.youtube.com/watch?v=2h68dKqskT0&list=PLOA_MH94qxpj_Ct8KepOzYXdEzG2Eg8Yq&index=14",
  },

  {
    id: 29,
    image:
      "https://i.ytimg.com/vi/cZ_UMqs6Avs/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLC2OpuQlfEM9u1hzDmBEtq6OIpndw",
    title: {
      en: "Masala Soda & Jaljeera",
      hi: "मसाला सोडा और जलजीरा",
    },
    description: {
      en: " Masala Soda and Jaljeera are refreshing Indian beverages made with a blend of spices, lemon, and soda water, perfect for cooling down in the summer heat.",
      hi: " मसाला सोडा और जलजीरा ताजगी भरे भारतीय पेय हैं जो मसालों, नींबू और सोडा पानी के मिश्रण से बनाए जाते हैं, जो गर्मियों की गर्मी में ठंडक प्रदान करते हैं।",
    },
    ingredients: {
      en: [
        // For Masala
        "1 tbsp Dry Mango powder",
        "½ tbsp Black salt",
        "A pinch of Asafoetida",
        "1 tbsp Cumin seeds",
        "1 tsp Fennel seeds",
        "Few Black peppercorns",
        "Salt to taste",
        "¼ cup Sugar",

        // For Jaljeera
        "½ inch Ginger, sliced",
        "¾ cup Coriander leaves",
        "1 cup Mint leaves",
        "Water",
        "2 heaped tbsp Prepared Masala",
        "1 Lime juice",

        // For Masala Soda
        "Fresh Mint leaves",
        "½ Lime juice",
        "1 heaped tbsp Prepared Masala",
        "Soda",
        "1 tsp Basil seeds",

        // Other Ingredients
        "Few Boondi",
        "Few Ice cubes",
      ],
      hi: [
        // मसाले के लिए
        "1 टेबलस्पून आमचूर",
        "½ टेबलस्पून काला नमक",
        "एक चुटकी हींग",
        "1 टेबलस्पून जीरा",
        "1 छोटी चम्मच सौंफ",
        "थोड़े काली मिर्च के दाने",
        "नमक स्वादअनुसार",
        "¼ कप चीनी",

        // जलजीरा के लिए
        "½ इंच अदरक, कटा हुआ",
        "¾ कप धनिया पत्ती",
        "1 कप पुदीना पत्ती",
        "पानी",
        "2 भरी हुई टेबलस्पून तैयार किया हुआ मसाला",
        "1 नींबू का रस",

        // मसाला सोडा के लिए
        "ताजा पुदीना पत्ते",
        "½ नींबू का रस",
        "1 भरी हुई टेबलस्पून तैयार किया हुआ मसाला",
        "सोडा",
        "1 छोटी चम्मच सब्जा बीज",

        // अन्य सामग्री
        "थोड़ी बूंदी",
        "थोड़े बर्फ के टुकड़े",
      ],
    },
    steps: {
      en: [
        {
          section: "For Masala",
          instructions: [
            "In a bowl, add dry mango powder, black salt, and asafoetida.",
            "In a pan, add cumin seeds, fennel seeds, black peppercorns and dry roast on medium flame.",
            "Transfer this into a bowl, add salt to taste and sugar.",
            "Transfer this into a grinder jar and grind into a fine powder.",
            "Store in an airtight container for further use.",
          ],
        },
        {
          section: "For Jaljeera",
          instructions: [
            "In a bowl, add ginger, coriander leaves, and mint leaves. Transfer to a grinder jar and grind into a smooth paste.",
            "Transfer this paste into a large bowl, add water, lime juice, prepared masala and stir well.",
            "Pour into a glass, serve with a few ice cubes and garnish with boondi.",
            "Serve chilled.",
          ],
        },
        {
          section: "For Masala Soda",
          instructions: [
            "In a serving glass, add mint leaves, prepared masala and a few ice cubes.",
            "Just before serving, pour soda over it and garnish with soaked basil seeds.",
            "Serve chilled.",
          ],
        },
      ],
      hi: [
        {
          section: "मसाला के लिए",
          instructions: [
            "एक बाउल में अमचूर पाउडर, काला नमक और हींग डालें।",
            "एक पैन में जीरा, सौंफ और काली मिर्च डालकर मध्यम आंच पर सूखा भूनें।",
            "भुने हुए मसालों को एक बाउल में निकालें, स्वादानुसार नमक और चीनी डालें।",
            "अब इन्हें मिक्सर जार में डालकर बारीक पीस लें।",
            "एयरटाइट कंटेनर में भरकर रखें।",
          ],
        },
        {
          section: "जलजीरा के लिए",
          instructions: [
            "एक बाउल में अदरक, धनिया पत्ते और पुदीना पत्ते डालें, मिक्सर जार में डालकर स्मूद पेस्ट बना लें।",
            "इस पेस्ट को एक बड़े बाउल में निकालें, उसमें पानी, नींबू का रस और तैयार मसाला डालकर अच्छे से मिलाएं।",
            "गिलास में डालें, बर्फ के टुकड़े डालें और ऊपर से बूंदी डालकर गार्निश करें।",
            "ठंडा परोसें।",
          ],
        },
        {
          section: "मसाला सोडा के लिए",
          instructions: [
            "एक सर्विंग ग्लास में पुदीने की पत्तियाँ, तैयार मसाला और कुछ बर्फ के टुकड़े डालें।",
            "सर्व करने से ठीक पहले, उसमें सोडा डालें और ऊपर से भीगे हुए सब्जा बीज डालकर सजाएं।",
            "ठंडा परोसें।",
          ],
        },
      ],
    },
    category: "Drinks",
    youtubeLink:
      "https://www.youtube.com/watch?v=cZ_UMqs6Avs&list=PLOA_MH94qxpj_Ct8KepOzYXdEzG2Eg8Yq&index=8",
  },
];
export default Drinks;
