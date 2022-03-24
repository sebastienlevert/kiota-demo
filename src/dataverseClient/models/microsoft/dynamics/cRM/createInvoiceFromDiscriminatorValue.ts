import {Invoice} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createInvoiceFromDiscriminatorValue(parseNode: ParseNode | undefined) : Invoice {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Invoice();
}
