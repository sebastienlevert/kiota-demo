import {Msdyn_liveworkstream} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_liveworkstreamFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_liveworkstream {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_liveworkstream();
}
