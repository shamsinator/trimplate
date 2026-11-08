# UPGRADE_LOG

Bijgehouden op branch `chore/dependency-upgrades`.

---

## Omgeving

| Wat | Waarde |
|-----|--------|
| Package manager | **npm** v11.4.2 (node_modules/.package-lock.json aanwezig; yarn niet geïnstalleerd) |
| Node | **v22.15.0** |
| Node vastgelegd | Nergens (geen `.nvmrc`, geen `engines` in package.json, geen CI, geen Dockerfile) |
| OS | Windows 10 Pro 10.0.19045 |

> **Noot over lockfiles:** Zowel `package-lock.json` als `yarn.lock` staan in de repo met dezelfde timestamp. Yarn is niet beschikbaar op dit systeem; npm is de enige werkende package manager. Aanbeveling: verwijder `yarn.lock` na voltooiing van de upgrade.

---

## Fase 0 — Baseline (2026-11-08)

### Huidige versies (relevante packages)

| Package | Versie |
|---------|--------|
| react / react-dom | 18.2.0 |
| react-router / react-router-dom | 6.23.1 |
| typescript | 5.2.2 |
| vite | 6.4.3 |
| @vitejs/plugin-react-swc | 3.5.0 |
| tailwindcss | 3.4.1 |
| tailwind-merge | 2.3.0 |
| zod | 3.23.8 |
| zustand | 4.5.6 |
| framer-motion | 11.18.0 |
| react-day-picker | 8.10.1 |
| react-resizable-panels | 2.0.19 |
| lucide-react | 0.394.0 |
| vaul | 0.9.1 |
| date-fns | 3.6.0 |
| react-hook-form | 7.51.5 |
| @hookform/resolvers | 3.6.0 |
| react-ga4 | 2.1.0 |
| react-helmet-async | 2.0.5 |
| @supabase/supabase-js | 2.45.6 |
| cmdk | 1.0.0 |
| embla-carousel-react | 8.1.5 |
| @swc/core | 1.3.96 |

### Verificatie-resultaten baseline

| Stap | Resultaat | Noten |
|------|-----------|-------|
| `npm ci` | ✅ OK | 9 vulnerabilities (zie audit) |
| `npx tsc --noEmit` | ✅ OK | Geen fouten |
| `npm run lint` | ❌ GEBROKEN (baseline) | `eslint` is niet geïnstalleerd, staat niet in devDependencies; lint-script is dode code |
| Tests | N.v.t. | Geen testframework aanwezig (geen vitest, jest, etc.) |
| `npm run build` | ✅ OK | 15.37s, 2882 modules |

### Build-baseline (bundel­groottes)

| Chunk | Raw | Gzip |
|-------|-----|------|
| index.js (vendor) | 373.89 kB | 123.09 kB |
| map.js | 146.61 kB | 32.20 kB |
| ScrollToTop.js | 135.05 kB | 40.30 kB |
| book-online.js | 105.94 kB | 33.76 kB |
| contact.js | 79.89 kB | 29.96 kB |
| home.js | 52.45 kB | 18.44 kB |
| index.css | 61.43 kB | 11.08 kB |

### Audit baseline (bestaande vulns, vóór enige upgrade)

| Package | Ernst | CVE/advisorie |
|---------|-------|---------------|
| browserslist ≤4.28.6 | High | GHSA-c83g-rgw3-j3cx, GHSA-73wf-gq98-2v4g |
| nanoid ≤3.3.17 | High | GHSA-28wg-ghj8-5hjv, GHSA-2v37-7h3g-55p8 |
| postcss ≤8.5.22 | High | GHSA-fxqj-rqcc-2cmp, GHSA-r28c-9q8g-f849 |
| postcss-selector-parser <6.1.5 | Moderate | GHSA-rj75-hqrm-r3gf |
| react-router 6.0.0–7.17.0 | Moderate | GHSA-wrjc-x8rr-h8h6, GHSA-337j-9hxr-rhxg |
| source-map-js 1.0.0–1.2.1 | High | GHSA-68fv-2mgg-jv7q |
| vite ≤6.4.3 | High | GHSA-698v-4r3x-3vcv, GHSA-587h-7wmj-h5pm, GHSA-9jrq-w75r-8gcw, GHSA-rq7h-c2jc-7f22 |
| zod <4.6.6 | High | GHSA-mrhx-c7xc-m3w5 |

