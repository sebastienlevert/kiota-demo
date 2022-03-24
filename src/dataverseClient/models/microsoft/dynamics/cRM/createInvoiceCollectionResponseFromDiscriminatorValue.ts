import {InvoiceCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createInvoiceCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : InvoiceCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new InvoiceCollectionResponse();
}
