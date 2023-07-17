<template>
    <div>
        <a id="home"> home </a>
        <a id="profile" v-if="isLoggedIn">My profile</a>
    </div>
</template>

<script>
export default {
    name: 'Nav',
    data() {
        return {
            isLoggedIn: true,
        }
    }

}
</script>

<style>

</style>