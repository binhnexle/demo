import "./app.scss";

import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Modal, Button } from "react-bootstrap";

import avatarSelectorRemaining from "./redux/selectors/avatar/avatarSelector";
import contactSelectorRemaning from "./redux/selectors/contact/contactSelector";
import languagesSelectorRemaning from "./redux/selectors/languages/languagesSelector";

import LeftComponents from "./components/leftComponents";
import RightComponents from "./components/rightComponents";
function App() {
  const avatarSelector = useSelector(avatarSelectorRemaining);
  const contactSelector = useSelector(contactSelectorRemaning);
  const languagesSelector = useSelector(languagesSelectorRemaning);
  return (
    <div className="app">
      <div className="app_container">
        <LeftComponents
          className="app_container_leftComponents"
          avatar={avatarSelector}
          contact={contactSelector}
          languages={languagesSelector}
        />
        <RightComponents className="app_container_rightComponents" />
      </div>
      <div className="app_container">Anh dang hoc git do nghe</div>
      <div className="app_container">Anh dang hoc git do nghe2</div>
      <div> conflick lan 2</div>
    </div>
  );
}

export default App;
