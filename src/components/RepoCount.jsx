import React from 'react';

const RepoCount = ({totalCount}) => {
    console.log(totalCount)
    return (
    
        <span className='counter'>Найдено {totalCount} репозиториев</span>
    );
};

export default RepoCount;