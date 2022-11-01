/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails react-core
 */

'use strict';
let React;
let ReactDOM;

describe('ReactSmooth', () => {

  beforeEach(() => {
    React = require('react');
    ReactDOM = require('react-dom');
  });

  it('work', () => {
    function Dialog({children}) {
      // React.createElement('div',props, ...children)
      return (
        <div>
          <p>hello</p>
          <div>{children}</div>
        </div>
      );
    }

    function Button ({ children }) {
      return (
        <button>{ children }</button>
      )
    }

    function App() {
      return (
        <div>
          <div>
            <Dialog>
              <Button>
                Click
              </Button>
            </Dialog>
          </div>
        </div>
      );
    }
    const root = document.createElement('div');
    ReactDOM.render(<App />, root);

    expect(root.innerHTML).toBe('<p>hello</p><button>Click</button>')

  });
});
