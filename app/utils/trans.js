export const trans = value => {
    switch (value) {
        case 'finances': return 'finanzas';
        case 'sports': return 'deportes';
        case 'cars': return 'carros';
        default: return value;
    }
};
  