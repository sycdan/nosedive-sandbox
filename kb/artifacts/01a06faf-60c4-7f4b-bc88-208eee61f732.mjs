export async function run(ctx) {
	/**
	 * Minted by `nosedive record.gate` and deliberately failing. Replace this body
	 * with the check itself: return false (or throw) when what it proves does not
	 * hold, and return anything else when it does.
	 */
	console.error(`ctx: ${JSON.stringify(ctx, null, 2)}`);
	console.error(`gate ${ctx.gateId} is unimplemented -- write the check in kb/artifacts/01a06faf-60c4-7f4b-bc88-208eee61f732.mjs`);
	return false;
}
