# Product proposal

**FoodSense and Javic · Independent commissioned design · Shangcheng (Katherine) Lin**

## Product choice

FoodSense combines two concepts explored in the design inputs. FreshVision focused on inventory visibility and freshness reminders. Meal Pivot helped a cook find ways to use partial ingredients. Joining the concepts makes an inventory update useful at the moment the cook decides what to eat.

## Device and app

| Step | Proposed system behaviour | What the person sees |
| --- | --- | --- |
| Capture | Javic collects a shelf image and proposes detectable items. The experimental electronic nose yields a possible shelf-level odour signal. | A recent shelf view, proposed items, and a clearly labelled sensor cue if relevant. |
| Review | The app presents candidates as drafts. Missing dates and quantities stay editable. | A chance to confirm, change or skip each item. Manual entry is always available. |
| Save | Confirmed quantities and dates update the inventory. | A receipt for the items added and updated counts. |
| Recommend | The app excludes past-date items from recipe matching, checks dietary constraints, and ranks eligible recipes using ingredient overlap and use-first priority. | Expected time, ingredient coverage and an explicit missing-ingredient list. |
| Cook | The app keeps the current step and timer visible and offers pantry adjustments after the meal. | A guided recipe and a review of anything fully used. |

## AI experience and boundaries

- **Vision proposals.** Show uncertain, occluded, duplicate or ambiguous detections as items to verify. A shelf photo cannot identify everything in the fridge or reliably determine ownership, quantity, dates, or allergens.
- **Freshness cues.** Show entered dates independently of any experimental device cue. An odour pattern may reflect the entire shelf, and should be labelled as a prompt to inspect. Never use it as a safety verdict or to override a date.
- **Grounded meal suggestions.** Match only against inventory that the cook can inspect, label gaps, and make exclusions visible. A production system would need a curated recipe source and explicit handling for allergens, stale inventory and substitutions.
- **Offline and recovery.** Allow manual entry, show when a shelf snapshot is old, and avoid overwriting an edited item with a later scan. Keep photo capture and retention choices visible before a hardware pilot.
- **Prototype implementation.** Device output is simulated. Recipes are drawn from a fixed catalogue and ranked in the browser. The early walkthrough uses a voice toggle as a design state. No deployed AI model, live sensor, refrigeration hardware or speech system is evaluated here.

## Pilot questions

Measure corrected candidates divided by proposed candidates, false acceptances, median time to a confirmed entry, and the share of tasks completed through manual fallback. For recipe usefulness, measure time to a usable choice, understanding of why a recipe was surfaced, and how often a near-date item is used. Record baseline waste and notification dismissal before proposing a longer pilot.
