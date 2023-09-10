testingArrow = {
    name : "isaac maciel",
    normalFunction : function () {
        console.log(this);
    },
    arrowFunction : () => {
        console.log(this);
    }
}

testingArrow.arrowFunction()