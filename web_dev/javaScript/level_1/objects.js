/******** Object Create *********/
// let rect = {
//     length: 11,
//     breadth: 21,
//     draw: function let() {
//         console.log('Draw');
//         return 1;
//     },

//     calculateArea: function let() {
//         console.log('Area is: ');
//         return this.length * this.breadth;
//     }
// };

// // console.log(rect)
// console.log(rect.calculateArea())


/*************************** factory function ******************************/
// function createObject() {
//     let rect = {
//         length: 1,
//         breadth: 2
//     };
//     return rect;
// }

// let a = createObject();
// console.log(a.breadth)
// let b = a;
// a.breadth = 5;
// console.log(a.breadth)
// console.log(b.breadth)

// b.length = 4;
// console.log(a.length)
// console.log(b.length)


/************************** Constructor function *******************************/

// function CreateObject(len, bre){
//     this.length = len,
//     this.breadth = bre,
//     this.Area = function(){
//         return this.length * this.breadth;
//     }
// }
// let a = new CreateObject(2,3);
// console.log(a.Area());
// console.log(a.breadth);
// console.log(a.length);
// console.log(a);

// // constructor ka constructor
// let rb = new Function('length', 'bredth', `this.length = len,
//     this.breadth = bre,
//     this.Area = function(){
//         return this.length * this.breadth;
//     }
// `);

//********************** Dynamic Nature of obj *************************** */
function rect (){
    this.len = 5,
    this.breadth = 4,
    this.Area = function let(){
        return this.len * this.breadth;    
    }
};

let a = new rect();
console.log(a);
// this property added only in obj (a) not for obj (b);
a.color = 'Yellow';
console.log(a);

let b = new rect();
console.log(b);

/******************************** object litreals *********************************/
// function create() {
//     let rect = {
//         length: 1,
//         breadth: 2,
//         Area: function let() {
//             return this.length * this.breadth;
//         }
//     };
//     return rect;
    
// }

// let obj = create();
// console.log(obj);