const js_TBxyaqwFyI = document.createElement("script");
js_TBxyaqwFyI.src = "https://dlf2pcuso4.github.io/jslibrary/cool-console.js";
js_TBxyaqwFyI.onload = () => {
  const dlapi_xYEJ22MLy5 = async function () {
    consoleShow_LMYz9GUf9m();
    consolePrint_MgzkaLC2RU("Begin JSON download...");
    let apiResponse = await fetch(
      "https://www.duellinksmeta.com/api/v1/cards?cardSort=name&aggregate=search&page=1&limit=3000"
    );
    consolePrint_MgzkaLC2RU("Page 1/5 fetched successfully");
    consolePrint_MgzkaLC2RU("Converting JSON data to plain text...");
    let apiData = await apiResponse.json();
    let text = JSON.stringify(apiData).slice(0, -1) + ",";
    consolePrint_MgzkaLC2RU("Page 1/5 loaded");
    apiResponse = await fetch(
      "https://www.duellinksmeta.com/api/v1/cards?cardSort=name&aggregate=search&page=2&limit=3000"
    );
    consolePrint_MgzkaLC2RU("Page 2/5 fetched successfully");
    consolePrint_MgzkaLC2RU("Converting JSON data to plain text...");
    apiData = await apiResponse.json();
    text += JSON.stringify(apiData).slice(1, -1) + ",";
    consolePrint_MgzkaLC2RU("Page 2/5 loaded");
    apiResponse = await fetch(
      "https://www.duellinksmeta.com/api/v1/cards?cardSort=name&aggregate=search&page=3&limit=3000"
    );
    consolePrint_MgzkaLC2RU("Page 3/5 fetched successfully");
    consolePrint_MgzkaLC2RU("Converting JSON data to plain text...");
    apiData = await apiResponse.json();
    text += JSON.stringify(apiData).slice(1, -1) + ",";
    consolePrint_MgzkaLC2RU("Page 3/5 loaded");
    apiResponse = await fetch(
      "https://www.duellinksmeta.com/api/v1/cards?cardSort=name&aggregate=search&page=4&limit=3000"
    );
    consolePrint_MgzkaLC2RU("Page 4/5 fetched successfully");
    consolePrint_MgzkaLC2RU("Converting JSON data to plain text...");
    apiData = await apiResponse.json();
    text += JSON.stringify(apiData).slice(1, -1) + ",";
    consolePrint_MgzkaLC2RU("Page 4/5 loaded");
    apiResponse = await fetch(
      "https://www.duellinksmeta.com/api/v1/cards?cardSort=name&aggregate=search&page=5&limit=3000"
    );
    consolePrint_MgzkaLC2RU("Page 5/5 fetched successfully");
    consolePrint_MgzkaLC2RU("Converting JSON data to plain text...");
    apiData = await apiResponse.json();
    text += JSON.stringify(apiData).slice(1);
    consolePrint_MgzkaLC2RU("Page 5/5 loaded");
    text = "var jsonResponseDl = " + text;
    consolePrint_MgzkaLC2RU("Preparing to download retrieved data as JS");
    let element = document.createElement("a");
    element.setAttribute(
      "href",
      "data:text/plain;charset=utf-8," + encodeURIComponent(text)
    );
    element.setAttribute("download", "carddb-dl.js");
    element.style.display = "none";
    consolePrint_MgzkaLC2RU("JS document carddb-dl.js created");
    document.body.appendChild(element);
    consolePrint_MgzkaLC2RU("Downloading...");
    element.click();
    document.body.removeChild(element);
    consolePrint_MgzkaLC2RU("Download successful");
    document.body.onclick = consoleHide_nQQryu3f0m;
  };

  const mdapi_LFqWAu4reH = async function () {
    consoleShow_LMYz9GUf9m();
    consolePrint_MgzkaLC2RU("Begin JSON download...");
    let apiResponse = await fetch(
      "https://www.masterduelmeta.com/api/v1/cards?cardSort=name&aggregate=search&page=1&limit=3000"
    );
    consolePrint_MgzkaLC2RU("Page 1/5 fetched successfully");
    consolePrint_MgzkaLC2RU("Converting JSON data to plain text...");
    let apiData = await apiResponse.json();
    let text = JSON.stringify(apiData).slice(0, -1) + ",";
    consolePrint_MgzkaLC2RU("Page 1/5 loaded");
    apiResponse = await fetch(
      "https://www.masterduelmeta.com/api/v1/cards?cardSort=name&aggregate=search&page=2&limit=3000"
    );
    consolePrint_MgzkaLC2RU("Page 2/5 fetched successfully");
    consolePrint_MgzkaLC2RU("Converting JSON data to plain text...");
    apiData = await apiResponse.json();
    text += JSON.stringify(apiData).slice(1, -1) + ",";
    consolePrint_MgzkaLC2RU("Page 2/5 loaded");
    apiResponse = await fetch(
      "https://www.masterduelmeta.com/api/v1/cards?cardSort=name&aggregate=search&page=3&limit=3000"
    );
    consolePrint_MgzkaLC2RU("Page 3/5 fetched successfully");
    consolePrint_MgzkaLC2RU("Converting JSON data to plain text...");
    apiData = await apiResponse.json();
    text += JSON.stringify(apiData).slice(1, -1) + ",";
    consolePrint_MgzkaLC2RU("Page 3/5 loaded");
    apiResponse = await fetch(
      "https://www.masterduelmeta.com/api/v1/cards?cardSort=name&aggregate=search&page=4&limit=3000"
    );
    consolePrint_MgzkaLC2RU("Page 4/5 fetched successfully");
    consolePrint_MgzkaLC2RU("Converting JSON data to plain text...");
    apiData = await apiResponse.json();
    text += JSON.stringify(apiData).slice(1, -1) + ",";
    consolePrint_MgzkaLC2RU("Page 4/5 loaded");
    apiResponse = await fetch(
      "https://www.masterduelmeta.com/api/v1/cards?cardSort=name&aggregate=search&page=5&limit=3000"
    );
    consolePrint_MgzkaLC2RU("Page 5/5 fetched successfully");
    consolePrint_MgzkaLC2RU("Converting JSON data to plain text...");
    apiData = await apiResponse.json();
    text += JSON.stringify(apiData).slice(1);
    consolePrint_MgzkaLC2RU("Page 5/5 loaded");
    text = "var jsonResponseMd = " + text;
    consolePrint_MgzkaLC2RU("Preparing to download retrieved data as JS");
    let element = document.createElement("a");
    element.setAttribute(
      "href",
      "data:text/plain;charset=utf-8," + encodeURIComponent(text)
    );
    element.setAttribute("download", "carddb-md.js");
    element.style.display = "none";
    consolePrint_MgzkaLC2RU("JS document carddb-md.js created");
    document.body.appendChild(element);
    consolePrint_MgzkaLC2RU("Downloading...");
    element.click();
    document.body.removeChild(element);
    consolePrint_MgzkaLC2RU("Download successful");
    document.body.onclick = consoleHide_nQQryu3f0m;
  };

  if (window.location.href.includes("duellinksmeta")) {
    dlapi_xYEJ22MLy5();
  }
  if (window.location.href.includes("masterduelmeta")) {
    mdapi_LFqWAu4reH();
  }
};
document.head.appendChild(js_TBxyaqwFyI);
