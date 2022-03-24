import {BulkoperationlogCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBulkoperationlogCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : BulkoperationlogCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new BulkoperationlogCollectionResponse();
}
