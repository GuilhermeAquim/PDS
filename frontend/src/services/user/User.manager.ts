import UserService from "./User.service";

class UserManager {
  async authUser(login: string, password: string) {
    await UserService.authUser(login, password);
  }
}

const instance = new UserManager();
export default instance;
