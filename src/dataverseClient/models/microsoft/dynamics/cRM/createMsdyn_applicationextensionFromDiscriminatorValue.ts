import {Msdyn_applicationextension} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_applicationextensionFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_applicationextension {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_applicationextension();
}
