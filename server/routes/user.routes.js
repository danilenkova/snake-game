const Router = require("express");
const router = new Router();
const userController = require("../controller/user.controller");

router.post("/user", userController.createUser);
router.get("/user", userController.getUsers);
router.get("/user/:id", userController.getOneUser);

// router.get("/db", async (req, res) => {
//   try {
//     const client = await pool.connect();
//     const result = await client.query("SELECT * FROM test_table");
//     const results = { results: result ? result.rows : null };
//     res.render("pages/db", results);
//     client.release();
//   } catch (err) {
//     console.error(err);
//     res.send("Error " + err);
//   }
// });

module.exports = router;
