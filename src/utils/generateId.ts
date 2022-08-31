export const generateId = () => {
  let parts: number[] = [];

  for (let i = 0; i < 5; i++) {
    parts = [...parts, Math.floor(Math.random() * (9 - 1) + 1)];
  }

  return Number(parts.join(""));
};
