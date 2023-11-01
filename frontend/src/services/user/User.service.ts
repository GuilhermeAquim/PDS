import axios from "axios";

class UserService {
  async authUser(username: string, password: string) {
    await axios.post("http://localhost:5050/login", {
      login: username,
      password,
    });
  }
}

const instance = new UserService();
export default instance;
