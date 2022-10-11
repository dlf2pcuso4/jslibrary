_consoleShow();
_consolePrint("Begin JSON download...");
let apiResponse = await fetch(
  "https://www.duellinksmeta.com/api/v1/cards?cardSort=name&aggregate=search&page=1&limit=3000"
);
_consolePrint("Page 1/5 fetched successfully");
_consolePrint("Converting JSON data to plain text...");
let apiData = await apiResponse.json();
let text = JSON.stringify(apiData).slice(0, -1) + ",";
_consolePrint("Page 1/5 loaded");
apiResponse = await fetch(
  "https://www.duellinksmeta.com/api/v1/cards?cardSort=name&aggregate=search&page=2&limit=3000"
);
_consolePrint("Page 2/5 fetched successfully");
_consolePrint("Converting JSON data to plain text...");
apiData = await apiResponse.json();
text += JSON.stringify(apiData).slice(1, -1) + ",";
_consolePrint("Page 2/5 loaded");
apiResponse = await fetch(
  "https://www.duellinksmeta.com/api/v1/cards?cardSort=name&aggregate=search&page=3&limit=3000"
);
_consolePrint("Page 3/5 fetched successfully");
_consolePrint("Converting JSON data to plain text...");
apiData = await apiResponse.json();
text += JSON.stringify(apiData).slice(1, -1) + ",";
_consolePrint("Page 3/5 loaded");
apiResponse = await fetch(
  "https://www.duellinksmeta.com/api/v1/cards?cardSort=name&aggregate=search&page=4&limit=3000"
);
_consolePrint("Page 4/5 fetched successfully");
_consolePrint("Converting JSON data to plain text...");
apiData = await apiResponse.json();
text += JSON.stringify(apiData).slice(1, -1) + ",";
_consolePrint("Page 4/5 loaded");
apiResponse = await fetch(
  "https://www.duellinksmeta.com/api/v1/cards?cardSort=name&aggregate=search&page=5&limit=3000"
);
_consolePrint("Page 5/5 fetched successfully");
_consolePrint("Converting JSON data to plain text...");
apiData = await apiResponse.json();
text += JSON.stringify(apiData).slice(1);
_consolePrint("Page 5/5 loaded");
_consolePrint("Preparing to download retrieved data as JSON");
let element = document.createElement("a");
element.setAttribute(
  "href",
  "data:text/plain;charset=utf-8," + encodeURIComponent(text)
);
element.setAttribute("download", "carddb-dl.json");
element.style.display = "none";
_consolePrint("JSON document carddb-dl.json created");
document.body.appendChild(element);
_consolePrint("Downloading...");
element.click();
document.body.removeChild(element);
_consolePrint("Download successful");
setTimeout(_consoleHide, 2000);
