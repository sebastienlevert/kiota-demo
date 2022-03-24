import {Msdyn_requirementresourcecategory} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_requirementresourcecategoryFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_requirementresourcecategory {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_requirementresourcecategory();
}
