import React from "react";
import "./Style.css"
import LinkButton from "./components/LinkButton";
import ProfilePic from "./components/ProfilePic";
import {ZURI, HNG, I4G} from "./components/Footer"
import {Share, Kebab, Slack, Github} from "./components/Icons"

function App() {
  return (
    <div>
      <div id="header" className="box">
      <ProfilePic 
        id='profile_img'
        className='profile-pic'
      />
      <p className="profile-name">Aigbiluese Ehidiamhen</p>
      </div>
      <div className="box share-icons">
        <Share />
        <Kebab />
      </div>
      <div id='buttons'>
      <LinkButton 
        className='button'
        id='twitter'
        link="https://twitter.com/ehis_eleazar" 
        name="Twitter Link"
      />
      <LinkButton 
        className='button'
        id='slack'
        link="https://slack.com/reactor" 
        name="@reactor"
      />
        <LinkButton 
          className='button'
          id='btn__zuri'
          link="https://training.zuri.team/" 
          name="Zuri Team"
        />
        <LinkButton 
          className='button'
          id='books'
          link="http://books.zuri.team" 
          name="Zuri Books"
        />
        <LinkButton 
          className='button'
          id='book__python'
          link=" https://books.zuri.team/python-for-beginners?ref_id=reactor" 
          name="Python Books"
        />
        <LinkButton 
          className='button'
          id='pitch'
          link="https://background.zuri.team" 
          name="Background Check for Coders"
        />
        <LinkButton 
          className='button'
          id='book__design'
          link="https://books.zuri.team/design-rules" 
          name="Design Books"
        />
        <div id='slack-git'>
          <Slack />
          <Github />
        </div>
      </div>
      <div id='footer'>
        <ZURI 
        className='zuri-text'
        />
        <HNG 
        className='hng-text'
        />
        <I4G />
      </div>
    </div>
  );
}

export default App;
