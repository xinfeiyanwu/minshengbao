const conmon = {
    state: {
        opacity: 0
    },
    mutations: {
        listenOpa: (state,payload) => {
            console.log(payload)
            if(state.opacity < 0) {
                return state.opacity = 0;
            }
            else if(state.opacity > 1){
                state.opacity = 1; 
            }
            
            state.opacity += -payload;
        },
        zeroSet: (state) => {
            state.opacity = 0;
        }
    },
    actions: {

    },
    getters: {

    }
}
export default conmon