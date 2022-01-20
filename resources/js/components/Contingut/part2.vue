<template>
    <v-row class="mt-10 mb-3">
        <v-col md="3" xs="12" offset-md="2">
            <v-row>
                <v-col>
                    <div class="mt-8">
                        <v-card
                            class="mx-auto"
                            max-width="400"
                        >
                            <v-card-text style="text-align: center">
                                <v-row>
                                    <v-col md="12">
                                        <v-avatar
                                            class="mr-n5"
                                            size="285"

                                        >
                                            <v-img
                                                lazy-src="https://picsum.photos/id/11/10/6"
                                                max-height="250"
                                                max-width="200"
                                                src="img/cara.png"
                                            ></v-img>                            </v-avatar>
                                    </v-col>
                                </v-row>
                            </v-card-text>
                            <div class="d-flex flex-no-wrap justify-space-between">
                                <div>

                                    <v-card-text class="text-h5 font-weight-bold" style="text-align: center">
                                        Soy Carla Viladot, psicóloga experta en dependencia emocional y autoestima
                                    </v-card-text>
                                    <v-card-actions>
                                        <v-row style="text-align: center">
                                            <v-col>
                                                <v-btn
                                                    class="ml-2 mt-5"
                                                    outlined
                                                    rounded
                                                    small
                                                >
                                                    saber sobre mi
                                                </v-btn>
                                            </v-col>
                                        </v-row>

                                    </v-card-actions>
                                </div>


                            </div>
                        </v-card>
                    </div>
                </v-col>

            </v-row>
        </v-col>
                <v-col md="5" class="mt-8">
                    <v-card elevation="8">
                        <v-card-title>
                            TE ACOMPAÑO A:
                        </v-card-title>

                        <v-card-text class="mt-4">
                            <v-timeline
                                align-top
                                dense
                            >
                                <v-timeline-item
                                    v-for="message in items"
                                    color="red"
                                    small
                                    :key="message.title"
                                >
                                    <div>
                                        <div class="font-weight-normal">
                                            <strong>{{ message.title }}</strong>
                                        </div>
                                        <div>{{ message.items[0].title }}</div>
                                    </div>
                                </v-timeline-item>
                            </v-timeline>
                        </v-card-text>

<!--                        <v-list>-->
<!--                            <v-list-group-->
<!--                                v-for="item in items"-->
<!--                                :key="item.title"-->
<!--                                v-model="item.active"-->
<!--                                no-action-->
<!--                            >-->
<!--                                <template v-slot:activator>-->
<!--                                    <v-list-item-content>-->
<!--                                        <v-list-item-title v-text="item.title"></v-list-item-title>-->
<!--                                    </v-list-item-content>-->
<!--                                </template>-->

<!--                                <v-list-item-->
<!--                                    v-for="child in item.items"-->
<!--                                    :key="child.title"-->
<!--                                >-->
<!--                                    <v-list-item-content>-->
<!--                                        {{child.title}}-->
<!--                                    </v-list-item-content>-->
<!--                                </v-list-item>-->
<!--                            </v-list-group>-->
<!--                        </v-list>-->
                    </v-card>
                </v-col>

            </v-row>
</template>

<script>
export default {
    name: "part2",
    data () {
        return {
            items: [
                {
                    action: 'mdi-ticket',
                    active: true,
                    items: [{ title: '¡¡¡El amor no es sufrimiento!!! Deja de sufrir por amor y supera la dependencia emocional. Te ayudo con este proceso.'}],
                    title: 'SUPERAR LA DEPENDENCIA EMOCIONAL',
                },
                {
                    action: 'mdi-silverware-fork-knife',
                    active: true,
                    items: [{
                        title: 'Tener una buena autoestima es amarse, es sentirse bien y confiar en uno mismo; es saber que soy valioso y merezco ser querido. Te ayudo a recuperar tu autoestima.'
                    }
                    ],
                    title: 'RECUPERAR TU AUTOESTIMA\n',
                },
                {
                    action: 'mdi-school',
                    active: true,
                    items: [{ title: 'Realmente quiero separarme, pero tengo mucho miedo a todo lo que esto conlleva. Te acompaño en este proceso.' }],
                    title: 'SEPARARTE DE TU PAREJA DE FORMA CONSCIENTE \n',
                },
                {
                    action: 'mdi-human-male-female-child',
                    active: true,
                    items: [{ title: 'Te acompaño en este camino de autoconocimiento y consciencia de lo que pasa en nuestro interior, a nivel emocional, corporal y mental. ' }],
                    title: 'MEJORAR TU BIENESTAR Y LA RELACIÓN CONTIGO MISMA\n',
                },
            ],
        }
    }
}
</script>

<style scoped>

</style>
