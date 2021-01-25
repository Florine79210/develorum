<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <a class="navbar-brand" href="#">Develorum</a>
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
.navbar ul {
  list-style: none;
}
.navbar ul li a {
  text-decoration: none;
}
</style>