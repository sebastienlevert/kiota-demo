import {Msdyn_projecttaskstatususer} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_projecttaskstatususerFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_projecttaskstatususer {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_projecttaskstatususer();
}
