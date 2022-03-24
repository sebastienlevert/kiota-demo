import {Msdyn_operatinghour} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_operatinghourFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_operatinghour {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_operatinghour();
}
