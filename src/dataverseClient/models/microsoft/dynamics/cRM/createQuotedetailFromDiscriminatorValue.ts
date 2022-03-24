import {Quotedetail} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createQuotedetailFromDiscriminatorValue(parseNode: ParseNode | undefined) : Quotedetail {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Quotedetail();
}
