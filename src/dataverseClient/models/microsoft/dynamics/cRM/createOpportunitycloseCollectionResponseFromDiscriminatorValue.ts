import {OpportunitycloseCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOpportunitycloseCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : OpportunitycloseCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OpportunitycloseCollectionResponse();
}
