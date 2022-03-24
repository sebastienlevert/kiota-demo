import {Msdyn_analyticsforcs} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_analyticsforcsFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_analyticsforcs {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_analyticsforcs();
}
