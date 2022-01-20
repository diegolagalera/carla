<template>
    <div>
        <v-carousel
            height="320"
            hide-delimiters
            hide-delimiter-background
            :show-arrows="false"
            v-if="$vuetify.breakpoint.xs"
        >
            <v-carousel-item
                :src="slides[0]"
            >
                <v-row
                    class="fill-height"
                    align="center"
                    justify="center"

                >
                    <v-col md="12" cols="12" style="text-align: center">
                        <div v-if="$vuetify.breakpoint.xs" class="text-h4" style="color: black; margin-top: -10%">
                            Hola, soy Carla Viladot
                        </div>
                    </v-col>
                    <v-col md="12" cols="12" style="text-align: center">
                        <div v-if="$vuetify.breakpoint.xs" style="color: black ; margin-top: -34%">
                            <p>
                            Te acompaño a recuperar tu autoestima y a superar la dependencia emocional
                            </p>
                        </div>
                    </v-col>
                </v-row>
            </v-carousel-item>
        </v-carousel>
        <v-carousel
            v-else
            height="500"
            hide-delimiters
            hide-delimiter-background
            :show-arrows="false"
        >
            <v-carousel-item
                :src="slides[0]"
            >
                <v-row
                    class="fill-height"
                    align="center"
                    justify="center"

                >
                    <v-col md="12" cols="12" style="text-align: center">
                        <div v-if="$vuetify.breakpoint.xs" class="text-h4" style="color: black; margin-top: 2%">
                            Hola, soy Carla Viladot
                        </div>
                        <div v-else class="text-h1" style="color: black; margin-top: 2%">
                            Hola, soy Carla Viladot
                        </div>
                    </v-col>
                    <v-col md="12" cols="12" style="text-align: center">
                        <div v-if="$vuetify.breakpoint.xs" class="text-h5" style="color: black ; margin-top: -6%">
                            Te acompaño a recuperar tu autoestima y a superar la dependencia emocional
                        </div>
                        <div v-else class="text-h4" style="color: black ; margin-top: -6%">
                            Te acompaño a recuperar tu autoestima y a superar la dependencia emocional
                        </div>
                    </v-col>
                </v-row>
            </v-carousel-item>
        </v-carousel>

        <v-row class="mt-8">
            <v-col offset-md="2" md="4">
                <v-img src="/img/postfoto.png" height="450" width="500">
                </v-img>
            </v-col>
            <v-col>
                <v-row>
                    <v-col md="12">
                        <h3 class="ml-7 mt-10">
                            Soy Carla Viladot, psicóloga experta en dependencia emocional y autoestima
                        </h3>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col md="12" xs="6">
                        <p class="ml-7 mt-5">
                            Mediante las sesiones de psicoterapia te acompaño a:
                        </p>
                    </v-col>
                </v-row>
                <v-list class="mt-5">
                    <v-list-item
                        v-for="item in list"
                        :key="item"
                        class="mt-n4"
                    >
                        <v-list-item-avatar>

                            <v-icon>
                                mdi-checkbox-outline
                            </v-icon>

                        </v-list-item-avatar>
                        <v-list-item-content>
                            <v-list-item-title v-if="$vuetify.breakpoint.xs"><h5>{{item}}</h5></v-list-item-title>
                            <v-list-item-title v-else>{{item}}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-col>
        </v-row>
        <v-row class="mt-8">
            <v-col md="4" offset-md="4" style="text-align: center">
                <p style="font-size: 40px; font-family: Fantasy; font-weight: bold; align-items: center">
                    Lo esencial de mi trabajo
                </p>
                <v-divider insert style="border-width: 1px; background-color: black"></v-divider>
            </v-col>
        </v-row>
        <div class="mt-8">
            <v-row>
                <v-container>
                    <v-row>
                        <v-col md="4">
                            <v-card width="400" height="140" color="#edf6f9">
                                <v-card-title>
                                    Cercanía y empatía
                                </v-card-title>
                                <v-card-text>
                                    Encuentras un espacio de cercanía y calidez donde puedes ser tú misma sin sentirte juzgada ni evaluada
                                </v-card-text>
                            </v-card>
                        </v-col>
                        <v-col md="4">
                            <v-card width="400" height="140" color="#edf6f9">
                                <v-card-title>
                                    Mente, cuerpo y emociones
                                </v-card-title>
                                <v-card-text>
                                    El ser humano como una totalidad, incluyendo e integrando la mente, el cuerpo y las emociones
                                </v-card-text>
                            </v-card>
                        </v-col>
                        <v-col md="4">
                            <v-card width="400" height="140" color="#edf6f9">
                                <v-card-title>
                                    Caminar juntas
                                </v-card-title>
                                <v-card-text>
                                    Tú y yo somos igual de importantes y caminamos juntas para conseguir los objetivos
                                </v-card-text>
                            </v-card>
                        </v-col>
                    </v-row>

                </v-container>
            </v-row>
            <v-row>
                <v-container>
                    <v-row>
                        <v-col md="4">
                            <v-card width="400" height="140" color="#edf6f9">
                                <v-card-title>
                                    Proceso breve
                                </v-card-title>
                                <v-card-text>
                                    Consigue los cambios que necesitas en un tiempo breve, mayoritariamente en menos de 10 sesiones
                                </v-card-text>
                            </v-card>
                        </v-col>
                        <v-col md="4">
                            <v-card width="400" height="140" color="#edf6f9">
                                <v-card-title>
                                    Técnicas
                                </v-card-title>
                                <v-card-text>
                                    Integro técnicas cognitivo-conductuales (validez científica) con técnicas gestálticas (mirada humanista)
                                </v-card-text>
                            </v-card>
                        </v-col>
                        <v-col md="4">
                            <v-card width="400" height="140" color="#edf6f9">
                                <v-card-title>
                                    Aprendizaje
                                </v-card-title>
                                <v-card-text>
                                    Todo lo aprendido te lo llevas en tu “maleta de herramientas”, y la puedes usar cuando la necesites
                                </v-card-text>
                            </v-card>
                        </v-col>
                    </v-row>

                </v-container>
            </v-row>
            <v-row class="mt-15">
                <v-col md="4" offset-md="4" style="text-align: center">
                    <p style="font-size: 40px; font-family: Fantasy; font-weight: bold; align-items: center">
                        Testimonios
                    </p>
                    <v-divider insert style="border-width: 1px; background-color: black"></v-divider>
                </v-col>
            </v-row>
            <v-row class="mt-8">
                <v-col md="6"  cols="12" offset-md="3">
                    <v-card elevation="5" color="#ffddd2">
                        <v-card-text>
                            <div class="text-justify">
                                Cuando empecé me sentía insegura en algunos aspectos de mi vida. El proceso con Carla me ha ayudado a entender y a superar inseguridades que llevaba tiempo arrastrando. ¡Ahora, soy una persona mucho más segura de mi misma y mucho más echada para adelante! Muchas gracias Carla
                            </div>
                            <p align="right" class="mt-1">
                                L. M.
                            </p>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col md="6" offset-md="3">
                    <v-card elevation="5" color="#ffddd2">
                        <v-card-text>
                            <div class="text-justify">
                                Antes de empezar la terapia tenía problemas de autoestima, no me quería lo suficiente a mí misma y me trataba mal. Carla me ha ayudado a hacerlo consciente, a entenderme, y a mejorarlo y tratarme de una forma más positiva.  Ahora que he terminado soy una persona más consciente, pienso que yo sí puedo, tengo más confianza en mí misma y he aprendido a valorarme
                            <p align="right" class="mt-1">
                                S. P.
                            </p>
                            </div>
                        </v-card-text>
                    </v-card>

                </v-col>
            </v-row>
            <v-row class="mt-15">
                <v-col md="4" offset-md="4" style="text-align: center">
                    <p style="font-size: 40px; font-family: Fantasy; font-weight: bold; align-items: center">
                        Preguntas frecuentes
                    </p>
                    <v-divider insert style="border-width: 1px; background-color: black"></v-divider>
                </v-col>
            </v-row>
            <v-row class="mt-8">
                <v-col md="8" offset-md="2">
                    <v-card-title>
                        <h4 v-if="$vuetify.breakpoint.mdAndUp">
                            Dudas a la hora de pedir ayuda profesional
                        </h4>
                        <h5 v-else>
                            Dudas a la hora de pedir ayuda profesional
                        </h5>

                    </v-card-title>
                </v-col>
            </v-row>
            <v-row class="mt-n3">
                <v-col md="8" offset-md="2">
                <v-expansion-panels>
                    <v-expansion-panel
                        v-for="(item,i) in items"
                        :key="i"
                    >
                        <v-expansion-panel-header color="#edf6f9">
