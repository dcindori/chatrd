# ChatRD

Multi-platform stream chat overlay combining **Twitch**, **YouTube**, **TikTok**, **Kick**, **Streamlabs**, **StreamElements**, **Patreon**, **TipeeeStream**, **Ko-Fi** and **Fourthwall**.

Forked from [VortisRD/chatrd](https://github.com/VortisRD/chatrd) with custom Stream skin and external skin URL support.

## Stream Skin Variants

Two Stream skin designs are available via the `chatrdSkin` URL parameter:

| `chatrdSkin=` | Skin | Description |
|---------------|------|-------------|
| `default` | **Stream (Grid)** | Compact grid layout — username column + message column, small avatars, platform-colored names |
| `stream-bubbles` | **Stream (Bubbles)** | SE-inspired bubble layout — large avatars with gradient backgrounds, Quicksand/Inter fonts, dark rounded bubbles, pill-shaped events |

To switch, just change `chatrdSkin=default` to `chatrdSkin=stream-bubbles` in your OBS browser source URL (or vice versa).

## Settings

Open the [Settings Page](https://dcindori.github.io/chatrd) to configure your overlay, then click **"Copy URL"** to get the browser source URL.

## Usage

1. Import [chatrd.sb](https://github.com/dcindori/chatrd/blob/main/chatrd.sb) into **Streamer.bot**.
2. Make sure **WebSocket Server** is running in Streamer.bot.
3. Open the [Settings Page](https://dcindori.github.io/chatrd), choose your options, and click **"Copy URL"**.
4. Add the copied URL as a **Browser Source** in OBS.

### External Skin

You can load a skin hosted on any URL using the `chatrdSkin` parameter:

```
https://dcindori.github.io/chatrd/chat.html?chatrdSkin=https://dcindori.github.io/chatrd-skin/skin-stream.css
```
