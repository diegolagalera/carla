<template>
    <div>
<!--    <div :style="{'background-image':'url(img/fondo2.png)', 'background-size': 'cover', 'background-repeat': 'no-repeat'}">-->
        <v-carousel
            cycle
            height="600"
            hide-delimiter-background
            show-arrows-on-hover
        >
            <v-carousel-item
                v-for="(slide, i) in slides"
                :key="i"
                :src=slide
            >



                <!--                <v-sheet-->
<!--                    height="100%"-->
<!--                >-->
<!--                    <v-row-->
<!--                        class="fill-height"-->
<!--                        align="center"-->
<!--                        justify="center"-->
<!--                    >-->
<!--                        <div class="text-h2">-->
<!--                            {{ slide }} Slide-->
<!--                        </div>-->
<!--                    </v-row>-->
<!--                </v-sheet>-->
            </v-carousel-item>
        </v-carousel>
        <div>
            <contingut5></contingut5>
            <part2></part2>
<!--            <contingut1></contingut1>-->

<!--            <contingut2></contingut2>-->
<!--            <contingut3></contingut3>-->
        </div>
    </div>
<!--        <v-row>-->
<!--            <v-col cols="4" offset-md="1">-->
<!--                <v-carousel>-->
<!--                    <v-carousel-item-->
<!--                        v-for="(item,i) in items"-->
<!--                        :key="i"-->
<!--                        :src="item.src"-->
<!--                        reverse-transition="fade-transition"-->
<!--                        transition="fade-transition"-->
<!--                    ></v-carousel-item>-->
<!--                </v-carousel>-->
<!--            </v-col>-->
<!--            <v-col cols="5">-->
<!--                <v-card>-->
<!--                    <v-card-title>-->
<!--                        Hola-->
<!--                    </v-card-title>-->
<!--                    <v-card-text>-->
<!--                        Lasdasdasdasdasd-->
<!--                    </v-card-text>-->
<!--                </v-card>-->

<!--            </v-col>-->
<!--        </v-row>-->

<!--    </v-container>-->
</template>

<script>
import Contacto from "./Contacto";
import Bottom from "./Bottom";
import Contingut1 from "./Contingut/Contingut1";
import Contingut2 from "./Contingut/Contingut2";
import Contingut3 from "./Contingut/Contingut3";
import contingut5 from "./Contingut/contingut5";
import Part2 from "./Contingut/part2";
export default {
    name: "Home",
    components: {Part2, Contingut3, Contingut2, Contingut1, Bottom, Contacto, contingut5},
    data () {
        return {
            items: [
                {
                    src: 'img/1.jpg',
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
                '/img/a1.png',
                '/img/a2.png'
            ],
        }
    },
    methods:{
        instagram(){
            window.open('https://www.instagram.com/carla_psicologa_/','_blank')
        }
    }
}

</script>

<style scoped>

</style>
