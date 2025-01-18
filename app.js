document.body.style.cssText = `
    background-color: #141414;
    color: #fff;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    font-family: 'Inter'
`;

const card = document.createElement("div");
card.setAttribute("id", "cardContainer");

const cardImg = document.createElement("img");
cardImg.src = "./images/profile-pic.png";
cardImg.alt = "icon profile";

const cardIconName = document.createElement("h2");
cardIconName.setAttribute("id", "cardIconName");
cardIconName.textContent = "Jessica Randall";

const cardLocation = document.createElement("p");
cardLocation.setAttribute("id", "cardLocation");
cardLocation.textContent = "London, United Kingdom";

const cardText = document.createElement("p");
cardText.setAttribute("id", "cardText");
cardText.textContent = "'Front-end developer and avid reader.'";

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

card.appendChild(cardImg);
card.appendChild(cardIconName);
card.appendChild(cardLocation);
card.appendChild(cardText);
card.appendChild(cardList);

document.body.appendChild(card);

document.querySelector("#cardContainer").style.cssText = `
    background-color: #1f1f1f;
    width: 384px;
    text-align: center;
    padding: 40px;
    border-radius: 8px; 
`;

document.getElementsByTagName("img")[0].style.cssText = `
    text-align: center;
    width: 88px;
    height: 88px;
    border-radius: 50%; 
    margin-bottom: 20px;
`;

document.querySelector("#cardIconName").style.cssText = `
    font-size: 24px;
    line-height: 36px;
    font-weight: 600;
    margin: 0;
`;

document.querySelector("#cardLocation").style.cssText = `
    color: #C4F82A;
    font-weight: 700;
    margin: 10px 0 5px;
`;

document.querySelector("#cardText").style.cssText = `
    font-style: italic;
    margin: 0 0 20px;
`;

document.querySelector("#cardList").style.cssText = `
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 0;
    margin: 0;
    align-items: center;
`;

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
