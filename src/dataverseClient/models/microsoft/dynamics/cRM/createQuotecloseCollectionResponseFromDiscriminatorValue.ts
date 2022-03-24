import {QuotecloseCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createQuotecloseCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : QuotecloseCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new QuotecloseCollectionResponse();
}
