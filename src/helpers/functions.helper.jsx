export const getSeconds = (time) => {
  return time.split(':').reduce((acc,time) => (60 * acc) + +time);
}