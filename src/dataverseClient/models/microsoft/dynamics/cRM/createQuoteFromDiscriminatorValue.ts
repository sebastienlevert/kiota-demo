import {Quote} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createQuoteFromDiscriminatorValue(parseNode: ParseNode | undefined) : Quote {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Quote();
}
