export default function ({ store, route, redirect }: any) {
  // If the user is authenticated redirect to home page
  if (store.state.auth.authenticated) {
    if (route.path === '/login') {
      return redirect('/')
    }
  }
}
