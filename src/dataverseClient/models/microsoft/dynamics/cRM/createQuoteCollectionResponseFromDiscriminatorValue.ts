import {QuoteCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createQuoteCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : QuoteCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new QuoteCollectionResponse();
}
