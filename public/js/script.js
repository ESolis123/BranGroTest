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
];

document.addEventListener("DOMContentLoaded", ()=>{
    displayReviews();
    console.log("Get reviews");
})



async function displayReviews () {
    let reviews = [];

    await fetch("/publicaciones")
    .then(response=> {
        if(response.json?.data?.reviews){
            reviews = response.json.data.reviews;
        }

        else{
            reviews = testReviews
        }
        response.json()})
    .catch(reviews = testReviews);

    console.log(reviews);
    const reviewsSection = document.getElementById("reviews");

    const actualReviews = reviews !== null ? reviews : testReviews;

    actualReviews.slice(0,8).forEach(review=>{
        const div = document.createElement("div");
        div.classList.add("review-div");

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
