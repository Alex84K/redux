import "./App.css"
import { useState } from "react"
import { useAppDispatch, useAppSelector } from "./app/hooks"
import { User, UserLog } from "./utils/type"
import { logUser } from "./utils/api"
import { getUserAsync } from "./features/user/userSlice"

const App = () => {
  const [username, setUsername] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const dispatch = useAppDispatch()
  const user = useAppSelector(state => state.user)

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    const us: UserLog = {
      username: username,
      password: password,
    }
    e.preventDefault()
    dispatch(getUserAsync(us))
    console.log(user)
  }
  return (
    <div className="App">
      <div></div>

      <form onSubmit={handleLogin} className="mb-5" id="form">
        <input
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
          placeholder="Enter login"
          className="form-control mt-4"
          id="login"
          name="login"
        />
        <input
          type="text"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="form-control mt-4"
          id="pwd"
          placeholder="Enter password"
          name="pswd"
        />
        <button type="submit">Sign in</button>
      </form>
    </div>
  )
}

export default App
