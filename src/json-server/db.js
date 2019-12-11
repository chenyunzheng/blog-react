function formatDate(date) {
    let year = date.getFullYear();
    let month = date.getMonth() + 1 + "";
    month = month.length === 1 ? "0"+month : month;
    let day = date.getDate() + "";
    day = day.length === 1 ? "0"+day : day;
    let hour = date.getHours() + "";
    hour = hour.length === 1 ? "0"+hour : hour;
    let minute = date.getMinutes() + "";
    minute = minute.length === 1 ? "0"+minute : minute;
    let second = date.getSeconds() + "";
    second = second.length === 1 ? "0"+second : second;
    return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
}

module.exports = () => {
    var faker = require('faker');
    var _ = require('lodash');

    return {
        posts: _.times(50, (n) => ({
                id: n,
                title: faker.name.title(),
                content: faker.lorem.sentences(2),
                author: {
                    username: faker.name.findName()
                },
                vote: faker.random.number({min:0, max:100, precision:1}),
                updatedAt: formatDate(faker.date.past())
            })),
        comments: _.times(20, (n) => {
            return {
                id: n,
                content: faker.lorem.sentences(3),
                postId: n
            }
        }),
        login: [
            {id:1, username:"chris", password:"123"},
            {id:2, username:"chen", password:"123"}
        ]
    }
    
}