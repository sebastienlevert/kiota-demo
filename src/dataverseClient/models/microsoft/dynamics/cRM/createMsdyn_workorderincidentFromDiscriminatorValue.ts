import {Msdyn_workorderincident} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_workorderincidentFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_workorderincident {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_workorderincident();
}
