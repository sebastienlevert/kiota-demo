import {BulkdeletefailureCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBulkdeletefailureCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : BulkdeletefailureCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new BulkdeletefailureCollectionResponse();
}
