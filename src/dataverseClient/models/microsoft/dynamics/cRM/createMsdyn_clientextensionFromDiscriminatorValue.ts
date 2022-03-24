import {Msdyn_clientextension} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_clientextensionFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_clientextension {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_clientextension();
}
