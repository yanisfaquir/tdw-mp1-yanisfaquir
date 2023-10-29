import React from 'react';
import { render } from "@testing-library/react";
import Index from "./index";

// test("Verifica se a informação esta a ser renderizada", () => {

//     //Simula os dados 
//     const props = {
//         preview: false, 
//         allPosts: [
//             {
//                 title: 'Test post',
//                 coverImage: '/test-image.jpg',
//                 date: '2021-01-01',
//                 author: 'Test author',
//                 slug: 'test-post',
//                 excerpt: 'Test excerpt'
//             }
//         ]
//     }

//    //Renderiza o componente
//     const {container} = render(<Index {...props}/>); 

//     expect(container.querySelector('h1')).toByTruthy(); //Verifica se tem um h1
//     expect(container.querySelector('img')).toByTruthy(); //Verifica se tem uma imagem

// });	

// test("Verifica se é renderizado sem informação", () => {
//     const props = {
//         preview: false,
//         allPosts: []
//     }

//     //Renderiza o componente
//     const {container} = render(<Index {...props}/>);

//     expect(container.querySelector('h1')).toBeNull(); //Verifica se não tem um h1
// });

const fs = require('fs');
const path = require('path');
test ("verifica texto", () =>{
    const data = fs.readFileSync(path.resolve('pages/index.js'), 'utf8');
    expect(data).toMatch(/Blog/);
})