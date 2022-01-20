<template>
    <v-row class="mt-10 mb-3">
        <v-col md="3" xs="12" offset-md="2">
            <v-card
                class="mx-auto"
                color="#26c6da"
                dark
                max-width="400"
            >
                <v-card-title>
                    <v-icon
                        large
                        left
                    >
                        mdi-twitter
                    </v-icon>
                    <span class="text-h6 font-weight-light">Twitter</span>
                </v-card-title>

                <v-card-text class="text-h5 font-weight-bold">
                    "                    DAR EL PASO PARA IR AL PSICÓLOGO NO ES UNA TAREA FÁCIL
                    "
                </v-card-text>

                <v-card-actions>
                    <v-list-item class="grow">
                        <v-list-item-avatar color="grey darken-3">
                            <v-img
                                class="elevation-6"
                                alt=""
                                src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                            ></v-img>
                        </v-list-item-avatar>

                        <v-list-item-content>
                            <v-list-item-title>Evan You</v-list-item-title>
                        </v-list-item-content>

                        <v-row
                            align="center"
                            justify="end"
                        >
                            <v-icon class="mr-1">
                                mdi-heart
                            </v-icon>
                            <span class="subheading mr-2">256</span>
                            <span class="mr-1">·</span>
                            <v-icon class="mr-1">
                                mdi-share-variant
                            </v-icon>
                            <span class="subheading">45</span>
                        </v-row>
                    </v-list-item>
                </v-card-actions>
            </v-card>
        </v-col>
        <v-col md="5">
            <div class="mb-5" style="text-align: center">
                <h2>
                    Algunas de las resistencias y dudas que te pueden aparecer son:
                </h2>
                <v-divider insert style="border-width: 1px; background-color: black"></v-divider>
            </div>
            <v-list>
                <v-list-item
                    v-for="chat in list"
                    :key="chat"
                    class="mt-n4"
                >
                    <v-list-item-avatar>
                        <v-icon>
                            arrow_right
                        </v-icon>
                    </v-list-item-avatar>
                    <v-list-item-content>
                        <v-list-item-title>{{chat}}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-col>
    </v-row>
</template>

<script>
export default {
    name: "Contingut5",
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
            list: [
                'Quizá no es tan grave lo que me pasa como para ir al psicólogo',
                'Me da miedo y vergüenza explicarle mis problemas a una persona que no conozco',
                'Lo que me pasa no es tan importante como para pedir ayuda',
                'No sé si valdrá la pena invertir todo este dinero',
                'Tengo dudas sobre si me va a poder ayudar',
            ],
        }
    }
}
</script>

<style scoped>

</style>
