// Fonction simplifiée pour combiner les classes CSS
export function cn(...inputs) {
  return inputs.filter(Boolean).join(' ');
}
