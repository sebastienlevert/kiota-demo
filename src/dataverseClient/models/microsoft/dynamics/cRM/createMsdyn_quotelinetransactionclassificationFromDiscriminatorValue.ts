import {Msdyn_quotelinetransactionclassification} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_quotelinetransactionclassificationFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_quotelinetransactionclassification {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_quotelinetransactionclassification();
}
