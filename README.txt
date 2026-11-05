visionary.is — site files (draft, 3 November 2026)
==================================================

Plain static HTML and CSS. No build step, no framework, no server code.
Upload the folder as-is to any static host; index.html is the homepage.

Pages
-----
index.html      Landing page (black theme)
access-x.html   Access-X (red theme)
wealth.html     Visionary Family Offices (white theme)
rcm.html        Visionary RCM (black theme)
media.html      Visionary Media (red theme)
founder.html    Founder, Alex Salzman (black theme)
history.html    History since 2012 (black theme)
survey.html     Access Survey; also the "Join" page (black theme)

assets/theme-black.css, theme-red.css, theme-white.css   one stylesheet per theme
assets/site-config.js   outbound links to each brand's own site (see below)
assets/visionary-logo.png, alex-salzman.jpg              images

Fonts load from Google Fonts. Nothing else is loaded from outside the site.

Things to set up or finish
--------------------------
1. Brand links: assets/site-config.js holds the "Visit site" URL for each
   brand. A blank value hides that button. RCM, Media and the founder's
   personal site are blank until their domains exist.

2. Access Survey form: survey.html posts to Formspree
   (https://formspree.io/f/xyeeejeo), the same form the Access-X site uses.
   Submissions arrive with the subject "visionary.is Access Survey". To give
   visionary.is its own inbox, create a new Formspree form and swap the
   endpoint in the form's action attribute. Please send one test submission
   after launch. Links can pre-tick a choice with
   survey.html?category=join | wealth | media.

3. Phone menu: below about 920px wide the top menu links are hidden and
   there is no menu button yet. Visitors can only use the footer links.
   This still needs to be built.

4. Placeholders: each footer has a box reading "Placeholder: regulatory
   disclosures". Final text to come from Alex.

5. Contact: the menu's "Contact" link scrolls to the footer, which lists
   alex@visionary.is and LinkedIn.

Please keep page text as written; content changes go through Alex.
