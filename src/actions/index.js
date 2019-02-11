import jsonPlaceholder from '../apis/jsonPlaceholder.js';

export const fetchPosts = async () => {
    const response = await jsonPlaceholder.get('/posts');
    return {
        type: 'FETCH_POSTS',
        payload : response
    };
};