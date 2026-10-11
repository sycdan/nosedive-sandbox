import { relative, sep } from "node:path";
import { fileURLToPath } from "node:url";

export async function run(ctx) {
	/**
	 * Minted by `nosedive record.gate` and deliberately failing. Replace this body
	 * with the check itself: return false (or throw) when what it proves does not
	 * hold, and return anything else when it does.
	 */
	const script = relative(ctx.bridgeRoot, fileURLToPath(import.meta.url)).split(sep).join("/");
	console.error(`ctx: ${JSON.stringify(ctx, null, 2)}`);
	console.error(`gate ${ctx.gateId} is unimplemented -- write the check in ${script}`);
	return false;
}
