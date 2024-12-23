let dishes = [
    new Dish("gazpacho", "Гаспачо", 195, "soup", "350 г",
        "static/soups/gazpacho.jpg", "veg"),
    new Dish("mushroom_soup", "Грибной суп", 185, "soup", "330 г",
        "static/soups/mushroom_soup.jpg", "veg"),
    new Dish("norwegian_soup", "Норвежский суп", 270, "soup", "330 г",
        "static/soups/norwegian_soup.jpg", "fish"),
    new Dish("ramen", "Рамен", 375, "soup", "425 г",
        "static/soups/ramen.jpg", "meat"),
    new Dish("tomyum", "Том ям с креветками", 650, "soup", "500 г",
        "static/soups/tomyum.jpg", "meat"),
    new Dish("chicken", "Куриный суп", 330, "soup", "350 г",
        "static/soups/chicken.jpg", "meat"),
    // Main-course
    new Dish("friedpotatoeswithmushrooms", "Жареная картошка с грибами",
        150, "main-course", "250 г",
        "static/main/fried_potato.jpg", "veg"),
    new Dish("lasagna", "Лазанья", 385, "main-course", "310 г",
        "static/main/lasagna.jpg", "meat"),
    new Dish("chickencutletsandmashedpotatoes",
        "Котлеты из курицы с картофельным пюре", 225, "main-course", "280 г",
        "static/main/chiken_potato.jpg", "meat"),
    new Dish("fishrice", "Рыбная котлета с рисом и спаржей",
        150, "main-course", "270 г",
        "static/main/fishrice.jpg", "fish"),
    new Dish("pizza", "Пицца Маргарита", 450, "main-course", "470 г",
        "static/main/pizza.jpg", "meat"),
    new Dish("shrimppasta",
        "Паста с креветками", 340, "main-course", "280 г",
        "static/main/shrimppasta.jpg", "fish"),
    // Salads
    new Dish("saladwithegg", "Корейский салат с овощами и яйцом", 330, "salads-starters", "250 г",
        "static/salads_starters/saladwithegg.jpg", "meat"),
    new Dish("caesar", "Цезарь с цыпленком", 370, "salads-starters", "220 г",
        "static/salads_starters/caesar.jpg", "meat"),
    new Dish("caprese", "Капрезе с моцареллой", 350, "salads-starters", "235 г",
        "static/salads_starters/caprese.jpg", "veg"),
    new Dish("tunasalad", "Салат с тунцом", 480, "salads-starters", "250 г",
        "static/salads_starters/tunasalad.jpg", "fish"),
    new Dish("frenchfries1", "Картофель фри с соусом Цезарь", 280, "salads-starters", "235 г",
        "static/salads_starters/frenchfries1.jpg", "veg"),
    new Dish("frenchfries2", "Картофель фри с кетчупом", 260, "salads-starters", "235 г",
        "static/salads_starters/frenchfries2.jpg", "veg"),


    // Drinks
    new Dish("orangejuice", "Апельсиновый сок", 120, "beverage", "300 мл",
        "static/drinks/orangejuice.jpg", "cold"),
    new Dish("applejuice", "Яблочный сок", 90, "beverage", "300 мл",
        "static/drinks/applejuice.jpg", "cold"),
    new Dish("carrotjuice", "Морковный сок", 110, "beverage", "300 мл",
        "static/drinks/carrotjuice.jpg", "cold"),
    new Dish("cappuccino", "Каппучино", 180, "beverage", "300 мл",
        "static/drinks/cappuccino.jpg", "hot"),
    new Dish("greentea", "Зеленый чай", 100, "beverage", "300 мл",
        "static/drinks/greentea.jpg", "hot"),
    new Dish("tea", "Черный чай", 90, "beverage", "300 мл",
        "static/drinks/tea.jpg", "hot"),

    // Desserts
    new Dish("baklava", "Пахлава", 220, "desserts", "300 гр",
        "static/desserts/baklava.jpg", "large"),
    new Dish("checheesecake", "Чизкейк", 240, "desserts", "125 гр",
        "static/desserts/checheesecake.jpg", "small"),
    new Dish("chocolatecake", "Шоколадный торт", 270, "desserts", "140 гр",
        "static/desserts/chocolatecake.jpg", "small"),
    new Dish("chocolatecheesecake", "Шоколадный чизкейк", 260, "desserts", "125 гр",
        "static/desserts/chocolatecheesecake.jpg", "small"),
    new Dish("donuts2", "Пончики (3 штуки)", 410, "desserts", "350 гр",
        "static/desserts/donuts2.jpg", "medium"),
    new Dish("donuts", "Пончики (6 штук)", 650, "desserts", "700 гр",
        "static/desserts/donuts.jpg", "large"),
];

dishes.sort((first, second) => {
    if (first.category === second.category) {
        return first.name.localeCompare(second.name);
    }
});