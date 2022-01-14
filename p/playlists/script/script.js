CreateListDisplay();

twemoji.parse(document.body);

function DisplayCopied(dom){
  var rect = dom.getBoundingClientRect();
  var x = (rect.left + rect.right) / 2;
  var y = rect.top;

  var div = document.createElement("div");
  div.classList += "cbContainer";

  var p = document.createElement("p");
  p.classList += "cbText";
  p.innerText = "Copied!"
  div.appendChild(p);

  div.style.left = (x + window.scrollX) + "px";
  div.style.top = (y + window.scrollY) + "px";

  document.body.appendChild(div);
}
