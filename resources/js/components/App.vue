<template>
    <v-app>
        <app-bar></app-bar>
<!--        <footer></footer>-->
        <!--        <div>-->
<!--            <router-view></router-view>-->
<!--        </div>-->
    </v-app>

    <!-- App.vue -->

<!--    <app-bar>-->

<!--    </app-bar>-->

<!--    <v-app>-->
<!--        <v-navigation-drawer app>-->
<!--            &lt;!&ndash; &ndash;&gt;-->
<!--        </v-navigation-drawer>-->

<!--        <v-app-bar app>-->
<!--            &lt;!&ndash; &ndash;&gt;-->
<!--        </v-app-bar>-->

<!--        &lt;!&ndash; Sizes your content based upon application components &ndash;&gt;-->
<!--        <v-main>-->

<!--            &lt;!&ndash; Provides the application the proper gutter &ndash;&gt;-->
<!--            <v-container fluid>-->
<!--                "adasdas"-->
<!--                "adasdas"-->
<!--                "adasdas"-->
<!--                "adasdas"-->
<!--                &lt;!&ndash; If using vue-router &ndash;&gt;-->
<!--                <router-view></router-view>-->
<!--            </v-container>-->
<!--        </v-main>-->

<!--        <v-footer app>-->
<!--            &lt;!&ndash; &ndash;&gt;-->
<!--        </v-footer>-->
<!--    </v-app>-->
</template>

<script>
import AppBar from "./appBar";
import Home from "./Home";
export default {
    name: "app",
    components: {Home, AppBar}
}
</script>
