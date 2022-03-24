import {Msdyn_dealmanageraccess} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_dealmanageraccessFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_dealmanageraccess {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_dealmanageraccess();
}
