const player = {
    name: "Lee",
    age: function(a){
        console.log(a);
    },
};

const a = parseInt(prompt("How old are you?"));
console.log(typeof a);
player.age(a);