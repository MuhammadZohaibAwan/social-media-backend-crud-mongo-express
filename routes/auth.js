const router = require('express').Router();
const User = require('../models/Users')


router.get('/register', async (req, res) => {
    const user = new User({
        username: 'john ',
        email: 'iamjohn@gmail.com',
        password: '123456'
    })
    await user.save();
    res.send('ok')
})

module.exports = router;