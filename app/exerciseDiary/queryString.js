export const findData = (id) => {
  return `SELECT * FROM exerciseDiary WHERE user_id = ${id}`;
};
export const findStatus = (diaryId) => {
  return `SELECT exDiary_status FROM exerciseDiary WHERE exDiary_id = ${diaryId}`;
};

export const findAllDataBeforeUpdate = (userId) => {
  return `SELECT * FROM exerciseDiary WHERE exDiary_id = ${userId}`;
};