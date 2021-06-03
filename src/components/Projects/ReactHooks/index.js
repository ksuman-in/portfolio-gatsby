import React from 'react';
import UseStateHooks from './UseStateHook';
// import UseEffectsHooks from './UseEffectsHook';
import './ReactHooks.scss';

const ReactHooks = () => {
  return (
    <div className="reacthook-container">
      <div className="reacthook-main">
        <h1>Lets Learn About React Hook Features</h1>
        <blockquote>
          “Hooks are a new addition to React in version 16.8 that allows you use
          state and other React features, like lifecycle methods, without
          writing a class.”
        </blockquote>
        <div className="reacthook-main__why">
          <h3>Why React Hooks</h3>
          <p>
            The docs mention few really good reason to make use of Hooks instead
            of classes
          </p>
          <p>
            <strong>
              It’s hard to reuse stateful logic between components{' '}
            </strong>
            Generally when you use HOC or renderProps you have to restructure
            your App with multiple hierarchies when you try to see it in
            DevTools, Hooks avoid such scenarios and help in clearer code
          </p>
          <p>
            <strong>
              Complex components become hard to understand Often with classes
              Mutually unrelated
            </strong>
            code often ends up together or related code tends to be split apart,
            it becomes more and more difficult to maintain. An example of such a
            case is event listeners, where you add listeners in
            componentDidMount, componentDidUpdate and remove them in
            componentWillUnmount . <br />
            <strong>
              {' '}
              Hooks let you combine these three Classes confuse
            </strong>{' '}
            both people and machines With classes you need to understand binding
            and the context in which functions are called, which often becomes
            confusion.
          </p>
        </div>
      </div>
      <UseStateHooks />
      {/* <UseEffectsHooks /> */}
    </div>
  );
};

export default ReactHooks;
