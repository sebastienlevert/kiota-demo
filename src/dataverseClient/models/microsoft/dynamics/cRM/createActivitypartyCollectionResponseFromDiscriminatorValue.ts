import {ActivitypartyCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createActivitypartyCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ActivitypartyCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ActivitypartyCollectionResponse();
}
