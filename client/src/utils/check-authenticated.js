export default object => {
  if (!object.$store.state.isUserLoggedIn) {
    object.$router.push("/auth/login");
  }
};
