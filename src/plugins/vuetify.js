import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

const opts = {
    theme: { light: true },
    icons: {
        iconfont: 'md' || 'fa'
    },
}

export default new Vuetify(opts)