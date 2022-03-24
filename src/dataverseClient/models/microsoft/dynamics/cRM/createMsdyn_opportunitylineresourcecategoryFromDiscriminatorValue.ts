import {Msdyn_opportunitylineresourcecategory} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_opportunitylineresourcecategoryFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_opportunitylineresourcecategory {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_opportunitylineresourcecategory();
}
