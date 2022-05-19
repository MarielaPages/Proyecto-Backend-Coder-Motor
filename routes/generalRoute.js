const { Router } = require('express');
const router = Router();

router.get("/", (req, resp) => {
    resp.render('pages/index') // lo busca en views
})

module.exports = router;