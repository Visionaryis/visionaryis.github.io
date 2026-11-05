// Outbound links for each Visionary brand.
// Leave a value empty ("") until that brand's domain exists: its "Visit site" button stays hidden.
window.VISIONARY_LINKS = {
  rcm: "",                                        // domain to be purchased
  accessX: "https://access-x.com",
  wealth: "https://visionaryfamilyoffices.com",
  media: "",                                      // domain to be purchased
  founder: ""                                     // personal site, domain to be determined
};

document.querySelectorAll("[data-outbound]").forEach(function (a) {
  var url = window.VISIONARY_LINKS[a.dataset.outbound];
  if (url) a.href = url; else a.hidden = true;
});
