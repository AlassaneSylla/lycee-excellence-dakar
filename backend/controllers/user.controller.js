const Users = require("../models/Users");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

/**
 * "saler" le mot de passe 10 fois.
 * plus la valeur est elevee plus le hachage sera securise
 */
exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
    .then(hash => {
        const user = new Users({
            username: req.body.username,
            email: req.body.email,
            password: hash
        });
        user.save()
        .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
        .catch(error => res.status(400).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
};

exports.login = (req, res, next) => {
    Users.findOne({ email: req.body.email })
    .then(user => {
        if (!user) {
            return res.status(401).json({ message: 'Paire login/mot de passe incorreste' });
        }
        bcrypt.compare(req.body.password, user.password)
        .then(valid => {
            if (!valid) {
                return res.status(401).json({ message: 'Paire login/mot de passe incorrecte' });
            }
            res.status(200).json({
                userId: user._id,
                token: jwt.sign(
                    { userId: user._id}, 
                    'RANDOM_TOKEN_SECRET',
                    { expiresIn: '24' }
                )
            });
        })
        .catch(error => res.status(500).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
};

exports.getAllUsers = (req, res, next) => {
    Users.find()
    .then(user => res.status(200).json(user))
    .catch(error => res.status(400).json({ error }));
};

exports.getUser = (req, res, next) => {
    Users.findOne({ _id: req.params.id })
    .then(user => res.status(200).json(user))
    .catch(error => res.status(404).json({ error }));
};

exports.editUser = (req, res, next) => {
    Users.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Donnée(s) user modifiée(s) !' }))
    .catch(error => res.status(400).json({ error }));
};

exports.deleteUser = (req, res, next) => {
    Users.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Utilisateur supprime !' }))
    .catch(error => res.status(400).json({ error }));
};
