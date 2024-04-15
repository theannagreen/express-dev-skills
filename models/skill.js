const skills = [
    {
        id: 1,
        skill: "HTML",
        yearsOfExpereince: 5, 
    },
    {
        id: 2,
        skills: "CSS",
        yearsOfExpereince: 5,
  },
  {
    id: 3,
    skill: "JavaScript",
    yearsOfExperience: 5,
  },
  {
    id: 4,
    skill: "Node.js",
    yearsOfExperience: 5,
  },
  {
    id: 5,
    skill: "Express.js",
    yearsOfExperience: 2,
  },
  {
    id: 6,
    skill: "React",
    yearsOfExperience: 2,
  },
  {
    id: 7,
    skill: "MongoDB",
    yearsOfExperience: 0,
  },
];

function getAllSkills() {
  return skills;
}

function getOneSkill(id) {
  return skills.find((skill) => skill.id === parseInt(id));
}

function create(skill) {
  skill.id = Date.now() % 1000000;
  skill.yearsOfExperience = parseInt(skill.yearsOfExperience);
  skills.push(skill);
}

function deleteOne(id) {
  const idx = skills.findIndex((skill) => skill.id === parseInt(id));
  skills.splice(idx, 1);
}

function update(skill, newSkill) {
  const idx = skills.findIndex((s) => s.id === parseInt(skill));
  Object.assign(skills[idx], newSkill);
}

module.exports = {
  getAllSkills,
  getOneSkill,
  create,
  deleteOne,
  update,
};
