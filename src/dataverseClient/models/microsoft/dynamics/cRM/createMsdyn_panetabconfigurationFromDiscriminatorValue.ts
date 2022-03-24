import {Msdyn_panetabconfiguration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_panetabconfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_panetabconfiguration {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_panetabconfiguration();
}
