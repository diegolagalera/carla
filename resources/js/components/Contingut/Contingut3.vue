<template>
    <v-row class="mt-6">
        <v-col md=4 cols="12">
            <v-card elevation="2" height="150" color="cyan lighten-5">
                <v-card-title style="font-size: 25px; font-family: Fantasy; font-weight: bold">
                    {{text[0].title}}
                </v-card-title>
                <v-card-text style="font-size: 18px">
                    {{text[0].text}}

                </v-card-text>
            </v-card>

        </v-col>
        <v-col md="4" cols="12">
            <v-card elevation="2" height="150" color="cyan lighten-5">
                <v-card-title style="font-size: 25px; font-family: Fantasy; font-weight: bold">
                    {{text[1].title}}
                </v-card-title>
                <v-card-text style="font-size: 18px">
                    {{text[1].text}}
                </v-card-text>
            </v-card>
        </v-col>
        <v-col md="4" cols="12">
            <v-card elevation="2" height="150" color="cyan lighten-5">
                <v-card-title style="font-size: 25px; font-family: Fantasy; font-weight: bold">
                    {{text[2].title}}
                </v-card-title>
                <v-card-text style="font-size: 18px">
                    {{text[2].text}}
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
export default {
    name: "Contingut3",
    props: {
        text:{
            required:false,
            type: Array,
        }
    },
    data () {
        return {
            textlocal: this.text,
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
