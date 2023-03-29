import { useState } from "react";

export default function RegistrationFormControlled() {
  const [userName, password] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userName);
    console.log(password);
  }

  return (
    <form method="post" onSubmit={handleSubmit}>

      <label>
        UserName: <input type="text" name="userName" />
      </label>


      <label>
        Password: <input type="password" name="password" />
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
