import {Msdyn_payment} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_paymentFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_payment {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_payment();
}
