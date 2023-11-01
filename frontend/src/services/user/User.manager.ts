import UserService from "./User.service";

class UserManager {
  async authUser(login: string, password: string) {
    const response = await UserService.authUser(login, password);

    if (response.status === 200) {
      localStorage.setItem("token", response.data.token);

      return response.data.user;
    }
  }
}

const instance = new UserManager();
export default instance;
