
import { CPagination,CPaginationItem } from "@coreui/react"
import React, { memo, useCallback, useEffect, useState } from "react"
import PropTypes from 'prop-types'




function paginate (arr, size) {
    return arr?.reduce((acc, val, i) => {
      let idx = Math.floor(i / size)
      let page = acc[idx] || (acc[idx] = [])
      page.push(val)
  
      return acc
    }, [])
  }
export const Pagination=({data,onShowPage})=>{
   const datad=paginate(data,5)
   console.log("data",datad)
    const countdur= 5
   
    const [totalcount,setTotalcount]=useState(data?.length)
    const [paginationcount,setPaginationcount]=useState([])
const [showdata,setShowdata]=useState([])
    const onLoad=()=>{
       setTotalcount(data?.length)
       const qu=Math.floor(totalcount/countdur)
       let temp=[]
       for (let index = 0; index < qu; index++) {
       temp.push(countdur*index)
        
       }
       setPaginationcount(temp)
       
    }
   useEffect(() => {
        onLoad()
      });
      const onShowPageItem=(item,index)=>{
      let s1=0, e1=0

  if(index===0){
    s1=item
    e1=item+countdur
    //   console.log("32",data.slice(s1,e1))
    onShowPage(data.slice(s1,e1))
  }
  else{
    s1=item+1
     e1=item+countdur+1
    onShowPage(data.slice(s1,e1))
  }

      }
  
    return(
<CPagination aria-label="Page navigation example">
  <CPaginationItem aria-label="Previous" disabled>
    <span aria-hidden="true">&laquo;</span>
  </CPaginationItem>
  {/* <CPaginationItem active>1</CPaginationItem>
  <CPaginationItem>2</CPaginationItem> */}
 {paginationcount.map((item,index)=>(
  <CPaginationItem onClick={()=>onShowPageItem(item,index)} key={index}>{index+1}</CPaginationItem>
  ))}
  <CPaginationItem aria-label="Next">
    <span aria-hidden="true">&raquo;</span>
  </CPaginationItem>
</CPagination>

    )
}

Pagination.propTypes = {
    //   isshowform: PropTypes.bool,
    onShowPage: PropTypes.func,
    data: PropTypes.object,
  }
  
