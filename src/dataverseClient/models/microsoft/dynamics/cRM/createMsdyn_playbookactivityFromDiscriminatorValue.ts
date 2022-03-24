import {Msdyn_playbookactivity} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_playbookactivityFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_playbookactivity {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_playbookactivity();
}
