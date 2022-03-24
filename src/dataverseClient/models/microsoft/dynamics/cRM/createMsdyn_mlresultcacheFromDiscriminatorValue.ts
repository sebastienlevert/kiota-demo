import {Msdyn_mlresultcache} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_mlresultcacheFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_mlresultcache {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_mlresultcache();
}
