import UiActionTypes from './ui.types';

//ui 상태라이브러리
const INITIAL_STATE = {
  isOpenDropdownNew: false,
  isOpenDropdownEdit: false,
  isOpenModalNew: false,
  isOpenModalRename: false,
  isOpenModalCopy: false,
  isOpenModalMove: false,
  dropdownPos: {}
};

const uiReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UiActionTypes.TOGGLE_DROPDOWN_EDIT:
      return {
        ...state,
        isOpenDropdownEdit: action.payload
      };
    case UiActionTypes.TOGGLE_MODAL_NEW:
      return {
        ...state,
        isOpenModalNew: action.payload
      };
    case UiActionTypes.TOGGLE_MODAL_RENAME:
      return {
        ...state,
        isOpenModalRename: action.payload
      };
    case UiActionTypes.TOGGLE_MODAL_COPY:
      return {
        ...state,
        isOpenModalCopy: action.payload
      };
    case UiActionTypes.TOGGLE_MODAL_MOVE:
      return {
        ...state,
        isOpenModalMove: action.payload
      };
    case UiActionTypes.SET_DROPDOWN_POS:
      return {
        ...state,
        dropdownPos: action.payload
      };
    default:
      return state;
  }
};

export default uiReducer;
