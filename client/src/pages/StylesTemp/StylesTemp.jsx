// REMOVE PRIOR TO DEPLOYMENT

import './StylesTemp.scss';
import add from '../../assets/icons/add.svg';
import chat from '../../assets/icons/chat.svg';
import close from '../../assets/icons/close.svg';
import menu from '../../assets/icons/menu.svg';
import open_in_new from '../../assets/icons/open_in_new.svg';
import thumbs_up from '../../assets/icons/thumbs_up.svg';

function StyleTemp() {
  return (
    <>
       <h1 className="header header--primary">Header Primary</h1>
       <h2 className="header header--secondary">Header Secondary</h2>
       <h3 className="header header--bold">Header Bold</h3>
       <p className="body body--dark">Body Dark</p>
       <p className="body body--light">Body Light</p>
       <p className="label">Label</p>
       <img src={add} alt="Add icon" />
       <img src={chat} alt="Add icon" />
       <img src={close} alt="Add icon" />
       <img src={menu} alt="Add icon" />
       <img src={open_in_new} alt="Add icon" />
       <img src={thumbs_up} alt="Add icon" />
    </>
  )
}

export default StyleTemp