---

## API-gebruik in kaart (fase 0)

### react-router-dom / react-router

Alle 7 importerende bestanden gebruiken `react-router-dom`. Geen directe `react-router`-imports.

| Bestand | Gebruikte API's |
|---------|-----------------|
| src/main.tsx | `BrowserRouter` |
| src/App.tsx | `Routes`, `Route`, `useLocation`, `useRoutes` |
| src/components/Header.tsx | `useNavigate`, `Link` |
| src/components/layout/RootLayout.tsx | `useLocation` |
| src/components/navigation/NavLinks.tsx | `useNavigate` |
| src/components/pages/blog.tsx | `Link` |
| src/components/pages/empty-cart.tsx | `Link` |

**Migratie-impact (fase 3.6):** Alle imports omzetten naar `react-router`; `BrowserRouter` naar `react-router/dom`.

### forwardRef / defaultProps / propTypes / useRef()

- `React.forwardRef` gebruikt in **35 shadcn/ui-bestanden** (alle in `src/components/ui/`)
- `defaultProps`: **niet** gevonden
- `propTypes`: **niet** gevonden
- `useRef()` zonder argument: **niet** gevonden

**Migratie-impact (fase 3.5 — React 19):** `forwardRef` is soft-deprecated in React 19 (werkt nog, geeft console-warning). De shadcn/ui-codemod of handmatige refactor naar `ref` als gewone prop is aanbevolen maar niet verplicht voor compilatie. Behandelen als tech-debt na de upgrade.

### Zod

Gebruikt in 4 bestanden: `Footer.tsx`, `register.tsx`, `login.tsx`, `useContactForm.ts`.

- Enkel basis-API: `z.object()`, `z.string().email()`, `z.string().min()`, `.refine()`
- **Geen** `required_error` / `invalid_type_error`
- **Geen** `.flatten()` / `.format()`
- **Geen** custom issue codes
- Errors als inline string-argument (bijv. `z.string().email("Invalid email address")`)

**Migratie-impact (fase 3.4 — Zod 4):** Breaking change in foutmelding-API: inline string-errors worden anders doorgegeven. Valideren in UI na upgrade.

### react-resizable-panels

- Wrapper: `src/components/ui/resizable.tsx`
- Stories: `src/stories/resizable.stories.tsx`
- Primitives gebruikt: `PanelGroup`, `Panel`, `PanelResizeHandle`
- **Geen** `autoSaveId`
- **Geen** numerieke panelgroottes (geen `defaultSize` props gezien)
- `direction` via data-attribuut (`data-[panel-group-direction=vertical]`)

**Migratie-impact (fase 3.7):** In v4 betekenen numerieke groottes pixels i.p.v. percentages. `PanelGroup` → `PanelGroup` (naam gelijk). Wrapper is smal, migratie beperkt.

### react-day-picker (calendar.tsx)

Gebruikt de **v8-stijl classNames-API**:
- `caption_label`, `nav_button_previous`, `nav_button_next`, `head_row`, `head_cell`, `day_range_start`, `day_range_end`, `day_selected`, `day_today`, `day_outside`, `day_disabled`, `day_range_middle`, `day_hidden`
- `components: { IconLeft, IconRight }` (v8-componentnamen)
- `mode="range"` conditionele styling

**Migratie-impact (fase 3.7):** v9 en v10 gebruiken een volledig andere classNames-structuur en componentnamen. Dit is de meest arbeidsintensieve migratie in fase 3.

### Lucide brand-iconen

Gebruikte brand-iconen (verwijderd in lucide-react ≥0.x of 1.x):

| Icoon | Gebruikt in | Aria-label aanwezig? |
|-------|-------------|----------------------|
| `Facebook` | blog-detail.tsx, BarberCard.tsx, Footer.tsx | Ja (blog-detail, BarberCard) |
| `Twitter` | blog-detail.tsx, BarberCard.tsx, Footer.tsx | Ja (blog-detail) |
| `Linkedin` | blog-detail.tsx, BarberCard.tsx, Footer.tsx | Ja (blog-detail) |
| `Instagram` | BarberCard.tsx, Footer.tsx | Nee (BarberCard.tsx:74 mist aria-label) |
| `Github` | stories/dropdown-menu.stories.tsx | Nee (alleen story) |

