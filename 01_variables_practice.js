console.log('alpha')

// const cannot be changes, but to make changable variable, we can user
// var and let both, but using var is not preferable anymore, so we will use const and let
const accountId=12345
let name="Antarik"
var email="antarik@gamil.com"
city='kolkata'
let accountState;   //it will return undefined

//another way to print multiple variable-

console.table([accountId,name,email,city,accountState])