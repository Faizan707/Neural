import Image from "next/image";

const features = [
  {
    src: "/Resolution Icon.svg",
    alt: "",
    label: "RÉSOLUTION 8K PAR OEIL",
  },
  {
    src: "/Neural Tracking Icon Container.svg",
    alt: "",
    label: "TRACKING NEURONAL ULTRA-PRÉCIS",
  },
  {
    src: "/autio spatial.svg",
    alt: "",
    label: "AUDIO SPATIAL ADAPTATIF",
  },
] as const;

function HeroBadge() {
  return (
    <div className="relative inline-block">
      <span
        aria-hidden="true"
        className="corner-pulse pointer-events-none absolute -top-1 -left-1 h-[0.2306rem] w-[0.2306rem] border-t border-l border-white/70"
        style={{ ["--corner-x" as string]: "-0.125rem", ["--corner-y" as string]: "-0.125rem" }}
      />
      <span
        aria-hidden="true"
        className="corner-pulse pointer-events-none absolute -top-1 -right-1 h-[0.2306rem] w-[0.2306rem] border-t border-r border-white/70"
        style={{ ["--corner-x" as string]: "0.125rem", ["--corner-y" as string]: "-0.125rem" }}
      />
      <span
        aria-hidden="true"
        className="corner-pulse pointer-events-none absolute -bottom-1 -left-1 h-[0.2306rem] w-[0.2306rem] border-b border-l border-white/70"
        style={{ ["--corner-x" as string]: "-0.125rem", ["--corner-y" as string]: "0.125rem" }}
      />
      <span
        aria-hidden="true"
        className="corner-pulse pointer-events-none absolute -right-1 -bottom-1 h-[0.2306rem] w-[0.2306rem] border-b border-r border-white/70"
        style={{ ["--corner-x" as string]: "0.125rem", ["--corner-y" as string]: "0.125rem" }}
      />

      <div className="relative overflow-hidden bg-white/4 px-[0.5275rem] py-[0.2638rem] font-mono text-[0.4613rem] leading-[0.6563rem] tracking-[-0.02em] text-white shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]">
        <span
          aria-hidden="true"
          className="scanline pointer-events-none absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent"
        />
        ENTREZ DANS UNE NOUVELLE DIMENSION
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative isolate w-full overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-size-[1rem_1rem] bg-[linear-gradient(to_right,rgba(255,0,0,0.22)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,0,0,0.22)_1px,transparent_1px)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[#060606] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
      />

      <div className="relative z-10 mx-auto flex max-w-[32.9675rem] flex-col items-center gap-[1.1869rem] px-6 pt-8 pb-4">
        <HeroBadge />

        <h1 className="max-w-[29.6706rem] text-center text-[2.3738rem] font-normal leading-9.5 tracking-[-0.03em] text-white">
          Découvrez le Futur des
          <br />
          Casques Immersifs
        </h1>

        <p className="max-w-[29.6706rem] text-center text-[0.5275rem] leading-[0.725rem] text-white/60">
          Une technologie pensée pour effacer la frontière entre
          <br />
          le monde physique et le monde numérique.
        </p>

        <div className="flex w-full flex-col items-center justify-between gap-4 font-mono text-[0.4613rem] leading-[0.6563rem] tracking-[-0.02em] text-white sm:flex-row">
          {features.map(({ src, alt, label }) => (
            <div key={label} className="flex items-center gap-2">
              <Image
                src={src}
                alt={alt}
                width={24}
                height={24}
                className="h-4 w-4 object-contain"
              />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
