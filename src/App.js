import React from "react";
import LinkButton from "./components/LinkButton";
import ProfilePic from "./components/ProfilePic";
import {ZURI, HNG, I4G} from "./components/Footer"
import {Slack, Github} from "./components/Icons"

function App() {
  return (
    <div>
      <div id="header">
      <ProfilePic 
        id='profile_img'
      />
      <p>Aigbiluese Ehidiamhen</p>
      </div>
      <div id='buttons'>
      <LinkButton 
        id='twitter'
        link="https://twitter.com/ehis_eleazar" 
        name="Twitter Link"
      />
      <LinkButton 
        id='slack'
        link="https://slack.com/reactor" 
        name="@reactor"
      />
        <LinkButton 
          id='btn__zuri'
          link="https://training.zuri.team/" 
          name="Zuri Team"
        />
        <LinkButton 
          id='books'
          link="http://books.zuri.team" 
          name="Zuri Books"
        />
        <LinkButton 
          id='book__python'
          link=" https://books.zuri.team/python-for-beginners?ref_id=reactor" 
          name="Python Books"
        />
        <LinkButton 
          id='pitch'
          link="https://background.zuri.team" 
          name="Background Check for Coders"
        />
        <LinkButton 
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
        <ZURI />
        <HNG />
        <I4G />
      </div>
    </div>
  );
}

export default App;
