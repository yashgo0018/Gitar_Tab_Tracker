<template>
  <div>
    <nav>
      <div class="nav-wrapper blue">
        <a href="/" class="brand-logo">Gitar Tab Traker</a>
        <a href="#" data-target="mobile-demo" class="sidenav-trigger">
          <i class="material-icons">menu</i>
        </a>
        <ul class="right hide-on-med-and-down">
          <li>
            <router-link class="nav-link" to="/auth/login">SignIn</router-link>
          </li>
          <li>
            <router-link class="nav-link" to="/auth/register">SignUp</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <ul class="sidenav" id="mobile-demo">
      <li>
        <router-link class="nav-link" to="/auth/login">SignIn</router-link>
      </li>
      <li>
        <router-link class="nav-link" to="/auth/register">SignUp</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "NavbarComponent"
};
</script>
