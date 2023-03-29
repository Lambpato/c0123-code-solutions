

export default function RegistxsrationFormUncontrolled () {

const handleSubmit = (e) => {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);
  const formJson = Object.fromEntries(formData.entries());
  // const {username, password} = formJson;
  console.log(formJson);
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
