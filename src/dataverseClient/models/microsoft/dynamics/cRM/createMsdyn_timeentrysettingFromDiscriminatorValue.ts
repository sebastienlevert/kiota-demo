import {Msdyn_timeentrysetting} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_timeentrysettingFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_timeentrysetting {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_timeentrysetting();
}
