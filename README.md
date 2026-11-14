# FoodSense

**An independent commissioned design project by Shangcheng (Katherine) Lin.**

FoodSense is an iOS concept for people who share a kitchen, cook on a budget, and lose track of groceries they already have. It connects a proposed in-fridge device, Javic, with a mobile experience for reviewing inventory, seeing what needs attention, and deciding what to cook.

[**Launch the interactive prototype**](https://katherine0292.github.io/foodsense/prototypes/ios/) · [Portfolio walkthrough](https://katherine0292.github.io/foodsense/) · [Design case study](docs/case-study.md)

[![FoodSense iOS prototype showing recipe discovery, ingredient review and guided cooking](prototypes/high-fidelity/boards/03-discover-and-cook.jpg)](https://katherine0292.github.io/foodsense/prototypes/ios/)

## My work

I took the commissioned product brief and research inputs through problem framing, flow design, iOS interaction and visual design, and browser prototyping. I also defined where the proposed AI system could help, where people need to confirm its output, and how to evaluate the experience before connecting hardware.

| Finding from the research inputs | Product decision |
| --- | --- |
| Food disappears behind other groceries, especially in a shared fridge. | Place **Use first** on Today and make Javic's shelf views available from the app. |
| Entering every grocery and date is too much upkeep. | Let people review a batch of suggested items and confirm what goes into the pantry. Keep manual entry available. |
| Seeing what's available still leaves the dinner decision. | Rank sample recipes using inventory overlap and use-first ingredients. Show availability and missing items before cooking. |
| Cooking while reading a phone takes attention away from the pan. | Break the recipe into individual steps and attach a timer where it is needed. |

The prototype uses a fixed recipe catalogue and simulated device data. It demonstrates how people would inspect and correct system output. It does not establish recognition accuracy, food safety, or waste reduction.

## Try the main flows

1. **Review a scan.** Choose **Add food → Scan groceries**. Capture the sample scene, change the selection, and confirm the items you want to keep.
2. **Decide what to cook.** Open **Today → Explore → Find my recipe**. Compare matches or open **Berry pancakes** from Discover. Change the serving count, save the recipe, or add missing ingredients to the shopping list.
3. **Cook and update the pantry.** Start the recipe, run or pause the step timer, finish cooking, and select which pantry items were fully used.

The iOS demo uses a 402 × 874 pt design canvas. Its pantry, favourites, shopping list, and preferences persist in the current browser. Demo settings include a reset.

## Project files

| Material | What it covers |
| --- | --- |
| [Commission brief](docs/commission-brief.md) | Audience, scope and acceptance criteria |
| [Research](docs/research/README.md) | Two anonymised English interview records, synthesis and the Wei Lin persona |
| [Product proposal](docs/product-proposal.md) | Javic integration, AI behaviour, recovery paths and measures for a pilot |
| [Scenarios and storyboard](docs/scenarios.md) | Current dinner routine and proposed FoodSense experience |
| [Delivery walkthrough](docs/delivery.md) | Where to review each capability and what is simulated |
| [Paper prototype](prototypes/paper/README.md) | Ten original sketches and a readable PDF walkthrough |
| [iOS design boards](prototypes/high-fidelity/README.md) | Four flow boards and all 25 high-fidelity screens |
| [Early browser demo](https://katherine0292.github.io/foodsense/prototypes/early-demo/) | Original inventory, Javic, and egg fried rice walkthrough |
| [Interaction exploration](https://katherine0292.github.io/foodsense/prototypes/exploration/) | Alternative browser layout for browsing inventory and recipes |
| [Final iOS prototype source](prototypes/ios/index.html) | Responsive, clickable and animated iOS flows |

To run locally, open `index.html` from the repository root in a browser, or serve the folder with `python3 -m http.server 8000` and open `http://localhost:8000`.
