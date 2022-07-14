import React from 'react';

const RepoCount = ({totalCount}) => {
    return (
        totalCount > 0 ? <span className='counter'>Найдено {totalCount} репозиториев</span> : ''
    );
};

export default RepoCount;