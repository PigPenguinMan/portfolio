import { ArmoryProfile } from "@/app/character/[charaName]/api.interface";
import { NameProp } from "@/app/character/[charaName]/page";

interface NameBoxProps {
    name : string
}

const ArmoryNameBox = ({name}:NameBoxProps) => {
    return ( 
        <div>
            {name}
        </div>
     );
}
 
export default ArmoryNameBox;