
import { createAppSlice } from "../../app/createAppSlice"
import { User, UserLog, UserState } from "../../utils/type"
import { logUser } from "../../utils/api"

export interface CounterSliceState {
  value: number
  status: "idle" | "loading" | "failed"
}

const initialState: UserState = {
  user:{} as User
}

export const userSlice = createAppSlice({
  name: "user",
  initialState,
  reducers: create => ({
    getUserAsync: create.asyncThunk(
      async (user:UserLog) => {
        const response = await logUser(user)
        return response
      },
      {
        pending: state => {},
        fulfilled: (state, action) => {
            state.user = action.payload.user
        },
        rejected: state => {},
      },
    ),
  }),
  selectors: {
    selectUser: user => user.user
  },
})

export const { getUserAsync } = userSlice.actions

export const { selectUser } = userSlice.selectors


