import { spawnSync } from "node:child_process";

const repoPath = process.cwd();

const getOpenCommand = () => {
  if (process.platform === "win32") {
    return { command: "explorer", args: [repoPath] };
  }

  if (process.platform === "darwin") {
    return { command: "open", args: [repoPath] };
  }

  return { command: "xdg-open", args: [repoPath] };
};

const { command, args } = getOpenCommand();

const result = spawnSync(command, args);
const openedSuccessfully = result.status === 0;

if (!openedSuccessfully) {
  const failureReason = result.error
    ? `${result.error.message}${result.error.code ? ` (${result.error.code})` : ""}`
    : result.status !== null
      ? `${command} failed with exit code ${result.status}`
      : "unknown error";
  console.error(
    `Failed to open repository folder automatically (${failureReason}). Please open ${repoPath} manually.`,
  );
}
