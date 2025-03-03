
/*NOTE: These are test reviews with a structure similar to that of the real reviews retrieved from Google.
I don't have a project with reviews yet so I had to do this to see how they would look like.
*/
let reviews = [];

const testReviews = [

    {
      "reviewer": {
        "displayName": "Review 1",
        "profilePhotoUrl": ""
      },
      "comment": "Great service!",
      "rating": 5,
      "createTime": "2023-03-01T12:34:56Z"
    },

    {
      "reviewer": {
        "displayName": "Review 2",
        "profilePhotoUrl": ""
      },
      "comment": "Great service!",
      "rating": 5,
      "createTime": "2023-03-01T12:34:56Z"
    },
    {
      "reviewer": {
        "displayName": "Review 3",
        "profilePhotoUrl": ""
      },
      "comment": "Great service!",
      "rating": 5,
      "createTime": "2023-03-01T12:34:56Z"
    },
    {
      "reviewer": {
        "displayName": "Review 4",
        "profilePhotoUrl": ""
      },
      "comment": "Great service!",
      "rating": 5,
      "createTime": "2023-03-01T12:34:56Z"
    },
    {
      "reviewer": {
        "displayName": "Review 5",
        "profilePhotoUrl": ""
      },
      "comment": "Great service!",
      "rating": 5,
      "createTime": "2023-03-01T12:34:56Z"
    },
    {
      "reviewer": {
        "displayName": "Review 6",
        "profilePhotoUrl": ""
      },
      "comment": "Great service!",
      "rating": 5,
      "createTime": "2023-03-01T12:34:56Z"
    },
    {
      "reviewer": {
        "displayName": "Review 7",
        "profilePhotoUrl": ""
      },
      "comment": "Great service!",
      "rating": 5,
      "createTime": "2023-03-01T12:34:56Z"
    },
    {
      "reviewer": {
        "displayName": "Review 8",
        "profilePhotoUrl": ""
      },
      "comment": "Great service!",
      "rating": 5,
      "createTime": "2023-03-01T12:34:56Z"
    },
    {
      "reviewer": {
        "displayName": "Review 9",
        "profilePhotoUrl": ""
      },
      "comment": "Great service!",
      "rating": 5,
      "createTime": "2023-03-01T12:34:56Z"
    },
    {
      "reviewer": {
        "displayName": "Review 10",
        "profilePhotoUrl": ""
      },
      "comment": "Great service!",
      "rating": 5,
      "createTime": "2023-03-01T12:34:56Z"
    },
    {
      "reviewer": {
        "displayName": "Review 11",
        "profilePhotoUrl": ""
      },
      "comment": "Great service!",
      "rating": 5,
      "createTime": "2023-03-01T12:34:56Z"
    },
    {
      "reviewer": {
        "displayName": "Review 12",
        "profilePhotoUrl": ""
      },
      "comment": "Great service!",
      "rating": 5,
      "createTime": "2023-03-01T12:34:56Z"
    },
    {
      "reviewer": {
        "displayName": "Review 13",
        "profilePhotoUrl": ""
      },
      "comment": "Great service!",
      "rating": 5,
      "createTime": "2023-03-01T12:34:56Z"
    },
    {
      "reviewer": {
        "displayName": "Review 14",
        "profilePhotoUrl": ""
      },
      "comment": "Great service!",
      "rating": 5,
      "createTime": "2023-03-01T12:34:56Z"
    },
    {
      "reviewer": {
        "displayName": "Review 15",
        "profilePhotoUrl": ""
      },
      "comment": "Great service!",
      "rating": 5,
      "createTime": "2023-03-01T12:34:56Z"
    },
    {
      "reviewer": {
        "displayName": "Review 16",
        "profilePhotoUrl": ""
      },
      "comment": "Great service!",
      "rating": 5,
      "createTime": "2023-03-01T12:34:56Z"
    },
    {
      "reviewer": {
        "displayName": "Review 17",
        "profilePhotoUrl": ""
      },
      "comment": "Great service!",
      "rating": 5,
      "createTime": "2023-03-01T12:34:56Z"
    },
];

//NOTE: After the document is loaded a Swiper object is created to handle the carousel animation

document.addEventListener("DOMContentLoaded", async ()=> {
  await displayReviews();



})
//NOTE: this function takes an accountId and a locationId to retrieve the project's reviews.
// In case of an error, the test reviews are shown

async function displayReviews () {

  //This variable is gonna hold the reviews that are going to be shown: real or test reviews.


  //We wait for the server response:
    await fetch("/publicaciones")
    .then(response=> {
        //If the reviews exist then they are assigned to the reviews variable.
        if(response.json?.data?.reviews)
            reviews = response.json.data.reviews;

        //Else, the test reviews are assigned
        else
            reviews = testReviews
        })
    .catch(reviews = testReviews);

    //We take the reviews section element in html
    const reviewsSection = document.getElementById("reviews");

    let counter = 0;
    //We take up to 8 reviews using the slice function and then append them to the reviews section
    reviews.slice(0,8).forEach(review=>{


      const html = `
                        <div class="image-content">
                            <span class="overlay"></span>
                            <div class="card-image">
                                <img src="/assets/glass.jpg" class="card-img">
                            </div>
                        </div>

                        <div class="card-content">
                            <h2 class="name">${review.reviewer.displayName}</h2>
                            <p class="description">${review.comment}</p>
                            <button class="button">View more</button>
                        </div>
                    `

        const card = document.createElement("div");
        card.classList.add("card");
        card.id = `card${counter}`;

        if(counter > 2){
          card.classList.add("card-hidden");
        }


        card.innerHTML=html;

        reviewsSection.appendChild(card);
        counter = counter + 1;
    });

    const lastButton = document.createElement("button");
    lastButton.classList.add("button-navigation");
    lastButton.innerHTML =`<img class="button-navigation-img right-button" src="assets/right-arrow.png">`;
    lastButton.onclick = next;
    reviewsSection.appendChild(lastButton);
}

const next = ()=> {
  const reviewsSection = document.getElementById("reviews");

  let children = Array.prototype.slice.call(reviewsSection.children);
  children = children.filter(child => !child.classList.contains("card-hidden") && child.classList.contains("card"));
  console.log(children)
}


