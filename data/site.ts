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
    { label: "GitHub", href: "#", placeholder: true },
    { label: "LinkedIn", href: "#", placeholder: true },
    { label: "X", href: "#", placeholder: true },
    { label: "Resume", href: "#", placeholder: true },
  ] satisfies SiteLink[],
};
