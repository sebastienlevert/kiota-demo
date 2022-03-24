import {Msdyn_routingrequest} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_routingrequestFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_routingrequest {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_routingrequest();
}
