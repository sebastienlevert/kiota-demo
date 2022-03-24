import {ActivitymimeattachmentCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createActivitymimeattachmentCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ActivitymimeattachmentCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ActivitymimeattachmentCollectionResponse();
}
