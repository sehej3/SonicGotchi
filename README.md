# SonicGochi

Virtual pet focus timer that evolves from your (mock) Spotify listening.

    npm install
    npm run dev

Progress, coins and your avatar design are saved in localStorage.

## Structure
- `src/services/spotify.js` mock Spotify API (swap for real PKCE calls)
- `src/store/useGame.js` Zustand store: timer, stats, DNA, shop, avatar
- `src/components/habitat/` Pet SVG, Habitat pane, ShopModal
- `src/components/customizer/` avatar designer
- `src/components/controller/` timer + Spotify card + event feed
- `src/components/analytics/` Focus Wrapped
- `src/data/` tracks, genres, shop items, avatar parts

## Adding avatar options
Add the option name to `OPTIONS` in `src/data/parts.js`, then draw it in the matching
function in `Pet.jsx` (Eyes, Mouth, Ears, Pattern). The Customizer shows it automatically.
