let currentDishPriceSum = 0;

const selectedDishes = {
    soup: null,
    mainCourse: null,
    beverage: null,
    saladsStarters: null,
    desserts: null
};

const dishMapper = {
    'soup': 'soup',
    'main-course': 'mainCourse',
    'beverage': 'beverage',
    'salads-starters': 'saladsStarters',
    'desserts': 'desserts'
};



function addDish(event) {
    event.preventDefault();

    const dishCard = event.currentTarget.closest('.item');
    const dishCategory = dishCard.getAttribute('dish-category');
    const dishData = dishCard.getAttribute('dish-data');


    selectedDishes[dishMapper[dishCategory]] = dishData;

    document.querySelector(`.selected-${dishCategory}`).setAttribute('value', dishData);


    document.querySelectorAll(`.item[dish-category="${dishCategory}"]`)
        .forEach(card => card.classList.remove('selected'));


    dishCard.classList.add('selected');


    updateSelectedDishes();
}


function updateSelectedDishes() {
    if (areDishesEmpty()) {
        toggleDishListVisibility(false);
        return;
    }

    toggleDishListVisibility(true);

    currentDishPriceSum = 0;
    Object.entries(selectedDishes).forEach(([categoryKey, dishKeyword]) => {
        if (!dishKeyword) return;

        const dish = dishes.find(d => d.keyword === dishKeyword);
        if (!dish) return;

        const categoryElement = document.querySelector(`.chosen[category='${dish.category}']`);
        if (categoryElement) {
            categoryElement.querySelector('p').innerText = `${dish.name} - ${dish.price}`;
            currentDishPriceSum += dish.price;
        }
    });

    document.querySelector('.order-price').innerText = currentDishPriceSum;
    document.querySelector('.order-price-input').setAttribute('value', currentDishPriceSum);
}



function toggleDishListVisibility(show) {
    const chosenElements = document.querySelectorAll('.user-order .hid');
    chosenElements.forEach(element => element.hidden = !show);

    document.querySelector('.nothing').hidden = show;
}


function areDishesEmpty() {
    return Object.values(selectedDishes).every(value => value === null);
}



function clearSelectedDishes() {

    document.querySelectorAll('.sel').forEach(tag => tag.setAttribute('value', ''));


    Object.keys(selectedDishes).forEach(key => {
        selectedDishes[key] = null;
    });


    document.querySelectorAll('.chosen p').forEach(p => p.innerText = 'Не выбрано');

    document.querySelectorAll('.item.selected').forEach(card => card.classList.remove('selected'));


    toggleDishListVisibility(false);
    currentDishPriceSum = 0;
    document.querySelector('.order-price').innerText = currentDishPriceSum;
    document.querySelector('.order-price-input').setAttribute('value', currentDishPriceSum);
}



function checkOrder() {
    const missingItems = [];
    if (Object.values(selectedDishes).every(dish => dish === null)) {
        missingItems.push('Ничего не выбрано. Выберите блюда для заказа');
        return missingItems;
    }
    if ((selectedDishes.desserts || selectedDishes.beverage) && (!selectedDishes.soup || !selectedDishes.mainCourse)) {
        missingItems.push('Выберите главное блюдо');
        return missingItems;
    }
    if (!selectedDishes.soup && !selectedDishes.mainCourse) {
        missingItems.push('Выберите суп или главное блюдо');
        return missingItems;
    }
    if (selectedDishes.soup && !selectedDishes.mainCourse && !selectedDishes.saladsStarters) {
        missingItems.push('Выберите главное блюдо/салат/стартер');
        return missingItems;
    }

    if (!selectedDishes.beverage) {
        missingItems.push('Выберите напиток');
        return missingItems;
    }
    return missingItems;
}

function showNotification(missingItems) {
    const notification = document.createElement('div');
    notification.classList.add('notification');
    notification.innerHTML = `
        <p>${missingItems.join('<br>')}</p>
        <button id="ok-button">
            Окей <span class="thumbs-up">👍</span>
        </button>
    `;
    document.body.appendChild(notification);

    const okButton = notification.querySelector('#ok-button');
    okButton.addEventListener('click', () => {
        if (document.body.contains(notification)) {
            document.body.removeChild(notification);
        }
    });

    // okButton.addEventListener('mouseover', () => {
    //     okButton.style.backgroundColor = 'tomato';
    //     okButton.style.color = 'white';
    // });

    // okButton.addEventListener('mouseout', () => {
    //     okButton.style.backgroundColor = '#007bff';
    //     okButton.style.color = 'white';
    // });
}


const orderForm = document.querySelector('.order-form form');

orderForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const missingItems = checkOrder();
    if (missingItems.length > 0) {
        showNotification(missingItems);
    } else {
        console.log('Заказ полностью заполнен!');
        orderForm.submit();
    }
});
