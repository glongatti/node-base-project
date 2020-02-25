export function removeAccents(str) {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

export function onlyAlphanumeric(str) {
  return str.replace(/[^a-z0-9]/gi, '');
}
