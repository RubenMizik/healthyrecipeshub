/* ============================================================
   Delicious & Healthy Food Cookbook — Script
   Data for 28 recipes + interactive features
   ============================================================ */

const RECIPES = {
  balanced: [
{
      num: "07",
      emoji: "🍆",
      title: "Tofu & Eggplant Bistek",
      img: "Bistek tofu.jpg",
      note: "Affordable and meat-free perfect for students who want a healthy ulam on a budget. Store leftovers and reheat.",
      ingredients: [
        "1 block tofu (cubed)",
        "1 medium eggplant (sliced)",
        "1 small onion (sliced into rings)",
        "3 cloves garlic (minced)",
        "2 tbsp soy sauce",
        "1 tbsp calamansi juice (or lemon)",
        "1 tsp sugar (optional)",
        "1 tbsp cooking oil",
        "½ cup water",
        "Ground pepper to taste"
      ],
      steps: [
        "Heat oil in a pan and fry tofu until golden brown. Set aside.",
        "In the same pan, sauté garlic until fragrant.",
        "Add eggplant slices and cook until slightly soft.",
        "Pour in soy sauce, calamansi juice, water, and sugar. Mix well.",
        "Add the fried tofu and simmer for 5 minutes.",
        "Add onion rings and cook for another 1–2 minutes.",
        "Season with pepper according to taste.",
        "Serve hot with rice."
      ],
      tips: "Tofu is a good source of plant-based protein, ideal for muscle growth and repair. Eggplant contains fiber and antioxidants that support heart health. This dish is a healthier alternative to fatty meat bistek."
    },
    {
      num: "01",
      emoji: "🐟",
      title: "Sinigang na Bangus",
      img: "Bangus.jpg",
      note: "Nutritious, filling, and perfect for family meals. Cook in advance and reheat — ideal for busy students.",
      ingredients: [
        "2–3 slices bangus (milkfish)",
        "1 small onion (quartered)",
        "2 tomatoes (quartered)",
        "1 pack sinigang mix (or fresh tamarind)",
        "1 cup kangkong leaves",
        "1 small radish (sliced)",
        "1 small eggplant (sliced)",
        "2–3 cups water",
        "Salt or fish sauce to taste"
      ],
      steps: [
        "Boil water in a pot over medium heat.",
        "Add onion and tomatoes, then simmer for 3–5 minutes.",
        "Add the bangus and cook for about 5 minutes.",
        "Pour in the sinigang mix and stir well.",
        "Add radish and eggplant, then cook until tender.",
        "Add kangkong leaves and cook for 1–2 minutes.",
        "Season with salt or fish sauce according to taste.",
        "Serve hot."
      ],
      tips: "Bangus is rich in protein and omega-3 fatty acids, which are good for heart health. Vegetables like kangkong, radish, and eggplant provide vitamins and fiber. The soup helps keep the body hydrated and supports digestion."
    },
    {
      num: "02",
      emoji: "🐟",
      title: "Tilapia with Buttered Vegetables",
      img: "Tilapia.jpg",
      note: "Simple, nutritious, and perfect for everyday meals. Steam or grill the tilapia for a healthier option.",
      ingredients: [
        "1 whole tilapia (cleaned) or 2 fillets",
        "1 cup mixed vegetables (carrots, cabbage, green beans)",
        "2 tbsp butter or margarine",
        "3 cloves garlic (minced)",
        "1 tbsp cooking oil",
        "Salt and pepper to taste",
        "½ cup water"
      ],
      steps: [
        "Season tilapia with salt and pepper.",
        "Heat oil in a pan and fry the tilapia until golden brown on both sides. Set aside.",
        "In another pan, melt butter and sauté garlic until fragrant.",
        "Add mixed vegetables and cook for 3–5 minutes.",
        "Pour in water and let it simmer until vegetables are tender.",
        "Season with salt and pepper according to taste."
      ],
      tips: "Tilapia is a good source of protein that helps in muscle growth and repair. Vegetables provide essential vitamins, minerals, and fiber. This meal is healthier than fast food because it is freshly prepared and less processed."
    },
    {
      num: "03",
      emoji: "🍗",
      title: "Chicken Tenders with Dip & Sautéed Vegetables",
      img: "Tend.jpg",
      note: "A healthier alternative to fast food chicken — perfect for students craving fried meals on a budget.",
      ingredients: [
        "2 pieces chicken breast (cut into strips)",
        "1 egg",
        "½ cup flour",
        "½ cup breadcrumbs",
        "Salt and pepper to taste",
        "1 tbsp cooking oil",
        "1 cup mixed vegetables (carrots, cabbage, green beans)",
        "1 tbsp butter or margarine",
        "2 cloves garlic (minced)",
        "2 tbsp mayonnaise",
        "1 tbsp ketchup",
        "1 tsp calamansi juice (optional)"
      ],
      steps: [
        "Season chicken strips with salt and pepper.",
        "Dip each strip in beaten egg, then coat with flour and breadcrumbs.",
        "Heat oil in a pan and fry chicken until golden brown. Set aside.",
        "In another pan, melt butter and sauté garlic.",
        "Add mixed vegetables and cook for 3–5 minutes.",
        "Mix mayonnaise, ketchup, and calamansi juice to make the dip.",
        "Serve chicken tenders with sautéed vegetables and dip on the side."
      ],
      tips: "Chicken is rich in protein that supports muscle growth and repair. Vegetables provide essential vitamins, minerals, and fiber. Using homemade dip helps reduce preservatives compared to store-bought sauces."
    },
    {
      num: "05",
      emoji: "🥣",
      title: "Almondigas",
      img: "Almondigas.jpg",
      note: "Perfect for rainy days and tight budgets. Substitute pork with chicken or add more vegetables.",
      ingredients: [
        "200g ground pork",
        "2 cloves garlic (minced)",
        "1 small onion (chopped)",
        "1 egg",
        "Salt and pepper to taste",
        "1 tbsp oil",
        "3 cups water",
        "1 small onion (sliced)",
        "1 small patola (sliced)",
        "1 pack misua noodles",
        "Fish sauce (patis) to taste"
      ],
      steps: [
        "In a bowl, mix ground pork, garlic, onion, egg, salt, and pepper.",
        "Form small meatballs using your hands.",
        "Heat oil in a pot and sauté onion until soft.",
        "Pour in water and bring to a boil.",
        "Add the meatballs and cook until fully done.",
        "Add sliced patola and simmer for 3–5 minutes.",
        "Add misua noodles and cook for another 2 minutes.",
        "Season with fish sauce and serve hot."
      ],
      tips: "Provides protein from meatballs for muscle growth. Patola adds fiber and vitamins for digestion and immunity. Soup-based meals help with hydration and fullness. Lower in fat compared to fried dishes."
    },
    {
      num: "06",
      emoji: "🐟",
      title: "Sardinas with Malunggay",
      img: "Sardinas.jpg",
      note: "Perfect for petsa de peligro — cheap, quick, and healthy. Add egg to make it more filling!",
      ingredients: [
        "1 can sardines (in tomato sauce)",
        "2 cloves garlic (minced)",
        "1 small onion (sliced)",
        "1 small tomato (chopped)",
        "1 cup malunggay leaves",
        "1 tbsp cooking oil",
        "½ cup water",
        "Salt and pepper to taste"
      ],
      steps: [
        "Heat oil in a pan and sauté garlic, onion, and tomato.",
        "Add sardines (including sauce) and gently mix.",
        "Pour in water and let it simmer for 5 minutes.",
        "Add malunggay leaves and cook for 2–3 minutes.",
        "Season with salt and pepper if needed.",
        "Serve hot with rice."
      ],
      tips: "Sardines are rich in protein and omega-3 fatty acids for heart health. Malunggay provides vitamins and minerals that boost immunity. This dish is affordable yet nutrient-dense."
    },
    {
      num: "04",
      emoji: "🍲",
      title: "Sinampalukang Manok",
      img: "Sampalok.jpg",
      note: "Perfect for rainy days and stress relief — warm, healthy, and easy to prepare. Cook in bulk and reheat.",
      ingredients: [
        "500g chicken (cut into pieces)",
        "1 small onion (quartered)",
        "2 tomatoes (quartered)",
        "1 pack sinigang mix (or fresh tamarind leaves/pulp)",
        "1 bunch kangkong (or green leafy vegetables)",
        "3–4 cups water",
        "Fish sauce (patis) to taste"
      ],
      steps: [
        "Boil water in a pot over medium heat.",
        "Add onion and tomatoes, then simmer for 5 minutes.",
        "Add chicken and cook until tender (about 20 minutes).",
        "Add sinigang mix or tamarind and stir well.",
        "Season with fish sauce according to taste.",
        "Add kangkong and cook for 2–3 minutes.",
        "Serve hot."
      ],
      tips: "Chicken provides protein for body strength and repair. Tamarind is rich in vitamin C, which helps boost immunity. Leafy vegetables add fiber and essential nutrients."
    }
  ],
  quick: [
    {
      num: "09",
      emoji: "🍳",
      title: "Egg and Vegetable Fried Rice",
      img: "Eggfried.jpg",
      note: "Quick, affordable, and filling — perfect for students with limited budget and time.",
      ingredients: [
        "2 cups cooked rice (preferably leftover rice)",
        "2 eggs",
        "1 small carrot (chopped)",
        "½ cup cabbage (chopped)",
        "2 cloves garlic (minced)",
        "1 tbsp cooking oil",
        "1 tbsp soy sauce (optional)",
        "Salt and pepper to taste"
      ],
      steps: [
        "Heat oil in a pan over medium heat.",
        "Sauté garlic until lightly browned.",
        "Add chopped carrots and cabbage, then cook for 2–3 minutes.",
        "Push vegetables to one side and crack the eggs on the other side of the pan. Scramble the eggs.",
        "Add the cooked rice and mix well with the vegetables and eggs.",
        "Season with soy sauce, salt, and pepper according to taste.",
        "Cook for another 2–3 minutes while mixing.",
        "Serve hot."
      ],
      tips: "Eggs are a good source of protein that helps in body repair and growth. Vegetables like carrots and cabbage provide vitamins and fiber. Using leftover rice helps reduce food waste and saves money."
    },
    {
      num: "14",
      emoji: "🍌",
      title: "Banana Peanut Butter Sandwich",
      img: "Banana.jpg",
      note: "Very affordable, no-cook, and perfect for busy mornings or snacks. Bring it as baon!",
      ingredients: [
        "2 slices of bread (whole wheat if available)",
        "1 ripe banana (sliced)",
        "1–2 tbsp peanut butter",
        "1 tsp honey (optional)"
      ],
      steps: [
        "Lay out the bread slices on a clean surface.",
        "Spread peanut butter evenly on one side of each slice.",
        "Place sliced bananas on one slice of bread.",
        "Drizzle honey on top (optional).",
        "Cover with the other slice of bread.",
        "Slice into halves and serve."
      ],
      tips: "Bananas are rich in potassium, which helps maintain energy and proper muscle function. Peanut butter provides protein and healthy fats that keep you full longer. Using whole wheat bread adds fiber for better digestion."
    },
    {
      num: "10",
      emoji: "🍚",
      title: "Tuna Mayo Rice Bowl",
      img: "Tuna.jpg",
      note: "Perfect for cramming days or late-night study sessions — fast, cheap, and satisfying.",
      ingredients: [
        "1 can tuna (drained)",
        "1–2 cups cooked rice",
        "2 tbsp mayonnaise",
        "1 tsp soy sauce (optional)",
        "1 egg (optional)",
        "Pepper to taste"
      ],
      steps: [
        "Heat the cooked rice (if needed).",
        "In a bowl, mix tuna with mayonnaise and pepper.",
        "Add soy sauce if desired.",
        "Place the tuna mixture on top of the rice.",
        "Optional: top with a fried or boiled egg.",
        "Serve immediately."
      ],
      tips: "Tuna is rich in protein and omega-3 fatty acids for brain and heart health. Rice provides energy needed for daily activities. Adding egg increases protein and nutrients."
    },
    {
      num: "11",
      emoji: "🥔",
      title: "Stir-Fried Potato & Cabbage",
      img: "Stir.jpg",
      note: "Perfect for students on a tight budget — simple, affordable ingredients, quick to prepare.",
      ingredients: [
        "1 medium potato (thinly sliced)",
        "1 cup cabbage (chopped)",
        "2 cloves garlic (minced)",
        "1 tbsp cooking oil",
        "1 tbsp soy sauce (optional)",
        "Salt and pepper to taste"
      ],
      steps: [
        "Heat oil in a pan and sauté garlic until fragrant.",
        "Add sliced potatoes and cook for 3–5 minutes until slightly tender.",
        "Add cabbage and mix well.",
        "Season with soy sauce, salt, and pepper.",
        "Cook for another 3–5 minutes until vegetables are fully cooked.",
        "Serve hot with rice."
      ],
      tips: "Potatoes provide energy (carbohydrates) for daily activities. Cabbage is rich in fiber and vitamins for digestion and immunity. This dish is low-cost but still healthy and filling."
    },
    {
      num: "13",
      emoji: "🍄",
      title: "Garlic Bread with Sautéed Mushrooms",
      img: "Garlic.jpg",
      note: "Quick to prepare with simple ingredients — a light yet satisfying dish for busy days.",
      ingredients: [
        "2 slices of bread",
        "1 cup mushrooms (sliced)",
        "2 cloves garlic (minced)",
        "1 tbsp butter or margarine",
        "Salt and pepper to taste"
      ],
      steps: [
        "Spread butter on the bread and toast in a pan until golden brown. Set aside.",
        "In the same pan, melt a little butter and sauté garlic.",
        "Add mushrooms and cook until soft and slightly browned.",
        "Season with salt and pepper.",
        "Serve sautéed mushrooms on top of or beside the garlic bread."
      ],
      tips: "Mushrooms provide vitamins and antioxidants that support immunity. Bread gives energy (carbohydrates) for daily activities. Using a small amount of butter keeps the dish flavorful but balanced."
    },
    {
      num: "08",
      emoji: "🍠",
      title: "Sweet Potato & Milk Bowl",
      img: "Sweet.jpg",
      note: "Affordable, filling, and easy to prepare — a great option for students who need a quick energy boost.",
      ingredients: [
        "1–2 medium sweet potatoes (kamote)",
        "1 cup milk (fresh or powdered)",
        "Optional: 1 tsp sugar or honey"
      ],
      steps: [
        "Wash and peel the sweet potatoes.",
        "Boil in water for 10–15 minutes until soft.",
        "Slice or mash the cooked sweet potatoes.",
        "Place in a bowl and pour milk over it.",
        "Add sugar or honey if desired.",
        "Serve warm."
      ],
      tips: "Sweet potatoes are rich in fiber and vitamins for digestion and immunity. Milk provides calcium and protein for strong bones. This meal is naturally filling and energy-boosting."
    },
    {
      num: "12",
      emoji: "🍜",
      title: "Quick Noodle Veggie Bowl",
      img: "Quick.jpg",
      note: "Upgrades instant noodles by adding vegetables — more nutritious while still quick and affordable.",
      ingredients: [
        "1 pack instant noodles",
        "½ cup cabbage (chopped)",
        "¼ cup carrots (thinly sliced)",
        "1 clove garlic (minced)",
        "1 tsp cooking oil"
      ],
      steps: [
        "Heat oil in a pot and sauté garlic until fragrant.",
        "Add water and bring to a boil.",
        "Add instant noodles and cook according to package instructions.",
        "Add cabbage and carrots during the last 2 minutes of cooking.",
        "Mix in the seasoning packet and stir well.",
        "Serve hot."
      ],
      tips: "Adding vegetables increases fiber and vitamin content. Carrots support eye health, while cabbage aids digestion. Moderation is key when eating instant noodles. Pairing noodles with veggies makes it more balanced."
    }
  ],
  alternatives: [
    {
      num: "15",
      emoji: "🍟",
      title: "Baked Kamote (Sweet Potato Fries)",
      img: "FriesSw.jpg",
      note: "Easy to prepare and more nutritious than fast food fries — crispy and satisfying without too much oil.",
      ingredients: [
        "2 medium sweet potatoes (kamote)",
        "1 tbsp cooking oil",
        "½ tsp salt",
        "Optional: pepper or paprika"
      ],
      steps: [
        "Preheat the oven to 200°C (or use an air fryer if available).",
        "Wash and peel the sweet potatoes.",
        "Cut into thin strips like fries.",
        "Place in a bowl and mix with oil, salt, and optional seasoning.",
        "Arrange on a baking tray in a single layer.",
        "Bake for 20–25 minutes or until golden and slightly crispy."
      ],
      tips: "Sweet potatoes are rich in fiber and vitamins (especially Vitamin A). Baking uses less oil compared to deep frying. Provides long-lasting energy for daily activities. A healthier alternative to regular French fries."
    },
    {
      num: "16",
      emoji: "🍹",
      title: "Fresh Fruit Juice or Infused Water",
      img: "Juicee.jpg",
      note: "Refreshing, affordable, and easy to prepare — a healthier alternative to sugary beverages.",
      ingredients: [
        "Juice: 1 cup fresh fruits (orange, pineapple, watermelon, or mango)",
        "1 cup cold water",
        "1–2 tsp sugar or honey (optional)",
        "Infused water: 1 liter water",
        "Sliced fruits (lemon, cucumber, or apple)",
        "Optional: mint leaves"
      ],
      steps: [
        "Option A (Juice): Wash and cut fruits into small pieces. Blend fruits with water until smooth. Add sugar or honey if desired. Pour into a glass and serve cold.",
        "Option B (Infused Water): Wash and slice the fruits. Add fruits into a pitcher of water. Let it sit for at least 30 minutes (or chill in the fridge). Serve cold and enjoy."
      ],
      tips: "Fresh fruits provide vitamins and antioxidants. Infused water helps improve hydration without added sugar. A healthier alternative to soft drinks and artificial juices. Supports overall wellness and energy levels."
    },
    {
      num: "17",
      emoji: "🥣",
      title: "Yogurt with Fruits",
      img: "Yog.jpg",
      note: "Quick to prepare and requires no cooking — a sweet but healthier option during breaks or study time.",
      ingredients: [
        "1 cup plain or flavored yogurt",
        "½ cup fresh fruits (banana, apple, or strawberries)",
        "Optional: 1 tsp honey"
      ],
      steps: [
        "Wash and slice the fruits into small pieces.",
        "Place yogurt in a bowl.",
        "Add the sliced fruits on top.",
        "Drizzle with honey if desired.",
        "Mix lightly or eat as is.",
        "Serve chilled."
      ],
      tips: "Yogurt provides calcium and probiotics for gut health. Fruits add vitamins, fiber, and natural sweetness. A healthier option compared to sugary chocolate snacks. Helps improve digestion and overall wellness."
    },
    {
      num: "18",
      emoji: "🍿",
      title: "Air-Popped Popcorn",
      img: "Popy.jpg",
      note: "Affordable and easy to make at home — a healthier option for something light and satisfying during study time.",
      ingredients: [
        "½ cup popcorn kernels",
        "1 tsp oil (optional, for pan method)",
        "Salt to taste"
      ],
      steps: [
        "Heat a pan over medium heat and add oil (optional).",
        "Add popcorn kernels and cover with a lid.",
        "Shake the pan occasionally to prevent burning.",
        "Wait until popping slows down, then turn off the heat.",
        "Transfer to a bowl and add a small amount of salt.",
        "Serve and enjoy."
      ],
      tips: "Popcorn is a whole grain rich in fiber. It is naturally low in calories when not loaded with butter. Helps improve digestion and keeps you full longer. A healthier alternative to oily and salty chips."
    },
    {
      num: "21",
      emoji: "🍦",
      title: "Frozen Banana Treat",
      img: "Bananat.jpg",
      note: "Affordable, easy to make, and requires minimal ingredients — perfect for a healthy dessert without spending too much.",
      ingredients: [
        "2 ripe bananas",
        "Optional: 1 tbsp peanut butter or melted chocolate",
        "Optional: crushed nuts or oats"
      ],
      steps: [
        "Peel the bananas and slice them into small pieces.",
        "Place the banana slices in a container.",
        "Freeze for at least 2–3 hours or until firm.",
        "Eat as is or blend for a creamy texture.",
        "Add peanut butter, chocolate, or toppings if desired.",
        "Serve immediately and enjoy."
      ],
      tips: "Bananas provide natural sugars, fiber, and potassium. A healthier alternative to ice cream with no added preservatives. Helps satisfy sweet cravings in a nutritious way."
    },
    {
      num: "19",
      emoji: "🌮",
      title: "Veggie Quesadilla",
      img: "Veg.jpg",
      note: "Quick to prepare and customizable — a great alternative for students who crave pizza but want healthier options.",
      ingredients: [
        "1 tortilla",
        "¼ cup grated cheese",
        "½ cup mixed vegetables (bell pepper, cabbage, or carrot)",
        "1 tsp cooking oil"
      ],
      steps: [
        "Heat a pan and add a small amount of oil.",
        "Place the tortilla on the pan.",
        "Add cheese and vegetables on one half.",
        "Fold the tortilla and press lightly.",
        "Cook for 2–3 minutes on each side until crispy and cheese melts.",
        "Slice and serve warm."
      ],
      tips: "Vegetables provide fiber, vitamins, and minerals. Cheese adds calcium and protein. Uses less oil compared to fast food pizza. A balanced and healthier alternative to greasy snacks."
    },
    {
      num: "20",
      emoji: "🧁",
      title: "Banana Muffin",
      img: "Muf.jpg",
      note: "Easy to prepare and can be stored for later — a great grab-and-go snack for a healthier sweet treat.",
      ingredients: [
        "2 ripe bananas",
        "1 cup flour (or oats)",
        "1 egg",
        "¼ cup milk",
        "1 tsp baking powder",
        "Optional: small amount of sugar or honey"
      ],
      steps: [
        "Preheat the oven to 180°C.",
        "Mash the bananas in a bowl.",
        "Add egg and milk, then mix well.",
        "Add flour and baking powder, then stir until combined.",
        "Pour the mixture into muffin cups.",
        "Bake for 15–20 minutes or until cooked."
      ],
      tips: "Bananas provide natural sweetness and potassium. Using less sugar makes it a healthier dessert option. Can be made with oats for added fiber. A better alternative to sugary cupcakes."
    }
  ],
  baon: [
    {
      num: "22",
      emoji: "🍝",
      title: "Simple Pasta with Vegetables",
      img: "Pas.jpg",
      note: "Easy to prepare and can be cooked in large batches — a simple, affordable, and healthy dish anytime.",
      ingredients: [
        "1 cup cooked pasta",
        "½ cup mixed vegetables (carrots, cabbage, or bell peppers)",
        "1 clove garlic (minced)",
        "1 tbsp cooking oil",
        "Salt and pepper to taste"
      ],
      steps: [
        "Cook pasta according to package instructions and set aside.",
        "Heat oil in a pan and sauté garlic until fragrant.",
        "Add the mixed vegetables and cook until tender.",
        "Add the cooked pasta and mix well.",
        "Season with salt and pepper.",
        "Serve warm."
      ],
      tips: "Provides carbohydrates for energy. Vegetables add fiber, vitamins, and minerals. Low-cost and balanced meal option. Helps support overall health and digestion."
    },
    {
      num: "23",
      emoji: "🥪",
      title: "Cucumber Egg Sandwich",
      img: "Bred.png",
      note: "Wrap the sandwich properly to keep it fresh. A quick and easy baon for busy school days.",
      ingredients: [
        "2 slices bread",
        "1 boiled egg (sliced)",
        "½ cucumber (thinly sliced)",
        "1 tbsp mayonnaise",
        "Salt and pepper to taste"
      ],
      steps: [
        "Spread mayonnaise on one side of each bread slice.",
        "Place the sliced egg on one slice of bread.",
        "Add cucumber slices on top.",
        "Sprinkle with salt and pepper.",
        "Cover with the other slice of bread.",
        "Cut in half and pack."
      ],
      tips: "Egg provides protein for energy and muscle repair. Cucumber adds hydration and fiber. Light but satisfying meal. A healthier option compared to processed snacks."
    },
    {
      num: "24",
      emoji: "🍱",
      title: "Chicken Veggie Rice Box",
      img: "Oben.jpg",
      note: "Prepare this meal the night before to save time. Filling, nutritious, and perfect for school baon.",
      ingredients: [
        "1 cup cooked rice",
        "1 piece grilled or fried chicken",
        "½ cup mixed vegetables (carrots, beans, or cabbage)",
        "1 tsp cooking oil",
        "Salt and pepper to taste"
      ],
      steps: [
        "Cook rice and set aside.",
        "Season and cook the chicken until fully done.",
        "Sauté vegetables with a little oil.",
        "Place rice in a lunch box.",
        "Add chicken and vegetables on the side.",
        "Let cool before packing."
      ],
      tips: "Provides carbohydrates, protein, and fiber. Balanced meal for energy and focus. Helps avoid buying unhealthy fast food."
    },
    {
      num: "25",
      emoji: "🍳",
      title: "Vegetable Omelette",
      img: "Eggr.jpg",
      note: "Quick to cook with simple ingredients — a nutritious and affordable dish anytime of the day.",
      ingredients: [
        "2 eggs",
        "¼ cup chopped vegetables (carrots, onions, or cabbage)",
        "1 tbsp cooking oil",
        "Salt and pepper to taste"
      ],
      steps: [
        "Crack the eggs into a bowl and beat well.",
        "Add the chopped vegetables and mix.",
        "Heat oil in a pan over medium heat.",
        "Pour the egg mixture into the pan.",
        "Cook until firm, then fold the omelette.",
        "Serve warm."
      ],
      tips: "Eggs are a good source of protein. Vegetables provide vitamins and fiber. Low-cost and easy to prepare meal. Supports energy and overall health."
    },
    {
      num: "26",
      emoji: "🥗",
      title: "Corn & Carrot Salad Box",
      img: "Car.jpg",
      note: "Easy to prepare and requires no cooking — a quick, refreshing, and healthy baon option.",
      ingredients: [
        "½ cup corn kernels",
        "½ cup carrots (diced or grated)",
        "1 tbsp mayonnaise or yogurt",
        "Salt and pepper to taste"
      ],
      steps: [
        "Place the corn and carrots in a bowl.",
        "Add mayonnaise or yogurt.",
        "Mix well until evenly combined.",
        "Season with salt and pepper.",
        "Transfer to a container.",
        "Chill before packing if desired."
      ],
      tips: "Corn provides energy and fiber. Carrots are rich in vitamin A for eye health. Light and refreshing meal option. Supports overall health and digestion."
    },
    {
      num: "27",
      emoji: "🍛",
      title: "Chicken Adobo Rice Box",
      img: "chickad.png",
      note: "A balanced Filipino lunch packed with tender chicken adobo, rice, and vegetables. Nutritious and perfect for school baon.",
      ingredients: [
        "500g chicken (cut into pieces)",
        "2 cups cooked white rice",
        "1/3 cup soy sauce",
        "1/4 cup vinegar (cane or white vinegar)",
        "1 cup water",
        "4 cloves garlic (crushed)",
        "1 small onion (sliced)",
        "2–3 bay leaves",
        "1 tsp whole peppercorns",
        "1–2 tbsp cooking oil"
      ],
      steps: [
        "Cook the chicken adobo until tender.",
        "Steam the broccoli and carrots.",
        "Place the rice in a lunch box.",
        "Arrange the chicken and vegetables beside the rice.",
        "Let the meal cool before closing the lunch box."
      ],
      tips: "Chicken is rich in protein that helps build and repair muscles. Broccoli and carrots provide vitamins, minerals, and fiber. This meal keeps you full and energized throughout the school day. Prepare the night before and refrigerate."
    },
    {
      num: "28",
      emoji: "🍙",
      title: "Egg and Vegetable Rice Box",
      img: "eggbo.png",
      note: "Add seasonal vegetables to make your lunch more colorful, nutritious, and budget-friendly.",
      ingredients: [
        "1 cup cooked rice",
        "2 boiled eggs",
        "½ cup sautéed cabbage",
        "¼ cup carrots"
      ],
      steps: [
        "Boil the eggs and peel them.",
        "Sauté the vegetables.",
        "Place rice inside the lunch box.",
        "Arrange the eggs and vegetables beside the rice.",
        "Allow to cool before packing."
      ],
      tips: "Eggs are rich in protein. Vegetables provide fiber and vitamins. A healthy and affordable meal for students."
    }
  ]
};

