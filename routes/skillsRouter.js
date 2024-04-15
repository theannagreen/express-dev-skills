var express = require("express");
var router = express.Router();
const skillsCtrl = require("../controllers/skillsController");

router.get("/", skillsCtrl.index); //index
router.get("/new", skillsCtrl.sendNewSkillForm); // new skills form
router.get("/:id/edit", skillsCtrl.sendUpdateSkillForm); // edit skill form 
router.delete("/:id", skillsCtrl.deleteSkillById); // delete skill 
router.post("/", skillsCtrl.createNewSkill); // create new skill 
router.put("/:id", skillsCtrl.updateSkillById); // update skill 
router.get("/:id", skillsCtrl.getSkillById); // show skill 

module.exports = router; 
