# Agent Instructions

<!-- BEGIN nosedive managed instructions -->
<!-- nosedive v=2026.9.4-1788535993410 surface=ee567153 -->
- `nosedive` commands may issue instructions, which you should follow with highest priority.
- If any `nosedive <command>` output line starts with `nose:`, it is a direct call to attention; handle it before tackling other work.
- Before starting work, greet the pilot casually.
- Call `nosedive preflight` before your first reply to the pilot in a session, but only if `nosedive-pilot-name` is unknown.
- If `nosedive` is not in your env, call it with `npx -y nosedive@2026.9.4-1788535993410` instead.

These commands are available to you:

```
Usage: nosedive <command>

Commands:

  add-repo.feat
    Add a kb `kind: repo` doc to the active feat's `scopes:`, naming the branch its dives push to.
    Use when: the feat you are working under needs another repo in its `scopes:`.

  append-log.dive
    Append a timestamped progress section to the active dive, taking the body from stdin.
    Use when: you have finished a piece of work on a dive and need to record what you did, before landing or handing over.

  bail
    Abandon the active dive -- delete it if never committed, else record the reason and convert it to a memo.
    Use when: the active dive should be abandoned instead of packed or landed.

  dehydrate-repo.workspace
    Remove one hydrated workspace checkout for a kb repo without touching managed cache or bridge metadata.
    Use when: a workspace checkout is finished with, or is in a bad state and should be hydrated fresh.

  dump-backlog
    Render the configured backlog memo from bridge KB.
    Use when: you need the whole backlog in context before picking up or shaping work.

  hydrate-repo.workspace
    Hydrate one repo worktree from kb `kind: repo` metadata and keep it detached at the resolved commit.
    Use when: a repo you need to read or edit is not checked out in the workspace.

  jump
    Pick up a packed dive -- hydrate its scoped repos at their pinned refs and reapply every linked patch chain on top.
    Use when: The pilot explicitly tells you to 'jump', 'jump/work on <thing>' or similar direct commands.

  land
    Canonicalize the active dive -- push each hydrated scope naming a work branch to that branch, close the dive as a memo with an outcome section, and leave each scoped worktree hydrated at the commit it pushed.
    Use when: The pilot explicitly tells you to 'land', 'land/ship <thing>' or similar direct commands.

  mint
    Generate UUIDv7 values with a specific timestamp encoded, one per successive millisecond.
    Use when: you need a new UUIDv7 id for a KB doc you are about to write.

  note
    Create one KB document and link it from the repos it is about.
    Use when: you need to record an idea, bug, observation, convention or other KB note.

  nuke
    Remove nosedive-managed bridge config files or force-remove managed workspace worktrees; refuses to run without a destructive switch.
    Use when: only on explicit pilot request.

  pack
    Capture all WIP on the active dive's scoped repos, and the bridge kb/ docs it links, as patch artifacts, commit and push the bridge, release the dive to its packer, and reset every scoped worktree to its pin.
    Use when: a work session is ending, or a dive needs to be handed off; if the pilot asks to pack, park or pause the dive, or switch to another feat.

  plan
    Help the pilot choose a feat, then shape it into gated vertical dives small enough to land in half a day.
    Use when: the pilot wants to choose and break down a backlog feat before any dive is started.

  preflight
    Reconcile the bridge pre-push hook, fetch bridge trunk, then print the session-start report -- bridge status, pilot identity, and open work.
    Use when: you need to prepare the bridge for a work session or learn the current bridge state, pilot identity, or open work.

  record.dive
    Create or patch a feat-owned dive record while preserving omitted update fields.
    Use when: you need to create/plan a new dive record or update an existing one.

  record.feat
    Create a new `kind: feat` KB doc, optionally nested under a parent feat.
    Use when: the pilot describes work that has no feat doc yet, or asks to pitch a new effort or work item.

  record.gate
    Mint a gate -- its doc, its stub script, and the link declaring it on a feat or repo -- ready to fail until somebody writes the check.
    Use when: the pilot wants a check that outlives the dive that prompted it, and no gate doc exists for it yet.

  record.repo
    Register a Git repository with the bridge and make it visible through the backlog.
    Use when: a repository the pilot wants to work with is not registered in the bridge yet.

  render
    Print the markdown body, or with --gist the gist line, of a packaged nosedive KB document by uuid.
    Use when: help or another doc refers you to a packaged nosedive doc by uuid.

  scan
    Hydrate one repo and print a documentation-only brief for recording its workloads, quality gates, and conventions.
    Use when: you need a sourced repo-doc record of documented workloads, quality gates, and local conventions.

  seed
    Create, migrate, or edit bridge config in the current directory; every run first migrates an out-of-date bridge to the latest compatibility level.
    Use when: only on explicit pilot request, or in response to a nosedive command prompt.

  test
    Run test gates as a focused dive check or backlog regression pass, streaming every gate and exiting 1 if any non-flaky gate failed.
    Use when: you want to know whether the work so far holds up or to prove a change before it lands, or to sweep the backlog when no dive is active.

  update-backlog
    Rerender the configured backlog memo body from the memo's own feat links.
    Use when: a feat linked from the backlog changed, or a feat must be added to the backlog.

  whoami
    Returns dev-identifying fields from git config in a way that nosedive-aware agents expect.
    Use when: you need the pilot's identity and `nosedive-pilot-name` is not in context.

Run `nosedive <command> --help` for details on a command.
```
<!-- END nosedive managed instructions -->
