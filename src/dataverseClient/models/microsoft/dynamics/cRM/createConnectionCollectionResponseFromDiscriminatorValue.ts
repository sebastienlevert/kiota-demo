import {ConnectionCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createConnectionCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ConnectionCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ConnectionCollectionResponse();
}
