import { spawnSync } from "node:child_process";

const url = process.env.APP_URL || "http://localhost:3000";

const getOpenCommand = () => {
  if (process.platform === "win32") {
    return { command: "cmd", args: ["/c", "start", "", url] };
  }

  if (process.platform === "darwin") {
    return { command: "open", args: [url] };
  }

  return { command: "xdg-open", args: [url] };
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
    `Failed to open browser automatically (${failureReason}). Please open ${url} manually.`,
  );
}
