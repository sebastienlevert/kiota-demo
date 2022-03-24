import {Quoteclose} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createQuotecloseFromDiscriminatorValue(parseNode: ParseNode | undefined) : Quoteclose {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Quoteclose();
}
