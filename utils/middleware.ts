const requestLogger = (request:any, response:any, next:any) => {
    console.log('Method: ', request.method),
      console.log('Path: ', request.path),
      console.log('Body: ', request.body),
      console.log('-----')
    next()
  }
  const tokenHandler = (request:any,response:any,next:any) => {
    const authorization = request.get('authorization')
    if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
      const token= authorization.substring(7)
      request.token=token
    }
    next()
  }

const errorHandler = (error:any, request:any, response:any, next:any) => {
    console.log(error)
    next(error)
  }
  module.exports = {
    requestLogger,
    tokenHandler,
    errorHandler,
  }