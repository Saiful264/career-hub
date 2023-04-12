import React from "react";

const Blog = () => {
  return (
    <div className="px-52 pt-10">
      <h1 className="text-2xl font-medium text-slate-800">
        When should you use context API?
      </h1>
      <p>Ans: Context API in React is a way to share data and functionality throughout the component tree without having to pass props down manually at every level. If you want to implement a  style that should be applied to all components in your app, you can use Context API to pass the value down to the children’s components. If you have an application that requires authentication, you can use Context API to provide the user's authentication status and related information to all components that need it . If some data that needs to be shared and updated across the components, you can use Context API to create a global state store and pass it down to the children components.</p>
      <h1 className="text-2xl font-medium text-slate-800">
        What is a custom hook?
      </h1>
      <p>Ans: In React, a custom hook is a JavaScript function that allows you to extract component logic into reusable functions. Custom hooks let you reuse stateful logic, side effects, and more across multiple components, without duplicating code. Custom hooks enable you to abstract complex logic from a component into a reusable hook, which makes it easier to manage the code and reduces duplication.Custom hooks enable you to abstract complex logic from a component into a reusable hook, which makes it easier to manage the code and reduces duplication</p>
      <h1 className="text-2xl font-medium text-slate-800"> What is useRef?</h1>
      <p>Ans: useRef is a built-in hook in React that returns a mutable ref object. The ref object can be used to store a reference to a DOM element or to persist any value between component re-renders.

The useRef hook allows you to access a DOM node or a value that persists between renders without triggering a re-render. When you create a ref using useRef, the returned object has a current property that you can use to store a value or a reference to a DOM element. You can then access this value or DOM node using ref.current.</p>
      <h1 className="text-2xl font-medium text-slate-800">What is useMemo?</h1>
        <p>Ans: useMemo is a React Hook that is used to optimize the performance of a React component by memoizing the results of a function call. It is similar to React.memo, but it works on the function level rather than on the component level. In the React component, you may have a function that is expensive to run and takes a lot of time to execute. If this function is called every time the component is rendered, it can slow down the performance of your application. By using useMemo, you can memoize the result of the function so that it only gets re-computed when the dependencies change. This can save a lot of time and resources when the component is re-rendered.</p>
    </div>
  );
};

export default Blog;
