
import { createAppSlice } from "../../app/createAppSlice"
import { User, UserLog, UserState } from "../../utils/type"
import { getUserdummy, logUser } from "../../utils/api"




export const userSlice = createAppSlice({
  name: "user",
  initialState:{} as User,
  reducers: create => ({
    getUserAsync: create.asyncThunk(
      async (user:UserLog) => {
        const response = await getUserdummy(user)
        return response
      },
      {
        pending: state => {},
        fulfilled: (state, action) => action.payload,
        rejected: state => {},
      },
    ),
  }),
  selectors: {
    selectUser: user => user
  },
})

export const { getUserAsync } = userSlice.actions

export const { selectUser } = userSlice.selectors


