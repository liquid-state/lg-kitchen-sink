import { FILE_PICKED } from "../const";

const initialState = {
  pickedFilePath: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FILE_PICKED:
      return { ...state, pickedFilePath: action.payload.filePath };

    default:
      return state;
  }
};
