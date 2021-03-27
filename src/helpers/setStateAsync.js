export const setStateAsync = state => {
  new Promise((resolve, reject) => {
    this.setState(state, resolve)
  })
}