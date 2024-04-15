module.exports = {
    index,
    getSkillById,
    createNewSkill,
    sendNewSkillForm,
    deleteSkillById,
    updateSkillById,
    sendUpdateSkillForm
};

const skills = require("../models/skills");

function index(req, res, next) {
    const getAllSkills = skills.getAllSkills();
    res.render("skills/index", { skills: getAllSkills, title: "All Skills" });
}

function getSkillById(req, res, next) {
    const skill = skills.getOneSkill(req.params.id);
    res.render("skills/id", { skill: skill, title: `${skill.skill}` });
}

function createNewSkill(req, res, next) {
    skills.create(req.body);
    res.redirect("/skills");
}

function sendNewSkillForm(req, res, next) {
    res.render("skills/create", { title: "Add Skill" });
}

function deleteSkillById(req, res, next) {
    skills.deleteOne(req.params.id);
    res.redirect("/skills");
}

function updateSkillById(req, res, next) {
    skills.update(req.params.id, req.body)
    res.redirect("/skills");
}

function sendUpdateSkillForm(req, res, next) {
    const skill = skills.getOneSkill(req.params.id);
    res.render("skills/id/edit", { skill, title: `Edit ${skill.skill}` });
}