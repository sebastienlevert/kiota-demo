import {Msdyn_playbookinstance} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_playbookinstanceFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_playbookinstance {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_playbookinstance();
}
