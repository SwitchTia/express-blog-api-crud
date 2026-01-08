export default function notFound (req, res, next){
    res.status(404)
        .json({
            Error: "Not found",
            message: "Page was not found"
        });
    next();
} 