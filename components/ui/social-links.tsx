export function SocialLinks() {
  return (
    <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
      <a
        href="https://github.com/ShernanJ"
        target="_blank"
        rel="noreferrer"
        className="underline-offset-4 hover:underline cursor-pointer"
      >
        github
      </a>
      <span className="h-1 w-1 rounded-full bg-border" />
      <a
        href="https://www.linkedin.com/in/shernanjavier"
        target="_blank"
        rel="noreferrer"
        className="underline-offset-4 hover:underline cursor-pointer"
      >
        linkedin
      </a>
      <span className="h-1 w-1 rounded-full bg-border" />
      <a
        href="mailto:shernanjavier@gmail.com"
        className="underline-offset-4 hover:underline cursor-pointer"
      >
        email
      </a>
    </div>
  );
}

