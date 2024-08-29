function UserCredentialsMiddleware(req, res, next) {
    console.log('user:(john)')
    console.log('email:(john@gmail.com)')
    console.log('password:(********)')
    console.log('age:(17)')
    next()
}


export default UserCredentialsMiddleware;
