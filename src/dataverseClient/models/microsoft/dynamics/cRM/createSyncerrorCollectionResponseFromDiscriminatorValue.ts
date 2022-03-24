import {SyncerrorCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSyncerrorCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : SyncerrorCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SyncerrorCollectionResponse();
}
