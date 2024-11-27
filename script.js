/* INTRO TO JSON */

let outputElement = document.getElementById("outputElement");
let outputParagraph = document.getElementById("outputParagraph");
let contentGridElement = document.getElementById("contentGrid");

// Parallax library
var rellax;

let jsonDatabase = [
  {
    title: "Normal Girl",
    album: "CTRL",
    year: "SZA",
    picture_url:
      "https://upload.wikimedia.org/wikipedia/en/b/bf/SZA_-_Ctrl_cover.png",
    song_color: "#448044",
  },
  {
    title: "Prom",
    album: "CTRL",
    year: "SZA",
    picture_url:
      "https://i.scdn.co/image/ab67616d0000b2731882add8fd275c04e322027d",
    song_color: "#095900",
  },
  {
    title: "Fast Times",
    album: "emails I cant send",
    year: "Sabrina Carpenter",
    picture_url:
      "https://upload.wikimedia.org/wikipedia/en/thumb/3/35/Sabrina_Carpenter_-_Fast_Times.jpg/220px-Sabrina_Carpenter_-_Fast_Times.jpg",
    song_color: "#ffc31f",
  },
  {
    title: "Skinny Dipping",
    album: "emails I cant send",
    year: "Sabrina Carpenter",
    picture_url:
      "https://images.genius.com/815168ec4306a3eeeddd7dcc19f05899.1000x1000x1.png",
    song_color: "#004d7d",
  },
  {
    title: "Back To Black",
    album: "Back To Black",
    year: "Amy Winehouse",
    picture_url:
      "https://i.scdn.co/image/ab67616d0000b27376ffb5b5ab045d22c81235c1",
    song_color: "#000000",
  },

  {
    title: "You Know Im No Good",
    album: "Back To Black",
    year: "Amy Winehouse",
    picture_url: "https://upload.wikimedia.org/wikipedia/en/2/25/Amyyking.jpg",
    song_color: "#301145",
  },
];

for (var i = 0; i < jsonDatabase.length; i++) {
  createElementProper(jsonDatabase[i]);
}

rellax = new Rellax(".rellax");

function createElementProper(incomingJSON) {
  /// Create whole content item div and set class
  let newContentElement = document.createElement("DIV");
  newContentElement.style.backgroundColor = incomingJSON["song_color"];
  newContentElement.style.fontFamily = incomingJSON["favorite_font"];
  newContentElement.classList.add("contentItem");

  /// Create HEADLINE h3, set class, set content
  let newContentHeading = document.createElement("H3");
  newContentHeading.classList.add("contentTitle");
  newContentHeading.innerText = incomingJSON["title"];
  /// Add the HEADLINE to the item
  newContentElement.appendChild(newContentHeading);

  /// Create & add LIST HEADLINE to the item
  let newContentSubhead = document.createElement("H4");
  newContentSubhead.innerText = `Album Name: ${incomingJSON["album"]}`;
  newContentElement.appendChild(newContentSubhead);

  let newContentYear = document.createElement("H5");
  newContentYear.innerText = `Album Artist: ${incomingJSON["year"]}`;
  newContentElement.appendChild(newContentYear);

  /// Create & add footer image
  let newImage = document.createElement("IMG");
  newImage.classList.add("footerImage");
  newImage.src = incomingJSON["picture_url"];
  newContentElement.appendChild(newImage);

  /// Add the item to the page
  contentGridElement.appendChild(newContentElement);
}
