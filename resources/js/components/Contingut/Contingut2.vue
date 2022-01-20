<template>
    <v-row class="mt-3">
        <v-col md="6" xs="12">
            <v-card>
                <v-card-title>
                    Hola
                </v-card-title>
                <v-card-text>
                    Lasdasdasdasdasd
                </v-card-text>
            </v-card>

        </v-col>
        <v-divider vertical></v-divider>
        <v-col md="6" xs="12">
            <v-carousel>
                <v-carousel-item
                    v-for="(item,i) in items"
                    :key="i"
                    :src="item.src"
                    reverse-transition="fade-transition"
                    transition="fade-transition"
                ></v-carousel-item>
            </v-carousel>
        </v-col>
    </v-row>
</template>

<script>
export default {
    name: "Contingut2",
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
