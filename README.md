<div align="center">

# 🌐 FSD_3SEM — Full Stack Web Development Lab
### *Semester 3 Lab Exercises, Experiments & Practical Implementations*

[![Node.js](https://img.shields.io/badge/Node.js-v24.x-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-v4.x-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License](https://img.shields.io/badge/License-ISC-blue?style=for-the-badge)](LICENSE)
[![Commits](https://img.shields.io/badge/Commits-75%2B-brightgreen?style=for-the-badge&logo=git&logoColor=white)](#)

<p align="center">
  A comprehensive, well-structured repository containing hands-on code examples, event handling architectures, stream processing, file system I/O, native HTTP servers, and modular Express.js web applications.
</p>

---

</div>

## 📑 Table of Contents
- [📌 Overview](#-overview)
- [📂 Repository Architecture](#-repository-architecture)
- [⚡ 1. Events & Asynchronous Programming (`Events/`)](#1-events--asynchronous-programming-events)
- [📁 2. File System Module (`file_system_module/`)](#2-file-system-module-file_system_module)
- [🧩 3. Node.js Core Modules (`modules/`)](#3-nodejs-core-modules-modules)
- [🖥️ 4. Native HTTP Server & Routing (`server/`)](#4-native-http-server--routing-server)
- [🚀 5. Express.js REST API & Frontend (`express_app/`)](#5-expressjs-rest-api--frontend-express_app)
- [🛠️ Getting Started & Execution](#️-getting-started--execution)
- [👨‍💻 Author](#-author)

---

## 📌 Overview

This repository is curated for the **Semester 3 Full Stack Development (Web Designing / Node.js)** lab syllabus. It covers all core competencies required for modern backend and web engineering:
- **Asynchronous Flow Control**: Callbacks, Promises, async/await, generators, and EventEmitter.
- **System Level I/O**: Buffers, readable/writable streams, piping, file descriptors, and directory watchers.
- **Network & Server Architecture**: HTTP protocol, RESTful routing, status codes, query parsing, CORS, cookies, rate limiting, and gzip compression.
- **Enterprise Web Frameworks**: Express.js middleware pipelines, controllers, routing separation, static assets, and global error handling.

---

## 📂 Repository Architecture

```text
SEM_3/
├── Events/                 # Event loop, EventEmitters, Promises, Async/Await
├── file_system_module/     # fs synchronous, asynchronous, streams, watchers
├── modules/                # Core Node.js modules (path, os, crypto, buffer, dns, zlib)
├── server/                 # Native HTTP servers, status codes, CORS, cookies, rate-limit
├── express_app/            # Modular Express app with controllers, routes & middleware
├── http_cons.js            # Top-level HTTP method dispatcher demo
└── README.md               # Repository documentation & guide
```

---

## ⚡ 1. Events & Asynchronous Programming (`Events/`)

| File | Description | Key Concept |
|------|-------------|-------------|
| [`synchronous.js`](file:///c:/Users/hp/Documents/WEB%20DESIGNING%20LAB%20WORK/SEM_3/Events/synchronous.js) | Blocking execution flow demonstration | Sequential Execution |
| [`asynchronous.js`](file:///c:/Users/hp/Documents/WEB%20DESIGNING%20LAB%20WORK/SEM_3/Events/asynchronous.js) | Callback chaining pattern and error-first handling | Asynchronous Callbacks |
| [`async_awaits.js`](file:///c:/Users/hp/Documents/WEB%20DESIGNING%20LAB%20WORK/SEM_3/Events/async_awaits.js) | Async/Await syntax with `try...catch` error handling | Async / Await |
| [`promises.js`](file:///c:/Users/hp/Documents/WEB%20DESIGNING%20LAB%20WORK/SEM_3/Events/promises.js) | Promise combinators (`all`, `race`, `allSettled`) | Promise Combinators |
| [`event.js`](file:///c:/Users/hp/Documents/WEB%20DESIGNING%20LAB%20WORK/SEM_3/Events/event.js) | Node.js Event Loop phases (`setTimeout`, `setImmediate`) | Event Loop |
| [`custom_events.js`](file:///c:/Users/hp/Documents/WEB%20DESIGNING%20LAB%20WORK/SEM_3/Events/custom_events.js) | Custom EventEmitter with `.on()` and `.emit()` | EventEmitter |
| [`event_once.js`](file:///c:/Users/hp/Documents/WEB%20DESIGNING%20LAB%20WORK/SEM_3/Events/event_once.js) | Single-fire event listener with `.once()` | Single-use Events |
| [`event_remove.js`](file:///c:/Users/hp/Documents/WEB%20DESIGNING%20LAB%20WORK/SEM_3/Events/event_remove.js) | Removing event listeners with `.removeListener()` | Listener Cleanup |
| [`event_error.js`](file:///c:/Users/hp/Documents/WEB%20DESIGNING%20LAB%20WORK/SEM_3/Events/event_error.js) | Safe handling of `'error'` events in EventEmitter | Error Resilience |
| [`event_args.js`](file:///c:/Users/hp/Documents/WEB%20DESIGNING%20LAB%20WORK/SEM_3/Events/event_args.js) | Passing multiple arguments to event subscribers | Event Data Flow |
| [`async_generator.js`](file:///c:/Users/hp/Documents/WEB%20DESIGNING%20LAB%20WORK/SEM_3/Events/async_generator.js) | Asynchronous generator functions & `for await...of` | Async Generators |
| [`promise_chain.js`](file:///c:/Users/hp/Documents/WEB%20DESIGNING%20LAB%20WORK/SEM_3/Events/promise_chain.js) | Sequential value transformation with Promise chaining | Chaining Flow |
| [`promise_any.js`](file:///c:/Users/hp/Documents/WEB%20DESIGNING%20LAB%20WORK/SEM_3/Events/promise_any.js) | `Promise.any` first fulfilled combinator | Promise.any |

---

## 📁 2. File System Module (`file_system_module/`)

| File | Description | Key Concept |
|------|-------------|-------------|
| [`crud_sync.js`](file:///c:/Users/hp/Documents/WEB%20DESIGNING%20LAB%20WORK/SEM_3/file_system_module/crud_sync.js) | Synchronous CRUD (`writeFileSync`, `readFileSync`) | Sync File I/O |
| [`crud_async.js`](file:///c:/Users/hp/Documents/WEB%20DESIGNING%20LAB%20WORK/SEM_3/file_system_module/crud_async.js) | Callback-based non-blocking file CRUD operations | Async File I/O |
| [`crud_promises.js`](file:///c:/Users/hp/Documents/WEB%20DESIGNING%20LAB%20WORK/SEM_3/file_system_module/crud_promises.js) | Promise-based file CRUD with `fs/promises` | fs/promises |
| [`read_stream.js`](file:///c:/Users/hp/Documents/WEB%20DESIGNING%20LAB%20WORK/SEM_3/file_system_module/read_stream.js) | High-performance buffered read stream | Streams (`data`, `end`) |
| [`write_stream.js`](file:///c:/Users/hp/Documents/WEB%20DESIGNING%20LAB%20WORK/SEM_3/file_system_module/write_stream.js) | Buffered file write stream | Streams (`write`, `finish`) |
| [`pipe_stream.js`](file:///c:/Users/hp/Documents/WEB%20DESIGNING%20LAB%20WORK/SEM_3/file_system_module/pipe_stream.js) | Direct data piping from readable to writable stream | Stream Piping |
| [`stats.js`](file:///c:/Users/hp/Documents/WEB%20DESIGNING%20LAB%20WORK/SEM_3/file_system_module/stats.js) | Inspect file metadata, size, timestamps | `fs.stat` |
| [`sizeChecker.js`](file:///c:/Users/hp/Documents/WEB%20DESIGNING%20LAB%20WORK/SEM_3/file_system_module/sizeChecker.js) | Formats byte sizes into human-readable units | File Utilities |
| [`fs_open_read.js`](file:///c:/Users/hp/Documents/WEB%20DESIGNING%20LAB%20WORK/SEM_3/file_system_module/fs_open_read.js) | Low-level file descriptor read with buffer offset | File Descriptors |
| [`fs_watch_abort.js`](file:///c:/Users/hp/Documents/WEB%20DESIGNING%20LAB%20WORK/SEM_3/file_system_module/fs_watch_abort.js) | Aborting file watchers via AbortController signal | AbortSignals |

---

## 🧩 3. Node.js Core Modules (`modules/`)

| File | Module | Description |
|------|--------|-------------|
| [`path_demo.js`](file:///c:/Users/hp/Documents/WEB%20DESIGNING%20LAB%20WORK/SEM_3/modules/path_demo.js) | `path` | Path normalization, parsing, resolution, and extension extraction |
| [`os_demo.js`](file:///c:/Users/hp/Documents/WEB%20DESIGNING%20LAB%20WORK/SEM_3/modules/os_demo.js) | `os` | Hardware architecture, CPU count, memory statistics, and uptime |
| [`url_demo.js`](file:///c:/Users/hp/Documents/WEB%20DESIGNING%20LAB%20WORK/SEM_3/modules/url_demo.js) | `url` | WHATWG URL standard parsing and `searchParams` manipulation |
| [`crypto_demo.js`](file:///c:/Users/hp/Documents/WEB%20DESIGNING%20LAB%20WORK/SEM_3/modules/crypto_demo.js) | `crypto` | SHA-256 cryptographic hashing and secure random token generation |
| [`buffer_demo.js`](file:///c:/Users/hp/Documents/WEB%20DESIGNING%20LAB%20WORK/SEM_3/modules/buffer_demo.js) | `Buffer` | Binary memory allocation, UTF-8, Base64, and Hex encoding |
| [`util_demo.js`](file:///c:/Users/hp/Documents/WEB%20DESIGNING%20LAB%20WORK/SEM_3/modules/util_demo.js) | `util` | String formatting and converting callbacks to Promises via `promisify` |
| [`process_demo.js`](file:///c:/Users/hp/Documents/WEB%20DESIGNING%20LAB%20WORK/SEM_3/modules/process_demo.js) | `process` | Process ID, heap memory statistics, environment, and CLI arguments |
| [`zlib_demo.js`](file:///c:/Users/hp/Documents/WEB%20DESIGNING%20LAB%20WORK/SEM_3/modules/zlib_demo.js) | `zlib` | Gzip compression and decompression pipelines |
| [`dns_demo.js`](file:///c:/Users/hp/Documents/WEB%20DESIGNING%20LAB%20WORK/SEM_3/modules/dns_demo.js) | `dns` | DNS domain lookups, IP resolution, and MX record queries |
| [`events_async.js`](file:///c:/Users/hp/Documents/WEB%20DESIGNING%20LAB%20WORK/SEM_3/modules/events_async.js) | `events` | Awaiting EventEmitter events via `events.once()` Promise wrapper |

---

## 🖥️ 4. Native HTTP Server & Routing (`server/`)

| File | Description |
|------|-------------|
| [`basic_server.js`](file:///c:/Users/hp/Documents/WEB%20DESIGNING%20LAB%20WORK/SEM_3/server/basic_server.js) | Minimal Node.js HTTP server serving HTML with custom headers |
| [`routing.js`](file:///c:/Users/hp/Documents/WEB%20DESIGNING%20LAB%20WORK/SEM_3/server/routing.js) | URL path dispatcher (`/`, `/about`, `/contact`) with status codes |
| [`json_server.js`](file:///c:/Users/hp/Documents/WEB%20DESIGNING%20LAB%20WORK/SEM_3/server/json_server.js) | REST API server returning JSON payloads |
| [`query_server.js`](file:///c:/Users/hp/Documents/WEB%20DESIGNING%20LAB%20WORK/SEM_3/server/query_server.js) | Search query parameter parser (`/search?q=...&page=...`) |
| [`post_body_server.js`](file:///c:/Users/hp/Documents/WEB%20DESIGNING%20LAB%20WORK/SEM_3/server/post_body_server.js) | Reading and parsing chunked HTTP POST body streams |
| [`static_server.js`](file:///c:/Users/hp/Documents/WEB%20DESIGNING%20LAB%20WORK/SEM_3/server/static_server.js) | Static asset web server with automatic MIME type resolution |
| [`auth_server.js`](file:///c:/Users/hp/Documents/WEB%20DESIGNING%20LAB%20WORK/SEM_3/server/auth_server.js) | Bearer token authorization header validator |
| [`headers_server.js`](file:///c:/Users/hp/Documents/WEB%20DESIGNING%20LAB%20WORK/SEM_3/server/headers_server.js) | CORS header configuration for cross-origin API access |
| [`cookie_server.js`](file:///c:/Users/hp/Documents/WEB%20DESIGNING%20LAB%20WORK/SEM_3/server/cookie_server.js) | Setting and reading HTTP cookies in response headers |
| [`rate_limiter.js`](file:///c:/Users/hp/Documents/WEB%20DESIGNING%20LAB%20WORK/SEM_3/server/rate_limiter.js) | In-memory IP rate limiter returning HTTP 429 status |
| [`compression_server.js`](file:///c:/Users/hp/Documents/WEB%20DESIGNING%20LAB%20WORK/SEM_3/server/compression_server.js) | Serving Gzip compressed HTTP responses for fast transfer |

---

## 🚀 5. Express.js REST API & Frontend (`express_app/`)

A production-style Express application structured with clean separation of concerns:

```text
express_app/
├── controllers/
│   ├── userController.js       # User business logic
│   └── productController.js    # Product business logic
├── middleware/
│   ├── logger.js               # Request logging middleware
│   ├── auth.js                 # Bearer token authentication
│   └── errorHandler.js         # Centralized error handler
├── routes/
│   ├── users.js                # /api/users router
│   └── products.js             # /api/products router
├── public/
│   ├── index.html              # Frontend testing UI
│   └── style.css               # Modern dark-mode styling
├── package.json                # Project dependencies and scripts
└── server.js                   # Application entry point
```

---

## 🛠️ Getting Started & Execution

### Prerequisites
- [Node.js](https://nodejs.org/) (v16.x or higher)
- [Git](https://git-scm.com/)

### Running Lab Scripts

```bash
# Run Event Loop and Async demos
node Events/event.js
node Events/custom_events.js

# Run File System Stream demos
node file_system_module/read_stream.js
node file_system_module/sizeChecker.js

# Run Core Module demos
node modules/os_demo.js
node modules/crypto_demo.js

# Start Native HTTP Server
node server/json_server.js

# Start Express Application
cd express_app
npm start
```

---

## 👨‍💻 Author

**Saksham Verma**  
*Full Stack Development Lab — 3rd Semester*  
GitHub: [@Sakshamverma0193](https://github.com/Sakshamverma0193)