import { existsSync } from "node:fs";
import { join } from "node:path";

export async function run(ctx) {
	const repo = ctx.repos.BASE;
	if (!repo) throw new Error("gate needs the BASE repo hydrated; it is not in ctx.repos");
	const note = join(ctx.bridgeRoot, repo.root, "goodbye.md");
	if (!existsSync(note)) throw new Error(`no goodbye note at ${note}`);
	console.error("gate: the goodbye note is there");
}
