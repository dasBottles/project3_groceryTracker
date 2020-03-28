import React, { useState } from 'react';
import itemList from '../Items/items';
import './list.css';

const App = () => {
  const [items, setItems] = useState([
    ["oranges"], ["apples"], ["candy"]
  ]);
  return (
    <div className="frog">
      <h1 className="smell">Shopping Cart</h1>
    <div id="list-container">
      <ListDisplay items={items} handleClick={(item) => {
        setItems(items.slice().filter((i) => i !== item));
      }}/>
      <InputText handleSubmit={(item) => {
          setItems(items.concat(item));
        }}
      />
      <div>Total:</div>
      <button type="submit" class="btn3 btn-dark">Settle Your Tab!</button>
</div>
    <div></div>
    </div>

    
  )
}

const ListItem = (props) => (
  <li onClick={()=> props.handleClick(props.name)}>{props.name}</li>
)

const ListDisplay = (props) => {
  const items = props.items.map((item, i) => (
    <ListItem
      key={i}
      name={item}
      handleClick={props.handleClick}
    />
  ))
  return (
    <div>
    <ul>
      {items}
    </ul>

    <div> </div>
    </div>
  )
}

const InputText = (props) => {
  const [value, setValue] = useState('')
  return (
    <div className="hle">
    <form onSubmit={(e) => {
      e.preventDefault();
      props.handleSubmit(value);
      setValue('');
    }}>
      <input type="text" value={value} onChange={e => setValue(e.target.value)}/>
    </form>
    </div>

    


  )
}

export default App;
