import {Msdyn_occommunicationprovidersetting} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_occommunicationprovidersettingFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_occommunicationprovidersetting {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_occommunicationprovidersetting();
}
