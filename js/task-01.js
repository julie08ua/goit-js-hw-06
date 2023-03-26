const itemsOfCategoriesList = document.querySelector('#categories').children;
console.log('Number of categories:', itemsOfCategoriesList.length);


[...itemsOfCategoriesList].forEach(element => {
    console.log('Category:', element.firstElementChild.textContent);
    console.log('Elements:', element.lastElementChild.children.length);
});
