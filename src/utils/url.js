// backend url based on easy-mock
const easyMockUrl = "http://localhost:7300/mock/";
const projectId = '5dee9f1c127eb00273529f0b';
const projectName = 'blog';
const backendBaseUrl = easyMockUrl + projectId + '/' + projectName;

function encodeQuery(query) {
    return encodeURIComponent(JSON.stringify(query));
}

export default {
    //登录
    login: () => backendBaseUrl + "/login",
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