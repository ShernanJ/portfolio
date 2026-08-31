import lifeItemsJson from "@/data/life.json";

export type LifeMeta = {
  label: string;
  value: string;
};

export type LifeSectionContent = {
  body: string[];
  id: string;
  label: string;
  title: string;
};

export type LifeItem = {
  alt?: string;
  aspect: string;
  background: string;
  image?: string;
  isClickable?: boolean;
  meta?: LifeMeta[];
  objectPosition?: string;
  sections: LifeSectionContent[];
  shortDescription?: string;
  slug: string;
  title: string;
};

export const lifeItems = lifeItemsJson as LifeItem[];

export function getLifeItem(slug: string) {
  return lifeItems.find((item) => item.isClickable && item.slug === slug);
}

export function getLifeItemSlugs() {
  return lifeItems
    .filter((item) => item.isClickable)
    .map((item) => item.slug);
}
