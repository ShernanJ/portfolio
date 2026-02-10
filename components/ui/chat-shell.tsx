type ChatShellProps = {
  open: boolean;
  onClose: () => void;
};

export function ChatShell({ open, onClose }: ChatShellProps) {
  if (!open) return null;

  return (
    <aside className="h-screen w-full max-w-md border-l border-border bg-card/95 shadow-xl backdrop-blur sticky top-0">
      <div className="flex items-center justify-between border-b border-border px-4 py-3">
        <span className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
          shernan.chat
        </span>
        <button
          type="button"
          onClick={onClose}
          className="text-xs text-muted-foreground hover:text-foreground"
        >
          close
        </button>
      </div>
      <div className="flex h-[calc(100vh-3rem)] flex-col">
        <div className="flex-1 overflow-y-auto px-4 py-4 text-left text-sm text-muted-foreground space-y-3">
          <p>
            chat coming soon — ask things like &quot;what has shernan
            shipped?&quot; or &quot;what&apos;s the current stack?&quot; and
            get answers from a curated docset. for now this is just the shell
            of the interface.
          </p>
        </div>
        <form className="border-t border-border px-4 py-3">
          <div className="flex gap-2">
            <input
              disabled
              className="flex-1 rounded-full border border-border bg-background/60 px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 disabled:cursor-not-allowed"
              placeholder="type a question about shernan javier..."
            />
            <button
              type="button"
              disabled
              className="rounded-full bg-primary px-4 py-2 text-xs font-medium text-primary-foreground disabled:cursor-not-allowed disabled:opacity-60"
            >
              send
            </button>
          </div>
        </form>
      </div>
    </aside>
  );
}

