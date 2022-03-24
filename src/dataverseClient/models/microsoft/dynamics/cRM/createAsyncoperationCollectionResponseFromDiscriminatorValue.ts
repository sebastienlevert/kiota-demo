import {AsyncoperationCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAsyncoperationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AsyncoperationCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AsyncoperationCollectionResponse();
}
