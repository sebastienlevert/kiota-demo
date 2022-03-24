import {QueueitemCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createQueueitemCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : QueueitemCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new QueueitemCollectionResponse();
}
