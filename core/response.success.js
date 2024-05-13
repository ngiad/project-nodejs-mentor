export class SuccessResponse {
    constructor(data, meta = {
        success: true,
        error: null,
        code: "00",
        statusCode: 200
    }) {
        this.meta = meta
        this.data = data
    }

    send(res) {
        return res.status(this.meta.statusCode).json(this)
    }
}

export class Ok extends SuccessResponse {
    constructor(data, meta = {
        success: true,
        error: null,
        code: "00",
        statusCode: 200
    }) {
        super(data, meta)
    }
}

