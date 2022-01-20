<template>
    <v-container fluid
                 :class="{'px-0': $vuetify.breakpoint.xs, 'px-0': $vuetify.breakpoint.mdAndUp, 'py-0': $vuetify.breakpoint.mdAndUp}"
    >
<!--    MENU PER VERCIO MOBIL-->
        <v-navigation-drawer
            v-model="draw"
            fixed
            left
            clipped
            app
            disable-resize-watcher
        >
            <v-card>
                <v-list flat>
                    <v-subheader>Menu</v-subheader>
                    <v-list-item-group
                        color="primary"
                    >
                        <v-list-item
                            v-for="(item, i) in apps"
                            :key="i"
                        >
                            <v-list-item-icon>
                                <v-icon v-text="item.icon"></v-icon>
                            </v-list-item-icon>
                            <v-list-item-content>
                                <v-list-item-title v-text="item.name" @click="goRoute(item.path)"></v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list-item-group>
                </v-list>

            </v-card>
        </v-navigation-drawer>
<!-- MENU VERCIO PC-->
        <v-app-bar
            fixed
            app
            prominent
            elevate-on-scroll
            height="100%"
            color="#edf6f9"
            style="opacity: 0.95"
            scroll-target="#scrolling-techniques-7"
        >
            <v-container>
                <span v-if="!$vuetify.breakpoint.mdAndUp">
                    <v-row>
                        <v-col cols="3">
                            <v-app-bar-nav-icon
                                @click="draw=true">
                            </v-app-bar-nav-icon>
                        </v-col>
                        <v-col>
                             <v-toolbar-title>
                                 <v-img src="/img/logo1.png" width="220" height="62" class="ml-n2">

                                 </v-img>
<!--                                <h5>-->
<!--                                    C A R L A-->
<!--                                </h5>-->
<!--                                <h5 class="font-weight-black">-->
<!--                                    V I L A D O T-->
<!--                                </h5>-->
<!--                                <h5 class="font-weight-thin" style="font-size: 14px">-->
<!--                                    P S I C Ò L O G A-->
<!--                                </h5>-->
                            </v-toolbar-title>
                        </v-col>
                    </v-row>
                </span>
                <v-toolbar-title v-else>
                    <v-row>
                        <v-col cols="2" class="mt-1">
                            <v-img
                                max-height="60"
                                max-width="60"
                                src="https://cdn-icons-png.flaticon.com/128/3203/3203858.png"
                            >
                            </v-img>
                        </v-col>
                        <v-col cols="1">
                            <h5>
                                C A R L A
                            </h5>
                            <h5 class="font-weight-black">
                                V I L A D O T
                            </h5>
                            <h5 class="font-weight-thin" style="font-size: 14px">
                                P S I C Ò L O G A
                            </h5>
                        </v-col>
                    </v-row>

                </v-toolbar-title>
            </v-container>
            <v-tabs
                v-if="$vuetify.breakpoint.mdAndUp"
                color="deep-purple accent-4"
                right
                icons-and-text
            >
                <v-tab
                    v-for="app in apps"
                    :key="app.name"
                    :to="app.path">

                    {{ app.name }}
<!--                    <v-icon>-->
<!--                        {{ app.icon }}-->
<!--                    </v-icon>-->
                </v-tab>
            </v-tabs>
        </v-app-bar>
        <v-sheet
            max-height="100%"
            style="margin-top: 100px"
        >

            <transition>
                <router-view/>
            </transition>

        </v-sheet>

        <bottom></bottom>
    </v-container>
</template>

<script>
import Home from "./Home";
import {routes} from "../routes";
import Bottom from "./Bottom";

export default {
    name: "appBar",
    components: {Bottom, Home},
    data: () => ({
        value: 2,
        draw: false
    }),
    props: {
        apps: {
            type: Array,
            default: () => [routes[0],routes[1], routes[2]]
        }
    },
    methods: {
        goRoute(path) {
            this.$router.push({path: path})
        }
    }
}
</script>


<style scoped>

</style>
