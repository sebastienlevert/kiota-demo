import {Msdyn_panetoolconfiguration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_panetoolconfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_panetoolconfiguration {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_panetoolconfiguration();
}
