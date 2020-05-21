const scan = {
    state: {
        scanState: false
    },
    mutations: {
        showScan: (state) => {
            state.scanState = true;
        },
        hiddenScan: (state) => {
            state.scanState = false;
        },
    }
}

export default scan