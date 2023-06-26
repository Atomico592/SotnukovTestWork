import postsSlice from "../slice/postsSlice";

export const  {
    postsRequest,
    postsSuccess,
    postsFailure,
    deletePostsRequest,
    deletePostsSuccess,
    deletePostsFailure,
    ClearDeletePosts,
    editPostsRequest,
    editPostSuccess,
    editPostFailure
} = postsSlice.actions