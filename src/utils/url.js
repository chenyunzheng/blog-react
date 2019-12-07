// backend url based on easy-mock
const easyMockUrl = "https://www.easy-mock.com/mock/";
const projectId = '5de98effb7527b1c3b863074';
const projectName = 'blog';
const backendBaseUrl = easyMockUrl + projectId + '/' + projectName;

function encodeQuery(query) {
    return encodeURIComponent(JSON.stringify(query));
}

export default {
    //登录
    login: () => "/login",
    postList: () => backendBaseUrl + "/posts",
    createPost: () => backendBaseUrl + "/post",
    getPostById: (id) => {
        return backendBaseUrl + "/post?id=" + id;
    },
    updatePost: (id) => {
        return backendBaseUrl + "/post?id=" + id;
    },
    createComment: () => backendBaseUrl + "/comment",
}