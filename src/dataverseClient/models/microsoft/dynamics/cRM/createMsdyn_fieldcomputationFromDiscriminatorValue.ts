import {Msdyn_fieldcomputation} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_fieldcomputationFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_fieldcomputation {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_fieldcomputation();
}
