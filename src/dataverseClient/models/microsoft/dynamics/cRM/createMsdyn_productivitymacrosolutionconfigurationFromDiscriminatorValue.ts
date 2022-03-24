import {Msdyn_productivitymacrosolutionconfiguration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_productivitymacrosolutionconfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_productivitymacrosolutionconfiguration {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_productivitymacrosolutionconfiguration();
}
