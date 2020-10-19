function calculations () {
    debugger;
    let total = 0;
    let a =1;
    let b=2;
    let c=3;
    total = a+b+c;
    return total 
}

function powerOf3 (num) {
    return number **3;
}

try { //when we think we may get an error;
    powerOfThree(9);
} catch(e) {
    alert('Some error ocurred');
} finally {
    //get executed no mater what;
}
alert('Welcome to my website');

powerOfThree(9);

//calculations ();

function getUserName (user) {
    if (!user.name===undefined) {
        throw new SyntaxError ('Incomplete data.');
    }
    return user.name;
}

getUserName({name: 'John'});
getUserName();