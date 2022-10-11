document.head.appendChild(
  "<style>@import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap');</style>"
);
const _popup = document.createElement("div");
_popup.style.cssText =
  "position: fixed; overflow: scroll; width: 100%; height: 100%; inset: 0px; padding:30px; background-color: #000000C0; z-index: 2; font-family: Source Code Pro; color: #00FF00; font-size: 20px; font-weight: normal; text-align: left; text-decoration: none;";
_popup.style.display = "none";
document.body.appendChild(_popup);
const _consolePrint = (txt) => {
  _popup.innerHTML = _popup.innerHTML.slice(0, -5) + "</p><p>" + txt + "_</p>";
  _popup.scrollTop = _popup.scrollHeight;
};
const _consoleShow = () => (_popup.style.display = "block");
const _consoleHide = () => (_popup.style.display = "none");
