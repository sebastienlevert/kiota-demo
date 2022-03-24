import {Msdyn_quotelinetransactioncategory} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_quotelinetransactioncategoryFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_quotelinetransactioncategory {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_quotelinetransactioncategory();
}
