console.log('Product js file exporting');

let order = function(buyer, items){
    console.log(`${buyer} order this ${items}`);
}

let a = 10;
let b = 40;

// export {a as firstvalue,b}

export default order