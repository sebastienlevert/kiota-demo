import {Msdyn_occommunicationprovidersettingentry} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_occommunicationprovidersettingentryFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_occommunicationprovidersettingentry {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_occommunicationprovidersettingentry();
}
