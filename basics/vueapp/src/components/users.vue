<template>
    <div class="users">
        <H1>Users</h1>
        <form v-on:submit="addUser">
            <input type="text" v-model="newUser.name" placeholder="name">
            <br/>
            <input type="text" v-model="newUser.email" placeholder="email">
            <br />
            <input type="submit" value="Submit"> 
        </form>
        <ul>
            <li v-for="user in users">
                <input type="checkbox" class="toggle" v-model="user.contacted">
                <span :class="{contacted: user.contacted}">
                    {{user.name}}: {{user.email}} <button v-on:click="deleteUser(user)" >x</button>
                </span>
            </li>
        </ul>
    </div>
</template>


<script>

export default {
    name: 'app',
    data() {
        return {
            newUser: {},
            users: [
                {
                    name: 'john snow',
                    email: 'js@targerian.com',
                    contacted: false
                },
                {
                    name: 'Daenerys Targerian',
                    email: 'js@stark.com',
                    contacted: true
                },
                {
                    name: 'Theon Lanister',
                    email: 'js@lanister.com',
                    contacted: false
                }
            ]
        }
    },
    methods: {
        addUser: function (e) {
            this.users.push({
                name: this.newUser.name,
                email: this.newUser.email,
                contacted: false
            } );

            console.log(this.users);
            
            e.preventDefault();
        },
        deleteUser:function(user){
            this.users.splice(this.users.indexOf(user), 1)
        }
    },
    created: function(){
        this.$http.get('https://jsonplaceholder.typicode.com/users')
        .then(function(response){
            this.users = response.data
        });
    }
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

#app ul li {
    list-style-type: none;
}

.contacted{
    text-decoration: line-through;
}
</style>