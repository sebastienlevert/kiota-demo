import {Msdyn_routingconfigurationstep} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_routingconfigurationstepFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_routingconfigurationstep {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_routingconfigurationstep();
}
