import {Msdyn_livechatwidgetlocation} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_livechatwidgetlocationFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_livechatwidgetlocation {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_livechatwidgetlocation();
}
