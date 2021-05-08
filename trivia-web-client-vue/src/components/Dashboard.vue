<template>
    <div style="text-align:center">
        <section class="section">
            <div class="container">
                <nav class="navbar" role="navigation" aria-label="main navigation">
                    <div class="navbar-menu">
                        <div class="navbar-item">
                            <router-link to="/" class="navbar-item">Home</router-link>
                            <router-link v-if='authState.isAuthenticated' to="/trivia" class="navbar-item">Trivia Game</router-link>
                            <a class="button is-light" v-if='authState.isAuthenticated' v-on:click='logout' id='logout-button'> Logout </a>
                            <a class="button is-light" v-else v-on:click='login' id='login-button'> Login </a>
                        </div>
                    </div>
                </nav>
                <router-view></router-view>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    methods: {
        async login () {
            await this.$auth.signInWithRedirect()
        },

        async logout () {
            await this.$auth.signOut()
        }
    }
}
</script>