<!--                                    <v-icon size="25" color="black" class="mt-n1">-->
<!--                                        {{item[0]}}-->
<!--                                    </v-icon>-->
                            <div>
                                <v-icon>
                                    arrow_right
                                </v-icon>
                                {{item[1]}}
                            </div>
                        </v-expansion-panel-header>
                        <v-expansion-panel-content class="mt-3">
                            <p style="font-size: 15px; margin-bottom: -8px">{{item[2]}}</p>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>
                </v-col>
            </v-row>



            <v-row class="mt-8">
                <v-col md="8" offset-md="2">
                    <v-card-title>
                        <h4 v-if="$vuetify.breakpoint.mdAndUp">
                            Preguntas concretas de mi terapia
                        </h4>
                        <h5 v-else>
                            Preguntas concretas de mi terapia
                        </h5>
                    </v-card-title>
                </v-col>
            </v-row>
            <v-row class="mb-10 mt-n3">
                <v-col md="8" offset-md="2">
                    <v-expansion-panels>
                        <v-expansion-panel
                            v-for="(item,i) in items1"
                            :key="i"
                        >
                            <v-expansion-panel-header color="#edf6f9">
                                <div>
                                    <v-icon>
                                        arrow_right
                                    </v-icon>
                                    {{item[1]}}
                                </div>
                            </v-expansion-panel-header>
                            <v-expansion-panel-content class="mt-3">
                                <p style="font-size: 15px; margin-bottom: -8px">{{item[2]}}</p>
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-expansion-panels>
                </v-col>
            </v-row>
        </div>
    </div>

