import {Msdyn_workorder} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_workorderFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_workorder {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_workorder();
}
