import {Msdyn_contractperformance} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_contractperformanceFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_contractperformance {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_contractperformance();
}
