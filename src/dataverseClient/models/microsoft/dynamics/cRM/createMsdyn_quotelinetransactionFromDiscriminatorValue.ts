import {Msdyn_quotelinetransaction} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_quotelinetransactionFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_quotelinetransaction {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_quotelinetransaction();
}
