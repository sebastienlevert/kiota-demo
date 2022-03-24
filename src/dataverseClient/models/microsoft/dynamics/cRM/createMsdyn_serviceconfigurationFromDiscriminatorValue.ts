import {Msdyn_serviceconfiguration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_serviceconfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_serviceconfiguration {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_serviceconfiguration();
}
