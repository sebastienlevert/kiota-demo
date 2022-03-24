import {Msdyn_livechatconfig} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_livechatconfigFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_livechatconfig {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_livechatconfig();
}
