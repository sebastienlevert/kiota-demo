import {Msdyn_usagemetric} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_usagemetricFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_usagemetric {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_usagemetric();
}
