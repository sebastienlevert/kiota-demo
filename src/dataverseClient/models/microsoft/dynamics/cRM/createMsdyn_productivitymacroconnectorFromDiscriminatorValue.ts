import {Msdyn_productivitymacroconnector} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_productivitymacroconnectorFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_productivitymacroconnector {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_productivitymacroconnector();
}
