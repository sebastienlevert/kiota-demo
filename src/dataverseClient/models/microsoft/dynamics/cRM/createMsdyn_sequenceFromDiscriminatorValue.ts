import {Msdyn_sequence} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_sequenceFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_sequence {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_sequence();
}
