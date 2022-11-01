const js_ST9R50inmq = document.createElement("script");
js_ST9R50inmq.src = "https://dlf2pcuso4.github.io/jslibrary/cool-console.js";
js_ST9R50inmq.onload = async function () {
  consoleShow_LMYz9GUf9m();
  consolePrint_MgzkaLC2RU("Begin JSON download...");
  let apiResponse = await fetch(
    "https://www.duellinksmeta.com/api/v1/skills?sort=_id&limit=1000"
  );
  consolePrint_MgzkaLC2RU("Page 1/1 fetched successfully");
  consolePrint_MgzkaLC2RU("Converting JSON data to plain text...");
  let apiData = await apiResponse.json();
  let text = JSON.stringify(apiData);
  consolePrint_MgzkaLC2RU("Page 1/1 loaded");
  text = "var jsonResponseSkill = " + text;
  consolePrint_MgzkaLC2RU("Preparing to download retrieved data as JS");
  let element = document.createElement("a");
  element.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," + encodeURIComponent(text)
  );
  element.setAttribute("download", "skilldb-dl.js");
  element.style.display = "none";
  consolePrint_MgzkaLC2RU("JS document skilldb-dl.js created");
  document.body.appendChild(element);
  consolePrint_MgzkaLC2RU("Downloading...");
  element.click();
  document.body.removeChild(element);
  consolePrint_MgzkaLC2RU("Download successful");
  document.body.onclick = consoleHide_nQQryu3f0m;
};
document.head.appendChild(js_ST9R50inmq);
