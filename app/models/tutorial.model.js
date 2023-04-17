module.exports = (sequelize, Sequelize) => {
  const Tutorial = sequelize.define("todo", {
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    completed: {
      type: Sequelize.BOOLEAN
    }
  });

  return Tutorial;
};
