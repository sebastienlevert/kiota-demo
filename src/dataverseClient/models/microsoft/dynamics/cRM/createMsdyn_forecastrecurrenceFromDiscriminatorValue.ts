import {Msdyn_forecastrecurrence} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_forecastrecurrenceFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_forecastrecurrence {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_forecastrecurrence();
}
