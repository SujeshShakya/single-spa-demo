export const checkPassword = (password: string) => {
  const regexp = /(?:[^`!@#$%^&*\-_=+'\/.,]*[`!@#$%^&*\-_=+'\/.,]){2}/;
  return regexp.test(password);
};
