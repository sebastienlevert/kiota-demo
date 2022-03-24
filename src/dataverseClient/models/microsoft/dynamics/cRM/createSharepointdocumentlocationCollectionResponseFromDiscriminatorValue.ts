import {SharepointdocumentlocationCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSharepointdocumentlocationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : SharepointdocumentlocationCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SharepointdocumentlocationCollectionResponse();
}
