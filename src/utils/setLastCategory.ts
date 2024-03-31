export const setLastCategory = (name: string, category: string): void => {
  localStorage.setItem(name, category);
};
