import {Msdyn_transactioncategory} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_transactioncategoryFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_transactioncategory {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_transactioncategory();
}
