export const findData = (id) => {
  return `SELECT * FROM exercisediary WHERE user_id = ${id}`;
};
export const findStatus = (diaryId) => {
  return `SELECT exDiary_status FROM exercisediary WHERE exDiary_id = ${diaryId}`;
};

export const findAllDataBeforeUpdate = (userId) => {
  return `SELECT * FROM exercisediary WHERE exDiary_id = ${userId}`;
};
