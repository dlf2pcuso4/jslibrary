document.head.innerHTML =
  document.head.innerHTML +
  "<style>@import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap');</style>";
const popup_hzcIFp0C53 = document.createElement("div");
popup_hzcIFp0C53.style.cssText =
  "position: fixed; overflow: scroll; width: 100%; height: 100%; inset: 0px; padding:30px; background-color: #000000C0; z-index: 10000 !important; font-family: Source Code Pro; color: #00FF00; font-size: 20px; font-weight: normal; text-align: left; text-decoration: none;";
popup_hzcIFp0C53.style.display = "none";
document.body.appendChild(popup_hzcIFp0C53);
const consolePrint_MgzkaLC2RU = (txt) => {
  popup_hzcIFp0C53.innerHTML =
    popup_hzcIFp0C53.innerHTML.slice(0, -5) + "</p><p>" + txt + "_</p>";
  popup_hzcIFp0C53.scrollTop = popup_hzcIFp0C53.scrollHeight;
  console.log(txt);
};
const consoleShow_LMYz9GUf9m = () => (popup_hzcIFp0C53.style.display = "block");
const consoleHide_nQQryu3f0m = () => (popup_hzcIFp0C53.style.display = "none");
