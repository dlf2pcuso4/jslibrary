async function w7TU4GOXcr() {
  let a = document.getElementsByClassName("card-img full-width svelte-1xqpccf");
  let b = "";
  let r = "";
  for (let c = 0; c < a.length; c++) {
    b += a[c].alt + ",";
  }
  b = b.slice(0, -1);
  console.log("Decklist detected: " + b);
  let e = await fetch(
    "https://www.duellinksmeta.com/api/v1/cards?_id[$in]=" + b
  );
  let f = await e.json();
  let g = b.split(",");
  for (let d = 0; d < g.length; d++) {
    let h = f.filter((a) => a._id == g[d]);
    console.log("Processing card: " + h[0].name);
    r += ("000000000" + h[0].konamiID).substr(-10);
  }
  console.log("Deckcode generated: " + r);
  let t = document.createElement("textarea");
  t.innerHTML = r;
  document.body.appendChild(t);
  t.select();
  let s = document.execCommand("copy");
  document.body.removeChild(t);
  if (s) {
    console.log("Copied deckcode successfully");
    alert("Copied deckcode successfully");
  }
}
w7TU4GOXcr();
