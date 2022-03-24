import {OpportunitysalesprocessCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOpportunitysalesprocessCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : OpportunitysalesprocessCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OpportunitysalesprocessCollectionResponse();
}
