import {Msdyn_omnichannelqueue} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_omnichannelqueueFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_omnichannelqueue {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_omnichannelqueue();
}
