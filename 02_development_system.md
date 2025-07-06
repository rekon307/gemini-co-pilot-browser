# Development System for Gemini Co-Pilot Browser Project

This document outlines the development system I will use for the "Gemini Co-Pilot Browser" project, incorporating principles from `rulebook-ai` and best practices for autonomous agents.

## 1. Context Management: The Memory Bank

I will utilize a structured "Memory Bank" to maintain persistent project context. This system is inspired by `rulebook-ai`'s approach to documentation and knowledge management.

### Memory Bank Structure:

The Memory Bank is located in the `memory/` directory within the project root and consists of the following core files:

*   **`memory/docs/product_requirement_docs.md`:** Defines the project's purpose, problems it solves, core requirements, and goals. This is the foundational document.
*   **`memory/docs/architecture.md`:** Outlines the system's design, component relationships, and dependencies.
*   **`memory/docs/technical.md`:** Details the development environment, technologies used, key technical decisions, design patterns, and technical constraints.
*   **`memory/tasks/tasks_plan.md`:** Provides an in-depth list of tasks, tracks project progress, current status, and known issues.
*   **`memory/tasks/active_context.md`:** Captures the current focus of development, active decisions, recent changes, and next steps. This will be frequently updated.
*   **`memory/error-documentation.md`:** Documents reusable fixes for mistakes and corrections, serving as a knowledge base of known issues and resolutions. I will update this whenever I encounter and resolve an error.
*   **`memory/lessons-learned.md`:** A project-specific learning journal that captures patterns, preferences, and project intelligence for continuous improvement. I will use this to document insights gained during the development process.

### Workflow for Memory Updates:

I will update the Memory Bank files under the following conditions:

1.  **Discovering new project patterns or insights.**
2.  **After implementing significant changes or completing a major task.**
3.  **When explicitly requested by the user to "update memory files".** In such cases, I will review all core files and focus particularly on `active_context.md` and `tasks_plan.md`.
4.  **When context needs clarification or refinement.**
5.  **After a significant part of a plan is verified.**

## 2. Learning and Improvement: The Lessons Learned Journal

The `memory/lessons-learned.md` file will serve as my primary mechanism for continuous learning and improvement. I will capture:

*   Critical implementation paths and their outcomes.
*   User preferences and workflow adjustments.
*   Project-specific patterns and conventions.
*   Known challenges and how they were overcome.
*   Evolution of project decisions and the rationale behind them.
*   Effective tool usage patterns.

This document will be a living record that helps me work more effectively and intelligently on this project over time.

## 3. Codebase Organization

I will adhere to a clear and modular directory structure, as outlined in the `rulebook-ai` principles. This promotes separation of concerns and enhances project maintainability. The current structure of the `agentic_browser_project` will evolve to reflect this, with dedicated directories for source code (`src`), documentation (`memory/docs`), tasks (`memory/tasks`), and potentially other components as the project grows.

## 4. Workflow Integration

My operational focus (Planning, Implementation, Debugging) will be determined by:

1.  **Explicit User Commands:** If you specify `FOCUS = PLANNING`, `FOCUS = IMPLEMENTATION`, or `FOCUS = DEBUGGING`.
2.  **Inferred Task Intent:** Analyzing your current request to determine the primary task intent.
3.  **Internal State Cross-Check:** Ensuring my internal mode aligns with the determined focus. If there's a conflict, I will notify you and prioritize the focus derived from your current request.

I will always apply general principles and the most relevant workflow rules, while actively consulting the Memory Bank for context and validation.

## 5. Next Steps

With the development system now defined and the Memory Bank initialized, I will proceed with the next steps in Phase 1 of the "Gemini Co-Pilot Browser" project: **re-integrating the React application into the Electron window.**

This will involve:
1.  Reverting `index.html` to its original state (loading `bundle.js`).
2.  Ensuring `main.js` correctly loads the React application.
3.  Troubleshooting any remaining issues to get the React app to display correctly.
