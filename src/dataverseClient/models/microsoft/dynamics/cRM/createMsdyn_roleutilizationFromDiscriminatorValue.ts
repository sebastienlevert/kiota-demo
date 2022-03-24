import {Msdyn_roleutilization} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_roleutilizationFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_roleutilization {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_roleutilization();
}
