import React from "react";
import "./CSS/Style.css"
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
        subtext="Link to my twitter profile"
      />
      <LinkButton 
        className='button'
        id='slack'
        link="https://slack.com/reactor" 
        name="@reactor"
        subtext="Link to my slack"
      />
        <LinkButton 
          className='button'
          id='btn__zuri'
          link="https://training.zuri.team/" 
          name="Zuri Team"
          subtext="Meet the amazing Zuri team"
        />
        <LinkButton 
          className='button'
          id='books'
          link="http://books.zuri.team" 
          name="Zuri Books"
          subtext="An amazing library made to constructed to make you better"
        />
        <LinkButton 
          className='button'
          id='book__python'
          link=" https://books.zuri.team/python-for-beginners?ref_id=reactor" 
          name="Python Books"
          subtext="New to python? Become a pro with this book"
        />
        <LinkButton 
          className='button'
          id='pitch'
          link="https://background.zuri.team" 
          name="Background Check for Coders"
          subtext="This is made to assess your skills as a programmer"
        />
        <LinkButton 
          className='button'
          id='book__design'
          link="https://books.zuri.team/design-rules" 
          name="Design Books"
          subtext="Become a design wizard with all the rules at you fingertips"
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
