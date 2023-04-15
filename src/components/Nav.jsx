import React from 'react'
import logo from '../assets/logo.png'

function Nav({register, login, logout, user, loading  }) {
  return (
   <nav>
    <div className="logo__container">
        <figure className='logo__img--wrapper'>
            <img src={logo} alt="" className="logo__img" />
        </figure>
        <h1 className="logo__text">Sobu Nkohla</h1>
    </div>
    <div className="nav__buttons--container">
        { loading ? 
                
               <>
               <div className='skeleton__Loading--container'>
                <div className='skeleton__loading--button'></div>
                <div className='skeleton__loading--button-circle'></div>
                
                
                </div>     
               </>
               :
           ( user.email? 
            <>
            <button className='nav__button nav__button--User click' onClick={logout}>{user.email[0].toUpperCase() }</button>
            </>
             : 
             <>
            <button className='nav__button nav__button--login click' onClick={login}>Login</button>
            <button className='nav__button nav__button--register click' onClick={register}>Register</button>
            </>
           )
          
        }
    </div>
   </nav>
  )
}

export default Nav