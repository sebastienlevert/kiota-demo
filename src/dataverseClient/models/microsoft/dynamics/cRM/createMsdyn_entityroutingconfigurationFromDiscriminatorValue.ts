import {Msdyn_entityroutingconfiguration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_entityroutingconfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_entityroutingconfiguration {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_entityroutingconfiguration();
}
