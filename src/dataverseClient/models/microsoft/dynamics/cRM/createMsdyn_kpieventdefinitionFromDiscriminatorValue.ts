import {Msdyn_kpieventdefinition} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_kpieventdefinitionFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_kpieventdefinition {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_kpieventdefinition();
}
