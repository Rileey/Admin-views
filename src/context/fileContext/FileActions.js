export const getFilesStart = () => ({
  type: "GET_FILES_START",
});

export const getFilesSuccess = (movies) => ({
  type: "GET_FILES_SUCCESS",
  payload: movies,
});

export const getFilesFailure = () => ({
  type: "GET_FILES_FAILURE",
});

export const createFileStart = () => ({
  type: "CREATE_FILE_START",
});

export const createFileSuccess = (movie) => ({
  type: "CREATE_FILE_SUCCESS",
  payload: movie,
});

export const createFileFailure = () => ({
  type: "CREATE_FILE_FAILURE",
});

export const uploadFileStart = () => ({
  type: "UPLOAD_FILE_START",
});

export const uploadFileSuccess = (movie) => ({
  type: "UPLOAD_FILE_SUCCESS",
  payload: movie,
});

export const uploadFileFailure = () => ({
  type: "UPLOAD_FILE_FAILURE",
});

export const deleteFileStart = () => ({
  type: "DELETE_FILE_START",
});

export const deleteFileSuccess = (id) => ({
  type: "DELETE_FILE_SUCCESS",
  payload: id,
});

export const deleteFileFailure = () => ({
  type: "DELETE_FILE_FAILURE",
});
