import {Msdyn_entitylinkchatconfiguration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_entitylinkchatconfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_entitylinkchatconfiguration {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_entitylinkchatconfiguration();
}
