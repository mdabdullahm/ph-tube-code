console.log('video script added');

// create loadCategories
const loadCategories = () => {
    // fetch the data
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => DisplayCategories(data.categories))
    .catch((error) => console.log(error));
};

const loadVideos = () => {
    // fetch the data
    fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((res) => res.json())
    .then((data) => DisplayVideos(data.videos))
    .Catch((error) => console.log(error));
};

const cardDemo = {
    "category_id": "1001",
    "video_id": "aaad",
    "thumbnail": "https://i.ibb.co/f9FBQwz/smells.jpg",
    "title": "Smells Like Teen Spirit",
    "authors": [
        {
            "profile_picture": "https://i.ibb.co/k4tkc42/oliviar-harris.jpg",
            "profile_name": "Oliver Harris",
            "verified": true
        }
    ],
    "others": {
        "views": "5.4K",
        "posted_date": "1672656000"
    },
    "description": "'Smells Like Teen Spirit' by Oliver Harris captures the raw energy and rebellious spirit of youth. With over 5.4K views, this track brings a grunge rock vibe, featuring powerful guitar riffs and compelling vocals. Oliver's verified profile guarantees a quality musical journey that resonates with fans of dynamic, high-energy performances."
};

const DisplayVideos = (videos) => {
    const videosContainer= document.getElementById("videos");
    videos.forEach((video) => {
    console.log(video);
    const card = document.createElement("div");
    card.classList = "card card-compact";
    card.innerHTML= `
     <figure>
      <img
      src=${video.thumbnail}
      alt="Shoes" />
    </figure>
    <div class="card-body">
       <h2 class="card-title">Shoes!</h2>
       <p>If a dog chews shoes whose shoes does he choose?</p>
       <div class="card-actions justify-end">
       <button class="btn btn-primary">Buy Now</button>
       </div>
    </div>
    `;
    videosContainer.append(card);
     });
};

// create DisplayCategories
const DisplayCategories = (categories) => {
    const categoryContainer = document.getElementById("categories")
    categories.forEach((item) =>{
        console.log(item);

        const button = document.createElement("button");
        button.classList = "btn";
        button.innerText = item.category;
        categoryContainer.append(button);
    });
};

loadCategories();
loadVideos();