import React from 'react';
import './App.css';
import { CollapsibleList } from './CollapsibleList';

class App extends React.PureComponent {
  render() {
    return (
      <div>
        <p><input type="button" value="Green"/> <input type="button" value="Blue"/></p>
        <ul>
          <CollapsibleList items={["1","2","3","4","5","6","7","8","9","10","11","12",]} />
          <CollapsibleList items={["1","2","3","4","5","6",]} />
          <CollapsibleList items={["1","2","3","4","5","6","7","8",]} />
          <CollapsibleList items={["1","2","3","4","5",]} />
          <CollapsibleList items={["1","2","3","4","5","6","7","8","9","10","11","12",]} />
          <CollapsibleList items={["1","2","3","4","5","6","7","8","9","10",]} />
          <CollapsibleList items={["1","2","3","4","5","6","7","8","9","10","11",]} />
          <CollapsibleList items={["1","2","3",]} />
          <CollapsibleList items={["1","2","3","4","5",]} />
        </ul>
      </div>
    );
  }
}

export default App;
