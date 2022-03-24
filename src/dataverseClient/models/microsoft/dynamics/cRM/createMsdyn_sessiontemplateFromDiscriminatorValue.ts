import {Msdyn_sessiontemplate} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_sessiontemplateFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_sessiontemplate {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_sessiontemplate();
}
