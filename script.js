document.addEventListener('DOMContentLoaded', loadCollection);
const response = await fetch('./data.json');

async function loadCollection() {
    const collectionContainer = document.getElementById('collection');
    const response = await fetch('data.json');
    const data = await response.json();

    collectionContainer.innerHTML = data.items
        .map(
            (item) => `
        <div class="item">
            <img src="${item.image}" alt="${item.title}">
            <h3>${item.title}</h3>
            <p>${item.description}</p>
        </div>
    `
        )
        .join('');
}

function filterCollection() {
    const query = document.getElementById('searchBox').value.toLowerCase();
    const items = document.querySelectorAll('#collection .item');

    items.forEach((item) => {
        const title = item.querySelector('h3').textContent.toLowerCase();
        if (title.includes(query)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}
