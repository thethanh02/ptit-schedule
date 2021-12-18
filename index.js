if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", afterDOMLoaded);
} else {
  afterDOMLoaded();
}

function afterDOMLoaded() {
  console.log("hi");
}
