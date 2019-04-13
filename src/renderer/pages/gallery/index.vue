<template>
   <div>gallery-path： {{slug}}</div> 
</template>

<script>
export default {
    data() {
        return {
            slug: ''
        }
    },
    created() {
        console.log('this.$route', this.$route)
        this.slug = this.$route.params.slug
    }
}
</script>
