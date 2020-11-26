export enum GroupsActionTypes {
  ADD_GROUPS = "ADD_GROUPS",
  CLEAR_GROUPS = "CLEAR_GROUPS",
  TOGGLE_GROUPED = "TOGGLE_GROUPED",
}

export type GroupsActions = AddGroupsType | ClearGroupsType | ToggleGroupedType;

interface AddGroupsType {
  type: GroupsActionTypes.ADD_GROUPS;
  payload: {
    groupsTags: Array<string>;
  };
}

export const addGroups = (groupsTags: Array<string>): AddGroupsType => {
  return {
    type: GroupsActionTypes.ADD_GROUPS,
    payload: {
      groupsTags,
    },
  };
};

interface ClearGroupsType {
  type: GroupsActionTypes.CLEAR_GROUPS;
}

export const clearGroups = (): ClearGroupsType => {
  return {
    type: GroupsActionTypes.CLEAR_GROUPS,
  };
};

interface ToggleGroupedType {
  type: GroupsActionTypes.TOGGLE_GROUPED;
}

export const toggleGrouped = (): ToggleGroupedType => {
  return {
    type: GroupsActionTypes.TOGGLE_GROUPED,
  };
};
