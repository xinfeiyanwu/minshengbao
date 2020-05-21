const conmon = {
    state: {
        opacity: 0,
        _height: 0,
        scanState: false,
        navState: true
    },
    mutations: {
        listenOpa: (state,payload) => {
            if(state.opacity < 0) {
                return state.opacity = 0;
            }
            else if(state.opacity > 1){
                state.opacity = 1; 
            }
            else{  
                state.opacity = payload/state._height;
            }
        },
        zeroSet: (state) => {
            state.opacity = 0;
        },
        setHeight: (state,payload) => {
            state._height = payload;
        },
        //Scan
        showScan: (state) => {
            state.scanState = true;
            state.navState = false;
        },
        hiddenScan: (state) => {
            state.scanState = false;
            state.navState = true;
        },
    },
    actions: {

    },
    getters: {

    }
}
export default conmon