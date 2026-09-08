import { readFile } from "node:fs/promises"
import path from "node:path"

const root = process.cwd()
const [contract, component, index] = await Promise.all([
  readFile(path.join(root, "src", "contracts", "platform-admin.ts"), "utf8"),
  readFile(path.join(root, "src", "components", "platform-admin.tsx"), "utf8"),
  readFile(path.join(root, "src", "index.ts"), "utf8"),
])

const failures = []
for (const id of ["dashboard","users","authorization","moderation","service-status","audit","settings","system-states"]) {
  if (!contract.includes('id: "' + id + '"')) failures.push("navigation " + id)
}
for (const screen of ["28-platform-dashboard.svg","29-platform-users.svg","30-platform-authorization.svg","31-platform-moderation.svg","32-platform-service-status.svg","33-platform-audit.svg","34-platform-settings.svg","35-platform-system-states.svg"]) {
  if (!contract.includes(screen)) failures.push("visual " + screen)
}
for (const proof of ["failClosed: true", 'source: "/api/platform/bootstrap"', "server-authoritative"]) {
  if (!contract.includes(proof)) failures.push("runtime " + proof)
}
for (const proof of ["PlatformRoleMatrix","PlatformBackendBoundary","PlatformServiceRegistry","PlatformAdminVisual","platformAdminResources","platformAdminCommandActions"]) {
  if (!component.includes(proof)) failures.push("component " + proof)
}
if (!index.includes("./contracts/platform-admin") || !index.includes("./components/platform-admin")) failures.push("package exports")
if (contract.includes("Kanban") || contract.includes("AI Workspace") || contract.includes("/chat")) failures.push("Crayon workspace leakage")

if (failures.length) {
  console.error("Platform Admin UI audit failed:")
  failures.forEach((failure) => console.error("- " + failure))
  process.exit(1)
}
console.log("Platform Admin UI audit passed.")
