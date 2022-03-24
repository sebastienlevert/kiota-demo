import {PhonecallCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPhonecallCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : PhonecallCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PhonecallCollectionResponse();
}
