import {Msdyn_project} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_projectFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_project {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_project();
}
