
/*NOTE: These are test reviews with a structure similar to that of the real reviews retrieved from Google.
I don't have a project with reviews yet so I had to do this to see how they would look like.
*/
let swiper;


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
        "displayName": "Review 1",
        "profilePhotoUrl": ""
      },
      "comment": "Great service!",
      "rating": 5,
      "createTime": "2023-03-01T12:34:56Z"
    },
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
        "displayName": "Review 1",
        "profilePhotoUrl": ""
      },
      "comment": "Great service!",
      "rating": 5,
      "createTime": "2023-03-01T12:34:56Z"
    },
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
        "displayName": "Review 1",
        "profilePhotoUrl": ""
      },
      "comment": "Great service!",
      "rating": 5,
      "createTime": "2023-03-01T12:34:56Z"
    },
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
        "displayName": "Review 1",
        "profilePhotoUrl": ""
      },
      "comment": "Great service!",
      "rating": 5,
      "createTime": "2023-03-01T12:34:56Z"
    },
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
        "displayName": "Review 1",
        "profilePhotoUrl": ""
      },
      "comment": "Great service!",
      "rating": 5,
      "createTime": "2023-03-01T12:34:56Z"
    },
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
        "displayName": "Review 1",
        "profilePhotoUrl": ""
      },
      "comment": "Great service!",
      "rating": 5,
      "createTime": "2023-03-01T12:34:56Z"
    },
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
        "displayName": "Review 1",
        "profilePhotoUrl": ""
      },
      "comment": "Great service!",
      "rating": 5,
      "createTime": "2023-03-01T12:34:56Z"
    },
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
        "displayName": "Review 1",
        "profilePhotoUrl": ""
      },
      "comment": "Great service!",
      "rating": 5,
      "createTime": "2023-03-01T12:34:56Z"
    },
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
        "displayName": "Review 1",
        "profilePhotoUrl": ""
      },
      "comment": "Great service!",
      "rating": 5,
      "createTime": "2023-03-01T12:34:56Z"
    },
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
        "displayName": "Review 1",
        "profilePhotoUrl": ""
      },
      "comment": "Great service!",
      "rating": 5,
      "createTime": "2023-03-01T12:34:56Z"
    },

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
        "displayName": "Review 1",
        "profilePhotoUrl": ""
      },
      "comment": "Great service!",
      "rating": 5,
      "createTime": "2023-03-01T12:34:56Z"
    },
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
        "displayName": "Review 1",
        "profilePhotoUrl": ""
      },
      "comment": "Great service!",
      "rating": 5,
      "createTime": "2023-03-01T12:34:56Z"
    },
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
        "displayName": "Review 1",
        "profilePhotoUrl": ""
      },
      "comment": "Great service!",
      "rating": 5,
      "createTime": "2023-03-01T12:34:56Z"
    },
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
        "displayName": "Review 1",
        "profilePhotoUrl": ""
      },
      "comment": "Great service!",
      "rating": 5,
      "createTime": "2023-03-01T12:34:56Z"
    },
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
        "displayName": "Review 1",
        "profilePhotoUrl": ""
      },
      "comment": "Great service!",
      "rating": 5,
      "createTime": "2023-03-01T12:34:56Z"
    },
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
        "displayName": "Review 1",
        "profilePhotoUrl": ""
      },
      "comment": "Great service!",
      "rating": 5,
      "createTime": "2023-03-01T12:34:56Z"
    },
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
        "displayName": "Review 1",
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
    let reviews = [];

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

    //We take up to 8 reviews using the slice function and then append them to the reviews section
    reviews.slice(0,3).forEach(review=>{

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

        card.innerHTML=html;

        reviewsSection.appendChild(card);
    });

    const lastButton = document.createElement("button");
    lastButton.classList.add("button-navigation");

    lastButton.innerHTML =`<img class="button-navigation-img right-button" src="assets/right-arrow.png">`;
    reviewsSection.appendChild(lastButton);
}




