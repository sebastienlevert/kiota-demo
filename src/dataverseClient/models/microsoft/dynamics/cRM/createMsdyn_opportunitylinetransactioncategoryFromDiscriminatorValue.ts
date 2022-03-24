import {Msdyn_opportunitylinetransactioncategory} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_opportunitylinetransactioncategoryFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_opportunitylinetransactioncategory {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_opportunitylinetransactioncategory();
}
