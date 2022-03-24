import {Msdyn_paymentmethod} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_paymentmethodFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_paymentmethod {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_paymentmethod();
}
