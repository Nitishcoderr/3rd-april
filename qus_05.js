{
    console.log(x);
    let x = 23;
}

// When we attempt to log the value of x to the console before it's assigned a value. Because of the temporal dead zone, the variable x is not yet initialized, and attempting to access it will result in a ReferenceError.