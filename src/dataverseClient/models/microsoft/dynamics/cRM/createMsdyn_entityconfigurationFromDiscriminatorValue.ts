import {Msdyn_entityconfiguration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_entityconfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_entityconfiguration {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_entityconfiguration();
}
