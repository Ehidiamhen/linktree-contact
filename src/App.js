import React from "react";
import LinkButton from "./components/LinkButton";
function App() {
  return (
    <div>
      <div>
        <LinkButton 
        id='btn__zuri'
        link="https://training.zuri.team/" 
        name="Follow me"
        />
        <LinkButton 
        id='books'
        link="http://books.zuri.team" 
        name="Follow me"
        />
        <LinkButton 
        id='book__python'
        link=" https://books.zuri.team/python-for-beginners?ref_id=reactor" 
        name="Follow me"
        />
        <LinkButton 
        id='pitch'
        link="https://background.zuri.team" 
        name="Follow me"
        />
        <LinkButton 
        id='book__design'
        link="https://books.zuri.team/design-rules" 
        name="Follow me"
        />
      </div>
    </div>
  );
}

export default App;
