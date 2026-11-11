// Click any .diagram image to view it full size.
(function () {
  var dlg = document.createElement("dialog");
  dlg.className = "zoom";
  dlg.innerHTML = '<img alt=""><div class="bar"><span></span><button type="button">Close ✕</button></div>';
  document.body.appendChild(dlg);
  var img = dlg.querySelector("img"), cap = dlg.querySelector("span");
  dlg.querySelector("button").onclick = function () { dlg.close(); };
  dlg.addEventListener("click", function (e) { if (e.target === dlg) dlg.close(); });
  document.querySelectorAll(".diagram button").forEach(function (b) {
    b.addEventListener("click", function () {
      var src = b.querySelector("img");
      img.src = src.src; img.alt = src.alt; cap.textContent = src.alt;
      if (dlg.showModal) dlg.showModal(); else window.open(src.src);
    });
  });

  // Highlight the current section in the side contents list.
  var links = document.querySelectorAll(".toc a");
  if (!links.length || !("IntersectionObserver" in window)) return;
  var map = {};
  links.forEach(function (a) { map[a.getAttribute("href").slice(1)] = a; });
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      links.forEach(function (a) { a.classList.remove("on"); });
      if (map[e.target.id]) map[e.target.id].classList.add("on");
    });
  }, { rootMargin: "-20% 0px -70% 0px" });
  Object.keys(map).forEach(function (id) { var el = document.getElementById(id); if (el) io.observe(el); });
})();
