import {Marketingformdisplayattributes} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMarketingformdisplayattributesFromDiscriminatorValue(parseNode: ParseNode | undefined) : Marketingformdisplayattributes {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Marketingformdisplayattributes();
}
