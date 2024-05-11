/*export interface User {
  id: number
  username: string
  firstName: string
  lastName: string
  email: string
  isActivated: boolean
  image: string
  dateRegistered: string
  roles: string[]
}*/

export interface UserLog {
  username: string
  password: string
}

export interface UserState {
  user: User
}

export interface User {
  id: 15
  username: string
  email: string
  firstName: string
  lastName: string
  gender: string
  image: string
  token: string
}
