const router = require('express').Router();
const Email = require("../../models/email");

router.post('/createEmail', async (req, res) => {
    try {
        const { email, name } = req.body;
        
        const existingEmail = await Email.findOne({ email: email });
        if (existingEmail) {
            return res.status(400).json({ error: "You are already subscribed!" });
        }

        const result = await Email.create({ email: email, name: name  });
        return res.status(201).json({ success: true, result });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ error: "There was an error adding this email to the database!" });
    }
});

module.exports = router;