import React from "react";
import ReactDOM from "react-dom";
import './style/tailwind.css';

const Test = () => {
  return (
    <div className="max-w-sm mx-auto flex p-6 bg-gray-100 rounded-lg shadow-2xl">
      <div className="ml-20 pt-10">
        <h4 className="text-xl text-gray-800 underline">Technologies I used</h4>
        <ui className="text-gray-700 list-decimal">
          <li className="bg-gray-300 hover:bg-blue-500 hover:text-white hover:rounded">
            <a className="pl-1 px-px pr-40" href="https://reactjs.org/">React</a>
          </li>
          <li className="bg-white hover:bg-teal-500 hover:text-white hover:rounded">
            <a className="pl-1 px-px pr-32" href="https://tailwindcss.com/">Tailwind</a>
          </li>
          <li className="bg-gray-300 hover:bg-blue-500 hover:text-white hover:rounded">
            <a className="pl-1 px-px pr-32" href="https://webpack.js.org/">Webpack</a>
          </li>
          <li className="bg-white hover:bg-teal-500 hover:text-white hover:rounded">
            <a className="pl-1 px-px pr-32" href="https://babeljs.io/">Babel</a>
          </li>
          <li className="bg-gray-300 hover:bg-blue-500 hover:text-white hover:rounded">
            <a className="pl-1 px-px pr-32" href="https://eslint.org/">ESLint</a>
          </li>
          <li className="bg-white hover:bg-teal-500 hover:text-white hover:rounded">
            <a className="pl-1 px-px pr-32" href="https://prettier.io/">Prettier</a>
          </li>
          <li className="bg-gray-300 hover:bg-blue-500 hover:text-white hover:rounded">
            <a className="pl-1 px-px pr-32" href="https://postcss.org/">PostCSS</a>
          </li>
          <li className="bg-white hover:bg-teal-500 hover:text-white hover:rounded">
            <a className="pl-1 px-px pr-32" href="https://purgecss.com/">PurgeCSS</a>
          </li>
        </ui>
      </div>
    </div>
  )
};

ReactDOM.render(<Test />, document.getElementById("index"));

export default Test;

const wrapper = document.getElementById("index");
wrapper ? ReactDOM.render(<Test />, wrapper) : false;