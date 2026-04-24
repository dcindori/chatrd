# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this project is

ChatRD is a browser-source overlay for OBS that aggregates live chat from Twitch, YouTube, TikTok, Kick, and several donation platforms. It connects to **Streamer.bot** via WebSocket (`js/sb.js`) and renders events through platform modules into a shared chat container.

No build step. Open `chat.html` (live overlay) or `preview-chatrd.html` (static preview for visual testing) directly in a browser.

## Where we spend most of our time

**Default skin** — `css/skin-chatrd.css` and the per-platform `js/modules/*/module.css` files. This is the "chatrd" skin (also aliased as `default`). Almost all visual work happens here.

The skin is a two-column grid layout: `[username (right-aligned)] [platform tile] | [message]`. Key CSS variables are defined in `:root` inside `skin-chatrd.css` — layout dimensions (`--chatrd-user-col`, `--chatrd-tile`, `--chatrd-gap`), platform palette (`--p-twitch`, `--p-youtube`, etc.), role accents, and the `--glow-text` / `--glow-stroke` readability system.

**Platform modules** — `js/modules/<platform>/module.js`. Each module:
1. Declares its URL params at the top (e.g. `showTwitch`, `showTwitchMessages`).
2. Registers event handlers in a `<Platform>MessageHandlers` object keyed on Streamer.bot event names (e.g. `'Twitch.ChatMessage'`).
3. Calls `addMessageItem()` or `addEventItem()` (defined in `js/chatrd.js`) to inject chat rows and event rows.

**Previewing changes** — open `preview-chatrd.html` in a browser. It loads the same CSS stack as `chat.html` (chatrd.css → skin-chatrd.css → all module.css files) with static mock messages injected in the HTML, so no Streamer.bot connection is needed.

## CSS load order

```
css/chatrd.css          ← structural base (layout, #chat, #container)
css/skin-chatrd.css     ← default skin (variables, all visual rules)
js/modules/*/module.css ← per-platform overrides and event styles
```

The active skin is swapped at runtime by `js/chatrd.js` via `#chatrd-skins` link element. The `chatrdSkin` URL param selects from the `SKINS` map or accepts an external URL.

## Skin system

| `chatrdSkin=` | File |
|---|---|
| `default` / `chatrd` | `css/skin-chatrd.css` |
| `stream` | `css/skin-stream.css` |
| `stream-bubbles` | `css/skin-stream-bubbles.css` |

## Key JS files

- `js/chatrd.js` — core: URL param parsing, `addMessageItem`, `addEventItem`, toast system, live bar, chat density bar.
- `js/sb.js` — Streamer.bot WebSocket client; routes incoming events to module handlers.
- `js/modules/<platform>/module.js` — platform-specific event parsing and DOM construction.
- `js/settings.js` + `index.html` — settings page (generates OBS URL).

## HTML templates

`chat.html` contains `<template id="chat-message">` and `<template id="event-message">` which are cloned per message. The `.info` block holds `.platform`, `.user`, `.timestamp`, `.badges`. The `.message` block holds `.actual-message`.

## Readability system (skin-chatrd.css)

Text legibility over live gameplay is handled by two layered mechanisms:
- `--glow-text`: four-corner 1px black outline + soft drop-shadow. Applied to all text-bearing elements.
- `--glow-stroke` + `paint-order: stroke fill` + `-webkit-text-stroke`: hairline anti-alias stroke that survives role-specific `text-shadow` overrides on usernames.

When editing username color/glow, always account for both so the outline doesn't clip or disappear.

## Platform colors (CSS vars)

```css
--p-twitch:  #9146ff
--p-youtube: #ff0033
--p-tiktok:  #ff0050
--p-kick:    #53fc18
```

Role accents (`--role-mod`, `--role-vip`, `--role-sub`, etc.) mirror Twitch's official palette.
