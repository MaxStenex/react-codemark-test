export interface GroupsStateType {
  grouped: boolean;
  groups: Array<string>;
}

const initialState: GroupsStateType = {
  grouped: false,
  groups: [],
};

const groupsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};

export default groupsReducer;
