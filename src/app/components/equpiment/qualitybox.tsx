
interface QualityBoxProps{
    value : number
}

const QualityBox = ({value}:QualityBoxProps) => {

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
    return ( 
     <div style={{backgroundColor:color,width:'80%',
    textAlign:'center', borderRadius:'4px'}}>
        {value}
     </div>
     );
}
 
export default QualityBox;