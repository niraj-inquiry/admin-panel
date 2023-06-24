import React,{useState,useEffect} from "react";
import { baseurl, fetchImage, isEmpty } from "src/globalfunction";
import PropTypes from 'prop-types';
import * as Images from '../assets';

const ImageShow=({imageurl})=>{

    const [imgurl,setImgurl]=useState()
 useEffect(()=>{
   if(!isEmpty(imageurl))
       fetchImage(`${baseurl}${imageurl}`).then(res=>{
      setImgurl(res)
       })
     },[]) 
    //  console.log('imgurl--------------',imgurl)
    return(
        <>
        {isEmpty(imageurl)?
            <img src={Images.gym} style={{height:50,width:50}}/>
            :
            <img src={imgurl} style={{height:50,width:50}}/>
        }
        
            {/* <img src={imgurl} style={{height:50,width:50}}/>
       */}
       </>
    )
}

export default ImageShow

ImageShow.propTypes = {
    imageurl: PropTypes.string
  }

