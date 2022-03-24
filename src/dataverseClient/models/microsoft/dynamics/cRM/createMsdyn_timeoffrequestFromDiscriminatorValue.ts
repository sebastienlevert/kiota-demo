import {Msdyn_timeoffrequest} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_timeoffrequestFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_timeoffrequest {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_timeoffrequest();
}
