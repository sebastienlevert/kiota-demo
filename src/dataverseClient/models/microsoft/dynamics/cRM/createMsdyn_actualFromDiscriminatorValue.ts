import {Msdyn_actual} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_actualFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_actual {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_actual();
}
