import {Msdyn_requirementdependency} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_requirementdependencyFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_requirementdependency {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_requirementdependency();
}
