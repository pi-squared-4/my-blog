import react from 'react';

const context = require.context('./images', true , /.png$/);

const obj = {};
context.keys().forEach((key) => {
    const imageCode = key.split('./').pop();

});