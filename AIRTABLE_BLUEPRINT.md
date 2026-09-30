# VitaVenture Content OS — Turnkey Airtable Blueprint & Setup Guide

This blueprint details how to configure your **Airtable Base** to work with the updated **`VitaVenture-Master-Content-Engine.json`** multi-agent pipeline (featuring ElevenLabs voiceovers, Pexels 9:16 stock video, custom video footage, and affiliate monetization).

---

## 1. Create Your Base
In Airtable, create a new Base called **`VitaVenture Content OS`**.

---

## 2. Table: `Content Pipeline`

Set up the following fields:

### A. Core Ideation & User Input Fields
| Field Name | Type | Description |
| :--- | :--- | :--- |
| `Topic` | **Single line text** | Primary field. e.g. *Creatine Monohydrate for Longevity & Brain Health*. |
| `Status` | **Single select** | Options: <br/>• `Idea` (Triggers Phase 1 Agent Drafting)<br/>• `Drafts Ready` (Set automatically when agents finish)<br/>• `Approved` (Your thumbs-up: triggers ElevenLabs, Creatomate & Publishing)<br/>• `Published` (Live on Web & Socials)<br/>• `Archived` |
| `Category` | **Single select** | Options: `Supplements`, `Nutrition`, `Longevity`, `Fitness Over 40`, `Mind & Sleep`, `Recovery` |
| `Target_Audience` | **Single line text** | e.g. *Active adults over 40*, *Biohackers*, *Desk workers* |
| `User_Notes_And_Additions` | **Long text** | **Your custom thoughts**: Add personal anecdotes, specific research you want included, or points you want emphasized. |

### B. Monetization & Affiliate Link Fields
| Field Name | Type | Description |
| :--- | :--- | :--- |
| `Affiliate_Product_Name` | **Single line text** | e.g. *Creapure® German Micronized Creatine* |
| `Affiliate_URL` | **URL** | Your affiliate link (e.g. *https://amzn.to/...* or *brand.com/vitaventure*) |
| `Affiliate_Discount_Code` | **Single line text** | e.g. *VITAVENTURE15* (for 15% discount badge) |

### C. Generated Blog & Review Fields
| Field Name | Type | Description |
| :--- | :--- | :--- |
| `Article_MDX` | **Long text (Markdown enabled)** | Complete long-form Astro article. **You can freely edit, reword, or add text here before giving the thumbs-up.** |
| `Article_Images` | **Attachment / URL** | High-res editorial photos for the article. |

### D. Video & Audio Production Fields
| Field Name | Type | Description |
| :--- | :--- | :--- |
| `Voiceover_Script` | **Long text** | Clean 130–150 word narration script for ElevenLabs. **You can freely edit this text before rendering.** |
| `Custom_Audio_URL` | **URL** | **Optional Audio Override**: If you record the voiceover yourself on your microphone/phone, paste your MP3 audio link here. n8n will bypass ElevenLabs and use your authentic voice! |
| `Pexels_Video_URL` | **URL** | High-definition 9:16 vertical stock video clip found automatically by Pexels API. |
| `Custom_Footage_URL` | **URL** | **Your Own Video Footage**: Paste a link to your phone footage or workout video clip. If provided, Creatomate prioritizes this over stock video! |
| `Video_Script_JSON` | **Long text** | 8-scene breakdown with timestamps and fallback Pollinations image prompts. |
| `Video_Render_URL` | **URL** | Final rendered MP4 video link from Creatomate. |

### E. Social & Publishing Metadata
| Field Name | Type | Description |
| :--- | :--- | :--- |
| `Social_Copy_JSON` | **Long text** | 5-post X/Threads thread + Instagram caption. |
| `Published_Date` | **Date (Include time)** | Timestamp stamped automatically upon publication. |
| `Created_At` | **Created time** | Automatic creation timestamp. |

---

## 3. The 3 Review Stages

```
1. IDEATION
   You enter: Topic + Affiliate Product & URL + Any Personal Notes
   Status: "Idea"
       │
       ▼
2. AI MULTI-AGENT DRAFTING (n8n Phase 1)
   - Research Brain analyzes physiological mechanisms & studies
   - Editorial Writer crafts MDX article with Affiliate Recommendation Card
   - Video Producer drafts 60s Voiceover Script & finds 9:16 Pexels stock video
   Status automatically switches to: "Drafts Ready"
       │
       ▼
3. YOUR REVIEW & EDITING GATE
   - Edit the Article_MDX text or add extra paragraphs
   - Check the Voiceover_Script (or paste your own MP3 link into Custom_Audio_URL)
   - Preview the Pexels video clip (or drop your own phone video into Custom_Footage_URL)
       │
   [You give the Thumbs-Up: Switch Status to "Approved"]
       │
       ▼
4. AUTONOMOUS PUBLISHING (n8n Phase 2)
   - ElevenLabs generates voiceover audio (or uses your Custom_Audio_URL)
   - Creatomate renders 9:16 video with synchronized captions
   - GitHub node commits your edited MDX article to Astro (site redeploys live)
   - Unified Social Scheduler pushes to YouTube Shorts, Instagram Reels, X & Threads
   Status automatically switches to: "Published ✅"
```

---

## 4. API Keys & n8n Variables Setup

In your n8n workflow or environment variables, configure:

1. **Airtable**:
   - Add Airtable Personal Access Token (PAT) with `data.records:read` and `data.records:write`.
   - Update `appVitaVentureBase` with your Airtable Base ID.

2. **ElevenLabs**:
   - Set `$vars.ELEVENLABS_API_KEY` to your ElevenLabs API key (from [elevenlabs.io](https://elevenlabs.io)).
   - Set `$vars.ELEVENLABS_VOICE_ID` (default: `21m00Tcm4TlvDq8ikWAM` - "Rachel", or your favorite voice).

3. **Pexels API**:
   - Get a free API key at [pexels.com/api](https://www.pexels.com/api/).
   - Set `$vars.PEXELS_API_KEY` in n8n.

4. **Creatomate**:
   - Set `$vars.CREATOMATE_API_KEY` and `$vars.CREATOMATE_TEMPLATE_ID`.

5. **GitHub**:
   - Set `$vars.GITHUB_REPO` to `your-username/vitaventure`.
   - Set `$vars.GITHUB_TOKEN` to your personal access token with repo write permissions.

6. **Unified Social Scheduler**:
   - Set `$vars.UNIFIED_SOCIAL_WEBHOOK_URL` to your Buffer, Make, Publer, or Ayrshare webhook.
