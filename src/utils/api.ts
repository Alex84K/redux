import { User, UserLog } from "./type"


interface ServerResponse {
    user: User
  }

export const logUser = async (user: UserLog): Promise<ServerResponse> => {
    const myHeaders = new Headers()
    myHeaders.append("Content-Type", "application/json")
      const response = await fetch("/api/v1/auth/login", {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify({
          "username": user.username,
          "password": user.password
        }),
        redirect: "follow",
      })
      const result = await response.json()
      console.log(result)
      return response.json()
  }