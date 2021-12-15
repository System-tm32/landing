import React from 'react';
import { ServiceBLock } from './components/serviceBlock';

function App() {
  return (
    <div className="App">
      <ServiceBLock
        label={'Услуги врача- дерматовенеролога'}
        description={
          'Дерматолог • Дерматоскопия • Венеролог анонимно • Детский дерматолог'
        }
        onClick={() => {}}
      ></ServiceBLock>
    </div>
  );
}

export default App;
