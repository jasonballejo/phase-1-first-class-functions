// 1
function receivesAFunction(value) {
    return value()
}

receivesAFunction(function () { return "Hello"})

// 2
function returnsANamedFunction(){
    return functionName
}
function functionName() {
    return 2 + 2
}
returnsANamedFunction()()

// 3
function returnsAnAnonymousFunction() {
    return () => "Hello"
}