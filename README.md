# FitTrack Coach API

Next.js App Router API for authentication, trainer/client management, workout
planning and immutable workout history, nutrition tracking, and account changes.

## Local setup

Requirements: Node.js 22 LTS and access to the supplied MongoDB Atlas cluster.

```bash
npm install
npm run setup:local
npm run seed
npm run dev
```

The API runs at `http://localhost:3000`; health is available at
`http://localhost:3000/api/health`. `setup:local` reads
`../atlas-credentials.env`, writes an ignored `.env.local`, and preserves an
existing local JWT secret when rerun.

## Demo accounts

After `npm run seed`:

| Role | Email | Password |
|---|---|---|
| Trainer | `demo.trainer@fittrack.local` | `FitTrackDemo!2026` |
| Client | `alex.client@fittrack.local` | `ClientDemo!2026` |
| Client | `jamie.client@fittrack.local` | `ClientDemo!2026` |

The seed is repeatable. It refreshes only these named demo accounts and their
associated data.

## Checks

```bash
npm test
npm run lint
npm run build
```

Completed workout sessions intentionally have no update or delete route.
