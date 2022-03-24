import {Msdyn_forecastinstance} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_forecastinstanceFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_forecastinstance {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_forecastinstance();
}
