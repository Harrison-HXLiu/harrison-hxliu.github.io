# Codex Prompt: Build Haoxiang Liu / Harrison Personal GitHub Pages Site

You are helping me build my personal portfolio homepage for GitHub Pages.

## Goal

Create a clean, modern, responsive personal homepage for:

**Haoxiang Liu / Harrison**  
University of Science and Technology Beijing  
Major: Intelligent Sensing and Perception Engineering  
Positioning: **AIoT × Agent × Human-Centered Intelligence**

The site should look like a professional student/research/engineering portfolio, suitable for PhD/RA/internship applications.

## Deployment Target

The site will be deployed as a GitHub Pages user site.

Repository name should be:

```text
<github-username>.github.io
```

The homepage must work as a static site with `index.html` as the main entry.

Do not require a backend.

## Preferred Tech Stack

Use one of these simple options:

Option A, preferred:
- HTML
- CSS
- Vanilla JavaScript
- No build step

Option B, only if necessary:
- Vite + React
- Tailwind CSS
- Still easy to deploy to GitHub Pages

For now, prefer Option A unless there is a strong reason to use React.

## Overall Visual Style

Design direction:
- Modern academic + engineering portfolio
- Clean, minimal, slightly futuristic
- White or very light background
- Dark blue / cyan / black accents
- Card-based sections
- Smooth scrolling
- Subtle hover animation
- Mobile responsive
- Professional but not overly flashy

Avoid:
- Overly cute style
- Heavy animations
- Long paragraphs everywhere
- Template-looking generic portfolio
- Crowded layout

## Site Structure

Create a single-page personal homepage with the following sections:

1. Hero
2. About
3. Skills
4. Featured Projects
5. Research / Publications
6. Awards & Recognition
7. Contact
8. Footer

Add a top navigation bar with anchor links.

## Content

### 1. Hero Section

Name:

```text
Haoxiang Liu / Harrison
```

Subtitle:

```text
AIoT × Agent × Human-Centered Intelligence
```

Identity:

```text
Undergraduate student at University of Science and Technology Beijing
Major: Intelligent Sensing and Perception Engineering
```

Short intro:

```text
I build AI-powered, embedded, and human-centered intelligent systems, with experience across multimodal agents, STM32 hardware development, smart home control, and speech rehabilitation products.
```

CTA buttons:
- View Projects
- Contact Me
- Google Scholar

Contact:
- Email: hxliu.work@gmail.com
- Phone: +86 17807964997
- Google Scholar: use placeholder link `#` if the exact URL is not available

Add a profile image placeholder:
- Use `/assets/profile.jpg`
- If missing, show a clean initials avatar: `HL`

### 2. About Section

Use this copy:

```text
Hello! I am a passionate and curious student majoring in Intelligent Sensing and Perception Engineering at USTB.

I am interested in AI, embedded systems, and intelligent interaction, with a strong motivation to turn ideas into working and testable systems. My experience spans AI Agent / multimodal benchmark research, STM32-based hardware development, smart home edge control, and speech rehabilitation systems, giving me hands-on experience across user research, system design, development, testing, and deployment.
```

Tone:
- Natural
- Confident
- Not exaggerated

### 3. Skills Section

Display as grouped cards.

Group 1: Embedded & AIoT
- STM32
- ESP32
- PCB Design
- ROS
- Multi-Sensor Systems
- Embedded Prototyping

Group 2: AI Agent & Benchmark
- Python
- PyTorch
- Data Visualization
- Multimodal Understanding
- Benchmark Construction
- Experimental Analysis

Group 3: Product-Oriented Prototyping
- User Research
- System Design
- Prototype Implementation
- Hardware–Software Integration
- Technical Documentation
- Roadshow / Presentation

### 4. Featured Projects

Create four project cards. Each card should include:
- Project title
- Date
- Role
- Tags
- Short description
- Key highlights
- Optional image placeholder

