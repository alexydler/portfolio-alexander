"use client";

import { Children, cloneElement, isValidElement, type ReactElement, type ReactNode } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const onePageAtATime = {
  all: {
    breakpoint: { max: 4000, min: 0 },
    items: 1,
  },
};

function groupCertificates(children: ReactNode, size: number) {
  const certificates = Children.toArray(children).map((child) =>
    isValidElement(child)
      ? cloneElement(child as ReactElement<{ compact?: boolean }>, { compact: true })
      : child
  );

  return Array.from({ length: Math.ceil(certificates.length / size) }, (_, index) =>
    certificates.slice(index * size, index * size + size)
  );
}

export default function CertificatesCarousel({ children }: { children: ReactNode }) {
  const desktopPages = groupCertificates(children, 4);
  const mobilePages = groupCertificates(children, 1);

  return (
    <>
      <div className="hidden sm:block">
        <Carousel responsive={onePageAtATime} infinite swipeable draggable keyBoardControl>
          {desktopPages.map((page, index) => (
            <div key={index} className="grid grid-cols-2 gap-4 px-12 py-2">
              {page}
            </div>
          ))}
        </Carousel>
      </div>

      <div className="sm:hidden">
        <Carousel responsive={onePageAtATime} infinite swipeable draggable keyBoardControl>
          {mobilePages.map((page, index) => (
            <div key={index} className="grid grid-cols-1 gap-3 px-9 py-2">
              {page}
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
}
