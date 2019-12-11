// backend url based on easy-mock
const easyMockUrl = "http://localhost:7300/mock/";
const projectId = '5dee9f1c127eb00273529f0b';
const projectName = 'blog';
let backendBaseUrl = easyMockUrl + projectId + '/' + projectName;
//use local json-server due to easy-mock currently can't do data relationship
backendBaseUrl = "http://localhost:5000";

function encodeQuery(query) {
    return encodeURIComponent(JSON.stringify(query));
}

export default {
    //登录
    login: () => backendBaseUrl + "/login",
    postList: () => backendBaseUrl + "/posts",
    createPost: () => backendBaseUrl + "/posts",
    createComment: () => backendBaseUrl + "/comments",
    addComment: (postId) => backendBaseUrl + "/posts/" + postId + "/comments",
    getPostById: (id) => {
        return backendBaseUrl + "/posts?id=" + id;
    },
    updatePost: (id) => {
        return backendBaseUrl + "/posts?id=" + id;
    },
    getComments: (postId) => backendBaseUrl + "/comments?_expand=post&postId=" + postId,
    getLatestPostId: () => backendBaseUrl + "/posts?_sort=id&_order=desc&_limit=1",
}