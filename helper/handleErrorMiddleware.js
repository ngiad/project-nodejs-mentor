export function HandleError (cb) {
    return (req,res,next) => {
        cb(req,res,next).catch((err) => next({ message: err.message, code: "01", statusCode: err.statusCode }))
    }
}