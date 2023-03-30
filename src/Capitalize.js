// import React from 'react'
// import { makeCapiltal } from './operations'  //importing at the outset will break the application at the first instance.

// export default function Capitalize({ label }) {
//     // function something (){
//     //     //promised based imprort
//     //     import ('./operations')
//     //     .then(x=>{
//     //         x.makeCapiltal(label)
//     //     })
//         //these imports only get performed if needed, if you can, you should always try to import this way
//         //there is a risk of import failing as this is a FUTURE import
//         //pure javascript concept
//     //}

//     return (
// <>
//             {/* <button onClick={something}>make Capitalize</button> */}
//         <span data-testid="spn01">
//         {/* insert lorem here for test*/}

//                       {makeCapiltal(label)}</span>
//         </>
//     )
// }

import React, { Component } from "react";
import { makeCapiltal } from "./operations"; //importing at the outset will break the application at the first instance.

export default class Capitalize extends Component {
  constructor(props) {
    super(props)
  };
  render() {
    return (
      <div>
        <span data-testid="spn01">{makeCapiltal(this.props.label)} {makeCapiltal(this.props.label2)}</span>
      </div>
    );
  }
}

//promised based imprort

// lorem   lorem   lorem   lorem   lorem   lorem   lorem
// lorem   lorem   lorem   lorem   lorem   lorem   lorem             lorem   lorem   lorem   lorem   lorem   lorem   lorem
// lorem   lorem   lorem   lorem   lorem   lorem   lorem
// lorem   lorem   lorem   lorem   lorem   lorem   lorem
// lorem   lorem   lorem   lorem   lorem   lorem   lorem
// lorem   lorem   lorem   lorem   lorem   lorem   lorem
// lorem   lorem   lorem   lorem   lorem   lorem   lorem
// lorem   lorem   lorem   lorem   lorem   lorem   lorem
// lorem   lorem   lorem   lorem   lorem   lorem   lorem
// lorem   lorem   lorem   lorem   lorem   lorem   lorem
// lorem   lorem   lorem   lorem   lorem   lorem   lorem
// lorem   lorem   lorem   lorem   lorem   lorem   lorem
// lorem   lorem   lorem   lorem   lorem   lorem   lorem
// lorem   lorem   lorem   lorem   lorem   lorem   lorem
// lorem   lorem   lorem   lorem   lorem   lorem   lorem
// lorem   lorem   lorem   lorem   lorem   lorem   lorem
// lorem   lorem   lorem   lorem   lorem   lorem   lorem
// lorem   lorem   lorem   lorem   lorem   lorem   lorem
// lorem   lorem   lorem   lorem   lorem   lorem   lorem
// lorem   lorem   lorem   lorem   lorem   lorem   lorem
// lorem   lorem   lorem   lorem   lorem   lorem   lorem
// lorem   lorem   lorem   lorem   lorem   lorem   lorem
// lorem   lorem   lorem   lorem   lorem   lorem   lorem
// lorem   lorem   lorem   lorem   lorem   lorem   lorem
// lorem   lorem   lorem   lorem   lorem   lorem   lorem
// lorem   lorem   lorem   lorem   lorem   lorem   lorem
// lorem   lorem   lorem   lorem   lorem   lorem   lorem
// lorem   lorem   lorem   lorem   lorem   lorem   lorem
// lorem   lorem   lorem   lorem   lorem   lorem   lorem
// lorem   lorem   lorem   lorem   lorem   lorem   lorem
// lorem   lorem   lorem   lorem   lorem   lorem   lorem
// lorem   lorem   lorem   lorem   lorem   lorem   lorem
// lorem   lorem   lorem   lorem   lorem   lorem   lorem
// lorem   lorem   lorem   lorem   lorem   lorem   lorem
// lorem   lorem   lorem   lorem   lorem   lorem   lorem
// lorem   lorem   lorem   lorem   lorem   lorem   lorem
// lorem   lorem   lorem   lorem   lorem   lorem   lorem
// lorem   lorem   lorem   lorem   lorem   lorem   lorem
// lorem   lorem   lorem   lorem   lorem   lorem   lorem
// lorem   lorem   lorem   lorem   lorem   lorem   lorem
// lorem   lorem   lorem   lorem   lorem   lorem   lorem
// lorem   lorem   lorem   lorem   lorem   lorem   lorem
// lorem   lorem   lorem   lorem   lorem   lorem   lorem
// lorem   lorem   lorem   lorem   lorem   lorem   lorem
// lorem   lorem   lorem   lorem   lorem   lorem   lorem
// lorem   lorem   lorem   lorem   lorem   lorem   lorem
// lorem   lorem   lorem   lorem   lorem   lorem   lorem
// lorem   lorem   lorem   lorem   lorem   lorem   lorem
// lorem   lorem   lorem   lorem   lorem   lorem   lorem
// lorem   lorem   lorem   lorem   lorem   lorem   lorem
// lorem   lorem   lorem   lorem   lorem   lorem   lorem
// lorem   lorem   lorem   lorem   lorem   lorem   lorem
// lorem   lorem   lorem   lorem   lorem   lorem   lorem
// lorem   lorem   lorem   lorem   lorem   lorem   lorem
// lorem   lorem   lorem   lorem   lorem   lorem   lorem
// lorem   lorem   lorem   lorem   lorem   lorem   lorem
// lorem   lorem   lorem   lorem   lorem   lorem   lorem
// lorem   lorem   lorem   lorem   lorem   lorem   lorem
// lorem   lorem   lorem   lorem   lorem   lorem   lorem
// lorem   lorem   lorem   lorem   lorem   lorem   lorem
// lorem   lorem   lorem   lorem   lorem   lorem   lorem
// lorem   lorem   lorem   lorem   lorem   lorem   lorem
// lorem   lorem   lorem   lorem   lorem   lorem   lorem
// lorem   lorem   lorem   lorem   lorem   lorem   lorem
// lorem   lorem   lorem   lorem   lorem   lorem   lorem
// lorem   lorem   lorem   lorem   lorem   lorem   lorem
// lorem   lorem   lorem   lorem   lorem   lorem   lorem
// lorem   lorem   lorem   lorem   lorem   lorem   lorem
// lorem   lorem   lorem   lorem   lorem   lorem   lorem
// lorem   lorem   lorem   lorem   lorem   lorem   lorem
// lorem   lorem   lorem   lorem   lorem   lorem   lorem
// lorem   lorem   lorem   lorem   lorem   lorem   lorem
// lorem   lorem   lorem   lorem   lorem   lorem   lorem
// lorem   lorem   lorem   lorem   lorem   lorem   lorem
// lorem   lorem   lorem   lorem   lorem   lorem   lorem
// lorem   lorem   lorem   lorem   lorem   lorem   lorem
// lorem   lorem   lorem   lorem   lorem   lorem   lorem
// lorem   lorem   lorem   lorem   lorem   lorem   lorem
// lorem   lorem   lorem   lorem   lorem   lorem   lorem
// lorem   lorem   lorem   lorem   lorem   lorem   lorem
// lorem   lorem   lorem   lorem   lorem   lorem   lorem
// lorem   lorem   lorem   lorem   lorem   lorem   lorem
// lorem   lorem   lorem   lorem   lorem   lorem   lorem
// lorem   lorem   lorem   lorem   lorem   lorem   lorem
// lorem   lorem   lorem   lorem   lorem   lorem   lorem
// lorem   lorem   lorem   lorem   lorem   lorem   lorem
// lorem   lorem   lorem   lorem   lorem   lorem   lorem
// lorem   lorem   lorem   lorem   lorem   lorem   lorem
// lorem   lorem   lorem   lorem   lorem   lorem   lorem
// lorem   lorem   lorem   lorem   lorem   lorem   lorem
// lorem   lorem   lorem   lorem   lorem   lorem   lorem
// lorem   lorem   lorem   lorem   lorem   lorem   lorem
// lorem   lorem   lorem   lorem   lorem   lorem   lorem
// lorem   lorem   lorem   lorem   lorem   lorem   lorem
// lorem   lorem   lorem   lorem   lorem   lorem   lorem
// lorem   lorem   lorem   lorem   lorem   lorem   lorem
// lorem   lorem   lorem   lorem   lorem   lorem   lorem
// lorem   lorem   lorem   lorem   lorem   lorem   lorem
// lorem   lorem   lorem   lorem   lorem   lorem   lorem
// lorem   lorem   lorem   lorem   lorem   lorem   lorem
// lorem   lorem   lorem   lorem   lorem   lorem   lorem
// lorem   lorem   lorem   lorem   lorem   lorem   lorem
// lorem   lorem   lorem   lorem   lorem   lorem   lorem
// lorem   lorem   lorem   lorem   lorem   lorem   lorem
