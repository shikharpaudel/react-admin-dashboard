import React from 'react'
import LoginStyle from './Login.module.css';
export default function Login(props) {
  return (
    <div className={LoginStyle.container}>
       
    <img src = "img/logo.png" className={LoginStyle.logo} alt= "logo"/>

<p className={LoginStyle.para}>Bhairahawa Multiple College</p>
<p className={LoginStyle.para1}>Department Of Science and Technology</p>
<h2 className={LoginStyle.header}>Sign in</h2>
<form onSubmit ={props.submit}>
    <div className={LoginStyle.formgroup}>
        <input type = "text" name = "username" id="username" placeholder="Username" required />
    </div>

    <div className={LoginStyle.formgroup}> 
        <input type = "password" name = "password" id="password" placeholder="Password" required />
    </div>
    <div className={LoginStyle.button}>
        <button type = "submit" className={LoginStyle.login} >Sign in</button>
    </div>
</form>

</div>
  )
}
