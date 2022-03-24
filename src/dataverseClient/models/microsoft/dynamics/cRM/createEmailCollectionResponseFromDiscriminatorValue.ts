import {EmailCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEmailCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : EmailCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EmailCollectionResponse();
}
