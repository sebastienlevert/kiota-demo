import {Msdyn_projecttask} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_projecttaskFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_projecttask {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_projecttask();
}
