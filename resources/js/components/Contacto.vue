<template>
    <v-row class="mt-10 mb-3">
        <v-col md="8" xs="12" offset-md="2">
            <div class="mt-16">
                    <div class="mt-15">
                        <v-row>
                            <v-col md="4" offset-md="4" style="text-align: center">
                                <p style="font-size: 40px; font-family: Fantasy; font-weight: bold; align-items: center">
                                    Lo esencial de mi trabajo
                                </p>
                                <v-divider insert style="border-width: 1px; background-color: black"></v-divider>
                            </v-col>
                        </v-row>
                    </div>
                    <contingut3 :text="text1"></contingut3>
                    <contingut3 :text="text2"></contingut3>
                    <v-spacer></v-spacer>
                    <div class="mt-10">
                        <v-row>
                            <v-col md="4">

                                <v-img
                                    max-height="520"
                                    max-width="450"
                                    src="img/a1.png"
                                ></v-img>
                            </v-col>
                            <v-col md="8">
                                <v-card elevation="8">
                                    <v-row class="mt-4">
                                        <v-col md="8" offset-md="2" style="text-align: center">
                                            <p style="font-size: 40px; font-family: Fantasy; font-weight: bold; align-items: center">
                                                Cómo es trabajar conmigo

                                            </p>
                                            <v-divider insert style="border-width: 1px; background-color: black"></v-divider>
                                        </v-col>
                                    </v-row>
                                    <v-card-text class="mt-10">
                                        <p style="font-size: 18px">
                                            Encuentras un espacio de cercanía y calidez donde puedes ser tú misma sin sentirte juzgada ni evaluada. Caminaremos juntas hacia tus objetivos.
                                        </p>
                                        <p style="font-size: 18px">
                                            Trabajo con una metodología breve. Es decir, en la mayoría de casos, en menos de 10 sesiones consigues los cambios que necesitas
                                        </p>
                                        <p style="font-size: 18px">
                                            Vamos a trabajar con diferentes herramientas, técnicas, ejercicios, escritos… individualizados y adaptados a tu caso
                                        </p>
                                        <p style="font-size: 18px">
                                            Integro técnicas cognitivo-conductuales, que son las que tienen más validez empírica, con técnicas gestálticas, que aportan una mirada más humanista e incorporan el cuerpo y las emociones
                                        </p>
                                        <p style="font-size: 18px">
                                            Yo también he pasado distintos procesos terapéuticos como cliente, sé que es estar en el otro lado. Creo que es muy importante también haber estado en el lugar de cliente y haber realizado un proceso terapéutico con anterioridad, porque así, al comprenderme mejor a mi misma puedo comprenderte mejor a ti también
                                        </p>
                                    </v-card-text>
                                </v-card>
                            </v-col>
                        </v-row>
                    </div>
                    <div class="mt-8">
                        <v-row>
                            <v-col md="4">
                                <v-card elevation="8">
                                    <v-row class="mt-4">
                                        <v-col md="8" offset-md="2" style="text-align: center">
                                            <p style="font-size: 40px; font-family: Fantasy; font-weight: bold; align-items: center">
                                                Mi formación
                                            </p>
                                            <v-divider insert style="border-width: 1px; background-color: black"></v-divider>
                                        </v-col>
                                    </v-row>
                                    <v-card-text class="mt-10">
                                        <p style="font-size: 18px">
                                            Grado de psicología - Universidad Rovira y Virgili
                                        </p>
                                        <p style="font-size: 18px">
                                            Colegiada número 29332
                                        </p>
                                        <p style="font-size: 18px">
                                            Experta en autoestima y dependencia emocional - Centro Silvia Congost
                                        </p>
                                        <p style="font-size: 18px">
                                            Técnica en violencia de género - Universidad Antonio de Nebrija
                                        </p>
                                        <p style="font-size: 18px">
                                            Terapeuta Gestalt (en proceso) - Cercle Gestalt TCI Tarragona
                                        </p>
                                        <p style="font-size: 18px">
                                            Formación complementaria en Mindfulness o atención plena, habilidades sociales, altas capacidades intelectuales y eneagrama.
                                        </p>
                                    </v-card-text>
                                </v-card>
                            </v-col>

                        </v-row>
                    </div>
                    <v-spacer></v-spacer>
            </div>


        </v-col>
    </v-row>
</template>

<script>
import Contingut3 from "./Contingut/Contingut3";
import Contingut4 from "./Contingut/Contingut4";
export default {
    name: "Contacto",
    components: {Contingut4, Contingut3},
    data () {
        return {
            text1:[
                {
                    title: 'Cercanía',
                    text: 'La cercanía, la empatía y la calidez son principios básicos en mi trabajo'
                },
                {
                    title: 'Mente, cuerpo y emociones',
                    text: 'Considero al ser humano como una unidad, incluyendo la mente, el cuerpo y las emociones'
                },
                {
                    title: 'Potencial humano y resiliencia',
                    text: 'Creo en el desarrollo del potencial humano y en la capacidad de resiliencia'
                }
            ],
            text2:[
                {
                    title: 'Caminar juntas',
                    text: 'Tú y yo somos igual de importantes y caminamos juntas para conseguir los objetivos'
                },
                {
                    title: 'Brevedad del proceso',
                    text: 'Consigue los cambios que necesitas en un tiempo breve'
                },
                {
                    title: 'Aprendizaje',
                    text: 'Todo lo aprendido te lo llevas en tu “maleta de herramientas"'
                }
            ]

        }
    }
}
</script>

<style scoped>

</style>
