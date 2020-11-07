<template>
  <div  class="colaboradores">
      <h1>Lista de Colaboradores</h1>
      <table>
        <tr>
          <th>Nombre</th>
          <th>Email</th>
          <th>Dirección</th>
          <th>Teléfono</th>
          <th>Company</th>
        </tr>
        <tr class='fila' v-for="(usuario, index) in usuarios">
          <td :class='index % 2 == 0 ? "row" : "row-alt"'>{{usuario.name}}</td>
          <td :class='index % 2 == 0 ? "row" : "row-alt"'>{{usuario.email}}</td>
          <td :class='index % 2 == 0 ? "row" : "row-alt"'>{{`${usuario.address.street} ${usuario.address.suite} - ${usuario.address.city}`}}</td>
          <td :class='index % 2 == 0 ? "row" : "row-alt"'>{{usuario.phone}}</td>
          <td :class='index % 2 == 0 ? "row" : "row-alt"'>{{usuario.company.name}}</td>
        </tr>
      </table>
    </div>
</template>

<script>
export default {
    name: 'Colaboradores',
    data() {
        return {
            usuarios: [],
        }
    },
    methods: {
        async getInfoUsers() {
            const info = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await info.json();
            this.usuarios = data;
        }
    },

    created() {
        this.getInfoUsers();
    }
}
</script>
<style scoped>
  table {
    width: 100%;
  }
  th {
    border: 0;
    background:rgb(35, 41, 116);;
    color: white;
    padding: 10px;
    margin: 0;
  }
  .colaboradores {
    margin: 20px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .colaboradores > h1 {
    margin-bottom: 20px;
  }
  .row {
    font-size: 12px;
    padding: 5px;
    text-align: left;
    background: transparent;
    border: 0;
    margin: 0;
  }
  .row-alt {
    font-size: 12px;
    padding: 5px;
    text-align: left;
    background: rgb(238, 231, 231);
    border: 0;
    margin: 0;
  }
  .fila:hover > .row, .fila:hover > .row-alt {
    background: rgb(250, 186, 68);
  }
</style>