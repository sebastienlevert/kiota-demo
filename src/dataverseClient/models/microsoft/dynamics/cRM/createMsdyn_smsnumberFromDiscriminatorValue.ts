import {Msdyn_smsnumber} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_smsnumberFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_smsnumber {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_smsnumber();
}
