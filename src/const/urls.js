const baseURL = 'https://jsonplaceholder.typicode.com'

const todos = '/todos';

const comments = '/comments';

const albums = '/albums'

const urls = {
    todos: {
        base: todos,
        byId: (id) => `${todos}/${id}`,
    },

    comments: {
        base: comments,
        byId: (id) => `${comments}/${id}`
    },

    albums: {
        base: albums,
        byId: (id) => `${albums}/${id}`
    }
}

export {
    baseURL,
    urls

}