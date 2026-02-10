import Image from "next/image";

type HeroAvatarProps = {
  src: string;
  alt?: string;
  badgeSrc?: string;
  badgeAlt?: string;
};

export function HeroAvatar({
  src,
  alt = "avatar",
  badgeSrc,
  badgeAlt,
}: HeroAvatarProps) {
  return (
    <div className="relative inline-block">
      <div className="h-[60px] w-[60px] md:h-[80px] md:w-[80px] overflow-hidden rounded-[14px] border border-white/10 bg-zinc-900 shadow-[0_18px_45px_rgba(15,23,42,0.72)] transition-transform duration-150 ease-out hover:-translate-y-0.5">
        <Image
          src={src}
          alt={alt}
          width={80}
          height={80}
          className="h-full w-full object-cover"
          priority
        />
      </div>

      <a
        href="https://www.cansbridgescholars.com/"
        target="_blank"
        rel="noreferrer"
        className="absolute -top-2 -right-2 flex h-[24px] w-[24px] items-center justify-center rounded-full bg-[#7C3AED] shadow-[0_0_14px_rgba(124,58,237,0.75)] md:h-[26px] md:w-[26px] cursor-pointer transition-shadow duration-150 ease-out hover:shadow-[0_0_22px_rgba(124,58,237,1)]"
      >
  {badgeSrc ? (
    <Image
      src={badgeSrc}
      alt={badgeAlt ?? "cansbridge badge"}
      width={16}
      height={16}
      className="h-full w-full rounded-full object-cover"
    />
  ) : (
    <span className="text-[10px] font-medium text-white">C</span>
  )}
</a>
    </div>
  );
}

