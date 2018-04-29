/**
 * AdLinkr
 * A URL shortening tool for digital marketers
 * https://github.com/jodylecompte/AdLinkr
 * License: MIT
 *
 * Written by Jody LeCompte <jody@jodylecompte.com
 * Website: https://jodylecompte.com
 */

const express = require('express');
const router = new express.Router();

const CampaignRoutes = require('../routes/api/campaigns');

router.use('/campaigns', CampaignRoutes);

router.get('/*', (req, res) => {
    res.json({'error': 'Invalid endpoint.'});
});

module.exports = router;
