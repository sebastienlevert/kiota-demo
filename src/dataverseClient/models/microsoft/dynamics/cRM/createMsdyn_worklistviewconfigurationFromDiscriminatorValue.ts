import {Msdyn_worklistviewconfiguration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_worklistviewconfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_worklistviewconfiguration {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_worklistviewconfiguration();
}
