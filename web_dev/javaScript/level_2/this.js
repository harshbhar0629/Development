// it show error in method we cant access object parameter directly...
// const mark = {
//     eng: 23,
//     maths: 25,
//     hindi: 35,
//     sci: 33,
//     getAvg() {
//         console.log((maths + hindi + eng + sci) / 4);
//     }
// };

// console.log(mark.getAvg());

const marks = {
    name: 'harsh',
    eng: 6,
    maths: 2,
    hindi: 5,
    sci: 3,
    getAvg() {
        let avg = ((this.maths + this.hindi + this.eng + this.sci) / 4);
        console.log(`${this.name} got the avg marks: ${avg}`);
    }
};

marks.getAvg();


function getAvg() {

    // it shows window and all which is higher level of object
    console.log(this);
}