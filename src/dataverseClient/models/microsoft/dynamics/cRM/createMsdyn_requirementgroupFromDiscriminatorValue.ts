import {Msdyn_requirementgroup} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_requirementgroupFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_requirementgroup {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_requirementgroup();
}
