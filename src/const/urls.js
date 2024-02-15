const baseURL = 'https://jsonplaceholder.typicode.com'

const todos = '/todos';

const comments = '/comments';

const albums = '/albums';

const posts = '/posts'

const urls = {
    todos: {
        base: todos,
        byId: (id) => `${todos}/${id}`,
    },

    comments: {
        base: comments,
        byId: (id) => `${comments}/${id}`,

    },

    albums: {
        base: albums,
        byId: (id) => `${albums}/${id}`
    },

    posts:{
        base:posts,
        byId:(id) => `${posts}/${id}`,

    }
}

export {
    baseURL,
    urls

}