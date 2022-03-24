import {Msdyn_fact} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_factFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_fact {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_fact();
}
