# Lanova — web stranica

## Pokretanje lokalno
```
npm install
npx @11ty/eleventy --serve
```
Otvori http://localhost:8080

## Objava na Netlify
1. Stvori besplatan GitHub račun (ako ga nemaš) i napravi novi repozitorij, npr. `lanova-web`.
2. Učitaj ovu mapu u taj repozitorij (git init, git add ., git commit, git push).
3. Na netlify.com poveži GitHub repozitorij ("Add new site" → "Import an existing project").
4. Build command: `npx @11ty/eleventy`
   Publish directory: `_site`
5. Nakon prvog deploya, u Netlify: Site settings → Identity → Enable Identity, zatim omogući "Git Gateway" (Identity → Services).
6. U Identity postavkama pozovi samu sebe kao korisnicu (Invite users), postavi lozinku preko emaila koji dobiješ.
7. Uređivanje bloga: idi na `tvojastranica.netlify.app/admin`, prijavi se, i kroz "Blog postovi" dodaj novi tekst.
8. Kad spojiš vlastitu domenu (lanova-va.hr), promijeni URL u src/_data/site.js ako je drugačiji.

## Struktura
- `src/` — sav sadržaj stranice (Eleventy predlošci)
- `src/blog/posts/` — ovdje Decap CMS sprema nove blog postove (markdown datoteke)
- `admin/` — Decap CMS uređivačko sučelje (/admin)
- `src/assets/` — slike, CSS, JS
