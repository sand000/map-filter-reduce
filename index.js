// create own array

function MyArray(){
    this.length = 0;
    Object.defineProperty(this, "length",{
        value:0,
        enumerable:false,
        writable: true,
    })
}

// push
MyArray.prototype.push = function(e){
    this[this.length] = e;
    this.length++;
    return this.length;
}

// pop
MyArray.prototype.pop = function(){
    this.length--;
    var elem = this[this.length]
    delete this[this.length]
    return elem;
}

// map 
MyArray.prototype.map  = function(callBack){

    var res = new MyArray()
    for(index in this){
        if(this.hasOwnProperty(index)){
           res.push(callBack(this[index],index, this));
        }
    }
    return res;
}

// filter
MyArray.prototype.filter  = function(callBack){

    var res = new MyArray()
    for(index in this){
        if(this.hasOwnProperty(index)){
            if(this[index] >20){
                res.push(callBack(this[index],index, this));
            }else{
                res.push(callBack(-1));
            }
          
        }
    }
    return res;
}


// reducer
MyArray.prototype.reduce  = function(callBack){

    var res = new MyArray()
    let sum=0;
    for(index in this){
        if(this.hasOwnProperty(index)){
                sum = sum+this[index]
        }  
    }
    return sum;
}



var arr = new MyArray()

arr.push(1);
arr.push(23)
arr.push(34);

let result = arr.map(function(val){
    return val;
});


let filter = arr.filter(function(val){
    return val;
});


let reduce = arr.reduce(function(val){
    return val;
});

console.log(result);
// console.log(filter);
// console.log(reduce);