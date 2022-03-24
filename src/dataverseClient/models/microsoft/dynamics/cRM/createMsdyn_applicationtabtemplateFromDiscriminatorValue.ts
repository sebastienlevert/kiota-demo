import {Msdyn_applicationtabtemplate} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_applicationtabtemplateFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_applicationtabtemplate {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_applicationtabtemplate();
}
