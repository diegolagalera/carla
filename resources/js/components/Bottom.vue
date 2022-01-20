<template>
    <v-footer
        v-if="$vuetify.breakpoint.mdAndUp"
        color="grey"
        padless
    >
        <v-row
            no-gutters
        >
            <v-col md="2" offset-md="2">

                <v-row class="mt-5">
                    <router-link  class="my-2" style="color: white" to="/">Inicio</router-link>
                </v-row>
                <v-row>
                    <router-link  class="my-2" style="color: white" to="/SobreMi">Sobre mí</router-link>
                </v-row>
                <v-row>
                    <router-link  class="my-2" style="color: white" to="/servicios">Servicios</router-link>
                </v-row>
            </v-col>
            <v-col md="2">
                <v-row class="mt-5">
                    Política y privacidad
                </v-row>
                <v-row>
                    <router-link  class="my-2" style="color: white" to="/AvisoLegal">Aviso Legal</router-link>
                </v-row>
            </v-col>
            <v-col md="2">
                <v-row class="mt-5 mb-4">
                    Contáctame
                </v-row>
                    <v-row @click="call('656967975')" class="mt-5">
                        <v-icon>phone </v-icon><h4 class="ml-2"> 656967975</h4>
                    </v-row>
                <v-row @click="open(icons[3].link)" class="mt-5">
                    <v-icon>mdi-instagram </v-icon> <h4 class="ml-2">@psicocarlaviladot</h4>
                </v-row>
                    <v-row class="mt-5">

                        <v-icon>email </v-icon>
                        <a class="ml-2" v-bind:href="'mailto:' + 'psicocarlaviladot@gmail.com'">psicocarlaviladot@gmail.com </a>

                    </v-row>

            </v-col>
            <v-col md="3">
                <h3 class="mb-2 mt-2">Newsletter</h3>
                <h5 class="mb-2 mt-2">No te pierdas las últimas novedades, noticias y descuentos, apúntate a la newsletter</h5>
                <v-row class="mt-4">
                    <v-col md="8">
                    <v-text-field
                        v-model="email"
                        outlined
                        prepend-inner-icon="email"
                        nom="Email"
                        label="email"
                        type="text"
                    />
                    </v-col>
                    <v-col md="4">

<!--                    <input v-model="email" name="email">-->
                    <v-btn @click="submitForm" color="primary" height="55">
                        Submit
                    </v-btn>
                    </v-col>

                </v-row>
            </v-col>

            <v-col
                class="py-4 text-center white--text"
                cols="12"
            >
                {{ new Date().getFullYear() }} — <strong>© Carla Viladot. Todos los derechos reservados</strong>
            </v-col>
        </v-row>
        <vue-whatsapp-widget phoneNumber="+34656967975"></vue-whatsapp-widget>
    </v-footer>


    <v-footer v-else
              color="grey">
        <v-container>
        <v-row>
            <v-col cols="12">
                <v-row>
                    <v-col md="4" offset-md="4" style="text-align: center">
                        <p style="font-size: 20px; font-family: Fantasy; font-weight: bold; align-items: center">
                            Contáctame                        </p>
                        <v-divider insert style="border-width: 1px; background-color: black"></v-divider>
                    </v-col>
                </v-row>
                <v-row @click="call('656967975')" class="mt-5">
                    <v-icon>phone </v-icon><h4 class="ml-2"> 656967975</h4>
                </v-row>
                <v-row @click="open(icons[3].link)" class="mt-5">
                    <v-icon>mdi-instagram </v-icon> <h4 class="ml-2">@psicocarlaviladot</h4>
                </v-row>
                <v-row class="mt-5">

                    <v-icon>email </v-icon>
                    <a class="ml-2" v-bind:href="'mailto:' + 'psicocarlaviladot@gmail.com'">psicocarlaviladot@gmail.com </a>

                </v-row>

            </v-col>
            <v-col cols="12">
                <v-row>
                    <v-col md="4" offset-md="4" style="text-align: center">
                        <p style="font-size: 20px; font-family: Fantasy; font-weight: bold; align-items: center">
                            Newsletter                        </p>
                        <v-divider insert style="border-width: 1px; background-color: black"></v-divider>
                    </v-col>
                </v-row>
            </v-col>
            <v-col md="3" cols="12">
                <h5 class="mb-2 mt-2">No te pierdas las últimas novedades, noticias y descuentos, apúntate a la newsletter</h5>
                <v-row class="mt-4">
                    <v-col cols="9">
                        <v-text-field
                            v-model="email"
                            outlined
                            prepend-inner-icon="email"
                            nom="Email"
                            label="email"
                            type="text"
                        />
                    </v-col>
                    <v-col cols="2">
                        <v-btn @click="submitForm" color="primary" height="55" class="ml-n4">
                            ENVIAR
                        </v-btn>
                    </v-col>

                </v-row>
            </v-col>

            <v-col
                class="text-center white--text"
                cols="12"
            >
                {{ new Date().getFullYear() }} — <strong>© Carla Viladot. Todos los derechos reservados</strong>
            </v-col>
        </v-row>
        </v-container>

    </v-footer>

</template>

<script>
import VueWhatsappWidget from 'vue-whatsapp-widget'

export default {
    name: "Bottom",
    components: {
        VueWhatsappWidget
    },
    data: () => ({
        email: '',
        links: [
            'Inicio',
            'Sobre mi',
            'Servicios',
        ],
        fullPage : true,
        // icons: [
        //     'mdi-facebook',
        //     'mdi-twitter',
        //     'mdi-linkedin',
        //     'mdi-instagram',
        // ],
        icons: [
            {icon : 'mdi-facebook', link : 'https://www.instagram.com/carla_psicologa_/' },
            {icon : 'mdi-twitter', link : 'https://www.instagram.com/carla_psicologa_/' },
            {icon : 'mdi-linkedin', link : 'https://www.instagram.com/carla_psicologa_/' },
            {icon : 'mdi-instagram', link : 'https://www.instagram.com/psicocarlaviladot/' }
        ]
        // link: [
        //     '',
        //     '',
        //     '',
        //     'https://www.instagram.com/p/CWLSsvvNEjN/'
        // ]
    }),
    methods:{
        open(href) {
            window.open(href, '_blank')
        },
        call(phone){
            window.open('tel:' + phone)
        },
        async submitForm() {
            axios.post('/newsletter/store',{email: this.email}).then(response => {
                console.log('todo ok')
            })
            // const res = await fetch('/newsletter/store', {
            //     method: 'POST',
            //     headers: {'Content-Type': 'application/json'},
            //
            //     // pass in the information from our form
            //     body: JSON.stringify({
            //         email: this.email,
            //     })
            // })
        }
    },

}
</script>

<style scoped>

</style>
