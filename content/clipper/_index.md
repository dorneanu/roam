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
  <a href="javascript:(function(){var s=window.getSelection().toString().trim();if(!s){alert('Please select some text first!');return;}var clip={text:s,title:document.title,url:window.location.href,timestamp:new Date().toISOString()};localStorage.setItem('pending-clip',JSON.stringify(clip));window.open('https://brainfck.org/','_blank');})();"
     style="display: inline-block; padding: 1rem 2rem; background: #2c3e50; color: white; text-decoration: none; border-radius: 8px; font-weight: bold; cursor: move;">
    📎 Clip to Roam
  </a>
</div>

## How to Use

1. **Install**: Drag the button above to your bookmarks bar
2. **Clip**: On any website, highlight text and click the bookmarklet
3. **View**: The site will open automatically and import your clip

## What Gets Captured

- ✅ Selected text
- ✅ Page title
- ✅ Page URL
- ✅ Timestamp

Clips are automatically saved to your Quick Capture library and can be viewed via the floating menu button.

## Tips

- Each clip opens the site in a new tab and saves automatically
- View all your clips via the floating menu → Quick Capture → View All Captures → Clips filter
- Edit or delete clips anytime from the captures view

---

*Having trouble? Make sure you're dragging to the bookmarks bar, not clicking the link!*
