---
title: "ORCID API Integration"
subtitle: "Automating researcher publication sync on an institutional website"
category: "UX Design · API · Front-end"
year: "2026"
roles: ["Product Owner", "UX Designer", "UI Designer"]
stack: ["TYPO3", "ORCID API", "SCSS", "Figma"]
tags: ["API Integration", "UI Design", "Database design"]
challenge: "Automate the synchronization of researcher publications between ORCID and the institutional TYPO3 website, eliminating manual updates while enriching researcher profiles with Open Science metadata."
results: "Full automation of publication sync. Researchers manage their profile from a single source of truth. Open Science badges deployed across all researcher profile pages."
---
![Publications' index page screenshot](/images/work/desktop.png)
_A new publications' index to showcase scientific excellence of the institution_

## The Problem

### ✍️ 100% manual data entry

Researchers had to enter their publications manually on the university website, a tedious process prone to errors and omissions.

### 📉 Incomplete and outdated profiles

Without automation, researcher pages didn't accurately reflect their work. The university's research visibility suffered as a result.

### 🔗 No connection to academic standards

ORCID is the global reference identifier for researchers. The university website had no integration with it whatsoever.

### 🔍 No aggregated view

No page existed to browse the full scientific output of UniDistance Suisse in one place.

## Research & discovery

A 6-month MVP to learn before building.
Rather than starting from assumptions, a fully manual first version was deployed and left running for 6 months. This allowed us to observe real behaviours, collect organic feedback, and understand what researchers actually needed.

💡 Researchers wanted to display precise metadata: peer-reviewed, preregistered, open data, open materials.

💡 Entering the same data twice (ORCID + university website) was seen as an unacceptable waste of time.

💡 The manual editing interface revealed significant friction around bibliographic data management.

💡 User tests conducted with researchers on the sync interface before UI design work to catch frictions and observe user’s behavior.

![Publications' edition component anatomy](/images/work/howto-orcidapi.png)
_Anatomy of the publication's edit component_


## My roles

### UX/UI Designer
Sync flow design • Publication editing interface • User testing • Publication page and components design

### Product Designer
Data base design • Business logic & sync rules • Enriched fields definition (open data, etc.) 

### Product Manager
Requirements gathering & prioritisation • Roadmap set up • Functional specs generation • Backlog management


## Main learning

Automation is only as good as the data it relies on. A significant part of the project was defining the optimal user flow across platforms and minimizing maintenance overhead. Since researchers need to keep their ORCID profile up to date, the technical solution had to reduce friction enough to drive adoption.