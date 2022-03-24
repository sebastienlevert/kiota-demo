import {Msdyn_workorderresourcerestriction} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_workorderresourcerestrictionFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_workorderresourcerestriction {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_workorderresourcerestriction();
}
