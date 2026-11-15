// Testimonials: filter by category. Links like testimonials.html#key-hires open on that category.
(function () {
  var buttons = document.querySelectorAll("[data-filter]");
  var groups = document.querySelectorAll(".tm-group");
  function show(id, scroll) {
    var known = false;
    groups.forEach(function (g) { if (g.id === id) known = true; });
    if (!known) id = "all";
    groups.forEach(function (g) { g.hidden = id !== "all" && g.id !== id; });
    buttons.forEach(function (b) { b.setAttribute("aria-pressed", b.dataset.filter === id ? "true" : "false"); });
    if (scroll) document.getElementById(id === "all" ? "stories" : id).scrollIntoView();
  }
  buttons.forEach(function (b) {
    b.addEventListener("click", function () {
      var id = b.dataset.filter;
      history.replaceState(null, "", id === "all" ? location.pathname : "#" + id);
      show(id, true);
    });
  });
  show(location.hash.slice(1) || "all", !!location.hash);
})();
