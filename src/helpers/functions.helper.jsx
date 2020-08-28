export const getTimestamp = (createdAt) => {
  const d = new Date(createdAt);
  const dateTransform = d.toUTCString()
  return dateTransform.replace(/GMT/g, '');
}