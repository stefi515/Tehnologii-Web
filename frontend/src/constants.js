export const CONDITII = [
  { value: "new", label: "New" },
  { value: "used", label: "Used" },
  { value: "open-box", label: "Open-Box" },
];

export const ETICHETE_CONDITIE = Object.fromEntries(
  CONDITII.map((c) => [c.value, c.label])
);