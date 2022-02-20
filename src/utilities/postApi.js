import { get } from '../api/api'
import { GET_POSTS, GET_POSTS_COMMENTS } from '../api/apiUrl'

export function getUserPosts(request) {
    return get(`${GET_POSTS}${'?userId='}${request.id}`);
}
export function getPosts() {
    return get(`${GET_POSTS}`);
}
export function getPostComments(postId) {
    return get(`${GET_POSTS_COMMENTS}${'?postId='}${postId}`);
}