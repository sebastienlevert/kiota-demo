import {Customeraddress} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCustomeraddressFromDiscriminatorValue(parseNode: ParseNode | undefined) : Customeraddress {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Customeraddress();
}
