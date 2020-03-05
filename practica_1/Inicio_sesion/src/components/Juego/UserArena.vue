<template>
    <section>
        <div class="container-fluid">
        <div class="row"> User 1 </div>

        <div class="row">
            tijeras icon
            </div>
        <div class="row">
            <div class="col-3 offser-6 opciones">
                <div class="row">
                    <div
                        class="col"
                        v-for="(option,key) in options"
                        :key = "key"
                        >
                        {{option}}
                    </div>
                </div>
            </div>
        </div>
    </div>
    </section>
</template>
<script lang="js">
export default {
    name: 'UserArena',
    data() {
        return{
            options: {
                t: 'tijeras icon',
                pp: 'papel icon',
                p: 'roca icon'
            }
        }
    },
    methods: {
    select (key) {
        this.$emit('opcion', key)
     }
    }
}
</script>
<style lang="scss">
.opciones{
    background: grey;
}
</style>