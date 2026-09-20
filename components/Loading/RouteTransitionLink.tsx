"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, type ComponentProps, type MouseEvent } from "react";
import RouteLoading from "./RouteLoading";

type Props = Omit<ComponentProps<typeof Link>, "href"> & {
  href: string;
};

export default function RouteTransitionLink({ href, children, onClick, ...props }: Props) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) return;

    event.preventDefault();
    setLoading(true);

    window.setTimeout(() => router.push(href), 250);
  };

  return (
    <>
      <Link href={href} onClick={handleClick} {...props}>{children}</Link>
      {loading && <RouteLoading />}
    </>
  );
}
