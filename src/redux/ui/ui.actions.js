import UiActionTypes from './ui.types';

export const toggleDropdownEdit = bool => ({
  type: UiActionTypes.TOGGLE_DROPDOWN_EDIT,
  payload: bool
});

export const toggleModalNew = bool => ({
  type: UiActionTypes.TOGGLE_MODAL_NEW,
  payload: bool
});

export const toggleModalRename = bool => ({
  type: UiActionTypes.TOGGLE_MODAL_RENAME,
  payload: bool
});

export const toggleModalCopy = bool => ({
  type: UiActionTypes.TOGGLE_MODAL_COPY,
  payload: bool
});

export const toggleModalMove = bool => ({
  type: UiActionTypes.TOGGLE_MODAL_MOVE,
  payload: bool
});

export const setDropdownPos = itemPos => ({
  type: UiActionTypes.SET_DROPDOWN_POS,
  payload: itemPos
});
