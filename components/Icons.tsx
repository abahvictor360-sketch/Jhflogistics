import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

export function ShipIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 18.5c1.2 0 1.2 1 2.4 1s1.2-1 2.4-1 1.2 1 2.4 1 1.2-1 2.4-1 1.2 1 2.4 1 1.2-1 2.4-1" />
      <path d="M4.5 15.5 6 10h12l1.5 5.5" />
      <path d="M12 10V5" />
      <path d="M9 7h6" />
    </svg>
  );
}

export function TruckIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 16V7h10v9" />
      <path d="M13 10h4l4 3.5V16h-3" />
      <circle cx="7.5" cy="17.5" r="1.8" />
      <circle cx="17" cy="17.5" r="1.8" />
      <path d="M9.3 17.5h5.9" />
    </svg>
  );
}

export function PlaneIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M10.5 12.5 3 10.2l1.4-1.5 8 .9 4-3.6c.9-.8 2.3-.9 2.9-.2.6.7.3 2-.6 2.8l-3.6 3.9.9 8-1.5 1.4-2.3-7.5-2.9 2.6.2 2.6-1.2 1-1.3-2.8-2.8-1.3 1-1.2 2.6.2z" />
    </svg>
  );
}

export function TrainIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="6" y="4" width="12" height="12" rx="3" />
      <path d="M6 10h12" />
      <path d="M9.5 13.2h.01M14.5 13.2h.01" />
      <path d="m8 16-2 4M16 16l2 4" />
    </svg>
  );
}

export function WarehouseIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 20V9.5L12 5l9 4.5V20" />
      <path d="M7 20v-7h10v7" />
      <path d="M7 16.5h10" />
    </svg>
  );
}

export function GlobeIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17" />
      <path d="M12 3.5c2.2 2.3 3.4 5.3 3.4 8.5S14.2 18.2 12 20.5c-2.2-2.3-3.4-5.3-3.4-8.5S9.8 5.8 12 3.5Z" />
    </svg>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3.5 5 6v6c0 4 2.9 7.3 7 8.5 4.1-1.2 7-4.5 7-8.5V6Z" />
      <path d="m9.2 12 2 2 3.6-3.8" />
    </svg>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 1.8" />
    </svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6.5 4h3l1.5 3.6-2 1.4a11.5 11.5 0 0 0 5.9 5.9l1.4-2L20 14.5v3a2.5 2.5 0 0 1-2.7 2.5A15.5 15.5 0 0 1 4 6.7 2.5 2.5 0 0 1 6.5 4Z" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="5.5" width="18" height="13" rx="2.5" />
      <path d="m4 8 8 5 8-5" />
    </svg>
  );
}

export function PinIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s6.5-5.6 6.5-10a6.5 6.5 0 1 0-13 0c0 4.4 6.5 10 6.5 10Z" />
      <circle cx="12" cy="11" r="2.4" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m5 12.5 4.5 4.5L19 7.5" />
    </svg>
  );
}

export function ArrowIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export function BoxIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3.5 20 8v8l-8 4.5L4 16V8Z" />
      <path d="m4 8 8 4.5L20 8" />
      <path d="M12 12.5v8" />
    </svg>
  );
}

export function RouteIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="6" cy="6.5" r="2.5" />
      <circle cx="18" cy="17.5" r="2.5" />
      <path d="M8.5 6.5h5a4 4 0 0 1 0 8h-3a4 4 0 0 0 0 3h5" />
    </svg>
  );
}

export function QuoteIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M9.8 5.5c-3 1.4-5 4.3-5 7.9 0 3.2 1.9 5.1 4.3 5.1 2.1 0 3.7-1.6 3.7-3.6 0-2-1.4-3.4-3.3-3.4-.4 0-.8.1-1 .2.4-1.7 1.9-3.3 3.6-4.2Zm9.4 0c-3 1.4-5 4.3-5 7.9 0 3.2 1.9 5.1 4.3 5.1 2.1 0 3.7-1.6 3.7-3.6 0-2-1.4-3.4-3.3-3.4-.4 0-.8.1-1 .2.4-1.7 1.9-3.3 3.6-4.2Z" />
    </svg>
  );
}

export function StarIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="m12 3.6 2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8L3.5 9.8l5.9-.9Z" />
    </svg>
  );
}
