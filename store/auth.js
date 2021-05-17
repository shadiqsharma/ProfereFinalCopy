//make sure export is a function
export const states = () => ({
  isLoggedIn: false,
  user: {},
})

export const mutations = {
  user(state, user){
    state.isLoggedIn = !!user
    state.user = user || {}
  }
}
