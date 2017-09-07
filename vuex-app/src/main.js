// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import '../node_modules/uui/index.js'

import Vue from 'vue'
import Vuex from 'vuex'
// import App from './App'
import uuid from 'uuid'

Vue.use(Vuex)
Vue.config.productionTip = false

//keep in mind actions for async operations
const store = new Vuex.Store({
  state: {
    todos: [{
        task: 'Code',
        completed: true,
        id: uuid.v4()
      },
      {
        task: 'Sleep',
        completed: false,
        id: uuid.v4()
      },
      {
        task: 'Eat',
        completed: false,
        id: uuid.v4()
      }
    ]
  },
  getters: {
    todos: state => state.todos
  },
  mutations: {
    addTodo: (state, payload) => {
      const task = {
        task: payload,
        completed: false,
        id: uuid.v4()
      }
      console.log(state)
      state.todos.unshift(task);
    },
    toggleTodo: (state, payload) => {
      state.todos = state.todos.map(t => {
        if (t.id === payload) {
          return {
            task: t.task,
            completed: !t.completed,
            id: t.id
          }
        }
        return t;
      })
    },
    deleteTodo: (state, payload) => {
      const index = state.todos.findIndex(t => t.id === payload);
      state.todos.splice(index, 1)
      console.log(index)
    }
  }
})

const todoList = {
  props: ['todos'],
  methods: {
    toggleTodo: function (id) {
      this.$store.commit('toggleTodo', id)
    },
    deleteTodo: function (id) {
      this.$store.commit('deleteTodo', id)
    }
  },
  template: `
    <div>
      <ul>
        <li v-for="t in todos" :class="{completed: t.completed}" @click="toggleTodo(t.id)" @dblclick="deleteTodo(t.id)">{{t.task}}</li>
      </ul>
    </div>
  `
}

var App = new Vue({
  data: function () {
    return {
      task: ''
    }
  },
  computed: {
    todos: function () {
      return this.$store.getters.todos
    }
  },
  methods: {
    addTodo: function () {
      this.$store.commit('addTodo', this.task)
      this.task = ''
    }
  },
  template: `
    <div>
      <form @submit.prevent="addTodo">
        <input type="text" v-model="task" />
      </form>
      <todo-list :todos="todos"></todo-list>
    </div>
  `,
  store: store,
  components: {
    'todo-list': todoList
  }
});
App.$mount('#app');
