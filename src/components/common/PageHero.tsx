import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";

export interface PageHeroButtonProps {
  label: string;
  href?: string;
  onClick?: () => void;
  className?: string;
}

export interface PageHeroProps {
  title: string;
  pageName?: string;
  imageSrc?: string;
  imageAlt?: string;
  backgroundImage?: string;
  backgroundImageAlt?: string;
  backgroundImageOpacity?: number | string | boolean;
  overlayOpacity?: number | string;
  button?: PageHeroButtonProps | ReactNode;
}

export default function PageHero({
  title,
  pageName,
  imageSrc,
  imageAlt,
  backgroundImage,
  backgroundImageAlt,
  backgroundImageOpacity,
  overlayOpacity,
  button,
}: PageHeroProps) {
  const currentBreadcrumb = pageName || title;

  const renderButton = () => {
    if (!button) return null;

    // If custom React node is passed
    if (typeof button !== "object" || !("label" in button)) {
      return (
        <div className="mt-8 flex flex-wrap items-center gap-4">
          {button as ReactNode}
        </div>
      );
    }

    const btnProps = button as PageHeroButtonProps;
    const buttonClass =
      btnProps.className ||
      "btn-success-story hover:scale-[1.02] transition-transform";

    if (btnProps.href) {
      return (
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link href={btnProps.href} className={buttonClass}>
            {btnProps.label}
          </Link>
        </div>
      );
    }

    return (
      <div className="mt-8 flex flex-wrap items-center gap-4">
        <button
          type="button"
          onClick={btnProps.onClick}
          className={buttonClass}
        >
          {btnProps.label}
        </button>
      </div>
    );
  };

  return (
    <section className="relative overflow-hidden bg-primary-dark bg-blue-gradient min-h-[420px] lg:min-h-[480px] flex items-center">
      {/* Background glow layers & optional image */}
      <div className="pointer-events-none absolute inset-0">
        {/* Default deep-blue background when no background image */}
        {!backgroundImage && (
          <>
            <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-[#030f2e] to-primary-dark" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_10%_70%,rgba(0,29,96,0.75),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_30%,rgba(14,51,136,0.4),transparent_45%)]" />
          </>
        )}

        {/* Optional background image */}
        {backgroundImage && (
          <>
            <div
              className="absolute inset-0 z-0"
              style={{
                opacity:
                  typeof backgroundImageOpacity === "number"
                    ? backgroundImageOpacity
                    : typeof backgroundImageOpacity === "string"
                      ? parseFloat(backgroundImageOpacity) || 1
                      : typeof backgroundImageOpacity === "boolean" &&
                          backgroundImageOpacity
                        ? 0.5
                        : 1,
              }}
            >
              <Image
                src={backgroundImage}
                alt={backgroundImageAlt || title}
                fill
                className="object-cover object-center"
                priority
              />
            </div>

            {/* Dark overlay on top of image (only rendered when overlayOpacity > 0) */}
            {overlayOpacity !== undefined && Number(overlayOpacity) > 0 && (
              <div
                className="absolute inset-0 bg-[#020612] z-10 pointer-events-none"
                style={{
                  opacity:
                    typeof overlayOpacity === "number"
                      ? overlayOpacity
                      : parseFloat(overlayOpacity) || 0,
                }}
              />
            )}
          </>
        )}

        {/* Bottom fade to dark (only when no background image) */}
        {!backgroundImage && (
          <>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary-dark/80 z-10" />
            <div className="absolute inset-0 bg-primary-gradient z-10" />
          </>
        )}
      </div>

      {/* Main Container */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col justify-center px-6 pb-12 pt-[140px] sm:px-10 sm:pt-[160px] lg:px-16 lg:pt-[175px]">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
          {/* Text Content */}
          <div
            className={`${imageSrc ? "lg:col-span-7" : "lg:col-span-12"} max-w-[720px]`}
          >
            {/* Breadcrumb Navigation */}

            {/* Page Title */}
            <h1 className="font-sans text-3xl font-bold tracking-tight text-txt-white sm:text-4xl lg:text-[52px] lg:leading-[1.15]">
              {title}
            </h1>

            <nav className="mb-4 flex items-center gap-2 text-caption-lg sm:text-caption text-txt-white/70">
              <Link
                href="/"
                className="font-medium text-[white] transition-colors hover:text-txt-white"
              >
                Home
              </Link>
              <svg
                className="h-3.5 w-3.5 text-[white]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>

              <span className="font-semibold text-txt-white">
                {currentBreadcrumb}
              </span>
            </nav>

            {/* Optional Button */}
            {renderButton()}
          </div>

          {/* Optional Right Side Image */}
          {imageSrc && (
            <div className="relative flex justify-center lg:col-span-5 lg:justify-end">
              <div className="relative h-[240px] w-full max-w-[440px] sm:h-[300px] lg:h-[340px]">
                <Image
                  src={imageSrc}
                  alt={imageAlt || title}
                  fill
                  priority
                  className="object-contain object-bottom drop-shadow-2xl"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
