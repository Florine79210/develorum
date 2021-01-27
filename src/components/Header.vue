<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <a class="navbar-brand ps-4 pe-4 siteName" href="#">Develorum</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link text-dark" href="#">Example 1</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-dark" href="#">Example 2</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-dark" href="#">Example 3</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style>
.siteName {
  font-family: 'Press Start 2P', cursive;
  font-size: 30px;
  color: #01002a;
}
.navbar ul {
  list-style: none;
}
.navbar ul li a {
  text-decoration: none;
}
</style>