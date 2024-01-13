const categoryList = document.getElementById('categories');

const categoryItems = categoryList.querySelectorAll('.item');

console.log(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach(category => {
    const categoryName = category.querySelector('h2').textContent;
    const categoryTotalItems = category.querySelectorAll('ul li').length;

    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${categoryTotalItems}`);
});
