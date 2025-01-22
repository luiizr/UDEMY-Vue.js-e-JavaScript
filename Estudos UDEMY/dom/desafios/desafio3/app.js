new Vue ({
    el: '#desafio',
    data: {
        valor: 0,
        resultado: '',
    },
    watch: {
        resultado(antigo, novo) {
            console.log(antigo, novo)
            setTimeout(() => {
                this.valor = 0
            }, 5000)
        }
    },
    methods: {

    },
})