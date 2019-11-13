Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
});

var app = new Vue({
    el: '#app',
    data: {
        lista: [
            {
                id: 0,
                text: "Tomate"
            },
            {
                id: 1,
                text: "Laranja"
            },
            {
                id: 2,
                text: "Bala"
            }
        ]
    }
});