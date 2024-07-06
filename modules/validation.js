export const restoreToValidState = (node) => {
  node.parentElement.classList.remove("invalid");
}

export const isEmailValid = (email) => {
  return RegExp(/^\w+([.-]?\w+)*@\w+(-?\w+)*(\.\w{2,3})+$/).exec(String(email)
    .toLowerCase()) !== null;
};

export const isPasswordValid = (password) => {
  return password !== null && password.length >= 8;
}