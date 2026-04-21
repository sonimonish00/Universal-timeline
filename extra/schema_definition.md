# Universal Timeline — JSON Schema Definition

## Document Acknowledgement

I have read the entire 2,647-line document. Here is what it contains:

### Content Inventory

| Section | Lines (approx.) | Domain |
|---|---|---|
| Opening brain-dump (16 numbered points) | 1–22 | Big Bang → modern India overview, cause-effect loops |
| Geography notes (Atlas Mts, rivers, Braudelian framework, 8 macro-zones, city-naming, economic pivot) | 23–103 | Physical & human geography, deterministic algorithm P=(A·W)/F |
| History notes (IVC, Gupta, Huna, Sultanate, Mughals, EIC, resistances) | 104–185 | Indian political-military history |
| Indian state deep-dives (Sikkim, Manipur, Meghalaya, Tripura, Arunachal, Jharkhand, Chhattisgarh, HP, Goa, Nagaland, Odisha, Gujarat) | 186–685 | State-level 4-force framework |
| Rajasthan grand narrative (geography → Rajputs → Mughals → British → modern) | 686–760, 1393–1617 | Rajasthan history |
| Gujarat grand narrative (IVC → Solankis → Sultanate → Mughals → Gandhi → Amul → modern) | 761–836, 1619–1905 | Gujarat history |
| Indian Constitution chronicle (1773 → Constituent Assembly → Amendments → landmark judgments) | 838–1391 | Constitutional law & polity |
| All-India state/UT profiles (Himalayan, Gangetic, NE, Western, Central, Eastern, South, Islands, Enclaves) | 1958–2209 | Political geography of every state/UT |
| Universal cosmic-to-modern timeline (Big Bang → Age of AI) | 2210–2524 | Cosmology, geology, biology, world history |
| Corrections & clarifications | 2526–2531 | Factual notes |
| Phase-based summaries with cause-effect loops | 2532–2567 | Synthesized timeline |
| Materials Science & Navigational Physics integration | 2568–2647 | Sci-tech causal chain |

### What I Identified

**Facts** — Thousands of datable, verifiable events: Big Bang, Great Oxidation Event, Cambrian Explosion, IVC cities, Maurya-Gupta empires, Tarain battles, Mughal-Rajput synthesis, EIC arrival, Constitutional Assembly debates, 1991 liberalization, etc.

**Your interpretive frameworks** (to be kept peripheral):
- The Braudelian "Friction of Terrain" formula: `P = (A·W)/F`
- The 4-Phase Historical State Machine (Plains Consolidation → Imperial Expansion → Overreach → Fracture)
- The Thermal Ladder (Stone → Copper → Bronze → Iron → Steel) as civilizational bottleneck
- Matsya Nyaya ("Big Fish Law"), Chakravartin logic
- The "Geography as Algorithm" / "Earth = Machine" framing
- Printing press ↔ Internet analogy (communications revolution = power reorganization)
- Endosymbiosis as merger analogy for economies/civilizations
- The "Sea Blindness" thesis (maritime physics > cavalry)
- Resource Curse patterns, the Diaspora as invisible 5th force

---

