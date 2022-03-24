import {DuplicaterecordCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDuplicaterecordCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : DuplicaterecordCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DuplicaterecordCollectionResponse();
}
