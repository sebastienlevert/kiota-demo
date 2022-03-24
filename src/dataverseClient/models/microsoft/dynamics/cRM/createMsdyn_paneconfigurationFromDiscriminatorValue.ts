import {Msdyn_paneconfiguration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_paneconfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_paneconfiguration {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_paneconfiguration();
}
