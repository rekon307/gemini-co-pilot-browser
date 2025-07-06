## Active Context: Gemini Co-Pilot Browser Project

**Current Focus:** Successfully launched the Electron application with the React frontend and established the foundation for Inter-Process Communication (IPC) for browser control.

**Recent Changes:**
*   Created `preload.js` to resolve Electron startup issues.
*   Corrected `main` entry in `package.json` to `main.js`.
*   Added `--no-sandbox` flag to the `npm start` script to address sandbox initialization failures on macOS.
*   Reverted `index.html` to load the React `bundle.js`.
*   Verified that the Electron window opens, stays open, and displays the React application.
*   **Corrected Browser Control Strategy:** Abandoned direct Playwright integration within the main process. Instead, implemented IPC using Electron's `ipcMain` and `ipcRenderer` to allow the React frontend to send commands to the main process for browser control via `webContents`.
*   Updated `main.js` to include `ipcMain` listeners for `navigate-main-window` and `get-current-url`.
*   Updated `preload.js` to expose `electronAPI` with `sendMessage`, `navigate`, and `getCurrentURL` functions to the renderer process.

**Next Steps:**
1.  **Implement Basic Browser Features in React Frontend:** Create a URL bar and navigation buttons in the React `App.js` that utilize the `electronAPI` to send commands to the main process.
2.  **Display Live Browser Content:** Explore how to display the content of the `BrowserWindow` (controlled by the main process) within the React frontend, or ensure the main `BrowserWindow` is the primary display for web content.
3.  **Establish WebSocket Communication:** Set up a WebSocket server in the main process to allow me (the Gemini agent) to send and receive commands and data to/from the Electron application.