const FileReducer = (state, action) => {
  switch (action.type) {
    case "GET_FILES_START":
      return {
        files: [],
        isFetching: true,
        error: false,
      };
    case "GET_FILES_SUCCESS":
      return {
        files: action.payload,
        isFetching: false,
        error: false,
      };
    case "GET_FILES_FAILURE":
      return {
        files: [],
        isFetching: false,
        error: true,
      };
    case "CREATE_FILE_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "CREATE_FILE_SUCCESS":
      return {
        files: [...state.movies, action.payload],
        isFetching: false,
        error: false,
      };
    case "CREATE_FILE_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    case "UPLOAD_FILE_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "UPLOAD_FILE_SUCCESS":
      return {
        files: state.files.map(
          (file) => file.id === action.payload.id && action.payload
        ),
        isFetching: false,
        error: false,
      };
    case "UPLOAD_FILE_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    case "DELETE_FILE_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "DELETE_FILE_SUCCESS":
      return {
        files: state.files.filter((file) => file._id !== action.payload),
        isFetching: false,
        error: false,
      };
    case "DELETE_FILE_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    default:
      return { ...state };
  }
};

export default FileReducer;
