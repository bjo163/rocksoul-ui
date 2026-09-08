import { readFile } from "node:fs/promises"
import path from "node:path"

const root=process.cwd()
const shell=await readFile(path.join(root,"src","components","application-shell.tsx"),"utf8")
const screens=await readFile(path.join(root,"src","screens","application-screens.tsx"),"utf8")
const stories=await readFile(path.join(root,"src","stories","ApplicationFramework.stories.tsx"),"utf8")
const archive=await readFile(path.join(root,"src","components","archive-components.tsx"),"utf8")

const shellProofs=[
  "ApplicationShell","AutoMenu","AppTopbar","Breadcrumbs","BackendStatus","UserMenu","CommandPalette","NotificationsPanel","ThemeToggle"
]
const screenProofs=[
  "DashboardScreen","KanbanScreen","CalendarScreen","ChatScreen","AIWorkspaceScreen","ProfileSettingsScreen","AuthorizationScreen","ApplicationStatesScreen"
]
const resourceProofs=[
  "dashboard","cases","repositories","evidence","correlation","legal","kanban","calendar","chat","ai-workspace","community","profile","authorization","audit"
]

const failures=[]
for(const proof of shellProofs) if(!shell.includes(proof)) failures.push(`application shell: ${proof}`)
for(const proof of screenProofs) if(!screens.includes(`export function ${proof}`)) failures.push(`application screen: ${proof}`)
for(const proof of resourceProofs) if(!shell.includes(`id: "${proof}"`)) failures.push(`AutoMenu resource: ${proof}`)
if(!shell.includes("requiredPermission")) failures.push("authorization-aware AutoMenu")
if(!archive.includes('data-navigation="auto-menu"') || !archive.includes("<AutoMenu")) failures.push("legacy sidebar must remain AutoMenu-driven")
if(!shell.includes('event.key.toLowerCase() === "k"')) failures.push("Ctrl/Cmd+K command palette shortcut")
if(!stories.includes("AuthorizationUX")||!stories.includes("ErrorEmptyLoading")) failures.push("application Storybook proof")
if(!screens.includes("StatePanel state=\"empty\"")||!screens.includes("StatePanel state=\"loading\"")||!screens.includes("StatePanel state=\"error\"")) failures.push("empty/loading/error state proof")

if(failures.length){
  console.error("Application framework audit failed:")
  failures.forEach((failure)=>console.error(`- missing ${failure}`))
  process.exit(1)
}
console.log("Application framework audit passed.")
