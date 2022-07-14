import React from 'react';
import RepoItem from './RepoItem';


const RepoList = ({repositories}) => {
    if (!repositories.items) {
        return (
            <h1 style={{textAlign: 'center'}}>
                Список пуст!
            </h1>
        )
    } else {
        return (
            <div>
                {repositories.items.map((repo, index) => 
                    <RepoItem key={repo.id} repo={repo} />  )}
            </div>
        );
    }

};

export default RepoList;