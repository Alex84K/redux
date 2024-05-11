import { User, UserLog } from "./type"

export const logUser = async (user: UserLog): Promise<User> => {
  const response = await fetch("/api/v1/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: user.username,
      password: user.password,
    }),
    redirect: "follow",
  })
  const result = await response.json()
  console.log(result)
  return response.json()
}

export const getUserdummy = async (user: UserLog): Promise<User> => {
  const response = await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: user.username,
      password: user.password
    }),
  })
  const result = await response.json()
  console.log(result)
  return response.json()
}
