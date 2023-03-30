import './ValidatedInput.css';
import { useState } from "react";

export default function ValidatedInput () {
  const [password, setPassword] = useState('');
  const numReg = /[0-9]+/;
  const upReg = /[A-Z]+/;
  const charReg = /[!@#$%^&*()]+/;
  const passwordLength =
  (password.length === 0) ?
    "A password is required."
: (password.length < 8) ?
  "Your password is too short."
:(password.length > 7 && !numReg.test(password)) ?
"Please include a number"
: (password.length > 7 && !upReg.test(password)) ?
 "Please include a capital letter"
: (password.length > 7 && !charReg.test(password)) ?
"Please include one of the following characters !, @, #, $, %, ^, &, *, (, or )"
:
"";

  return (
    <>
    <div className="contrasena">
      <div>
        <label htmlFor="password">Password</label>
      </div>

      <div className="password-input">
        <div>
            <input
          type="password"
          id="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          >
            </input>
        </div>

          <p style={{ color: passwordLength === '' ? "green" : "red" }}>{passwordLength === '' ? "(9`･ω･)9" : '( ‡▼益▼)'}</p>
      </div>

      <p>{passwordLength}</p>
    </div>

    </>
  )
}
