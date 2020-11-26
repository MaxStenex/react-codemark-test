import { GroupsActionTypes, GroupsActions } from "./actions";

export interface GroupsStateType {
  grouped: boolean;
  groupsTags: Array<string>;
}

const initialState: GroupsStateType = {
  grouped: false,
  groupsTags: [],
};

const groupsReducer = (state = initialState, action: GroupsActions): GroupsStateType => {
  switch (action.type) {
    case GroupsActionTypes.ADD_GROUPS: {
      const filteredGroups = new Set([...state.groupsTags, ...action.payload.groupsTags]);
      return {
        ...state,
        groupsTags: Array.from(filteredGroups),
      };
    }
    case GroupsActionTypes.CLEAR_GROUPS: {
      return { grouped: false, groupsTags: [] };
    }
    case GroupsActionTypes.TOGGLE_GROUPED: {
      return { ...state, grouped: !state.grouped };
    }
    default: {
      return state;
    }
  }
};

export default groupsReducer;
