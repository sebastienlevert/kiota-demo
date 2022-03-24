import {Msdyn_masterentityroutingconfiguration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_masterentityroutingconfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_masterentityroutingconfiguration {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_masterentityroutingconfiguration();
}
