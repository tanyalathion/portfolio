---
title: "University UI Redesign"
subtitle: "UI express redesign for an online university institute"
category: "UI Design · Front-end"
year: "2025"
roles: ["UI Designer", "Product Owner", "Front-end Developer"]
stack: ["TYPO3", "Bootstrap", "SCSS", "Figma"]
tags: ["UI Design", "Front-end development", "Accessibility"]
challenge: "Redesign the UI in two weeks within a squad of 4 developers, CSS only — no layout or interaction modifications."
results: "Bounce rate reduced by 5% immediately after go-live. Engagement up 20% year-on-year."
---

## Context

**Target:** Prospective students, current students, teachers, researchers, media and political stakeholders.

**Pain:** The brand image was evolving and the website no longer matched the new graphic design. The UI needed to be aligned with the graphic charter while improving accessibility.

**Solution:** A purely graphic redesign (CSS only), combined with an optimization of the front-end architecture, better suited to a period of constant change in the institution's branding.

**Approach:** Atomic Design + SCSS variables & mixins + Figma UI Kit.

![Before after UniDistance Website](/images/work/funid-ui-beforeafter.png)
_UniDistance Suisse: Two weeks UI Redesign_

## Methodology

I used an Atomic Design approach. To meet the extreme deadline and limit the risk of undesirable behavior, I restricted the scope to CSS: no layout or interaction modifications. The goal: maximize value and reduce risk.

## Process

**Audit:** To be as exhaustive and consistent as possible, I listed all the CSS classes and, in parallel, the UI components. I identified patterns and refactored the code.

**Component library:** I built a component library in Figma and aligned its nomenclature with the existing CSS classes to facilitate hand-off with the developers.

**Redesign:** I then redesigned the interface from atoms to molecules.

![Workflow UniDistance Website](/images/work/funid-ui-workdocs.png)
_UniDistance Suisse: Work flow_

## Results

The bounce rate dropped by 5% immediately after go-live, and engagement increased by 20% over the year compared to the previous year.

The site places greater emphasis on content, while also highlighting the need to improve it. Retention has increased, as has the number of pages viewed, indicating that users find it easier to read and search for information.

![Mockup UniDistance Website](/images/work/funid-ui-mockups.png)
_UniDistance Suisse: New UI_

---

## Main learning

**Expect the unexpected.** This project, carried out under extreme conditions, would never have been possible without the groundwork laid beforehand. When I took charge of the UniDistance website, I immediately devoted regular time to:

- implementing variables
- documenting the UI with a component library aligned with the CSS
- taking an atomic approach

Working on technical debt, refactoring and improving code scalability is never a waste of time. Advocating invisible work is just as important as showcasing visible successes.

---

## 📚 Related literature

⚛️ **Atomic Design**
Frost, B. (2016). *Atomic Design*. Brad Frost Web.
👉 The atoms → molecules → organisms model used both to audit the CSS and to structure the redesign.

🧩 **Design systems**
Kholmatova, A. (2017). *Design Systems: A Practical Guide to Creating Design Languages for Digital Products*. Smashing Magazine.
👉 Shared naming between design and code as the foundation of a living design language, which is the logic behind aligning the Figma library with the CSS classes.

🔧 **Technical debt**
Kruchten, P., Nord, R. L., & Ozkaya, I. (2012). Technical debt: From metaphor to theory and practice. *IEEE Software, 29*(6), 18-21.
👉 Frames the upfront work on variables and refactoring as paying down debt, which is what made a two-week turnaround possible.

👀 **First impressions and aesthetics**
Lindgaard, G., Fernandes, G., Dudek, C., & Brown, J. (2006). Attention web designers: You have 50 milliseconds to make a good first impression! *Behaviour & Information Technology, 25*(2), 115-126.
👉 Visual appeal is judged almost instantly, which makes a purely graphic redesign a plausible lever on bounce rate.

🫥 **Invisible work**
Star, S. L., & Strauss, A. (1999). Layers of silence, arenas of voice: The ecology of visible and invisible work. *Computer Supported Cooperative Work, 8*(1-2), 9-30.
👉 The classic CSCW reference on work that goes unseen until it's missing, directly echoing the main learning.