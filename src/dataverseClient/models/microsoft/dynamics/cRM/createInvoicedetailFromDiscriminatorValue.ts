import {Invoicedetail} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createInvoicedetailFromDiscriminatorValue(parseNode: ParseNode | undefined) : Invoicedetail {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Invoicedetail();
}
