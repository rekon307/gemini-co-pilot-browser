const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  // Example: Expose a function to send a message to the main process
  sendMessage: (message) => ipcRenderer.send('message-from-renderer', message),

  // Example: Expose a function to navigate the main window
  navigate: (url) => ipcRenderer.send('navigate-main-window', url),

  // Example: Expose a function to get the current URL
  getCurrentURL: () => ipcRenderer.invoke('get-current-url'),
});
