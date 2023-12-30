/* eslint-disable jsx-a11y/anchor-has-content */
import NextLink from "next/link";
import type { AnchorHTMLAttributes } from "react";

export function Link({
  href,
  ...rest
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
  let isInternalLink = href && href.startsWith("/");
  let isAnchorLink = href && href.startsWith("#");

  if (isInternalLink) {
    var url: URL = new URL(href ?? "", "http://localhost:3000");
    return <NextLink href={url} {...rest} />;
  }

  if (isAnchorLink) {
    return <a href={href} {...rest} />;
  }

  return <a target="_blank" rel="noopener noreferrer" href={href} {...rest} />;
}
