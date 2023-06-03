import { NameProp } from "@/app/character/[charaName]/page";


const ArmoryNameBox = ({name}:NameProp) => {
    return ( 
        <div>
            {name}
        </div>
     );
}
 
export default ArmoryNameBox;