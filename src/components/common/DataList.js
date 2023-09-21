import React from 'react'

const DataList = ({data}) => {
  return (
    <div>
      <div>
  <label htmlFor="exampleDataList" className="form-label">Datalist example</label>
  <input className="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search..." />
  <datalist id="datalistOptions">
    {
        data.map((item)=>{
            return(<option value={item.label}/>) 
        })
    }
    </datalist>

</div>

    </div>
  )
}

export default DataList



// import React from 'react'
// // import Select from "react-select";

// const DataList = ({data,heading}) => {
//   return (
//       <div>
//   <label htmlFor="exampleDataList" className="form-label">{heading}</label>
//   <input className="form-control" list="datalistOptions" id="exampleDataList" placeholder="Search" />
//   <datalist id="datalistOptions">
//     {data.map((item)=>{
//       return(
//         <option key={item.id} value={item.name} />    
//       )
//     })
//     }
//     </datalist>
// </div>
//   )
// }

// export default DataList
