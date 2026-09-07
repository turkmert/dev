MERT TURK — PORTFOLIO SITE
===========================

FOLDER STRUCTURE
------------------
index.html      -> the page markup
css/style.css   -> all styling
js/script.js    -> all behavior: matrix rain, boot sequence, music,
                   scroll animations, and the interactive shell
img/favicon.png -> your anonymous-mask icon, used in the header logo
                   and as the browser tab icon
favicon.ico     -> the same icon as a standalone .ico file — some
                   browsers and crawlers still look for /favicon.ico
                   directly at the site root
robots.txt      -> tells search engines they're allowed to index the site


HOW TO PUT IT ONLINE
----------------------
Upload the ENTIRE folder (keeping the css/, js/, and img/ subfolders
intact — index.html depends on those exact paths) to any static host:

  GitHub Pages : create a repo, upload everything to the root,
                 enable Pages in repo Settings -> Pages.
  Netlify      : drag-and-drop this whole folder onto app.netlify.com/drop
  Vercel       : `vercel` CLI or drag-and-drop, same idea
  cPanel/FTP   : upload the whole folder's contents into public_html/

No build step, no npm install, no server required — it's static
HTML/CSS/JS. Just make sure the folder structure stays exactly as-is;
if css/style.css or js/script.js get moved, the page will load with
no styling or no interactivity.


THINGS THE PAGE LOADS FROM THE INTERNET
------------------------------------------
Beyond your own files, the site uses these external, free, no-key
services (loaded live in the visitor's browser):

  - fonts.googleapis.com   -> JetBrains Mono font
  - cdnjs.cloudflare.com   -> Font Awesome icons
  - ipwho.is               -> powers the "myip" / "location" shell commands
  - api.open-meteo.com     -> powers the "weather" shell command

If any of these are blocked on your host or the visitor's network,
that one feature fails gracefully with an error message in the shell —
the rest of the site keeps working.


HOW TO CUSTOMIZE
-------------------
Colors / theme      -> css/style.css, the ":root { --bg-void: ... }"
                        block at the top. Every color is a variable there.

Certifications      -> index.html, search for id="certs"

Badges               -> index.html, search for id="badges"

TryHackMe stats      -> index.html, search for id="stats" — edit the
                        numbers in data-target="..."

Works / projects      -> index.html, search for id="works"

Contact links         -> index.html, search for id="contact"

Background music      -> js/script.js, search for "generative dark
                          ambient pad". Key variables:
                            CHORDS       -> the chord progression (Hz)
                            CHORD_HOLD   -> how long each chord lasts (ms)
                            GLIDE_TIME   -> how slowly it glides (seconds)
                            setTargetAtTime(0.5, ...) -> overall volume

Interactive shell     -> js/script.js, search for "var commands = {"
                          Each entry is one command — add a new one by
                          adding a new key: function(){ return "text"; }

Icon / favicon        -> replace img/favicon.png (and favicon.ico if you
                          want) with a new image of the same square
                          shape — no code changes needed, the files are
                          already linked by name.


NOTE ON PRIVACY
-----------------
The "myip", "location", and "weather" shell commands send the
visitor's IP address to ipwho.is and api.open-meteo.com to look
those things up — same as any IP-lookup or weather widget would.
Nothing is stored or sent anywhere else.
