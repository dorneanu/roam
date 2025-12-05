+++
title = "Web Clipper Setup"
tags = ["page"]
draft = false
+++

# Web Clipper Bookmarklet

The Web Clipper lets you capture highlighted text from any website and save it to your personal knowledge base.

## Installation

**Drag this button to your bookmarks bar:**

<div style="text-align: center; margin: 2rem 0;">
  <a href="javascript:(function(){var s=window.getSelection().toString().trim();if(!s){alert('Please select some text first!');return;}var d={text:s,title:document.title,url:window.location.href,timestamp:new Date().toISOString()};var clips=JSON.parse(localStorage.getItem('web-clipper-queue')||'[]');clips.push(d);localStorage.setItem('web-clipper-queue',JSON.stringify(clips));alert('Clipped! '+clips.length+' item(s) in queue. Visit https://brainfck.org to save them.');})();"
     style="display: inline-block; padding: 1rem 2rem; background: #2c3e50; color: white; text-decoration: none; border-radius: 8px; font-weight: bold; cursor: move;">
    📎 Clip to Roam
  </a>
</div>

## How to Use

1. **Install**: Drag the button above to your bookmarks bar
2. **Clip**: On any website, highlight text and click the bookmarklet
3. **Save**: Return to this site - clips will automatically sync

## What Gets Captured

- ✅ Selected text
- ✅ Page title
- ✅ Page URL
- ✅ Timestamp

All clips are stored temporarily until you visit this site, where they're automatically imported into your Quick Capture library.

## Tips

- You can clip multiple items before returning to the site
- Clips are stored in your browser's localStorage
- Make sure to return to this site periodically to save your clips

---

*Having trouble? Make sure you're dragging to the bookmarks bar, not clicking the link!*
