import {Msdyn_routingconfiguration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_routingconfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_routingconfiguration {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_routingconfiguration();
}
