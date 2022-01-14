CreateListDisplay();

twemoji.parse(document.body);

var copiedDom;
var copiedTimeout;

function DisplayCopied(dom){
  var rect = dom.getBoundingClientRect();
  var x = (rect.left + rect.right) / 2;
  var y = rect.top-30;

  if(copiedDom != null) DestroyCopied();

  copiedDom = document.createElement("div");
  copiedDom.classList += "cbContainer";

  var p = document.createElement("p");
  p.classList += "cbText";
  p.innerText = "Copied!"
  copiedDom.appendChild(p);

  copiedDom.style.left = (x + window.scrollX) + "px";
  copiedDom.style.top = (y + window.scrollY) + "px";

  document.body.appendChild(copiedDom);

  clearTimeout(copiedTimeout);
  copiedTimeout = setTimeout(DestroyCopied, 800);
}

function DestroyCopied(){
  copiedDom.remove();
  copiedDom = null;
}
