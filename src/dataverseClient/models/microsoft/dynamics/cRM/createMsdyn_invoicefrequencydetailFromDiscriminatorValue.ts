import {Msdyn_invoicefrequencydetail} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_invoicefrequencydetailFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_invoicefrequencydetail {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_invoicefrequencydetail();
}
