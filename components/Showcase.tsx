import Image from "next/image";

const gridFilled = [
  false,
  true,
  false,
  true,
  true,
  true,
  false,
  true,
  false,
] as const;

function ProductGridIcon() {
  return (
    <span className="flex h-[1.055rem] w-[1.055rem] shrink-0 items-center justify-center rounded-[0.0656rem] bg-[#171717]">
      <span className="grid grid-cols-3 gap-[0.0625rem]">
        {gridFilled.map((filled, i) => (
          <span
            key={i}
            className={`h-[0.1056rem] w-[0.1056rem] rounded-full ${
              filled ? "bg-white" : "bg-white/12"
            }`}
          />
        ))}
      </span>
    </span>
  );
}

function PulseDot() {
  return (
    <span className="relative inline-flex h-3 w-3 items-center justify-center">
      <span
        aria-hidden="true"
        className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/50"
      />
      <span className="relative inline-block h-2.5 w-2.5 rounded-full border border-white/40 bg-white shadow-[0_0_8px_0_rgba(255,255,255,0.6)]" />
    </span>
  );
}

function CardCorners() {
  const cornerBase =
    "corner-pulse pointer-events-none absolute z-10 h-3 w-3 border-white/70";
  return (
    <>
      <span
        aria-hidden="true"
        className={`${cornerBase} top-0 left-0 border-t border-l`}
        style={{
          ["--corner-x" as string]: "-0.1875rem",
          ["--corner-y" as string]: "-0.1875rem",
          ["--corner-duration" as string]: "3.2s",
        }}
      />
      <span
        aria-hidden="true"
        className={`${cornerBase} top-0 right-0 border-t border-r`}
        style={{
          ["--corner-x" as string]: "0.1875rem",
          ["--corner-y" as string]: "-0.1875rem",
          ["--corner-duration" as string]: "3.2s",
        }}
      />
      <span
        aria-hidden="true"
        className={`${cornerBase} bottom-0 left-0 border-b border-l`}
        style={{
          ["--corner-x" as string]: "-0.1875rem",
          ["--corner-y" as string]: "0.1875rem",
          ["--corner-duration" as string]: "3.2s",
        }}
      />
      <span
        aria-hidden="true"
        className={`${cornerBase} bottom-0 right-0 border-b border-r`}
        style={{
          ["--corner-x" as string]: "0.1875rem",
          ["--corner-y" as string]: "0.1875rem",
          ["--corner-duration" as string]: "3.2s",
        }}
      />
    </>
  );
}

function ProductCard() {
  return (
    <div className="relative w-[10.3519rem]">
      <CardCorners />

      <span className="absolute -left-1.5 top-[68%] z-10 hidden -translate-y-1/2 md:block">
        <PulseDot />
      </span>

      <div className="relative flex flex-col gap-3 overflow-hidden border border-white/10 bg-linear-to-b from-white/10 to-white/4 px-4.25 py-3 shadow-2xl">
        <span
          aria-hidden="true"
          className="scanline pointer-events-none absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent"
          style={{ ["--scan-duration" as string]: "3.5s" }}
        />
        <div className="px-3">
          <Image
            src="/Product_Image-removebg-preview.png"
            alt="Neural 2.0 headset"
            width={323}
            height={185}
            className="mx-auto block h-15.5 w-27 object-contain"
          />
        </div>
        <div>
          <h3 className="text-base font-semibold text-white">Neural 2.0</h3>
          <p className="mt-0.5 text-xs text-white/60">3 290€</p>
        </div>
        <button
          type="button"
          className="flex cursor-pointer items-center justify-between gap-2 rounded-md bg-white px-2.5 py-1.5 text-xs font-medium text-[#060606] transition-colors hover:bg-white/90"
        >
          <span className="whitespace-nowrap">Pré-commander</span>
          <ProductGridIcon />
        </button>
      </div>
    </div>
  );
}

export default function Showcase() {
  return (
    <section className="relative isolate w-full overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 [background-size:40px_40px] [background-image:linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[#060606] [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black)]"
      />

      <Image
        src="/Light above.svg"
        alt=""
        width={877}
        height={624}
        aria-hidden="true"
        className="pointer-events-none absolute top-[20%] left-[32%] h-auto w-full -translate-x-1/2 -translate-y-1/2 mix-blend-plus-lighter"
      />

      <div className="relative z-10 mx-auto max-w-[54.7888rem] px-6 pt-4 pb-0">
        <div className="relative flex flex-col items-center justify-center gap-12 md:flex-row md:items-center md:gap-16">
          <Image
            src="/Sparkles and Light Effects.svg"
            alt=""
            width={499}
            height={393}
            aria-hidden="true"
            className="pointer-events-none absolute top-[36%] left-[49%] hidden h-auto w-[67%] -translate-x-1/2 -translate-y-1/2 mix-blend-plus-lighter md:block"
          />

          <div className="relative w-full max-w-105.5 shrink-0">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute top-[32%] right-[14%] h-[50%] w-[13%] -translate-y-1/2 blur-2xl mix-blend-plus-lighter md:w-[13%] md:right-[14%]"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(255,255,255,0.45), rgba(255,255,255,0.25) 30%, rgba(191,222,255,0.18) 55%, transparent 85%)",
              }}
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute top-[35%] right-[8%] h-[55%] w-[28%] -translate-y-1/2 blur-3xl mix-blend-plus-lighter md:hidden"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(255,255,255,0.7), rgba(255,255,255,0.4) 30%, rgba(191,222,255,0.25) 55%, transparent 85%)",
              }}
            />

            <Image
              src="/Background_Image-removebg-preview.png"
              alt="Person experiencing Neural 2.0"
              width={591}
              height={422}
              className="relative h-auto w-full"
            />
          </div>

          <div
            aria-hidden="true"
            className="-my-6 flex flex-col items-center md:hidden"
          >
            <div className="h-10 border-l border-dashed border-white/40" />
            <PulseDot />
          </div>

          <ProductCard />
        </div>
      </div>
    </section>
  );
}
