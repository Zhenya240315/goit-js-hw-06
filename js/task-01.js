const categoriesItem = document.guerySelectorAll('.item');
console.log('Number of ctegories:', categoriesItem.length);
console.log(categoriesItem);

categoriesItem.forEach((element) => {
    console.log('Category:', element.firstElementChild.textContent); 
    console.log('Elements:', element.lastElementChild.children.length); 
    console.log(element.element.lastElementChild.children);
});