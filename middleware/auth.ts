export default function ({ store, route, redirect }: any) {
  // If the user is not authenticated redirect to the login page
  if (!store.state.auth.authenticated) {
    if (route.path === '/login') {
    } else {
      return redirect('/login')
    }
  }
}
