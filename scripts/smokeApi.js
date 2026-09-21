const { loadEnvConfig } = require("@next/env");

loadEnvConfig(process.cwd());

const baseUrl = process.env.API_BASE_URL || "http://localhost:3000/backend/api";

async function request(path, options = {}) {
  const response = await fetch(`${baseUrl}${path}`, options);
  const payload = response.status === 204 ? null : await response.json();
  if (!response.ok) throw new Error(`${path} returned ${response.status}: ${payload?.error?.message || "request failed"}`);
  return payload?.data;
}

async function login(email, password) {
  return request("/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
}

async function main() {
  const health = await request("/health");
  if (health.status !== "ok") throw new Error("Health endpoint is not ready.");
  const trainer = await login(
    process.env.TRAINER_SEED_EMAIL || "demo.trainer@fittrack.local",
    process.env.TRAINER_SEED_PASSWORD || "FitTrackDemo!2026",
  );
  const trainerHeaders = { Authorization: `Bearer ${trainer.token}` };
  const clients = await request("/clients", { headers: trainerHeaders });
  if (clients.length !== 2) throw new Error(`Expected 2 seeded clients, found ${clients.length}.`);
  await request(`/clients/${clients[0].id}/workout-plan`, { headers: trainerHeaders });

  const client = await login("alex.client@fittrack.local", "ClientDemo!2026");
  const clientHeaders = { Authorization: `Bearer ${client.token}` };
  const [plan, nutrition, history] = await Promise.all([
    request("/me/workout-plan", { headers: clientHeaders }),
    request("/me/nutrition", { headers: clientHeaders }),
    request("/me/workouts", { headers: clientHeaders }),
  ]);
  if (plan.plan.days.length !== 3 || nutrition.entries.length !== 3 || history.total !== 1) {
    throw new Error("Seeded client data did not match the expected demo fixture.");
  }
  console.log("FitTrack API smoke test passed.");
  console.log("Health, both roles, client ownership, plans, nutrition, and history are available.");
}

main().catch((error) => {
  console.error(`Smoke test failed: ${error.message}`);
  process.exitCode = 1;
});
