export type SiteLink = {
  label: string;
  href: string;
  external?: boolean;
  placeholder?: boolean;
};

export const site = {
  name: "Shernan Javier",
  role: "Software Engineer",
  location: "Toronto, Canada",
  description:
    "I have fun building software, creating content, and partying at EDM festivals / raves\u00A0😎",
  links: [
    { label: "GitHub", href: "https://github.com/ShernanJ", external: true },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/shernanjavier",
      external: true,
    },
    { label: "X", href: "https://x.com/shernanjavier", external: true },
    { label: "Resume", href: "/Shernan_Javier_Resume.pdf" },
    { label: "Contact", href: "mailto:shernanjavier@gmail.com" },
  ] satisfies SiteLink[],
};
