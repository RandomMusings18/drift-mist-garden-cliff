import { useEffect, useState, type ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Bookmark, X } from "lucide-react";
import { guides } from "@/data/guides";
import { shardById } from "@/data/shards";
import { rarityLabel } from "@/data/types";
import { cn } from "@/lib/cn";
import { usePins } from "@/lib/pins";
import { skillIcons } from "./icons";

function Mark() {
  return (
    <svg viewBox="0 0 24 24" className="size-7 text-gold" aria-hidden="true">
      <path fill="currentColor" d="M12 1.5 20.5 8.2 12 22.5 3.5 8.2Z" />
      <path fill="var(--color-bg)" d="M12 6.5 15.6 9.1 12 16.4 8.4 9.1Z" />
    </svg>
  );
}

export function Shell({
  children,
  subnav,
}: {
  children: ReactNode;
  subnav?: ReactNode;
}) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const ids = usePins((s) => s.ids);
  const clear = usePins((s) => s.clear);
  const toggle = usePins((s) => s.toggle);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    void usePins.persist.rehydrate();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="min-h-screen bg-bg text-fg">
      <header className="sticky top-0 z-40 border-b border-line bg-bg">
        <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3">
          <Link to="/" className="flex min-h-11 items-center gap-2">
            <Mark />
            <span className="font-display text-xl leading-none">Shard Atlas</span>
          </Link>
          <nav className="ml-auto flex items-center gap-2">
            <Link
              to="/catalog"
              search={{ q: "", skill: "" }}
              className={cn(
                "inline-flex min-h-11 items-center px-3 text-sm",
                pathname.startsWith("/catalog") ? "text-gold" : "text-muted",
              )}
            >
              All shards
            </Link>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="inline-flex min-h-11 items-center gap-1.5 rounded-card border border-line bg-raised px-3 text-sm text-fg"
            >
              <Bookmark className="size-4 text-gold" aria-hidden="true" />
              List
              <span className="text-muted">{ids.length}</span>
            </button>
          </nav>
        </div>
        <div className="mx-auto max-w-6xl overflow-x-auto px-4 pb-2">
          <nav className="flex w-max gap-1">
            {guides.map((guide) => {
              const Icon = skillIcons[guide.slug];
              const active = pathname === `/skill/${guide.slug}`;
              return (
                <Link
                  key={guide.slug}
                  to="/skill/$skill"
                  params={{ skill: guide.slug }}
                  className={cn(
                    "inline-flex min-h-11 items-center gap-1.5 border-b-2 px-3 text-sm",
                    active ? "border-gold text-fg" : "border-transparent text-muted",
                  )}
                >
                  {Icon && <Icon className="size-4" aria-hidden="true" />}
                  {guide.name}
                </Link>
              );
            })}
          </nav>
        </div>
        {subnav}
      </header>
      <main className="mx-auto max-w-6xl px-4 py-8">{children}</main>
      <footer className="mx-auto max-w-6xl px-4 pb-12 text-sm text-faint">
        Ranges are attribute level I through X, from the Hypixel SkyBlock wiki. Copies-to-max is
        how many shards a full syphon eats. This is not a price tracker.
      </footer>

      {open && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <button
            type="button"
            aria-label="Close syphon list"
            className="absolute inset-0 bg-ink/70"
            onClick={() => setOpen(false)}
          />
          <aside className="relative flex h-full w-full max-w-md flex-col border-l border-line bg-raised text-fg">
            <div className="flex items-center justify-between border-b border-line px-4 py-3">
              <h2 className="font-display text-2xl">Syphon list</h2>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex size-11 items-center justify-center"
                aria-label="Close"
              >
                <X className="size-5" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-4 py-3">
              {ids.length === 0 ? (
                <p className="text-sm text-muted">
                  Nothing tracked yet. Pin a shard on any skill and it stays in this browser.
                </p>
              ) : (
                <ul className="space-y-2">
                  {ids.map((id) => {
                    const shard = shardById[id];
                    if (!shard) return null;
                    return (
                      <li
                        key={id}
                        className="flex items-start justify-between gap-3 border-b border-line py-3"
                      >
                        <div>
                          <p className="text-fg">{shard.shard}</p>
                          <p className="text-sm text-muted">
                            {shard.attribute} · {rarityLabel(shard.rarity)} · {shard.id}
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => toggle(id)}
                          className="min-h-11 shrink-0 text-sm text-gold"
                        >
                          Remove
                        </button>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
            {ids.length > 0 && (
              <div className="border-t border-line p-4">
                <button
                  type="button"
                  onClick={clear}
                  className="min-h-11 text-sm text-muted"
                >
                  Clear list
                </button>
              </div>
            )}
          </aside>
        </div>
      )}
    </div>
  );
}
