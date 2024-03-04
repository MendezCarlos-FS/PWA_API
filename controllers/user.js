function signup(req, res) {
    res.status(200).json({
        message: "User has successfully signed up!",
        user: {
            ...req.body,
            password: req.body.password.split("").map(val => "●").join("")
        }
    });
}

module.exports = { signup }