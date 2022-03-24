import {Msdyn_capacityprofile} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_capacityprofileFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_capacityprofile {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_capacityprofile();
}
