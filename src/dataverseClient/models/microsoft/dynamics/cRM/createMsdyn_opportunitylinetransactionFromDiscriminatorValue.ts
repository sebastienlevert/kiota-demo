import {Msdyn_opportunitylinetransaction} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_opportunitylinetransactionFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_opportunitylinetransaction {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_opportunitylinetransaction();
}
