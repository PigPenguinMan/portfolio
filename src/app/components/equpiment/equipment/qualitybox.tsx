
interface QualityBoxProps{
    value? : number
    stoneValue? : any
    type? : string
}

const QualityBox = ({value = 0,stoneValue,type}:QualityBoxProps) => {

  // 돌 팔찌 배경색 바꾸기 value값이 -1이라 기본색적용
    let color: string = "ff0000";

    if (value < 10) {
      color = "ff0000";
    } else if (value < 30) {
      color = "a79300";
    } else if (value < 70) {
      color = "#09ae09";
    } else if (value < 90) {
      color = "#1260eb";
    } else if (value < 100) {
      color = "#df18e3";
    } else {
      color = "ea6811";
    }


    const stone1 = stoneValue ? stoneValue.Element_000.contentStr : 0 ; 
    const stone2 = stoneValue ? stoneValue.Element_001.contentStr : 0;
    const stone3 = stoneValue ?  stoneValue.Element_002.contentStr : 0 ;
    
    const stoneValue1 = stone1[stone1.length - 5] ;
    const stoneValue2 = stone2[stone2.length - 5] ; 
    const stoneValue3 = stone3[stone3.length - 5] ; 

    
    return ( 
     <div style={{backgroundColor:color,width:'100%',
    textAlign:'center',borderRadius:'0 0 5px 5px',color:'white',fontSize:'15px'}}>
    {type === '어빌리티 스톤' ? <>{stoneValue1}{stoneValue2}{stoneValue3}</>:<>{value}</>  }
     </div>
     );
}
 
export default QualityBox;