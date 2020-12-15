<template>
    <div class="navbar">
        <nav class="nav-extended  indigo lighten-3">
            <div class="nav-content">
                <router-link :to="{ name : 'Index' }">
                <span class="nav-title">Smoothies Recepies</span>
                </router-link>
                <a href=" " class="btn-floating btn-large halfway-fab pink lighten-2">
                    <!-- <router-link :to=" { name: 'AddSmoothie'}">
                        <i class="material-icons">add</i>
                    </router-link> -->
                      <router-link :to=" { name: 'AddSmooth'}">
                        <i class="material-icons">add</i>
                    </router-link>
                </a>
            </div>
        </nav>
    </div>
</template>
<script>
export default {
    name: 'Navbar',
    data () {
        return {

        }
    }
}
</script>
<style>
@media only screen and (max-width: 768px) {
  /* For mobile phones: */
.navbar{
  display: grid;
  grid-template-columns: 1fr; 
}
}
.navbar nav {
    padding: 0 20px;
}
.nav-title{
    color: white;
}
</style>