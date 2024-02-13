import { AppConstans } from "../constants/AppConstants";

export const GetPath = (location)=>{
    let url = location.pathname
    url = url.split('/');
    if(url && url.length > 0){
          return `/${url[1]}`;
    }else{
      return false;
    }
  }

  export const getMapZoomNearValue = (value)=>{
    // console.log(window.innerWidth)
      return {
        translation :{
          x: value.translation.x > 0?0: (value.translation.x - window.innerWidth) < -(AppConstans.mapWidth * value.scale)? -((AppConstans.mapWidth * value.scale) - window.innerWidth) :value.translation.x,
          y: value.translation.y > 0?0: (value.translation.y - window.innerHeight) < -(AppConstans.mapHeight* value.scale)? -((AppConstans.mapHeight * value.scale) - window.innerHeight):value.translation.y,
        },
        scale:value.scale
      }
  }

  export const getSlideStatusBarProps = (value)=>{
    const statusWidth = (296 * window.innerWidth) / (value.scale * AppConstans.mapWidth);
    const marginLeft = (value.translation.x * 296 ) / -(value.scale * AppConstans.mapWidth);
    return {
      width:statusWidth,
      left:marginLeft
    }
  }

  export const getCoordsFromPosition = (posX,posY)=>{
    const x = posX / (AppConstans.boxSize + 1);
    const y = posY / (AppConstans.boxSize + 1);
    return {x:Math.floor(x),y:Math.floor(y)}
  }
  export const getPositionFromCoords = (coords)=>{
    const x = coords.x * (AppConstans.boxSize + 1) ;
    const y = coords.y * (AppConstans.boxSize+ 1)  ;
    return {x,y}
  }



export const formValidationRules = (label)=> {
  return(
    {
      String100Req:{
        required:{value:true,message:`${label} Required`},
        maxLength:{value:100,message:`${label} length should be less than 100`},
    },
    String100:{
      maxLength:{value:100,message:`${label} length should be less than 100`},
  },
    String20Req:{
      required:{value:true,message:`${label} Required`},
      maxLength:{value:20,message:`${label} length should be less than 20`},
  },
  String20:{
    maxLength:{value:20,message:`${label} length should be less than 20`},
},

  String500Req:{
    required:{value:true,message:`${label} Required`},
    maxLength:{value:500,message:`${label} length should be less than 500`},
},
String500:{
  maxLength:{value:500,message:`${label} length should be less than 500`},
},
String1000:{
  maxLength:{value:1000,message:`${label} length should be less than 1000`},
},
pickerReq:{
  required:{value:true,message:`${label} Required`},
},
positiveNumberReq :{
  required:{value:true,message:`${label} Required`},
  pattern:{value:/^[0-9]+\.?[0-9]*/,message:`Invalid ${label}`},
},
positiveNumber :{
  pattern:{value:/^[0-9]+\.?[0-9]*/,message:`Invalid ${label}`},
},
shouldNumberReq :{
  required:{value:true,message:`${label} Required`},
  pattern:{value:/^[0-9]+\.?[0-9]*/,message:`Invalid ${label}`},
},
shouldNumber :{
  pattern:{value:/^[0-9]*/,message:`Invalid ${label}`},
}


    }
  )
}
