var lvParentDiv = document.getElementsByClassName("content-container")[0];

function CreateListDisplay() {
  playlistData.forEach((item, i) => {
    lvParentDiv.appendChild(CreateLvItem(item));
  });
}



function CreateLvItem(playlist){
  var div = document.createElement("div");
  div.classList += "lvItem";

  div.appendChild(CreateLvImage(playlist.name));
  div.appendChild(CreateLvTitle(playlist.name, playlist.url));
  div.appendChild(CreateLvCreator(playlist.creator));
  div.appendChild(CreateLvStatus(playlist.status));
  div.appendChild(CreateLvEmoji(playlist.emoji));

  return div;
}

function CreateLvImage(name){
  var div = document.createElement("div");
  div.classList += "lvImageContainer";

  var img = document.createElement("img");
  img.classList += "lvImage";
  img.src = "img/" + name + ".jpg";
  div.appendChild(img);

  return div;
}

function CreateLvTitle(name, url){
  var div = document.createElement("div");
  div.classList += "lvTitleContainer";

  var h1 = document.createElement("h1");
  h1.classList += "lvTitle";
  h1.innerText = name;
  h1.id = url;
  h1.addEventListener("mousedown", (e) => {
    navigator.clipboard.writeText(e.target.id);
    DisplayCopied(e.target);
  })

  div.appendChild(h1);

  return div;
}

function CreateLvCreator(creator){
  var div = document.createElement("div");
  div.classList += "lvCreatorContainer";

  var h1 = document.createElement("h1");
  h1.classList += "lvHeader";
  h1.innerText = "Created by:";

  var h2 = document.createElement("h1");
  h2.classList += "lvCreator";
  h2.innerText = creator;

  div.appendChild(h1);
  div.appendChild(h2);

  return div;
}

function CreateLvStatus(status){
  var div = document.createElement("div");
  div.classList += "lvStatusContainer";

  var h1 = document.createElement("h1");
  h1.classList += "lvHeader";
  h1.innerText = "Status:";

  var h2 = document.createElement("h1");
  h2.classList += "lvStatus";
  h2.innerText = status;

  div.appendChild(h1);
  div.appendChild(h2);

  return div;
}

function CreateLvEmoji(emoji){
  var div = document.createElement("div");
  div.classList += "lvEmojiContainer";

  var div1 = document.createElement("div");
  div1.classList += "lvEmoji";
  div1.textContent = emoji;

  div.appendChild(div1);

  return div;
}
