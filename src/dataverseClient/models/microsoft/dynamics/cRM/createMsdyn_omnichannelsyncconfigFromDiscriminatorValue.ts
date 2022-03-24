import {Msdyn_omnichannelsyncconfig} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_omnichannelsyncconfigFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_omnichannelsyncconfig {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_omnichannelsyncconfig();
}
