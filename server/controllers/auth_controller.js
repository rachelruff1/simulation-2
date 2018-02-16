let id = 1;

const login = (req, res, next) => {
    const { session } = req;
    const { username, password } = req.body;
}

const register = (req, res, next) => {
    const {session} = req;
    const {username, password} = req.body
    session.user.username = username;
    const db = req.app.get('db');
    db 
        .register_user([username, password])
        .then(() => res.status(200).send(session.user))
        .catch(() => res.status(500).send());
        console.log(req.session);
    }


const signout = (req, res, next) => {

}

const getUser = (req, res, next) => {

}

module.exports = {
    login,
    register,
    signout,
    getUser
};