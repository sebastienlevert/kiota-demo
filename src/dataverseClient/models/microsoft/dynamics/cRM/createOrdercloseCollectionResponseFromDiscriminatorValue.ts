import {OrdercloseCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOrdercloseCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : OrdercloseCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OrdercloseCollectionResponse();
}