/* ===== Render helper ===== */
function buildRecipeCard(recipe) {
  const ingredientsHTML = recipe.ingredients
    .map((i) => `<li>${i}</li>`)
    .join("");
  const stepsHTML = recipe.steps.map((s) => `<li>${s}</li>`).join("");
  return `
    <article class="recipe-card">
<div class="recipe-cover">
        <img class="recipe-img" src="${recipe.img || ''}" alt="${recipe.title}" />
      </div>
      <div class="recipe-body">
        <span class="recipe-num">Recipe ${recipe.num}</span>
        <h3 class="recipe-title">${recipe.title}</h3>
        <p class="recipe-note">${recipe.note}</p>
        <button class="recipe-toggle" aria-expanded="false">
          <span>View Recipe</span>
          <span class="chev">▼</span>
        </button>
      </div>
<div class="recipe-details">
        <div class="detail-block">
          <div class="detail-title">Ingredients</div>
          <ul class="ingredients-list">${ingredientsHTML}</ul>
        </div>
        <div class="detail-block">
          <div class="detail-title">How to Cook</div>
          <ol class="steps-list">${stepsHTML}</ol>
        </div>
        <div class="detail-block">
          <div class="tips-box"><strong>Nutrition Tips</strong>${recipe.tips}</div>
        </div>
      </div>
    </article>
  `;
}

