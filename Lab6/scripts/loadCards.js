document.addEventListener('DOMContentLoaded', () => {
    loadCards();
    setupFilters();


});

function loadCards() {
    for (let dish of dishes) {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'item';
        itemDiv.setAttribute('dish-data', dish.keyword);
        itemDiv.setAttribute('dish-category', dish.category);
        itemDiv.setAttribute('dish-kind', dish.kind);

        const imgElement = document.createElement('img');
        imgElement.src = dish.image;
        imgElement.alt = dish.keyword;

        itemDiv.appendChild(imgElement);

        const mainInfoDiv = document.createElement('div');
        mainInfoDiv.className = 'main-info';

        const priceP = document.createElement('p');
        priceP.innerHTML = dish.price + '&#8381;';

        const nameP = document.createElement('p');
        nameP.textContent = dish.name;

        mainInfoDiv.appendChild(priceP);
        mainInfoDiv.appendChild(nameP);

        itemDiv.appendChild(mainInfoDiv);

        const formElement = document.createElement('form');

        const weightP = document.createElement('p');
        weightP.textContent = dish.mass;

        const buttonElement = document.createElement('button');
        buttonElement.textContent = 'Добавить';
        buttonElement.addEventListener('click', addDish);

        formElement.appendChild(weightP);
        formElement.appendChild(buttonElement);

        itemDiv.appendChild(formElement);

        const section = document.querySelector('main .' + dish.category);
        const content = section.querySelector('.items');
        content.appendChild(itemDiv);
    }
}

function setupFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', event => {
            const categorySection = event.target.closest('section');
            const itemsContainer = categorySection.querySelector('.items');
            const kind = event.target.getAttribute('data-kind');

            if (event.target.classList.contains('active')) {
                event.target.classList.remove('active');
                showAllItems(itemsContainer);
            } else {
                clearActiveFilters(categorySection);
                event.target.classList.add('active');
                filterItems(itemsContainer, kind);
            }
        });
    });
}

function clearActiveFilters(categorySection) {
    const activeButtons = categorySection.querySelectorAll('.filter-btn.active');
    activeButtons.forEach(button => button.classList.remove('active'));
}

function filterItems(itemsContainer, kind) {
    const items = itemsContainer.querySelectorAll('.item');
    items.forEach(item => {
        if (item.getAttribute('dish-kind') === kind) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
}


function showAllItems(itemsContainer) {
    const items = itemsContainer.querySelectorAll('.item');
    items.forEach(item => {
        item.style.display = '';
    });
}
