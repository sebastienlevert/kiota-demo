import {Msdyn_rma} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_rmaFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_rma {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_rma();
}
