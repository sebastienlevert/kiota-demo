import {FaxCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createFaxCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : FaxCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new FaxCollectionResponse();
}
