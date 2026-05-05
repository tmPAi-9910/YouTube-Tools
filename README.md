# YouTube-Tools

A Chrome extension that enhances your video watching experience with Picture-in-Picture toggle and automatic ad skipping functionality.

## Features

### 🎬 Picture-in-Picture Toggle
- Press the **P key** to toggle Picture-in-Picture mode on any video
- Works on all websites with video elements
- Automatically detects video elements on the page
- Smart input field detection (won't trigger when typing)

### ⏭️ Automatic Ad Skipping
- Automatically skips YouTube ads when the skip button appears
- Uses MutationObserver to detect ads in real-time
- Periodic checks to ensure no ads are missed

## Installation

1. Clone or download this repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" in the top right corner
4. Click "Load unpacked"
5. Select the folder containing these files

## Usage

### Picture-in-Picture Mode
1. Navigate to any website with a video (e.g., YouTube, Vimeo)
2. Press the **P** key on your keyboard
3. The video will enter Picture-in-Picture mode
4. Press **P** again to exit PiP mode

### Ad Skipping
- The ad skipping feature works automatically on YouTube
- No additional action required

## Files

- `manifest.json` - Extension configuration (Manifest V3)
- `content.js` - Main functionality (PiP toggle and ad skipping)
- `background.js` - Background service worker (currently minimal)

## Browser Compatibility

- Google Chrome (Manifest V3 compatible)
- Other Chromium-based browsers (Edge, Brave, etc.)

## Requirements

- Picture-in-Picture API support in your browser
- Modern browser with Manifest V3 support

## License

MIT License
