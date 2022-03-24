import {Msdyn_projecttransactioncategory} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_projecttransactioncategoryFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_projecttransactioncategory {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_projecttransactioncategory();
}
