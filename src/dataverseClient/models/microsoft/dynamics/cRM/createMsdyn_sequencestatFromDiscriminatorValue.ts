import {Msdyn_sequencestat} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_sequencestatFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_sequencestat {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_sequencestat();
}
