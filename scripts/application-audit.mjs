import { readFile } from "node:fs/promises"
import path from "node:path"

const root=process.cwd()
const shell=await readFile(path.join(root,"src","components","application-shell.tsx"),"utf8")
const screens=await readFile(path.join(root,"src","screens","application-screens.tsx"),"utf8")
const stories=await readFile(path.join(root,"src","stories","V2Screens.stories.tsx"),"utf8")
const archive=await readFile(path.join(root,"src","components","archive-components.tsx"),"utf8")

const failures=[]
for(const proof of ["ApplicationShell","AutoMenu","AppTopbar","Breadcrumbs","BackendStatus","UserMenu","CommandPalette","NotificationsPanel"]){
  if(!shell.includes(proof)) failures.push(`application shell: ${proof}`)
}
for(const proof of ["DashboardScreen","KanbanScreen","CalendarScreen","ChatScreen","AIWorkspaceScreen","ResourcesScreen","ProfileSettingsScreen","AuthorizationScreen","ApplicationStatesScreen"]){
  if(!screens.includes(`export function ${proof}`)) failures.push(`application screen: ${proof}`)
}
for(const id of ["dashboard","cases","kanban","calendar","chat","ai","resources","profile","settings"]){
  if(!shell.includes(`id: item.id`) && !shell.includes("v2NavigationItems")) failures.push(`AutoMenu resource derivation ${id}`)
}
if(!shell.includes("v2NavigationItems")) failures.push("navigation must derive from v2 contract")
if(!shell.includes("requiredPermission")) failures.push("authorization-aware AutoMenu")
if(!archive.includes('data-navigation="auto-menu"') || !archive.includes("<AutoMenu")) failures.push("legacy sidebar must remain AutoMenu-driven")
if(!shell.includes('event.key.toLowerCase() === "k"')) failures.push("Ctrl/Cmd+K command palette shortcut")
if(!shell.includes("Open case by ID")||!shell.includes("Create review task")||!shell.includes("Ask AI Workspace")) failures.push("command palette quick actions")
if(!shell.includes("Mark all read")) failures.push("notifications mark-all-read")
for(const id of ["17","18","19","20","21","22","23","24","25","26","27"]){
  if(!stories.includes(`S${id}`)) failures.push(`Storybook screen ${id}`)
}
for(const state of ['state="empty"','state="loading"','state="error"','state="offline"','state="forbidden"']){
  if(!screens.includes(state)) failures.push(`application state proof ${state}`)
}
for (const proof of ["MWHeaderNavigationItem", "homeHref", "searchHref", "navigation?: MWHeaderNavigationItem[]"]) {
  if (!archive.includes(proof)) failures.push(`MWHeader navigation contract: ${proof}`)
}

if(failures.length){
  console.error("Application framework audit failed:")
  failures.forEach((failure)=>console.error(`- missing ${failure}`))
  process.exit(1)
}
console.log("Application framework audit passed.")
