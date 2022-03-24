import {Msdyn_octeamschannelconfig} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_octeamschannelconfigFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_octeamschannelconfig {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_octeamschannelconfig();
}
