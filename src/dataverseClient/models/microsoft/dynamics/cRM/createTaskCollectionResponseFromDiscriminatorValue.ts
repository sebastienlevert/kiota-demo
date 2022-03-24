import {TaskCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTaskCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : TaskCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TaskCollectionResponse();
}
