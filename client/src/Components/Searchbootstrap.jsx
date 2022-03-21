// import React from 'react'
// import { Table } from 'react-bootstrap'

// function App() {


//   const search = "co";

//   const users = [
//     { name: 'Anil', email: 'bekgf@test.com', contact: '111' },
//     { name: 'Burce', email: 'bruce@test.com', contact: '222' },
//     { name: 'Peter', email: 'peterz@test.com', contact: '111' },
//     { name: 'co', email: 'co@test.com', contact: '777' },
//     { name: 'Chloe', email: 'chloe@test.com', contact: '757' },
//     { name: 'X', email: 'sam@test.com', contact: '717' },
//   ];

//   const simpleEmail = () => {
    
//     users.forEach(item => {

//       let index = item.email.toString().indexOf('@');
//       console.log(index);
//       let modifiedEmail = item.email.slice(0, index);
//       console.log(modifiedEmail);

//     });
//   }

//   simpleEmail();

//   return (
//     <div className="App">
//       <h1>List With Bootstrap Table</h1>
//       <Table hover variant="dark">
//         <tbody>
//           <tr>
//             <td>Name</td>
//             <td>Email</td>
//             <td>Contacts</td>
//           </tr>
//           {
//             users.map((item, i) =>
//               item.name.includes === search || item.email.includes(search)
//                 ? <tr key={i}>
//                   <td>{item.name}</td>
//                   <td>{item.email}</td>
//                   <td>{item.contact}</td>
//                 </tr>
//                 :
//                 null
//             )}

//           {/* {
//             users.map((item, i) =>
//               item.contact === '111' ?
//                 <tr key={i}>
//                   <td>{item.name}</td>
//                   <td>{item.email}</td>
//                   <td>{item.contact}</td>
//                 </tr> : null
//             )
//           } */}
//         </tbody>
//       </Table>
//     </div>
//   );

// }
// export default App;