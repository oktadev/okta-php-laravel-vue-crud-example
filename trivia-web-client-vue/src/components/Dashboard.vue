<template>
    <div style="text-align:center">
        <section class="section">
            <div class="container">
                <nav class="navbar" role="navigation" aria-label="main navigation">
                    <div class="navbar-menu">
                        <div class="navbar-item">
                            <router-link to="/" class="navbar-item">Home</router-link>
                            <router-link v-if='authenticated' to="/trivia" class="navbar-item">Trivia Game</router-link>
                            <a class="button is-light" v-if='authenticated' v-on:click='logout' id='logout-button'> Logout </a>
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

    data: function () {
        return {
            authenticated: false
        }
    },

    created () {
        this.isAuthenticated()
    },

    watch: {
        // Everytime the route changes, check for auth status
        '$route': 'isAuthenticated'
    },

    methods: {
        async isAuthenticated () {
            this.authenticated = await this.$auth.isAuthenticated()
        },

        login () {
            this.$auth.loginRedirect('/')
        },

        async logout () {
            await this.$auth.logout()
            await this.isAuthenticated()

            // Navigate back to home
            this.$router.push({ path: '/' })
        }
    }
}
</script>
