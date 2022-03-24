import {Msdyn_helppage} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_helppageFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_helppage {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_helppage();
}
