import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import FirstShade from './home/FirstShade'
import conmon from './conmon/conmon'

const Store = new Vuex.Store({
    modules: {
        FirstShade,
        conmon
    }
})

export default Store



