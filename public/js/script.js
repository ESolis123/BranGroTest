
/*NOTE: These are test reviews with an structure similar to that of the real reviews retrieved from Google.
I don't a project with reviews yet so I had to do this to see how it would look like.
*/

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

];

//NOTE: After the document is loaded a Swiper object is created to handle the carousel animation

document.addEventListener("DOMContentLoaded", ()=>{
    displayReviews();

    new Swiper('.swiper-wrapper', {
      // Optional parameters
      loop: true,
      direction: "horizontal",
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },


    });

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
    reviews.slice(0,8).forEach(review=>{
        const div = document.createElement("div");
        div.classList.add("review-div");
        div.classList.add("swiper-slider");

        const user = document.createElement("p");
        user.innerText = review.reviewer.displayName;

        const comment = document.createElement("p");
        comment.innerText = review.comment;

        const date = document.createElement("p");
        date.innerText = review.createTime;

        div.append(user);
        div.append(comment);
        div.append(date);

        reviewsSection.appendChild(div);
    });
}

