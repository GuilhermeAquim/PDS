import axios, { AxiosResponse } from "axios";
import { UserApiResponse } from "../../shared/types/User";

class UserService {
  async authUser(
    username: string,
    password: string
  ): Promise<AxiosResponse<UserApiResponse>> {
    return await axios.post("http://localhost:5050/login", {
      login: username,
      password,
    });
  }
}

const instance = new UserService();
export default instance;
