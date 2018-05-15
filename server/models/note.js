module.exports = (sequelize, DataTypes) => {
  const Note = sequelize.define('Note', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "New Note"
    },
    createdAt: {
      type: DataTypes:DATE,
      allowNull: false,
      defaultValue: new Date()
    },
    updatedAt: {
      type: DataTypes:DATE,
      allowNull: false,
      defaultValue: new Date()
    },
    content: {
      type: DataTypes.TEXT
    }
  });
  Note.associate = function(models) {
    // associations can be defined here
  };
  return Note;
};
