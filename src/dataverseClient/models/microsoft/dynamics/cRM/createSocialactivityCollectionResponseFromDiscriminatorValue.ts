import {SocialactivityCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSocialactivityCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : SocialactivityCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SocialactivityCollectionResponse();
}
