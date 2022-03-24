import {Msdyn_quoteinvoicingsetup} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_quoteinvoicingsetupFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_quoteinvoicingsetup {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_quoteinvoicingsetup();
}
