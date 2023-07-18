import React from 'react';

export const navigationRef=React.createRef();

const navigate = (name, param )=> {
    navigationRef.current?.navigate(name, param);
}

export default {
    navigate,
}