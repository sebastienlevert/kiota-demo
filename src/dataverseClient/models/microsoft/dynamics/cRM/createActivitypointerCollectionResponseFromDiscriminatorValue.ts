import {ActivitypointerCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createActivitypointerCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ActivitypointerCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ActivitypointerCollectionResponse();
}
