export function getLuminance(hex) {
  const clean = hex.replace("#", "").slice(0, 6);

  const r = parseInt(clean.substring(0, 2), 16);
  const g = parseInt(clean.substring(2, 4), 16);
  const b = parseInt(clean.substring(4, 6), 16);

  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

export function sortPalette(palette) {
  return Object.entries(palette)
    .map(([title, value]) => ({ title, value }))
    .sort((a, b) => getLuminance(b.value) - getLuminance(a.value));
}

export function hexToRgba(hex) {
  const clean = hex.replace("#", "");

  const r = parseInt(clean.substring(0, 2), 16);
  const g = parseInt(clean.substring(2, 4), 16);
  const b = parseInt(clean.substring(4, 6), 16);
  const a = clean.length === 8 ? parseInt(clean.substring(6, 8), 16) / 255 : 1;

  return `rgba(${r}, ${g}, ${b}, ${a})`;
}
