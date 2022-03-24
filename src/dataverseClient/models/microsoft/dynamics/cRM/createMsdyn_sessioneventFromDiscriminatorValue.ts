import {Msdyn_sessionevent} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_sessioneventFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_sessionevent {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_sessionevent();
}
