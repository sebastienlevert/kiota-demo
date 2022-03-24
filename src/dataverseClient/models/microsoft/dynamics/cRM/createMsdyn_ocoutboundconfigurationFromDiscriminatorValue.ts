import {Msdyn_ocoutboundconfiguration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_ocoutboundconfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_ocoutboundconfiguration {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_ocoutboundconfiguration();
}
