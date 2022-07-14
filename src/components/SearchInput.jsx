import React from 'react';
import MyInput from './UI/input/MyInput';

const SearchInput = ({getValue}) => {

    const onChange = (e) => {
        getValue(e.target.value)
    }

    return (
        <div className='search-wrapper'>
            <h1 className='title'>Github Search Users</h1>
            <MyInput
                className='search-input'
                onChange={onChange}
                type="text" 
                placeholder='Введите запрос' 
            />
        </div>
    );
};

export default SearchInput;