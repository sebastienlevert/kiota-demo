import {Msdyn_workordersubstatus} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_workordersubstatusFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_workordersubstatus {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_workordersubstatus();
}
