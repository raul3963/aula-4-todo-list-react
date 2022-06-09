import { useState } from 'react';
import './App.css';
import Label from "./components/Label"

function App() {
  const [novoItem, setNovoItem] = useState("");
  const [todoList, settodoList] = useState([{ name: "Raul", checked: false }]);

  const toggleChecked = (index) => {
    todoList[index].checked = !todoList[index].checked;
    settodoList([...todoList]);
  }

  const removerItem = (index) => {
    console.log(index)
    todoList.splice(index, 1);
    settodoList([...todoList]);
  }

  const handleNovoItem = (event) => {
    setNovoItem(event.target.value);
  }
  const adicionarItem = () => {
    todoList.push({ name: novoItem, checked: false });
    console.log(todoList);
    settodoList([...todoList]);
    setNovoItem("");
  }
  return (
    <div className="App">
      <input value={novoItem} onChange={handleNovoItem} />
      <button onClick={adicionarItem}>Adicionar</button>
      {
        todoList.map((item, index) => <Label removerItem={removerItem} toggleChecked={toggleChecked} item={item} key={item.name + index} index={index} />)
      }
    </div>
  );
}

export default App;
