import {Msdyn_workorderservice} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_workorderserviceFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_workorderservice {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_workorderservice();
}
