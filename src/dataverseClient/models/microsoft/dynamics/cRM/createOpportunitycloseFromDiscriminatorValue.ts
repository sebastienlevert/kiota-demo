import {Opportunityclose} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOpportunitycloseFromDiscriminatorValue(parseNode: ParseNode | undefined) : Opportunityclose {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Opportunityclose();
}
