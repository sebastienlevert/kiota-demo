import {Msdyn_uniquenumber} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_uniquenumberFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_uniquenumber {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_uniquenumber();
}
