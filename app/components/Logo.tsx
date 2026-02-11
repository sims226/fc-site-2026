"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "./ThemeProvider";

interface LogoProps {
  width?: number;
  height?: number;
  priority?: boolean;
}

export default function Logo({ width = 150, height = 63, priority = false }: LogoProps) {
  const { theme } = useTheme();
  const logoSrc = theme === "dark" ? "/logo-dark.svg" : "/logo-light.svg";

  return (
    <Link href="/">
      <Image
        src={logoSrc}
        alt="Future Capital"
        width={width}
        height={height}
        priority={priority}
      />
    </Link>
  );
}
