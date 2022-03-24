import {Msdyn_productivityagentscriptstep} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_productivityagentscriptstepFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_productivityagentscriptstep {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_productivityagentscriptstep();
}
