export type Hobby = {
  label: string;
  detail: string;
};

export type RaveEvent = {
  name: string;
  timing: string;
  status: "went" | "planned";
};

export const hobbies: Hobby[] = [
  {
    label: "Building",
    detail: "Software, experiments, content, and small ideas that turn into bigger ones.",
  },
  {
    label: "Training",
    detail: "Sports, lifting, and keeping enough energy for the rest of life.",
  },
  {
    label: "Raving",
    detail: "EDM festivals, late nights, and finding the next set worth remembering.",
  },
];

export const raveTimeline: RaveEvent[] = [
  {
    name: "Recent festival",
    timing: "Went",
    status: "went",
  },
  {
    name: "Toronto show",
    timing: "Went",
    status: "went",
  },
  {
    name: "Next festival",
    timing: "Planned",
    status: "planned",
  },
  {
    name: "Next rave night",
    timing: "Planned",
    status: "planned",
  },
];
