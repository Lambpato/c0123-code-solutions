import { useState } from "react";

export default function RegistrationFormControlled() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
  }

  return (
    <form method="post" onSubmit={handleSubmit}>

      <label>
        UserName: <input onChange={(e) => setUsername(e.target.value)} type="text" name="userName" />
      </label>


      <label>
        Password: <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" />
      </label>

      <label>
        <input
          type="submit"
          value="Submit"
        />
      </label>
    </form>
  )
}
