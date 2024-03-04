function validateName(req, res, next) {
    // Any number of names with spaces in between (some people have multiple last names)
    const regex = /^(\w *)+$/;
    if (regex.test(req.body.name)) {
        next();
        return;
    }

    res.status(422).json({
        status: false,
        msg: "Name is not valid.",
    });
}

function validatePassword(req, res, next) {
    // Any values at the moment
    const regex = /^.*$/;
    if (regex.test(req.body.name)) {
        next();
        return;
    }

    res.status(422).json({
        status: false,
        msg: "Password is not valid.",
    });
}

function validateEmail(req, res, next) {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (regex.test(req.body.email)) {
        next();
        return;
    }

    res.status(422).json({
        status: false,
        msg: "Email is not valid.",
    });
}

function validatePhone(req, res, next) {
    const regex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;
    if (regex.test(req.body.phone)) {
        next();
        return;
    }

    res.status(422).json({
        status: false,
        msg: "Phone is not valid.",
    });
}


function validateBirthday(req, res, next) {
    // Format must be mm/dd/yyyy
    // TODO: Update later to be more specific
    const regex = /^\d\d\/\d\d\/\d\d\d\d$/;
    if (regex.test(req.body.birthday)) {
        next();
        return;
    }

    res.status(422).json({
        status: false,
        msg: "Birthday is not valid.",
    });
}

module.exports = { validateName, validatePassword, validateEmail, validatePhone, validateBirthday }