#### Project 1

Title:

```text
Integrated STM32 Embedded Research & Education Platform
```

Date:

```text
2026.02 – 2026.05
```

Role:

```text
Independent Developer / Project Lead
```

Tags:
- STM32
- PCB Design
- Embedded Systems
- Teaching Platform
- Hardware Production

Description:

```text
I independently designed a custom STM32F103RBT6 learning board, covering hardware architecture, schematic design, PCB layout, SMT production, teaching materials, and course delivery. The platform integrates sensors, displays, infrared communication, buttons, buzzers, and common embedded interfaces.
```

Highlights:
- Designed schematic and PCB independently in KiCad
- Integrated GPIO, I2C, SPI, UART, PWM, ADC, timers, interrupts, sensors, displays, and IR communication
- Led prototyping, SMT production, manufacturer communication, assembly tracking, and quality checks
- Delivered 200+ boards to the university innovation center
- Generated 30,000+ RMB in sales
- Prepared 50,000+ words of technical documentation and PPT materials
- Trained 1,000+ students
- Supported student projects such as a Tetris game on the board

Image placeholders:
- `/assets/stm32-board.jpg`
- `/assets/stm32-pcb.jpg`
- `/assets/stm32-teaching.jpg`

#### Project 2

Title:

```text
AI-Powered Speech Assistant for Children with Speech Disorders
```

Date:

```text
2024.11 – 2025.07
```

Role:

```text
Project Lead / Beijing Municipal Student Innovation Training Program
```

Tags:
- Speech Rehabilitation
- Whisper
- LoRA
- Praat
- MySQL
- Human-Centered AI

Description:

```text
This project targets home-based speech rehabilitation for children with speech disorders. It integrates a child-side smart plush device, a parent-side mobile app, and a cloud-based speech analysis model, forming a closed-loop workflow of assessment, feedback, and training.
```

Highlights:
- Designed a software–hardware collaboration workflow for child-side practice and parent-side assessment
- Fine-tuned Whisper with LoRA to improve recognition of atypical child speech
- Used Praat to extract acoustic features for speech assessment
- Built a data loop covering collection, model inference, acoustic evaluation, and feedback optimization
- Conducted user research, product demo, reporting, and roadshow

Awards:
- First Prize, North China Five Provinces Computer Application Competition
- Second Prize, Beijing Computer Design Competition
- Special Prize, USTB Cradle Cup Competition

Image placeholders:
- `/assets/speech-assistant-demo.jpg`
- `/assets/speech-architecture.jpg`
- `/assets/speech-awards.jpg`

#### Project 3

Title:

```text
OpenClaw-based AI Smart Home Terminal
```

Date:

```text
2026.10 – 2026.02
```

Role:

```text
Project Lead / Shenzhen Innox 2026 Geek Camp
```

Tags:
- AI Agent
- Smart Home
- AIoT
- Natural Language Control
- Edge Intelligence

Description:

```text
Nexus is an AI-agent-powered smart home terminal for multi-brand home environments. It understands user intent through natural language, combines device status and home context, and automatically generates executable control commands for cross-device coordination, proactive automation, and personalized memory.
```

Highlights:
- Defined product vision and pain points for next-generation smart home interaction
- Designed a natural-language-to-device-command workflow
- Supported cross-brand device coordination and proactive automation
- Added long-term memory and personalized preference learning
- Presented the product as the main speaker during the roadshow

Recognition:
- Champion in the Smart Home category of the Industry Track

Image placeholders:
- `/assets/openclaw-workflow.jpg`
- `/assets/openclaw-demo.jpg`

#### Project 4

Title:

```text
DV-World: Benchmarking Data Visualization Agents in Real-World Scenarios
```

Date:

```text
2025.11 – 2026.02
```

Role:

```text
Contributor
```

Tags:
- AI Agent
- Data Visualization
- Benchmark
- Multimodal Interaction
- ICML 2026