**Migratie-impact (fase 3.7):** Alle 5 iconen moeten worden vervangen door lokale SVG-components. `aria-hidden` waar icoon decoratief is; `aria-label` op de knop voor screen readers.

### Tailwind

- Config: `tailwind.config.js` (CJS, `module.exports`)
- Plugin: `tailwindcss-animate` (vereist voor accordion-animaties en andere utilities)
- Dark mode: `["class"]`
- Custom kleuren: CSS variabelen (HSL-waarden, shadcn-patroon)
- Custom keyframes: `blur-transition`, `wave-pulse`, `accordion-down`, `accordion-up`
- Custom border-radius via CSS variabel `--radius`
- PostCSS: `tailwindcss` + `autoprefixer`

**Migratie-impact (fase 3.8):** Tailwind 4 heeft nieuw config-formaat (CSS-first), `tailwindcss-animate` heeft aparte compatibiliteitsstatus, `autoprefixer` mogelijk niet meer nodig. `@tailwindcss/upgrade` codemod beschikbaar maar diff moet worden beoordeeld.

### Vite-configuratie

- Plugins: `@vitejs/plugin-react-swc` + `tempo-devtools/dist/vite`
- Conditieplugin voor SWC: `tempo-devtools/swc` (via `conditionalPlugins` bij `TEMPO=true`)
- `server.allowedHosts: true` (met `@ts-ignore` — Vite 6 heeft dit als `true` of string array)
- `optimizeDeps.entries` bevat glob naar `src/tempobook/**/*`
- `resolve.preserveSymlinks: true`

**Risico:** `tempo-devtools` importeert vanuit `tempo-devtools/dist/vite` — subpath-import. Moet Rolldown/Vite 8 ondersteunen. Vite 7 schakelt Rolldown in als standaard bundler.

### TypeScript programmatische API

Niet gevonden. TypeScript 7 upgrade is van toepassing.

### Zustand store

- 1 store: `src/lib/cart.ts` via `create<CartStore>()`
- Selectors retourneren primitives (numbers, arrays van CartItem)
- Geen `useShallow` nodig voor huidige selectors — `totalItems()` en `totalPrice()` retourneren numbers

**Migratie-impact (fase 3.3):** Upgrade naar Zustand 5 is relatief eenvoudig. Controleer of `create` import-pad gelijk blijft.

### React GA4

- `src/lib/analytics.ts`: `ReactGA.initialize()`, `ReactGA.event()`, `ReactGA.send()`
- Dubbele initialize (regel 4 én 222) — bestaande baseline-bug

### react-helmet-async

- `HelmetProvider` in main.tsx en App.tsx
- `Helmet` in 7 page-componenten

### date-fns

- Enkel `format()` en `addDays()` — stabiele API's, geen breaking changes verwacht in v4

### framer-motion

- `motion`, `AnimatePresence mode="wait"`, `m` (lazy bundle) gebruikt in 7 bestanden
- Sprong van v11.18 naar v14.x — releases 12, 13, 14 moeten gelezen worden

---

## Risico-overzicht

| Risico | Ernst | Reden |
|--------|-------|-------|
| react-day-picker v8 → v10 | 🔴 Hoog | Volledige API-breuk; alle classNames en componentnamen wijzigen |
| Tailwind 4 | 🔴 Hoog | Config-formaat breuk; tailwindcss-animate compatibiliteit onzeker |
| Lucide brand-iconen | 🔴 Hoog | 5 iconen verwijderd; lokale SVG's nodig in 5 bestanden |
| React 19 + forwardRef | 🟡 Middel | Soft-deprecated; werkt maar geeft warnings in 35 bestanden |
| React Router 7→8 | 🟡 Middel | Import-pad migratie; `react-router-dom` volledig verwijderen |
| Zod 4 | 🟡 Middel | Breaking changes in foutmelding-API; inline strings moeten worden geverifieerd |
| react-resizable-panels 4 | 🟡 Middel | Numerieke grootte-semantiek wijzigt (% → px) |
| tempo-devtools + Vite 8/Rolldown | 🟡 Middel | Subpath-import; Rolldown-compatibiliteit onbekend |
| TypeScript 6/7 | 🟡 Middel | Stricter defaults; tsconfig aanpassing nodig |
| framer-motion v11 → v14 | 🟢 Laag | Breaking changes beperkt; `m` lazy import blijft werken |
| zustand 5 | 🟢 Laag | Store is simpel; geen complexe selectors |
| date-fns 4 | 🟢 Laag | Minimale API-wijzigingen voor gebruikte functies |
| react-helmet-async 3 | 🟢 Laag | Kleine upgrade |

