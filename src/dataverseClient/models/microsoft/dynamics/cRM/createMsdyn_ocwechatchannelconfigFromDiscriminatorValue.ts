import {Msdyn_ocwechatchannelconfig} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_ocwechatchannelconfigFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_ocwechatchannelconfig {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_ocwechatchannelconfig();
}
