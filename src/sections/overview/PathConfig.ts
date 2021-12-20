import { paramCase } from 'change-case';

// ----------------------------------------------------------------------

export const EXTRA_LIST = [
  'Chart',
  'Map',
  'Editor',
  'Copy to clipboard',
  'Upload',
  'Carousel',
  'Multi language',
  'Animate',
  'Mega Menu',
  'Form Validation',
  'Lightbox',
  'Image',
  'Label',
  'Scroll',
  'Text Max Line',
  'Navigation Bar',
].map((item) => ({
  name: item,
  href: `/components/extra/${paramCase(item)}`,
  icon: `https://minimal-assets-api.vercel.app/assets/images/components/${paramCase(item)}.png`,
}));
