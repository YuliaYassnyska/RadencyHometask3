function mustBeInteger(req, res, next) {
    const id = req.params.id
    if (!Number.isInteger(parseInt(id))) {
        res.status(400).json({ message: 'ID must be an integer' })
    } else {
        next()
    }
}
function checkFieldsPost(req, res, next) {
    const { name, created, category, content } = req.body
    if (name && created && category && content) {
        next()
    } else {
        res.status(400).json({ message: 'fields are not good' })
    }
}
module.exports = {
    mustBeInteger,
    checkFieldsPost
}