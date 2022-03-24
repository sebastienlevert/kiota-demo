import {Msdyn_playbooktemplate} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_playbooktemplateFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_playbooktemplate {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_playbooktemplate();
}
