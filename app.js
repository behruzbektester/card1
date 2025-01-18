// document.body.style.cssText = `
//     background-color: #141414;
//     color: #fff;
//     font-weight: 400;
//     font-size: 14px;
//     line-height: 21px;
//     font-family: 'Inter'
// `;

// const card = document.createElement("div");
// card.setAttribute("id", "cardContainer"); // Add the ID
// const cardImg = document.createElement("img");
// cardImg.src = "./images/profile-pic.png";
// cardImg.alt = "icon profile";
// const cardIconName = document.createElement("h2");
// cardIconName.setAttribute("id", "cardIconName");
// cardIconName.textContent = "Jessica Randall";
// const cardLocation = document.createElement("p");
// cardLocation.setAttribute("id", "cardLocation");
// cardLocation.textContent = "London, United Kingdom";
// const cardText = document.createElement("p");
// cardText.setAttribute("id", "cardText");
// cardText.textContent = "'Front-end developer and avid reader.'";
// const cardList = document.createElement("ul");
// cardList.setAttribute("id", "cardList");
// const cardSocials = [
//   "GitHub",
//   "Frontend Mentor",
//   "LinkedIn",
//   "Twitter",
//   "Instagram",
// ];
// cardSocials.forEach((cardSocials) => {
//   const listItem = document.createElement("li");
//   listItem.setAttribute("id", "listItem");
//   listItem.textContent = cardSocials;
//   cardList.appendChild(listItem);
// });

// card.appendChild(cardList);
// card.appendChild(cardImg);
// card.appendChild(cardIconName);
// card.appendChild(cardLocation);
// card.appendChild(cardText);
// document.body.appendChild(card);

// document.querySelector("#cardContainer").style.cssText = `
//     background-color: #1f1f1f;
//     width: 384px;
//     text-align: center;
//     padding: 40px;
//     border-radius: 8px;
// `;
// document.getElementsByTagName("img")[0].style.cssText = `
//     text-align: center;
//     width: 88px;
//     height: 88px;
//     border-radius: 50%;
// `;
// document.querySelector("#cardIconName").style.cssText = `
//     font-size: 24px;
//     line-height: 36px;
//     font-weight: 600;
// `;
// document.querySelector("#cardLocation").style.cssText = `
//     color: #C4F82A;
//    font-weight:700;
// `;
// document.querySelector("#cardList").style.cssText = `
//     list-style: none;
//     display: flex;
//     flex-direction: column;
//     gap: 8px;
// `;
// document.querySelectorAll("#listItem").forEach((item) => {
//   item.style.cssText = `
//         width: 304px;
//         background-color: #333;
//         border-radius: 8px;
//         padding: 12px 0;
//         font-weight: 700;
//     `;
//   item.addEventListener("mouseenter", () => {
//     item.style.backgroundColor = "#c4f82a";
//     item.style.color = "#000";
//   });
//   item.addEventListener("mouseleave", () => {
//     item.style.backgroundColor = "#333";
//     item.style.color = "#fff";
//   });
// });

//
//

document.body.style.cssText = `
    background-color: #141414;
    color: #fff;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    font-family: 'Inter'
`;

// Create card container
const card = document.createElement("div");
card.setAttribute("id", "cardContainer"); // Add the ID

// Create and style profile image
const cardImg = document.createElement("img");
cardImg.src = "./images/profile-pic.png";
cardImg.alt = "icon profile";

// Create and style name
const cardIconName = document.createElement("h2");
cardIconName.setAttribute("id", "cardIconName");
cardIconName.textContent = "Jessica Randall";

// Create and style location
const cardLocation = document.createElement("p");
cardLocation.setAttribute("id", "cardLocation");
cardLocation.textContent = "London, United Kingdom";

// Create and style bio text
const cardText = document.createElement("p");
cardText.setAttribute("id", "cardText");
cardText.textContent = "'Front-end developer and avid reader.'";

// Create and style list for social links
const cardList = document.createElement("ul");
cardList.setAttribute("id", "cardList");

const cardSocials = [
  "GitHub",
  "Frontend Mentor",
  "LinkedIn",
  "Twitter",
  "Instagram",
];
cardSocials.forEach((cardSocials) => {
  const listItem = document.createElement("li");
  listItem.setAttribute("id", "listItem");
  listItem.textContent = cardSocials;
  cardList.appendChild(listItem);
});

// Append children in the correct order
card.appendChild(cardImg);
card.appendChild(cardIconName);
card.appendChild(cardLocation);
card.appendChild(cardText);
card.appendChild(cardList);

// Append card to the body
document.body.appendChild(card);

// Apply styles to the card container
document.querySelector("#cardContainer").style.cssText = `
    background-color: #1f1f1f;
    width: 384px;
    text-align: center;
    padding: 40px;
    border-radius: 8px; 
`;

// Apply styles to the image
document.getElementsByTagName("img")[0].style.cssText = `
    text-align: center;
    width: 88px;
    height: 88px;
    border-radius: 50%; 
    margin-bottom: 20px;
`;

// Apply styles to the name
document.querySelector("#cardIconName").style.cssText = `
    font-size: 24px;
    line-height: 36px;
    font-weight: 600;
    margin: 0;
`;

// Apply styles to the location
document.querySelector("#cardLocation").style.cssText = `
    color: #C4F82A;
    font-weight: 700;
    margin: 10px 0 5px;
`;

// Apply styles to the bio text
document.querySelector("#cardText").style.cssText = `
    font-style: italic;
    margin: 0 0 20px;
`;

// Apply styles to the social links list
document.querySelector("#cardList").style.cssText = `
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 0;
    margin: 0;
    align-items: center;
`;

// Apply styles to each social link item
document.querySelectorAll("#listItem").forEach((item) => {
  item.style.cssText = `
        width: 304px;
        background-color: #333;
        border-radius: 8px;
        padding: 12px 0;
        font-weight: 700;
        text-align: center;
        cursor: pointer;
        transition: all 0.3s ease;
    `;
  item.addEventListener("mouseenter", () => {
    item.style.backgroundColor = "#c4f82a";
    item.style.color = "#000";
  });
  item.addEventListener("mouseleave", () => {
    item.style.backgroundColor = "#333";
    item.style.color = "#fff";
  });
});
