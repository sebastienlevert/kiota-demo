import {SalesorderCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSalesorderCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : SalesorderCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SalesorderCollectionResponse();
}
