
export class ResponseError extends Error {
    constructor(message = "internal server error".toUpperCase(), statusCode = 500, code = "01") {
        super(message.toUpperCase())
        this.statusCode = statusCode
        this.code = code
    }
}

export class NotFound extends ResponseError{
    constructor(message = "Notfound!", statusCode = 404,code = "03"){
        super(message,statusCode,code)
    }
}

export class Forbidden extends ResponseError{
    constructor(message = "Forbidden", statusCode = 403, code = "04"){
        super(message,statusCode,code)
    }
}

export class Unauthorized extends ResponseError{
    constructor(message = "Unauthorized", statusCode = 401, code = '05'){
        super(message,statusCode,code)
    }
}

export class BadRequest extends ResponseError{
    constructor(message = "Bad Request", statusCode = 400, code = "06"){
        super(message,statusCode,code)
    }
}

export class ValidationEmpty extends ResponseError{
    constructor(message = "Validation Empty",statusCode =  400,code = "07"){
        super(message,statusCode,code)
    }
}
