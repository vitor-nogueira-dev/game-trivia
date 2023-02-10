import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import {  legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../../redux/reducers';

export const renderWithRouterAndRedux = (component, initialState, route = '/') => {
  const store = createStore(reducer, initialState, applyMiddleware(thunk));
  const history = createMemoryHistory({ initialEntries: [route] });

  return {
    ...render(
      <Provider store={ store }>
        <Router history={ history }>
          {component}
        </Router>
      </Provider>,
    ),
    history,
    store,
  };
};

export default renderWithRouterAndRedux;


// {loading ? <p> Loading...</p>
//           : (
//             <div>
//               <h1
//                 data-testid="question-category"
//               >
//                 {decode(results[questionIndex].category)}
//               </h1>
//               <h3
//                 data-testid="question-text"
//               >
//                 {decode(results[questionIndex].question)}
//               </h3>
//               <div data-testid="answer-options">
//                 {shuffled.map((answer, index) => (
//                   <button
//                     key={ answer }
//                     type="button"
//                     onClick={ () => this.checkAnswer(answer, correctAnswer) }
//                     className={ answer === correctAnswer ? 'correct' : '' }
//                     // style={ { borderColor } }
//                     data-testid={
//                       answer === correctAnswer
//                         ? 'correct-answer'
//                         : `wrong-answer-${index}`
//                     }
//                   >
//                     {answer}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           )}
