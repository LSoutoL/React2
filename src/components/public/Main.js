
import React, { Component } from 'react'
import { Parte } from './Parte'
import { Hijo } from './Hijo'


export default class Main extends Component {

  render() {
    return (
      <div>
        <section class="py-5 text-center container">
    <div class="row py-lg-5">
      
    </div>
  </section>
        <div class="container marketing">
<div class="row">
<div class="col-lg-4">
  <Parte nombre="Chiquito"/>
</div>
<div class="col-lg-4">
  <Parte nombre="Filomena"/>
</div>
<div class="col-lg-4">
  <Parte nombre="Lucia"/>
</div>
</div>

<Hijo/>

</div>
<section class="py-5 text-center container">
  
  </section>
</div>
    )
  }
}


