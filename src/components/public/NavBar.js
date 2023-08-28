import React from 'react'
import Main from './Main';
import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
<div>


<div class="container">
  <header class="d-flex justify-content-center py-3">
    <ul class="nav nav-pills">
      <li class="nav-item"><Link to={'/Main'} class="nav-link">Main</Link></li>
      <li class="nav-item"><Link to={'/Main2'} class="nav-link">Main2</Link></li>
      <li class="nav-item"><a href="#" class="nav-link">Pricing</a></li>
      <li class="nav-item"><a href="#" class="nav-link">FAQs</a></li>
      <li class="nav-item"><a href="#" class="nav-link">About</a></li>
    </ul>
  </header>
  <br/>
</div>

</div>
  )
}


