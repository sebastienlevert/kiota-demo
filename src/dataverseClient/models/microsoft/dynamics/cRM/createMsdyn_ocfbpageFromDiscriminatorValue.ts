import {Msdyn_ocfbpage} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_ocfbpageFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_ocfbpage {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_ocfbpage();
}
