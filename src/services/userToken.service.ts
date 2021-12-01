const localStorageService = {
  getUserToken() {
    const token = localStorage.getItem("user-access-token");
    if (token) {
      return token;
    }
    return null;
  },
  saveUserToken(token: string | undefined) {
    if (token) {
      localStorage.setItem("user-access-token", token);
    }
  },
  clearUserToken() {
    localStorage.removeItem("user-access-token");
  },
};

export default localStorageService;
