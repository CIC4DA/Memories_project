import express  from "express";
const router = express.Router();

router.get('/',(req,res) => {
    res.send("THis works");
});

export default router;