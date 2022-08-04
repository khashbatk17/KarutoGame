import React from "react";
import { Link } from "react-router-dom";
import css from "./style.module.css";
import shinobu from "../../api/shinobu.png";
// import Field from "../battlefield/field";

class App extends React.Component {
  render() {
    return (
      <>
        <header>
          <ul>
            <li className={css.Logo}>小倉百人一首: Ogura Hyakunin Isshu</li>
            <li className={css.Signup}>Signup</li>
            <li>Login</li>
          </ul>
        </header>
        <main>
          {/* <div className="cherry-blossom"></div> */}
          <figure>
            <img
              src="https://play-lh.googleusercontent.com/vB-Lpsu-j3HrP3B_dklyHRLcOeVICT90C_pUisBCbcQ7cDEkBdXXjovrlP_gxe_2Ka4=w2560-h1440-rw"
              alt="karuta"
            />
            <img src={shinobu} alt="shinobu" className={css.Image} />
          </figure>
          <div className={css.Buttons}>
            <Link to="/battle">
              <input type="button" value="Practice" />
            </Link>
            <Link to="/cardlist">
              <input type="button" value="Card List" />
            </Link>
          </div>
        </main>
      </>
    );
  }
}

export default App;
