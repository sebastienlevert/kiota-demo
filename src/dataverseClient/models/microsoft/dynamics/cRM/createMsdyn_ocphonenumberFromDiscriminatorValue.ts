import {Msdyn_ocphonenumber} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_ocphonenumberFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_ocphonenumber {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_ocphonenumber();
}
