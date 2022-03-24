import {Msdyn_paymentterm} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_paymenttermFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_paymentterm {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_paymentterm();
}
