import * as FollowAPIUtil from '../util/follow_api_util';

export const RECEIVE_FOLLOWS = 'RECEIVE_FOLLOWS';
export const CREATE_FOLLOW = 'CREATE_FOLLOW';
export const REMOVE_FOLLOW = 'REMOVE_FOLLOW';

const receiveFollows = (follows) => ({
  type: RECEIVE_FOLLOWS,
  follows
});

const createFollow = (follow) => ({
  type: CREATE_FOLLOW,
  follow
});

const removeFollow = (followId) => ({
  type: REMOVE_FOLLOW,
  followId
});

export const fetchFollows = () => dispatch => (
  FollowAPIUtil.fetchFollows().then(response => (
    dispatch(receiveFollows(response))
  ))
);

export const makeFollow = (follow) => dispatch => (
  FollowAPIUtil.makeFollow(follow).then(response => (
    dispatch(createFollow(response))
  ))
);

export const deleteFollow = (followId) => dispatch => (
  FollowAPIUtil.deleteFollow(followId).then(response => (
    dispatch(removeFollow(response))
  ))
);
