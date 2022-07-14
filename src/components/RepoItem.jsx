import React from 'react';

const ProductItem = ({repo}) => {
    console.log(repo)
    return (
        <div className='repo'>
            <span className='repo_id'>Id. {repo.id}</span>
            <span className='repo_url'>Name. <a href={repo.html_url}>{repo.name}</a></span>
            <span className='repo_owner'>Owner. {repo.owner.login}</span>
        </div>
    );
};

export default ProductItem;