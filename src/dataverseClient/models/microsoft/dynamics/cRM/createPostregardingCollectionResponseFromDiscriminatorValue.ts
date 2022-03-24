import {PostregardingCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPostregardingCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : PostregardingCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PostregardingCollectionResponse();
}
