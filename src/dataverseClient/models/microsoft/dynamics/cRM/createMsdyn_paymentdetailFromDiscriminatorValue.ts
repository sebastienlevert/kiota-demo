import {Msdyn_paymentdetail} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_paymentdetailFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_paymentdetail {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_paymentdetail();
}
