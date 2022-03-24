import {Msdyn_ocsitdskill} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_ocsitdskillFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_ocsitdskill {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_ocsitdskill();
}
