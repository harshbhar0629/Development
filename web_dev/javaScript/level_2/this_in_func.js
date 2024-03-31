//this in function
const Student = {
    mark: 10,
    name: 'harsh',
    prop: this,

    getName: function () {
        console.log(this);
        return this.name;
    },
    getMark: () => {
        console.log(this);
        return this.marks;
    }
};

console.log(Student.getName());
console.log(Student.getMark());