export default {
  async login(payload) {
    await axios.get("/sanctum/csrf-cookie");
    return axios.post("/login", payload);
  },
  getAuthUser() {
    return axios.get("/api/users/auth");
  },
  logout() {
    return axios.post("/logout");
  },
};
