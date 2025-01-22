new Vue({
    el: '#desafio',
    data: {
        valor: "" ,
        valor2:"" ,
        valor3:"" ,
        valor4:"" ,
    },
    methods: {
      exibiralerta(){
        alert('Que sirva de alerta!')
      },
      armazenar(event){
        this.valor =  event.target.value
      },
      armazenar2(event){
        this.valor2 =  event.target.value
      },
      armazenar3(event){
        this.valor3 = event.target.value
      },
      mostrararmazenado(){
        this.valor4 = this.valor3
      }
    }
})