import './style.css'
import Welcomeheader from './Welcomeheader';

function Welcome() {
    return(

      <div>
          <Welcomeheader />
          <div class='mt-5 pt-6'>
          <div class="mt-5">
          <h1 class="heading">Welcome to Kanban Board</h1>
          </div>
          <div class="container mt-5 overflow-hidden">
              <div class='row g-1'>
                  <div class="col">
                      <a class='btn btn-outline-primary btn-sm px-5' href="/Login">Login</a>  
                  </div>
                  <div class="col">
                  <a class='btn btn-outline-dark btn-sm btn-block px-5' href="/Registration">Registration</a>
                  </div>
              </div>
          </div>
      </div>
      </div> 
          
    )       
}
export default Welcome;