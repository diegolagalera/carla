<template>
    <v-row class="mt-6">
        <v-col md=6 cols="12">
            <v-card elevation="2">
                <v-card-title>
                    Hola
                </v-card-title>
                <v-card-text>
                    The expansion panel component provides a rich playground to build truly advanced implementations. Here we take advantage of slots in the v-expansion-panel-header component to react to the state of being open or closed by fading content in and out.

                </v-card-text>
            </v-card>

        </v-col>
        <v-col md="6" cols="12">
            <v-card elevation="2">
                <v-card-title>
                    Hola
                </v-card-title>
                <v-card-text>
                    The expansion panel component provides a rich playground to build truly advanced implementations. Here we take advantage of slots in the v-expansion-panel-header component to react to the state of being open or closed by fading content in and out.
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
export default {
    name: "Contingut4",
    data () {
        return {
            items: [
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
                },
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
                },
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
                },
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
                },
            ],
            colors: [
                'indigo',
                'warning',
                'pink darken-2',
                'red lighten-1',
                'deep-purple accent-4',
            ],
            slides: [
                'First',
                'Second',
                'Third',
                'Fourth',
                'Fifth',
            ],
        }
    }
}
</script>

<style scoped>

</style>
