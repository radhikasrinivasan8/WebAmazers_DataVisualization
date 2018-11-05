var express = require('express');
var router = express.Router();
var ctrlMain = require("../controllers/main");

/*
 * GET login page.
 */
router.get('/', ctrlMain.get_websites);

router.get('/websites', ctrlMain.get_website_with_ID);
router.post('/insertDbData', ctrlMain.post_db_data);
router.post('/editDbData', ctrlMain.edit_db_data);

router.get('/searchFromDB', ctrlMain.search_DB)

router.delete('/deleteFromDB', ctrlMain.delete_DB);

router.get('/dashboard', ctrlMain.get_dashboard);
router.get('/dashboardData', ctrlMain.get_dashboard_data);
router.get('/dashboardGraph1', ctrlMain.get_dashboard_graph1);
router.get('/dashboardGraph2', ctrlMain.get_dashboard_graph2);

router.get('/dashboardbar', ctrlMain.get_dashboardbar);


module.exports = router;