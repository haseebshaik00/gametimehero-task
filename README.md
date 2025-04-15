# gametimehero-task

## Game Time Hero Take Home Task - RSVP Manager

A scalable, testable RSVP management module built in TypeScript, implementing clean business logic for tracking player RSVP statuses, along with a minimal UI to demonstrate functionality!

## Output

**- Backend Logic:**

<img width="545" alt="image" src="https://github.com/user-attachments/assets/3add9053-a5c4-4b6d-9db3-c4f04c078383" />

<br><br>

**- Test Suite:**

<img width="503" alt="image" src="https://github.com/user-attachments/assets/84bab74b-a739-4b37-ade2-138eabc08ed7" />

<br><br>

**- Demo UI:**

<img width="1469" alt="image" src="https://github.com/user-attachments/assets/165edcb6-777e-41f0-8914-10c801c39c48" />

<br><br>

## 🚀 Backend Setup | Quick start UI

```bash
npm install                      # Install dependencies

## Backend
npm run build                    # Build ts
npx ts-node src/index.ts         # Run script
npm test                         # Run Tests

## With UI
npm run dev                      # Start local dev server with UI
Visit http://localhost:5173      # Start local dev server with UI
```

---

<br>

## 📌 Features

- ✅ Add or update player RSVP (Yes / No / Maybe)
- ✅ Get a list of confirmed attendees (Yes only)
- ✅ Count total, confirmed, declined, and maybe responses
- ✅ Follows clean code principles: SRP, DI, Pure functions
- ✅ Type-safe with reusable interfaces
- ✅ Unit tested with Jest
- ✅ Browser-based demo UI via Vite

## 🧱 Tech Stack

- **Language**: TypeScript
- **Runtime**: Node.js
- **Testing**: Jest + ts-jest
- **Bundler for UI**: Vite
- **UI**: HTML + TypeScript (no framework)
- **Architecture**: Service-based with Dependency Injection

## 📄 Repo Structure

```shell
gametimehero-task/
├── node_modules/
├── src/
│   ├── models/
│   │   ├── Player.ts
│   │   └── RsvpEntry.ts
│   ├── services/
│   │   └── RsvpService.ts
│   ├── utils/
│   │   └── Logger.ts
│   ├── index.ts
│   └── main.ts
├── tests/
│   └── RsvpService.test.ts
├── index.html
├── .gitignore
├── LICENSE
├── package.json
├── package-lock.json
├── README.md
├── tsconfig.json
```

---

## 🧑‍💻 Design Principles Followed
- Pure Functions: RsvpService methods return consistent output without side effects.
- Single Responsibility Principle: Separate files for models, service, logger, UI.
- Dependency Injection: Logger passed into RsvpService, allowing for testing with mocks.
- Derived State: Attendee list and counts are derived from the internal Map.