## The `timelineData` JSON Schema

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "Universal Timeline Data",
  "description": "A single, unified, strictly chronological timeline covering cosmology, geology, biology, human history, science, economics, politics, philosophy, and culture. Facts are primary; interpretive frameworks are peripheral.",
  "type": "object",
  "properties": {
    "metadata": {
      "type": "object",
      "description": "Top-level information about the dataset.",
      "properties": {
        "title":       { "type": "string" },
        "version":     { "type": "string" },
        "description": { "type": "string" },
        "epochs": {
          "type": "array",
          "description": "Named chronological epochs used for grouping and navigation.",
          "items": {
            "type": "object",
            "properties": {
              "id":         { "type": "string", "description": "Machine-readable slug, e.g. 'cosmic_origins'" },
              "label":      { "type": "string", "description": "Human-readable name, e.g. 'Cosmic Origins'" },
              "start_year": { "type": "number", "description": "Negative = BCE/BYA. Use scientific notation anchor (e.g. -13800000000)." },
              "end_year":   { "type": "number" },
              "color":      { "type": "string", "description": "Hex color for the epoch band in the UI." }
            },
            "required": ["id", "label", "start_year", "end_year"]
          }
        }
      },
      "required": ["title", "version", "epochs"]
    },
    "events": {
      "type": "array",
      "description": "The core timeline entries, strictly ordered by sort_year.",
      "items": {
        "type": "object",
        "properties": {

          "id": {
            "type": "string",
            "description": "Unique identifier, e.g. 'evt_big_bang', 'evt_tarain_1192'."
          },

          "sort_year": {
            "type": "number",
            "description": "Numeric year for chronological sorting. Negative = BCE. Deep time uses large negatives (e.g. -13800000000 for Big Bang). This is the PRIMARY sort key."
          },

          "year_or_era": {
            "type": "string",
            "description": "Human-readable date label. Examples: '13.8 Billion Years Ago', '3000–1700 BCE', '1192 CE', '1947 CE'."
          },

          "epoch_id": {
            "type": "string",
            "description": "References an epoch from metadata.epochs for grouping."
          },

          "event_title": {
            "type": "string",
            "description": "Short, factual headline. Max ~80 characters. Example: 'Second Battle of Tarain — Prithviraj Chauhan defeated'."
          },

          "factual_description": {
            "type": "string",
            "description": "The OBJECTIVE 'what happened.' Strictly factual. No opinion, no analogy, no causal interpretation beyond documented record. 2–5 sentences."
          },

          "domains": {
            "type": "array",
            "description": "Which knowledge domains this event touches.",
            "items": {
              "type": "string",
              "enum": [
                "cosmology",
                "geology",
                "biology",
                "geography",
                "science_tech",
                "history",
                "economics_trade",
                "politics",
                "philosophy_religion",
                "art_culture",
                "military",
                "constitutional_law"
              ]
            }
          },

          "region": {
            "type": "string",
            "description": "Primary geographic region. Examples: 'Global', 'South Asia', 'Europe', 'Rajasthan', 'Gujarat', 'Middle East', 'East Asia', 'Americas'."
          },

          "parallel_events": {
            "type": "array",
            "description": "What else was happening globally at roughly the same time. Each entry is a brief factual note pointing to another region or domain. This is the 'unified parallel view' the user wants.",
            "items": {
              "type": "object",
              "properties": {
                "region":      { "type": "string" },
                "description": { "type": "string", "description": "1–2 sentence factual note of what was happening elsewhere." }
              },
              "required": ["region", "description"]
            }
          },

          "systemic_insight": {
            "type": ["string", "null"],
            "description": "PERIPHERAL. The user's specific cause-and-effect loops, cycles, analogies, or deterministic frameworks. Kept brief (1–2 sentences max). Null if no user-framework applies. Examples: 'Friction of Terrain: P=(A·W)/F — low F in the Gangetic plain enabled rapid Mauryan consolidation.', 'Thermal Ladder: Iron (1538°C) could not be smelted until forced-air bellows were invented, bottlenecking the entire Bronze→Iron transition.'"
          },

          "sources": {
            "type": "array",
            "description": "Optional. Key textual or archaeological sources for verification.",
            "items": { "type": "string" }
          }
        },
        "required": [
          "id",
          "sort_year",
          "year_or_era",
          "epoch_id",
          "event_title",
          "factual_description",
          "domains",
          "region",
          "parallel_events",
          "systemic_insight"
        ]
      }
    }
  },
  "required": ["metadata", "events"]
}
```

---

## Dummy Example (One Entry)

```json
{
  "metadata": {
    "title": "Universal Timeline",
    "version": "1.0.0",
    "description": "A unified, strictly chronological timeline from the Big Bang to the present, covering every domain. Facts are central; interpretive frameworks are peripheral.",
    "epochs": [
      {
        "id": "cosmic_origins",
        "label": "Cosmic Origins",
        "start_year": -13800000000,
        "end_year": -4500000000,
        "color": "#1a0533"
      },
      {
        "id": "earth_formation",
        "label": "Earth's Formation",
        "start_year": -4500000000,
        "end_year": -3500000000,
        "color": "#4a0e0e"
      },
      {
        "id": "axial_age",
        "label": "Axial Age — Philosophy & First Empires",
        "start_year": -800,
        "end_year": -200,
        "color": "#b8860b"
      }
    ]
  },
  "events": [
    {
      "id": "evt_tarain_1192",
      "sort_year": 1192,
      "year_or_era": "1192 CE",
      "epoch_id": "medieval_convergence",
      "event_title": "Second Battle of Tarain — Muhammad of Ghor defeats Prithviraj Chauhan III",
      "factual_description": "Muhammad of Ghor returned with a reorganized army and defeated the Chahamana confederacy led by Prithviraj Chauhan III at Tarain (modern Taraori, Haryana). Prithviraj was captured and killed. Within a decade, Ghurid forces established the Delhi Sultanate, ending the line of Hindu imperial kingdoms in northern India that had persisted since the Gupta era.",
      "domains": ["history", "military", "politics"],
      "region": "South Asia — North India",
      "parallel_events": [
        {
          "region": "Middle East / Levant",
          "description": "The Third Crusade had recently concluded (1192). Richard the Lionheart and Saladin signed the Treaty of Jaffa. The Ayyubid Sultanate controlled Jerusalem."
        },
        {
          "region": "East Asia",
          "description": "The Southern Song dynasty ruled China, maintaining one of the world's most advanced economies and naval technologies. Temujin (later Genghis Khan) was consolidating Mongol tribes on the steppe."
        },
        {
          "region": "South India",
          "description": "The Chola Empire was in its late phase, still controlling Sri Lanka and maintaining maritime trade networks across Southeast Asia."
        },
        {
          "region": "South Asia — Gujarat",
          "description": "The Solanki (Chaulukya) dynasty ruled from Anhilwara (Patan), at the height of their architectural and literary golden age under the influence of the polymath Hemachandra."
        }
      ],
      "systemic_insight": "Phase 4 (Fracture) of the Historical State Machine: internal Rajput rivalries (Chauhan vs. Jaychand of Kannauj) prevented unified resistance, enabling external conquest — the recurring pattern of F (friction) fragmenting consolidated power."
    }
  ]
}
```

---

## Design Rationale

> [!IMPORTANT]
> **Facts vs. Insights are structurally separated**, per your instruction:
> - `factual_description` holds only verifiable, objective information.
> - `systemic_insight` is explicitly marked as **peripheral** and is nullable — it's where your frameworks (Friction of Terrain, Thermal Ladder, State Machine cycles, communications-revolution analogies, etc.) live. They annotate the facts but never dictate the structure.

> [!NOTE]
> **Key schema decisions:**
> 1. **`sort_year`** (numeric) enables strict chronological ordering across deep time and human history in a single array.
> 2. **`parallel_events`** is an array of `{ region, description }` objects — this is the "what was happening elsewhere" field that unifies the fragmented views you described.
> 3. **`domains`** uses an enum so events can be filtered by cosmology, geology, economics, military, constitutional law, etc.
> 4. **`epoch_id`** groups events into navigable bands (Cosmic Origins, Bronze Age, Axial Age, Medieval, Colonial, Modern, etc.) for the future interactive UI.
> 5. **`region`** allows geographic filtering — crucial for your India-state-level granularity alongside global events.
