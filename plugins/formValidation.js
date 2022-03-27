// export default ({ app }, inject) => {
//     // Inject $hello(msg) in Vue, context and store.
//     inject('hello', msg => console.log(`Hello ${msg}!`))
//   }

export default (context, inject) => {
  console.log('appp => ', context.store.state.validation.errors)
  const errors = context.store.state.validation.errors
  inject('hello', errors)
}