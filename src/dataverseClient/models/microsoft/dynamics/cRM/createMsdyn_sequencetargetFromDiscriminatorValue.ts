import {Msdyn_sequencetarget} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_sequencetargetFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_sequencetarget {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_sequencetarget();
}
