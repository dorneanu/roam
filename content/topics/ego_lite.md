+++
title = "ego lite"
author = ["hermes"]
tags = ["ai", "software"]
draft = false
+++

## Overview {#overview}

ego lite (citrolabs) is a macOS desktop browser designed from the ground up
for a human and their AI agents to share, rather than fight over. Instead of
spinning up a separate headless browser for [browser automation]({{< relref "browser_automation.md" >}}), each agent
gets its own isolated "Space" — a parallel workspace inside the same browser
window — so agent tasks never collide with the user's own open tabs. Agents
can still reach the user's real logins, cookies, extensions, and bookmarks
via an optional one-time Chrome data migration on first launch. The app is a
free download; the connector code (\`ego-browser\`) is MIT-licensed and open
source. Windows and Linux support is on the roadmap; macOS only as of this
writing.


## ego-browser: the agent connector {#ego-browser-the-agent-connector}

\`ego-browser\` is the layer between any agent CLI ([Claude Code]({{< relref "claude_code.md" >}}), Codex, Cursor,
or a custom harness) and the ego lite browser. It exposes the browser as
in-page JavaScript tools — snapshot, fill, click, wait, navigate, capture —
and the agent writes a single JavaScript snippet that calls those tools and
runs on the page in one pass. It installs as a skill:

```bash
npx skills add citrolabs/ego-lite
```


### "Code base, not CLI base" {#code-base-not-cli-base}

The core design bet: wrap browser capabilities as JavaScript functions the
agent calls directly, so a multi-step task compiles into a single output
instead of the usual call → look at result → call loop. citrolabs claims
complex workflows finish up to 2.5x faster with fewer tokens and fewer tool
calls, benchmarked against Vercel's agent-browser across four tasks.


### Snapshot quality {#snapshot-quality}

The "Snapshot" is the compressed semantic text view models use to "see" and
act on a page. citrolabs describes kernel-level customization to keep
Snapshot quality high on hard cases — deeply nested iframes in particular,
where other automation approaches tend to break down.


## Positioning vs. adjacent categories {#positioning-vs-dot-adjacent-categories}

> Two other categories try to solve the same problem. Browser automation
> frameworks like Browser-Use and Vercel's agent-browser are libraries the
> agent calls; they ship no browser of their own, so they need a separate one
> to drive and your logins rarely carry cleanly. AI browsers like ChatGPT
> Atlas and Perplexity Comet ship a built-in agent, and only that agent can
> drive the browser. ego lite is one browser, designed from the start for you
> and any agent you bring to share.

-   **Browser automation frameworks** (browser-use, Vercel's agent-browser) —
    libraries an agent drives; need a separate browser instance; logins rarely
    carry over cleanly. See [Browser automation]({{< relref "browser_automation.md" >}}) for the Playwright/Puppeteer/
    Selenium side of this comparison.
-   **AI browsers** (ChatGPT Atlas, Perplexity Comet) — ship a built-in agent;
    only that agent can drive the browser, so external agent CLIs can't plug in.
-   **ego lite** — one daily-use browser, shared: the human's tabs stay theirs,
    any external agent (via \`ego-browser\`) gets its own Space with real
    session data.


## Privacy and data model {#privacy-and-data-model}

Data is stored locally on the device. ego lite only records whether the user
opted into the Chrome data migration during setup — it does not otherwise
phone home browsing data.


## Resources {#resources}

-   2026-07-30 ◦ [ego-lite (GitHub, citrolabs)](https://github.com/citrolabs/ego-lite) — README: parallel Spaces model, ego-browser connector and JS tool set, benchmark claims (up to 2.5x faster than Vercel's agent-browser), Snapshot/iframe handling, MIT license, local-only data storage
-   [ego lite docs (lite.ego.app)](https://lite.ego.app/document/) — tutorials, full tool reference, integration guides


## Related topics {#related-topics}

-   [Browser automation]({{< relref "browser_automation.md" >}}) — the broader space of programmatic browser control (Playwright, Puppeteer, Selenium) that ego lite positions itself against
-   [Claude Code]({{< relref "claude_code.md" >}}) — one of the agent CLIs \`ego-browser\` connects to
-   [Claude Code skills]({{< relref "claude_code_skills.md" >}}) — \`ego-browser\` installs the same way as other community skills (`npx skills add`)
-   [AI agents]({{< relref "ai_agents.md" >}}) — the shared human+agent workspace model is a variant of the human-in-the-loop pattern discussed there
-   [Multi-agent communication]({{< relref "multi_agent_communication.md" >}}) — isolated parallel Spaces address the same "agents colliding" problem from a different angle (workspace isolation vs. inter-agent messaging)
