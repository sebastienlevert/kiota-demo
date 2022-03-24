import {Msdyn_forecastconfiguration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_forecastconfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_forecastconfiguration {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_forecastconfiguration();
}
