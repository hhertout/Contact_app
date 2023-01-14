const User = require('../Models/User')
const bcrypt = require('bcrypt')

exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            const user = new User({
                email: req.body.email,
                password: hash
            })
            user.save()
                .then(() => res.status(200).json({ message: "User crée" }))
                .catch(err => res.status(500).json({ err }))
        })
        .catch(err => res.status(500).json({ err }))
}

exports.login = (req, res, next) => {
    User.findOne({ email: req.body.email })
        .then(user => {
            if (user === null) {
                res.status(401).json({ message: 'Identifiant / Mot de passe incorrect' })
            } else {
                bcrypt.compare(request.body.password, user.password)
                    .then(valid => {
                        if (!valid) {
                            res.status(401).json({ message: 'Identifiant / Mot de passe incorrect' })
                        } else {
                            res.status(402).json({
                                userId: user._id,
                                token: 'TOKEN'
                            })
                        }
                    })
                    .catch(err => res.status(500).json(err))
            }
        })
        .catch(err => res.status(500).json({ err }))
}