import * as React from "react";

interface AnnouncementProps {
  badge: string;
  message: string;
  href?: string;
  children?: React.ReactNode; // For custom icon or extra content
  className?: string;
  iconPosition?: "left" | "right";
}

export function Announcement({
  badge,
  message,
  href = "#",
  children,
  className = "",
  iconPosition = "right",
}: AnnouncementProps) {
  return (
    <a
      href={href}
      className={`inline-flex items-center gap-2 rounded-full bg-background/10 backdrop-blur px-1 py-1 font-semibold text-sm shadow-sm hover:bg-background/20 transition border border-background/10 ${className}`}
      style={{ fontWeight: 600 }}
    >
      {badge && (
        <span className="flex items-center justify-between h-6 px-2 rounded-full bg-background text-foreground text-xs font-bold mr-1">
          {badge}
        </span>
      )}
      {iconPosition === "left" && children && (
        <span className="mr-1">{children}</span>
      )}
      {message && (
        <span className="font-semibold text-sm">
          {message}
        </span>
      )}
      {iconPosition === "right" && children && (
        <span className="ml-1">{children}</span>
      )}
    </a>
  );
}
