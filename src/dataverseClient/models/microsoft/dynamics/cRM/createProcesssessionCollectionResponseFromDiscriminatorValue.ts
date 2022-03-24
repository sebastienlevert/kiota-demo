import {ProcesssessionCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createProcesssessionCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ProcesssessionCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ProcesssessionCollectionResponse();
}
