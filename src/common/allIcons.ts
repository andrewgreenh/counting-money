import * as brandIcons from '@fortawesome/free-brands-svg-icons';
import * as solidIcons from '@fortawesome/free-solid-svg-icons';

export const allIcons = [...Object.entries(solidIcons), ...Object.entries(brandIcons)]
  .filter(([key, value]) => key.startsWith('fa') && key[2] && key[2].toUpperCase() === key[2])
  .map(([key, value]) => ({ ...(value as solidIcons.IconDefinition), key }));
