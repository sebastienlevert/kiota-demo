import {Msdyn_servicetasktype} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_servicetasktypeFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_servicetasktype {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_servicetasktype();
}
