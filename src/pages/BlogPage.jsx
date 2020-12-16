import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import PostsListAction from '../redux/actions/posts';
import { Bread, BlogCards } from '../components';

const bread = {
    title: 'Блог',
    link: ['Blog'],
};

function BlogPage() {
    const dispatch = useDispatch();

    const items = useSelector(({ posts }) => posts.items);
    const isLoaded = useSelector(({ posts }) => posts.isLoaded);

    React.useEffect(() => {
        dispatch(PostsListAction.fetchPosts());
    }, []);

    const onOnePost = React.useCallback((index) => {
        dispatch(PostsListAction.onePost(index));
    }, []);

    return (
        <div>
            <Bread bread={bread} />
            <BlogCards items={items} isLoaded={isLoaded} onOnePost={onOnePost} />
        </div>
    );
}

export default BlogPage;
