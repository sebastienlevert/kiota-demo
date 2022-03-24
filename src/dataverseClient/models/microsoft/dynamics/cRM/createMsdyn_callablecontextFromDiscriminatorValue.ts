import {Msdyn_callablecontext} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_callablecontextFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_callablecontext {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_callablecontext();
}
