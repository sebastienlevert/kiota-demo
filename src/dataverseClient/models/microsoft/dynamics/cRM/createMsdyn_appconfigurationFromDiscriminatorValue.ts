import {Msdyn_appconfiguration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_appconfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_appconfiguration {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_appconfiguration();
}
