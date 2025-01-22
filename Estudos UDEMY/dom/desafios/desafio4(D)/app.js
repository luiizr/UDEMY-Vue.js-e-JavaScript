new Vue({
    el: '#desafio',
    data: {
        aplicarDestaque: false,
        aplicarEncolher: false,
        classes: '',
        trocar: false,
        classes2: 'girar',
        cor5: '',
        estilo5: {
            width: '100px',
            height: '100px',
        },
        width: '0',
    },
    methods: {
        iniciarEfeito(){
                this.aplicarDestaque = !this.aplicarDestaque;
                this.aplicarEncolher = !this.aplicarDestaque;
        },
        iniciarProgresso(){
            let valor = 0
            const temporizador = setInterval(() => {
                valor += 2
                this.width = `${valor}%`
                if(valor == 100) clearInterval(temporizador)
            }, 250)
        },
        setPerigo(event){
            if(event.target.value == "true") {
                this.perigo = true
            } else if(event.target.value == "false")
                this.perigo = false
        },
    }
})

// [{destaque: aplicarDestaque}, {encolher: aplicarEncolher}]