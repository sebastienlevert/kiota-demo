import {Msdyn_quotelineresourcecategory} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_quotelineresourcecategoryFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_quotelineresourcecategory {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_quotelineresourcecategory();
}
