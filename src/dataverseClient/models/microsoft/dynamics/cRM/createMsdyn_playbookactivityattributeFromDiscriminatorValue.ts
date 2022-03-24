import {Msdyn_playbookactivityattribute} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_playbookactivityattributeFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_playbookactivityattribute {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_playbookactivityattribute();
}
