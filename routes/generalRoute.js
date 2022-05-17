const { Router } = require('express');
const router = Router();

router.get("/", (req, resp) => {
    resp.render('pages/index')
})

module.exports = router;