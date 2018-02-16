module.exports = {
    add: (req, res, next) => {
        const { homeListings } = request.session.user;
        homeListings.push(items);
    }