Publication line:

```text
ICML 2026 Accepted · arXiv:2604.25914
```

Description:

```text
DV-World is a benchmark for evaluating data visualization agents in realistic office scenarios. It assesses an AI agent’s ability to work with spreadsheets, update charts, and interact with users under ambiguous requests.
```

Highlights:
- The benchmark includes DV-Sheet, DV-Evolution, and DV-Interact
- Covers 260 real-world workflow tasks
- Contributed to annotation guidelines for multi-turn intent alignment tasks
- Identified ambiguity patterns in office visualization requests
- Formalized clarification strategies through True Intent and Reaction Rules
- Constructed ambiguous tasks and reviewed annotation consistency
- Prepared experimental figures and supported result analysis

Links:
- arXiv: use placeholder `#` unless the exact link is added later

Image placeholders:
- `/assets/dv-world-overview.jpg`
- `/assets/dv-interact.jpg`

### 5. Research / Publications Section

Add:

```text
DV-World: Benchmarking Data Visualization Agents in Real-World Scenarios
ICML 2026 Accepted · arXiv:2604.25914
```

Description:

```text
A benchmark for evaluating data visualization agents in realistic office scenarios, covering spreadsheet operations, chart evolution, and multi-turn interactive visualization under ambiguous user requests.
```

Add buttons:
- Paper
- Code
- Project

Use placeholder links for now.

### 6. Awards & Recognition

Show these as elegant award cards:

- First Prize, North China Five Provinces Computer Application Competition
- Second Prize, Beijing Computer Design Competition
- Special Prize, USTB Cradle Cup Competition
- Champion, Smart Home Category, Shenzhen Innox 2026 Geek Camp Industry Track

### 7. Contact Section

Text:

```text
I am open to research opportunities, RA / PhD discussions, internships, and collaborations around AIoT, intelligent sensing, AI agents, multimodal systems, and human-centered intelligent interaction.
```

Contact:
- Email: hxliu.work@gmail.com
- Phone: +86 17807964997
- Google Scholar: placeholder
- GitHub: placeholder
- LinkedIn: placeholder

### 8. Footer

```text
© 2026 Haoxiang Liu. Built with GitHub Pages.
```

## Interaction Requirements

Add:
- Smooth scrolling navigation
- Active hover state for project cards
- Responsive layout for mobile, tablet, and desktop
- Optional dark/light mode toggle if simple
- Project cards should be scannable, not text-heavy
- Use meaningful semantic HTML
- Use accessible contrast
- Use alt text for images
- Make all links easy to update

## File Structure

Create this structure:

```text
.
├── index.html
├── README.md
├── assets/
│   ├── profile.jpg
│   ├── stm32-board.jpg
│   ├── stm32-pcb.jpg
│   ├── stm32-teaching.jpg
│   ├── speech-assistant-demo.jpg
│   ├── speech-architecture.jpg
│   ├── speech-awards.jpg
│   ├── openclaw-workflow.jpg
│   ├── openclaw-demo.jpg
│   ├── dv-world-overview.jpg
│   └── dv-interact.jpg
└── css/
    └── styles.css
```

If using vanilla JS, add:

```text
└── js/
    └── main.js
```

## README Requirements

Create a README that explains:
- This is my personal GitHub Pages homepage
- How to preview locally
- How to deploy
- Which assets should be replaced
- How to update project links

## Design Details

Suggested style:
- Font: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif
- Main colors:
  - Background: #f7f9fc or #ffffff
  - Text: #111827
  - Muted text: #6b7280
  - Primary accent: #0f75bc or #0077b6
  - Secondary accent: #00b4d8
  - Dark section: #0b1220
- Use subtle gradients in hero section
- Use rounded cards and soft shadows
- Keep project section visually strong

## Important

Do not invent fake links, fake papers, fake organizations, or fake job titles.

Use placeholders where information is unavailable.

Make the first version complete and deployable.
