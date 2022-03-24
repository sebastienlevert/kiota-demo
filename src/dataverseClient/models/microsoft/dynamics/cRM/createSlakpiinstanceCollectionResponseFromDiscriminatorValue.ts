import {SlakpiinstanceCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSlakpiinstanceCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : SlakpiinstanceCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SlakpiinstanceCollectionResponse();
}
