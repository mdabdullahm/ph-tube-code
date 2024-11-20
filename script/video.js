console.log('video script added');

// create loadCategories
const loadCategories = () => {
    // fetch the data
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => DisplayCategories(data.categories))
    .Catch((error) => console.log(error));
};
// create DisplayCategories
const DisplayCategories = (data) => {
    //  add Data in html
    console.log(data);
};

loadCategories();