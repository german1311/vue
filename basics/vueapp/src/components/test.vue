<template>
    <div class="test">
        <input type="text" v-model="title"><br />
        <h1>{{title}} </h1>
        <p v-if="showName" > {{user.firstName}} </p>
        <p v-text="user.lastName"></p>
        <ul>
            <li v-for="item in items">{{item.title}}</li>
        </ul>
        <button v-on:click="greet()"> Say greetings </button>
        <br />
        <input type="text" v-on:keyup="pressKey" v-on:keyup.enter="enterHit">

        <hr />
        <label> First Name: </label> <input type="text" v-model="user.firstName" />
        <br/>
        <label> Last Name: </label> <input type="text" v-model="user.lastName" />
        <br/>
         <h3>{{fullName}}</h3>

         <h2>{{msg}}</h2>
    </div>
</template>


<script>
export default {
    name: 'app',
    props: {
        msg: {
            type: String,
            default: 'foobar'
        }
    },
    data() {
        return {
            title:'hello world!',
            user: {
                firstName: 'German',
                lastName: 'Nina'
            },
            showName: true,
            items: [
                { title: 'Item 1' },
                { title: 'Item 2' },
                { title: 'Item 3' },
                { title: 'Item 4' },
                { title: 'Item 5' }
                ]
        }
    },
    methods: {
        greet: function(param) {
            alert(this.title);
        },
        pressKey:function(e){
            console.log(e.target.value);
        },
        enterHit: function(){
            console.log('u hit Enter');
        }
    },
    computed: {
        fullName: function(){
            return this.user.firstName + ' ' + this.user.lastName;
        }
    },
    created:function(){
        console.log('test created');
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
    list-style-type: none
}
</style>