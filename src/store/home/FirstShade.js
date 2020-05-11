const FirstShade = {
    state: {
        isShow: true
    },
    mutations: {
        hideFirstShade: (state) => {
            state.isShow = false;
        },
        show: (state)=>{
            state.isShow = true;
            console.log(state.isShow)
        }
    },
    actions: {

    },
    getters: {

    }
}

export default FirstShade