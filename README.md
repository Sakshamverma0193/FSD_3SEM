# FSD_3SEM - Full Stack Development Lab (Semester 3)

This repository contains practical implementations, lab experiments, and code examples for the **Full Stack Development (Web Designing)** curriculum in Semester 3.

---

## 📁 Repository Structure

### 1. `Events/` — Asynchronous JavaScript & Event Loop
Focuses on asynchronous programming patterns, module systems, and runtime execution order in Node.js:
- [`synchronous.js`](file:///c:/Users/hp/Documents/WEB%20DESIGNING%20LAB%20WORK/SEM_3/Events/synchronous.js): Sequential, blocking execution flow demonstration.
- [`asynchronous.js`](file:///c:/Users/hp/Documents/WEB%20DESIGNING%20LAB%20WORK/SEM_3/Events/asynchronous.js): Asynchronous callbacks and callback chaining pattern.
- [`async_awaits.js`](file:///c:/Users/hp/Documents/WEB%20DESIGNING%20LAB%20WORK/SEM_3/Events/async_awaits.js): Handling asynchronous operations using modern `async/await` syntax with `try...catch`.
- [`promises.js`](file:///c:/Users/hp/Documents/WEB%20DESIGNING%20LAB%20WORK/SEM_3/Events/promises.js): Working with JavaScript Promises and combinators (`Promise.all`, `Promise.race`, `Promise.allSettled`).
- [`event.js`](file:///c:/Users/hp/Documents/WEB%20DESIGNING%20LAB%20WORK/SEM_3/Events/event.js): Demonstration of Node.js Event Loop phases (`setTimeout`, `setImmediate`, and I/O callbacks).
- [`main.js`](file:///c:/Users/hp/Documents/WEB%20DESIGNING%20LAB%20WORK/SEM_3/Events/main.js) & [`commom.js`](file:///c:/Users/hp/Documents/WEB%20DESIGNING%20LAB%20WORK/SEM_3/Events/commom.js): CommonJS module exports (`module.exports`) and imports (`require`).
- [`esm.js`](file:///c:/Users/hp/Documents/WEB%20DESIGNING%20LAB%20WORK/SEM_3/Events/esm.js): ES Modules (ESM) export syntax.
- [`index.html`](file:///c:/Users/hp/Documents/WEB%20DESIGNING%20LAB%20WORK/SEM_3/Events/index.html) & [`index.js`](file:///c:/Users/hp/Documents/WEB%20DESIGNING%20LAB%20WORK/SEM_3/Events/index.js): Basic HTML and non-blocking timeout demonstration.

---

### 2. `file_system_module/` — Node.js File System (`fs`)
Covers file system manipulation, directory operations, metadata inspection, and file watchers:
- [`crud_sync.js`](file:///c:/Users/hp/Documents/WEB%20DESIGNING%20LAB%20WORK/SEM_3/file_system_module/crud_sync.js): Synchronous file operations (`writeFileSync`, `readFileSync`, `appendFileSync`, `rmSync`).
- [`crud_async.js`](file:///c:/Users/hp/Documents/WEB%20DESIGNING%20LAB%20WORK/SEM_3/file_system_module/crud_async.js): Asynchronous callback-based file CRUD (`writeFile`, `readFile`, `appendFile`).
- [`crud_promises.js`](file:///c:/Users/hp/Documents/WEB%20DESIGNING%20LAB%20WORK/SEM_3/file_system_module/crud_promises.js): Promise-based file CRUD operations with `fs/promises` and `async/await`.
- [`fs_dir.js`](file:///c:/Users/hp/Documents/WEB%20DESIGNING%20LAB%20WORK/SEM_3/file_system_module/fs_dir.js): Directory creation and reading (`fs.mkdir`, `fs.readdir`).
- [`stats.js`](file:///c:/Users/hp/Documents/WEB%20DESIGNING%20LAB%20WORK/SEM_3/file_system_module/stats.js): Inspecting file metadata and timestamps using `fs.stat`.
- [`sizeChecker.js`](file:///c:/Users/hp/Documents/WEB%20DESIGNING%20LAB%20WORK/SEM_3/file_system_module/sizeChecker.js): Utility function to format and display file sizes in Bytes, KB, and MB.
- [`node_watch/`](file:///c:/Users/hp/Documents/WEB%20DESIGNING%20LAB%20WORK/SEM_3/file_system_module/node_watch/): File watching demos using `fs.watch` and `fs.watchFile`.

---

### 3. `server/` — Node.js HTTP Server & Routing
Demonstrates core Node.js web server concepts:
- [`basic_server.js`](file:///c:/Users/hp/Documents/WEB%20DESIGNING%20LAB%20WORK/SEM_3/server/basic_server.js): Setting up a native HTTP server and serving HTML files with custom headers.
- [`routing.js`](file:///c:/Users/hp/Documents/WEB%20DESIGNING%20LAB%20WORK/SEM_3/server/routing.js): Handling multiple URL routes (`/`, `/about`, `/contact`) with HTTP status codes.
- [`http_methods.js`](file:///c:/Users/hp/Documents/WEB%20DESIGNING%20LAB%20WORK/SEM_3/server/http_methods.js): Reading and streaming text files in response to HTTP requests.
- [`file.txt`](file:///c:/Users/hp/Documents/WEB%20DESIGNING%20LAB%20WORK/SEM_3/server/file.txt): Reference table for standard HTTP status codes.
- [`index.html`](file:///c:/Users/hp/Documents/WEB%20DESIGNING%20LAB%20WORK/SEM_3/server/index.html) & [`home.html`](file:///c:/Users/hp/Documents/WEB%20DESIGNING%20LAB%20WORK/SEM_3/server/home.html): Semantic HTML navigation templates.

---

### 4. `Express/` — Express.js Web Framework
Introduction to building web servers with Express:
- [`mycreation/app.js`](file:///c:/Users/hp/Documents/WEB%20DESIGNING%20LAB%20WORK/SEM_3/Express/mycreation/app.js): Minimal Express application with root endpoint and server listener.

---

## 🚀 Running Examples

Execute any JavaScript file directly using Node.js:

```bash
# Run a specific lab file
node Events/event.js
node file_system_module/sizeChecker.js
node server/basic_server.js
```