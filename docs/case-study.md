# FoodSense case study

**Independent commissioned AI product and UX design · Shangcheng (Katherine) Lin**

I designed FoodSense around a practical decision at the end of a busy day: what can I cook now with ingredients I should use first? The product brings together shelf visibility, inventory and recipe guidance so that a person can act on a reminder without starting a second search.

## What informed the design

The two interview records describe different routines. One resident bought in bulk for gatherings and found unused ingredients buried afterwards. The other cooked frequently, abandoned inventory apps because entering dates was tedious, and fell back on instant meals when plans changed. Both relied on what they could see in crowded storage. With two qualitative records, I treated the patterns as design inputs and hypotheses for further testing.

I used the [Wei Lin persona](research/persona.md) to keep the work centred on a specific situation: one cook, limited shared storage, a fixed budget, and little time to choose dinner. This made confirmation effort and time to find a feasible meal more useful design targets than a larger recipe catalogue.

## What I designed

- **Make inventory easy to correct.** The camera encounter ends at a review screen with individual selections. People can omit uncertain or unowned items. Manual entry handles items the camera misses or cannot see.
- **Turn a date into a next action.** The Today view shows foods to use first. Ingredient details connect to meals that actually use the selected item.
- **Show the reasoning behind a recipe.** The match card shows time and how many ingredients are on hand. Detail separates available ingredients from missing ones and lets the cook scale portions or add missing items to shopping.
- **Keep cooking focused.** A recipe becomes short steps with a pauseable timer. After cooking, pantry removal requires explicit confirmation so leftovers stay recorded.

## What changed across prototypes

The [paper screens](../prototypes/paper/README.md) explored the path from adding groceries to cooking egg fried rice. The [early browser demo](../prototypes/early-demo/index.html) made Javic, notifications and the cooking controls clickable. The [interaction exploration](../prototypes/exploration/index.html) tried a wider workspace for inspecting inventory and recipes. The [iOS prototype](../prototypes/ios/index.html) brings those decisions into a fixed phone canvas with a stateful pantry, shopping list, recipe carousel and guided cooking.

## How I would evaluate it

Start with moderated tasks using realistic shelf photographs and mixed detection quality. Watch whether people catch duplicate or incorrect candidates, distinguish date labels from sensor cues, and find a recipe they can actually make. Compare time and correction effort against manual entry. Then use a small in-home pilot to assess inventory upkeep and how often a suggested meal uses a near-date item. A pilot would be needed before attributing any change in waste or grocery costs to the product. See the [product proposal](product-proposal.md) for the conditions I would validate before expanding the AI scope.
