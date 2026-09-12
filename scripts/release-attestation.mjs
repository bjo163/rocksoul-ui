import { pathToFileURL } from "node:url"
import { resolve } from "node:path"

const COMMIT_SHA = /^[0-9a-f]{40}$/

export function assertExactReleaseSha(validatedSha, currentMainSha) {
  if (!COMMIT_SHA.test(validatedSha ?? "")) {
    throw new Error(`Invalid validated release SHA: ${validatedSha ?? "missing"}`)
  }
  if (!COMMIT_SHA.test(currentMainSha ?? "")) {
    throw new Error(`Invalid current main SHA: ${currentMainSha ?? "missing"}`)
  }
  if (validatedSha !== currentMainSha) {
    throw new Error(`Stale release validation: validated=${validatedSha} current-main=${currentMainSha}`)
  }

  return Object.freeze({ validatedSha, currentMainSha })
}

const invokedDirectly = process.argv[1]
  && import.meta.url === pathToFileURL(resolve(process.argv[1])).href

if (invokedDirectly) {
  const [, , validatedSha, currentMainSha] = process.argv
  try {
    const result = assertExactReleaseSha(validatedSha, currentMainSha)
    console.log(`Validated exact main SHA: ${result.validatedSha}`)
  } catch (error) {
    console.error(error instanceof Error ? error.message : String(error))
    process.exit(1)
  }
}
