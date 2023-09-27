const dbUrl = "https://raw.githubusercontent.com/c3sar-0/fake-api/main/db.json";
const imgUrl = "https://xsgames.co/randomusers/assets/avatars/pixel/";
const tweetsContainer = document.getElementById("tweets");

function showTweets(arr) {
  arr.forEach((tweet, i) => {
    tweetsContainer.innerHTML += `
    <div class="tweet d-flex">
            <div class="profile-pic">
            <img width="50px" src="${imgUrl + i}.jpg" />
            </div>
            <div class="content">
            <div class="names">
                <p class="full-name">${tweet.name}</p>
                <p class="user-name">@${tweet.name}</p>
                <p class="time">27mins</p>
              </div>
            </div>
            <div class="tweet-content">
              <p>${tweet.text}</p>
            </div>
            <div class="tweet-icons">
              <i class="fa fa-comment" aria-hidden="true"></i>
              <i class="fa fa-heart" aria-hidden="true"></i>
              <i class="fa fa-retweet" aria-hidden="true"></i>
            </div>
      </div>
    `;
  });
}

fetch(dbUrl)
  .then((res) => res.json())
  .then((data) => {
    const tweets = data;
    showTweets(tweets);
    console.log(tweets);
  });