---

## Handmatige smoke-testlijst (na voltooiing fase 3)

> **Opmerking:** Er zijn **geen geautomatiseerde tests** aanwezig in dit project. Alle verificatie is handmatig.

### Kritieke flows

1. **Routing & navigatie**
   - Navigeer tussen alle routes (home, about, history, gallery, blog, blog-detail, shop, contact, book-online, 404)
   - Browser back/forward werkt
   - Directe URL-toegang werkt (SPA-fallback)

2. **Authenticatie via Supabase**
   - Login-formulier: validatieberichten correct (Zod)
   - Registreer-formulier: wachtwoordbevestiging-validatie werkt
   - Foutberichten van Supabase worden getoond

3. **Formulieren**
   - Contactformulier: alle velden, foutberichten, verzending
   - Nieuwsbrief-inschrijving (Footer): e-mailvalidatie

4. **Kaart (@react-google-maps/api)**
   - Google Maps laadt op de contact-pagina

5. **Dialogen & overlays**
   - Radix-dialogen openen/sluiten correct
   - Drawer (vaul) werkt (CartButton)
   - Alert-dialogen werken

6. **Datumkiezer**
   - Calendar-component opent, single-selectie werkt
   - DatePickerWithRange: range-selectie werkt
   - Disabled dates worden correct weergegeven

7. **Animaties**
   - Paginatransities (framer-motion AnimatePresence)
   - LoadingScreen-animatie
   - HeroSlider-animaties

8. **Cart**
   - Item toevoegen/verwijderen/quantity aanpassen
   - CartButton badge telt correct

9. **Resizable panels**
   - Slepen werkt
   - Layout wordt niet onverwacht hersteld (geen autoSaveId)

10. **Brand-iconen (na lucide upgrade)**
    - Footer: social media iconen tonen lokale SVG's
    - BarberCard: 4 social iconen zichtbaar
    - Blog-detail: 3 share-iconen zichtbaar

11. **Analytics (react-ga4)**
    - Paginaweergaven worden verstuurd (controleer Network-tab op GA-requests)

12. **SEO-metadata (react-helmet-async)**
    - `<title>` en `<meta>` tags aanwezig in page source

13. **Dark mode**
    - Toggle (indien aanwezig) schakelt Tailwind dark-mode klassen

14. **Accessibility**
    - Lucide iconen: iconen zonder tekstlabel hebben `aria-hidden="true"` of hun knop heeft `aria-label`

---

## Wijzigingen per fase

*(Wordt aangevuld bij elke fase)*

| Fase | Datum | Commits | Resultaat |
|------|-------|---------|-----------|
| 0 — Inventarisatie | 2026-11-08 | — | Baseline vastgesteld |
| 1 — Patch | 2026-11-08 | 71fa226 | ✅ tsc OK, build OK (373.54 kB gzip 123 kB), 9→7 vulns |
| 2 — Minor | 2026-11-08 | 4c2f180, 30ce4a7 | ✅ tsc OK, build OK (389.72 kB gzip 128 kB), 7→5 vulns; React Router future flags toegevoegd |
| 3.1a — Node 22 | 2026-11-08 | e3d79d2 | ✅ .nvmrc + engines.node >=22.22.0 + @types/node ^22 |
| 3.1b — TypeScript 6 | 2026-11-08 | a0cd119 | ✅ TS 6.0.3; fix NodeJS.Timeout → ReturnType<typeof setTimeout> in ClientReviews.tsx |
