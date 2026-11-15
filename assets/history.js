// History scrapbook: click a photo or flyer to see it whole.
(function () {
  var dlg = document.createElement("dialog");
  dlg.className = "zoom";
  dlg.innerHTML = '<img alt=""><div class="bar"><span></span><button type="button">Close ✕</button></div>';
  document.body.appendChild(dlg);
  var img = dlg.querySelector("img"), cap = dlg.querySelector("span");
  dlg.querySelector("button").onclick = function () { dlg.close(); };
  dlg.addEventListener("click", function (e) { if (e.target === dlg) dlg.close(); });
  document.querySelectorAll("button.pop, button.print").forEach(function (b) {
    b.addEventListener("click", function () {
      var src = b.querySelector("img");
      img.src = src.src; img.alt = src.alt; cap.textContent = src.alt;
      if (dlg.showModal) dlg.showModal(); else window.open(src.src);
    });
  });
})();
