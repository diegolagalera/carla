<template>
    <div>
        <v-row style="margin-top: 150px" >
            <v-col md="4" offset-md="4" style="text-align: center">
                <p style="font-size: 40px; font-family: Fantasy; font-weight: bold; align-items: center">
                    Sobre mí
                </p>
                <v-divider insert style="border-width: 1px; background-color: black"></v-divider>
            </v-col>
        </v-row>
        <v-row class="mt-8">
            <v-col md="3" offset-md="3">
                <v-img src="/img/cara.png" width="350">

                </v-img>
            </v-col>
            <v-col md="4">
                <h2>
                    Soy Carla Viladot, psicóloga experta en dependencia emocional y autoestima
                </h2>
                <p class="mt-8">
                    Estoy aquí para acompañarte a:
                </p>
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
                <p class="mt-8">
                    Yo también he pasado distintos procesos terapéuticos como cliente, sé que es estar en el otro lado. Creo que es muy importante también haber estado en el lugar de cliente y haber realizado un proceso terapéutico con anterioridad, porque así, al comprenderme mejor a mi misma puedo comprenderte mejor a ti también
                </p>
            </v-col>
        </v-row>

        <v-row>
            <v-col md="4" offset-md="4" style="text-align: center">
                <p style="font-size: 40px; font-family: Fantasy; font-weight: bold; align-items: center">
                    Mi formación
                </p>
                <v-divider insert style="border-width: 1px; background-color: black"></v-divider>
            </v-col>
        </v-row>
        <v-row class="mb-10">
            <v-col md="4" offset-md="2">
                <v-img src="/img/c31.png" width="480" class="mt-8 ml-7">

                </v-img>
            </v-col>
            <v-col md="5" class="mt-8">
                <v-card elevation="8" width="550" img="/img/aaa.png">

                    <v-card-text class="mt-4">
                        <v-timeline
                            align-top
                            dense
                        >
                            <v-timeline-item
                                v-for="message in items"
                                color="white"
                                small
                                :key="message.title"
                            >
                                <div>
                                    <div class="font-weight-normal">
                                        <strong>{{ message.title }}</strong>
                                    </div>
<!--                                    <div v-if="message.description.length===1">{{ message.description[0] }}</div>-->
                                    <div v-for="a in message.description">
                                        {{ a }}
                                    </div>
                                </div>
                            </v-timeline-item>
                        </v-timeline>
                    </v-card-text>
                </v-card>
            </v-col>

<!--            <v-col md="3">-->
<!--                <v-img src="/img/q4.png">-->

<!--                </v-img>-->
<!--            </v-col>-->
        </v-row>
    </div>
</template>

<script>
export default {
    name: "SobreMi",
    data () {
        return {
            list: [
                'Recuperar tu autoestima\n',
                'Superar la dependencia emocional\n',
                'Mejorar tu bienestar',
            ],
            items: [
                {
                    title: 'Grado de psicología \n',
                    description: ['Universidad Rovira y Virgili\n']
                },
                {
                    title: 'Experta en autoestima y dependencia emocional \n',
                    description: ['Centro Silvia Congost\n']
                },
                {
                    title: 'Terapeuta Gestalt (en proceso) \n',
                    description: ['Cercle Gestalt TCI Tarragona\n']
                },
                {
                    title: 'Técnica en violencia de género \n',
                    description: ['Universidad Antonio de Nebrija\n']
                },
                {
                    title: 'Formación complementaria en:\n',
                    description: ['- Mindfulness o atención plena\n',
                        '- Habilidades sociales\n' ,
                        '- Inteligencia emocional\n' ,
                        '- Eneagrama\n']
                }
            ]
        }
    }
}
</script>

<style scoped>

</style>
