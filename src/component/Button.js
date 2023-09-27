// import React from 'react';

// const Button = (props) => {
//   return (
//     <button className='p-2 bg-dark rounded text-light'>
//         {props.text}
//     </button>
//   );
// };

// export default Button;
import React from 'react'

export default function Button(props) {
  return (
    <div>
      <button className='p-2 bg-dark rounded text-light'>
               {props.text}
    </button>  
    </div>
  )
}
