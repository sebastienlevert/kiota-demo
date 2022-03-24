import {Msdyn_projecttaskdependency} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_projecttaskdependencyFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_projecttaskdependency {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_projecttaskdependency();
}
