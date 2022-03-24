import {PostfollowCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPostfollowCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : PostfollowCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PostfollowCollectionResponse();
}