</template>

<script>
export default {
    name: "Home",
    data () {
        return {
            slides: [
                '/img/q3.png',
                '/img/q1.png'
            ],
            post: '/img/post.png',
            list: [
                'Recuperar tu autoestima',
                'Superar la dependencia emocional\n',
                'Mejorar la relación contigo misma y con los demás\n',
                'Mejorar tu bienestar\n',
                'Hacer una separación consciente de tu pareja',
                'Conocerte más a ti misma',
                'Trabajar con tu crecimiento personal\n',
            ],
            items: {
                a :['arrow_right',
                    'Quizá no es tan grave lo que me pasa como para ir al psicólogo', 'La minimización del problema es una situación bastante frecuente y se puede ver en ejemplos como: “lo que me pasa no es tan importante”, “no es tan grave”, “es una tontería”… No es así. Tienes todo el derecho del mundo a que ciertas situaciones te afecten, te hagan estar mal, a quejarte y a pedir ayuda si la necesitas. No hay una línea que diga: esto es lo suficientemente grave como para pedir ayuda y esto no lo es. Los límites los pone tu mente'],
                b : [
                    'arrow_right',
                    'Me da miedo y vergüenza explicarle mis problemas a una persona que no conozco\n',
                    'Es normal que pienses esto y más si es la primera vez que consultas a un psicólogo. No te preocupes por esto, cuando hay una buena relación terapéutica, que es la relación terapeuta-cliente, se encuentra un espacio de calidez, escucha, comprensión, empatía, confianza… Vas a notarlo. En algunos casos, puede que no se dé esta buena relación de confianza, y es cuando debemos valorar si queremos seguir el proceso terapéutico con ese profesional o buscar a otro\n'
                ],
                c:[
                    'arrow_right',
                    'No sé si valdrá la pena invertir todo este dinero\n',
                    'Yo soy de las que opina que ROTUNDAMENTE SÍ, sin ninguna duda. Creo que el bienestar emocional, la salud mental, el estar bien contigo misma, con los demás y con la vida no tiene precio. En esta pregunta cada cual tendrá su opinión, yo te he dado la mía, subjetiva\n'
                ]
            },
            items1: {
                a :['arrow_right',
                    '¿Cuántas sesiones necesitaré?\n',
                    'Trabajo con una metodología breve y mayoritariamente, la persona alcanza los cambios que necesita en menos de 10 sesiones.\n'],
                b : [
                    'arrow_right',
                    '¿Con qué frecuencia se realizan las sesiones?\n',
                    'Las primeras cuatro o cinco sesiones son semanales, dependiendo de la evolución y del caso. Después se van espaciando en el tiempo, cada dos semanas y finalmente mensuales.\n'
                ],
                c:[
                    'arrow_right',
                    '¿Se trabaja únicamente durante las sesiones o también entre sesiones? \n',
                    'Se trabaja también entre sesiones, con el objetivo de fortalecer la integración de los cambios en la vida diaria. \n'
                ],
                D:[
                    'arrow_right',
                    '¿Cuándo voy a notar los beneficios de la terapia? \n',
                    'Los beneficios de la terapia se empiezan a notar desde la primera sesión y los cambios más significativos se producen a partir de la segunda sesión. Es importante mencionar que también depende de la implicación y compromiso de la persona en el proceso terapéutico. \n'
                ]
            }
        }
    },
}
</script>

<style scoped>

</style>
