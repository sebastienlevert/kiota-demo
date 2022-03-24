import {ActioncardCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createActioncardCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ActioncardCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ActioncardCollectionResponse();
}
