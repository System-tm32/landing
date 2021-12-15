import React from 'react';
import { Label } from './components/Label';
import { Paragraph } from './components/Paragraph';
import { Popup } from './components/Popup';

function App() {
  return (
    <div className="App">
      <Popup onClick={() => {}}>
        <Label>Погудин Михаил Алексеевич</Label>
        <Paragraph>
          Закончил Кировский государственный медицинский колледж.
        </Paragraph>
        <Paragraph>
          Закончил Кировскую государственную медицинскую академию по
          специальности лечебное дело.
        </Paragraph>
        <Paragraph>
          Прошёл интернатуру, а затем ординатуру по дерматовенерологии в КГМА.
        </Paragraph>
        <Paragraph>
          Прошёл обучение по дерматоскопии в Кировской государственной
          медицинской академии.
        </Paragraph>
        <Paragraph>
          Прошёл специализацию по дерматокосметологии и обучение по организации
          здравоохранения в Нижегородской государственной медицинской академии.
        </Paragraph>
        <Paragraph>
          Прошёл курс медицинской врачебной трихологии на кафедре
          дерматовенерологии и косметологии Российского университета дружбы
          народов.
        </Paragraph>
        <Paragraph>Стаж и опыт работы по специальности 17 лет. </Paragraph>
      </Popup>
    </div>
  );
}

export default App;