function renderAll() {
  document.getElementById("balancedGrid").innerHTML = RECIPES.balanced
    .map(buildRecipeCard)
    .join("");
  document.getElementById("quickGrid").innerHTML = RECIPES.quick
    .map(buildRecipeCard)
    .join("");
  document.getElementById("alternativesGrid").innerHTML = RECIPES.alternatives
    .map(buildRecipeCard)
    .join("");
  document.getElementById("baonGrid").innerHTML = RECIPES.baon
    .map(buildRecipeCard)
    .join("");
}

/* ===== Toggle recipe cards ===== */
function setupToggles() {
  document.body.addEventListener("click", (e) => {
    const toggle = e.target.closest(".recipe-toggle");
    if (!toggle) return;
    const card = toggle.closest(".recipe-card");
    const isOpen = card.classList.contains("open");
    const details = card.querySelector(".recipe-details");
    card.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(!isOpen));
    toggle.querySelector("span").textContent = isOpen ? "View Recipe" : "Hide Recipe";
    if (!isOpen) {
      details.style.maxHeight = details.scrollHeight + "px";
      setTimeout(() => { details.style.maxHeight = details.scrollHeight + "px"; }, 400);
    } else {
      details.style.maxHeight = "0";
    }
  });
}

/* ===== Mobile nav toggle ===== */
function setupNav() {
  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  links.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      links.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

/* ===== Back to top button ===== */
function setupBackToTop() {
  const btn = document.getElementById("backToTop");
  window.addEventListener("scroll", () => {
    btn.classList.toggle("show", window.scrollY > 600);
  });
  btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

/* ===== Init ===== */
document.addEventListener("DOMContentLoaded", () => {
  renderAll();
  setupToggles();
  setupNav();
  setupBackToTop();
});
