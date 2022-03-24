import {Msdyn_forecastdefinition} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_forecastdefinitionFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_forecastdefinition {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_forecastdefinition();
}
