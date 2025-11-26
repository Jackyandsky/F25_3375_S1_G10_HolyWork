# F25_3375_S1_G10_HolyWork
A Community App for Church Volunteers and Worship Organization
# HolyWork
### _Serving Together, Growing in Faith through Holy Work_

HolyWork is a **UX design concept** for a mobile application that connects and streamlines **volunteer scheduling and worship planning** across multiple congregations.
The project focuses on creating an intuitive and visually engaging interface that enhances **collaboration, inclusivity, and inter-church community building** — especially appealing to younger generations (ages 18–35).

---

## Project Overview

**Course:** CSIS 3375 – UX Design in Web & Mobile App
**Section:** 1
**Instructor:** Padmapriya Arasanipalai Kandhadai

**Student:** Ryan Wang (300390359)

**GitHub Repository:** [HolyWork Repository](https://github.com/Jackyandsky/F25_3375_S1_G10_HolyWork)

---

## Project Summary

HolyWork was designed as a **community-centric church app** emphasizing **usability, inclusivity, and engagement**.
It aims to make organizing and volunteering for church services easier and more enjoyable by integrating:

- **Cross-church volunteer management** (66.7% of respondents interested)
- **Automated scheduling with smart reminders** (rated 4.39/5.0 - highest priority)
- **Community prayer sharing** with 4-level privacy system
- **Bible study tools** with note sharing capabilities (83.3% interested)
- **Youth-oriented interaction** with optional gamification

> _"HolyWork reduces up to 50% of weekly volunteer coordination time by centralizing communications and service planning."_

---

## Design Concept Highlights

### 1. Cross-Church Volunteer Calendar
A unified schedule that allows users to view and sign up for volunteer opportunities across affiliated churches.
- Role-based sign-ups (Set-up, Clean-up, Music, Hospitality, Sanctuary Guild, Kids Church)
- Geolocation discovery for nearby service opportunities (10-20 miles most common)
- Push notifications and smart reminders (72hr, 24hr, day-of)
- Volunteer profiles with ratings and service history

### 2. Service Agenda Builder
A visual interface for organizers to design the weekly "Service Book."
- Fixed elements (e.g., confession, benediction)
- Variable elements (e.g., readings, songs, prayers)
- Reusable templates for shared multi-church events
- One-click publishing with automatic team notifications

### 3. Community Prayer Wall
A social-style feature for posting and responding to prayer requests.
- 4-level privacy system: Church-wide, Team-only, Leadership-only, Private
- Categories (Healing, Thanksgiving, Intercession, Praise, Guidance)
- "Praying" reactions, comments, and anonymous posting options
- Authorization/consent workflow for sensitive requests

### 4. Bible Study Integration
Enhanced spiritual engagement features based on user feedback.
- Early-week preview of upcoming Sunday Bible passages
- Personal note-taking with comprehensive sharing options
- Internal sharing: Small Groups, Prayer Partners, My Church Community, Public Feed
- External sharing: Facebook, Instagram, Twitter/X, WhatsApp, Email, SMS
- Integration with established Bible reading plans

### 5. Youth-Focused Engagement
Designed to appeal to digital-native users through:
- **Optional gamification** (badges, leaderboards, "Volunteer of the Month") - implemented tastefully
- **Social media sharing integration** (Instagram stories, shareable volunteer graphics)
- **Flexible last-minute scheduling** for unpredictable college schedules
- **Social-inspired notifications and clean, modern UI**

---

## User Research & Personas

### PACT Analysis

| Element | Summary |
|----------|----------|
| **People** | Organizers, volunteers, and attendees across generations (ages 18-68) and churches |
| **Activities** | Volunteering, worship planning, prayer posting, Bible study, event participation |
| **Context** | Weekly church services, special events, and inter-church collaborations |
| **Technology** | Mobile app prototype (iOS-first at 77.8%), created using Figma |

### Six Research-Based Personas

| Persona | Age | Role | Key Needs |
|---------|-----|------|-----------|
| **Pastor David Chen** | 42 | Lead Pastor | Efficiency, cross-church coordination, service planning |
| **Margaret Wong** | 38 | Church Administrator | Multi-team management, work-life balance, analytics |
| **James Rodriguez** | 35 | Music Team Leader | Cross-church musician network, resource sharing |
| **Emily Tran** | 21 | College Volunteer | Social features, flexible scheduling, gamification |
| **Robert Mitchell** | 48 | Regular Volunteer | Clear expectations, calendar integration, family scheduling |
| **Dorothy Kim** | 68 | Elder Volunteer | Accessibility, large fonts, helper/buddy support |

---

## Design Process

### Phase 1: Requirements Gathering (User Study 1)
- **Mixed-methods approach**: Online survey (n=18) + semi-structured interviews
- **Survey platform**: Custom React application (https://survey.quizmk.com/)
- **Demographics**: 61.1% aged 36-50, 66.7% from large churches (200-500 members)
- **Key findings**:
  - Automated scheduling rated highest (4.39/5.0)
  - Push notifications critical (4.22/5.0)
  - 66.7% interested in cross-church volunteering
  - 83.3% interested in digital Bible study tools
  - Gamification rated lowest (2.89/5.0) - made optional

### Phase 2: Requirements Generation
- Developed 6 diverse personas from survey data and interviews
- Created detailed user scenarios covering key workflows
- Synthesized 37 requirements using MoSCoW prioritization:
  - **Must-Have (MVP)**: 12 requirements
  - **Should-Have**: 20 requirements
  - **Could-Have**: 5 requirements

### Phase 3: Wireframing & Prototyping
- Low-fidelity wireframes developed in Figma
- Mid-fidelity prototypes refined via peer review
- **30+ high-fidelity screens** developed for comprehensive user flows
- Mobile-first design (390×844px iPhone 14 Pro)

### Phase 4: User Study 2 - Prototype Evaluation (November 2025)
- **Moderated usability testing** with 6 participants across 4 task scenarios
- **5-question qualitative survey** distributed to 18 respondents
- **Key feedback themes**:
  - Functions comprehensive but module connections feel weak
  - Bible study section appealing but sharing needs strengthening
  - Comparable to Planning Center, needs improvement in focus and ease of use
- **Overall rating**: 4/5

### Phase 5: Iterative Refinement
Based on User Study 2 feedback, implemented:
- **Enhanced Bible Study Note Sharing**: Comprehensive share modal with internal options (Small Groups, Prayer Partners, My Church Community, Public Feed) and external sharing (Facebook, Instagram, Twitter/X, WhatsApp, Email, SMS)
- **Home Page Events Integration**: Added "Upcoming Events" section below Prayer Wall and "Ministry Highlights" section to engage congregation participation
- **Validation testing** confirmed enhancements successfully addressed user concerns

---

## Value Proposition

HolyWork transforms the way churches organize and engage their members by merging **volunteer coordination, worship planning, and community prayer** into one seamless digital experience.

**Quantifiable Impact** (from persona scenarios):
- Pastor coordination time: 2+ hours → 20 minutes (90% reduction)
- Administrator weekly tasks: 3-4 hours → 45 minutes (80% reduction)
- Team leader emergency coverage: Hours of phone calls → Minutes via cross-church search

---

## Tools & Resources

| Tool | Version | Account Type | Purpose | Value Added |
|------|----------|---------------|----------|--------------|
| **Figma** | Professional | Education | High-fidelity prototyping, 30+ interactive screens | Mobile-first interface design (390×844px iPhone 14 Pro) |
| **Figma AI Plugin** | Starter | Free | Generate wireframes, optimize layouts | Designed clean, mobile-first interface |
| **Claude Code** | 2.0.26/Opus 4.5 | Pro | Figma MCP metadata extraction, documentation, report generation | Automated workflow diagram generation, survey visualization |
| **ChatGPT (GPT-5)** | Free | Free | Draft proposal and refine UX writing | Clarified language for inclusivity and flow |
| **React** | 18.x | - | Custom survey application | Multi-step progressive disclosure survey design |

---

## Work Log Summary

### Phase 1: Project Setup & User Study 1 (October 2025)

| Date | Hours | Description |
|------|--------|-------------|
| Sept 29, 2025 | 2 | Drafted proposal structure and user questionnaire |
| Oct 1, 2025 | 2 | Project planning and UX direction discussions |
| Oct 2, 2025 | 3 | Improved cross-generation user questionnaire for inclusivity |
| Oct 4, 2025 | 4 | Conducted verbal interviews with congregation members for design insights |
| Oct 5, 2025 | 3 | Interviewed church members for qualitative feedback |
| Oct 5, 2025 | 5 | Prepared GitHub repository and README documentation |

### Phase 2: User Study 2 & Prototype Enhancement (November 16-25, 2025)

| Date | Hours | Description |
|------|--------|-------------|
| Nov 16, 2025 | 5 | Prepared User Study 2 materials: usability testing script with 4 task scenarios, 5-question qualitative survey |
| Nov 17, 2025 | 5 | Conducted first round of usability sessions (3 participants), documented navigation issues and friction points |
| Nov 18, 2025 | 5 | Conducted second round of usability sessions (3 participants), distributed online survey (18 respondents) |
| Nov 19, 2025 | 5 | Analyzed survey results: 4/5 overall rating, identified top enhancement priorities |
| Nov 20, 2025 | 5 | Enhanced Figma prototype: Added "Upcoming Events" and "Ministry Highlights" sections to Home screen |
| Nov 21, 2025 | 5 | Enhanced Figma prototype: Created Bible Study note sharing modal with internal/external sharing options |
| Nov 22, 2025 | 5 | Conducted validation testing with 2 participants, refined based on feedback |
| Nov 23, 2025 | 5 | Enhanced Prayer Wall: improved privacy badge visibility, refined visual hierarchy |
| Nov 24, 2025 | 5 | Consolidated User Study 2 findings, comprehensive prototype review |
| Nov 25, 2025 | 5 | Finalized documentation, workflow diagrams, survey visualizations |

**Total Phase 2 Hours: 50 hours**

---

## Project Deliverables

### Prototypes

**Figma Prototype** (High-Fidelity)
- **URL**: https://www.figma.com/design/iw97eGm0CNeZYynLexYqB6/HolyWork?node-id=0-1
- **30+ screens** covering: Home Dashboard, Opportunities, Prayer Wall, Bible Study, Schedule, Profile, and more
- **Key enhanced frames**:
  - Home screen with Upcoming Events and Ministry Highlights
  - Bible Study note sharing modal (Frame 235:3622)
  - Prayer Wall with 4-level privacy system

**HTML Prototype** (`holywork-prototype/`)
- Functional HTML/CSS/JS implementation of core screens
- 45+ HTML pages including:
  - `index.html` - Home Dashboard
  - `opportunities.html`, `opportunities_signup.html` - Volunteer sign-up flow
  - `prayer-wall.html`, `prayer-wall-add.html` - Prayer Wall with privacy controls
  - `bible-study.html`, `bible-study-note-share.html` - Bible Study with sharing
  - `schedule.html`, `schedule_detail.html` - Personal schedule management
  - `achievements.html`, `achievement-Leaderboard.html` - Gamification features
  - `events.html`, `events-detail.html` - Events integration

### Reports & Documentation

**Progress Reports**
- `RyanW_ProgressReport1.docx` - Initial project proposal and planning
- `report2/RyanW_ProgressReport2.docx` - Mid-project progress and findings
- `reportFinal/HolyWork_FinalReport_v2.docx` - Comprehensive final report

**Requirements Documentation** (`requirement/`)
- `Section2_RequirementsGathering.md` - User study methodology, survey design, data analysis
- `Section3_RequirementsGeneration_Personas.md` - 6 detailed personas with scenarios
- `Section3B_RequirementsFromPersonas.md` - Requirements derived from personas
- `Section4_SynthesisOfRequirements.md` - MoSCoW prioritized requirements (37 total)
- `survey_analysis_FINAL.txt` - Complete User Study 1 survey analysis (n=18)

**User Study 2 Materials** (`reportFinal/`)
- `Worklog_Nov16-25.md` - Detailed work log for User Study 2 phase
- `UserStudy2_Survey.md` - 5-question usability survey with results summary
- `workflows.html` - Interactive timeline workflow diagrams (4 key user journeys)
- `survey_charts.html` - Survey data visualizations (demographics, feature ratings, cross-church interest)

### User Research Data
- `F25_3375_S1_G9_GraceFlow/survey/` - Survey infrastructure and sample data

---

## Key User Flows (Workflow Diagrams)

### 1. Volunteer Sign-Up Flow
Home → Find Opportunities → Browse/Filter → Select Role → Sign-Up Modal → Success → View Schedule
- **Target**: <2 minutes, <4 taps
- **Metrics**: 4-tap flow from discovery to confirmation

### 2. Private Prayer Request Flow
Home → Prayer Wall → Create Prayer → Set Privacy Level → Share → Success with "Praying" count
- **4-level privacy**: Church-wide, Team-only, Leadership-only, Private

### 3. Cross-Church Volunteer Discovery
Opportunities → Filter "Nearby Churches" → View Cross-Church Roles → Sign Up → Auto-Create Team Chat
- **66.7%** of users interested in this feature

### 4. Notification-Driven Response
Notification Badge → View Urgent Request → Quick Sign-Up → Check-In on Service Day → Complete Tasks → Service Complete
- Push notifications reduce coordinator workload by 80%

---

## References

- Planning Center — [https://planning.center](https://planning.center)
- Church Center — [https://churchcenter.com](https://churchcenter.com)
- Pray.com — [https://pray.com](https://pray.com)
- Google Calendar, Slack, Trello (official sites)
- [WorshipTools Documentation](https://www.worshiptools.com/en-us/docs)

---

## Acknowledgements

Special thanks to **Christine Church leadership** and **congregation members** who shared their insights and feedback, helping shape HolyWork's vision for cross-church collaboration and volunteer engagement.

Special recognition to **Alice Chen** (age 65, 40+ years Christian experience) for detailed interview insights on privacy concerns and Bible study feature needs.

---

## License

This project is developed under the **Douglas College CSIS 3375 – UX Design in Web & Mobile App** academic license.
All assets and designs are intended for educational and demonstration purposes only.

---

> _"For we are co-workers in God's service." — 1 Corinthians 3:9_
