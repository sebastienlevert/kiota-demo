import {Msdyn_contractlinedetailperformance} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_contractlinedetailperformanceFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_contractlinedetailperformance {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_contractlinedetailperformance();
}
