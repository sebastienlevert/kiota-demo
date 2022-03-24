import {Msdyn_workhourtemplate} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_workhourtemplateFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_workhourtemplate {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_workhourtemplate();
}
