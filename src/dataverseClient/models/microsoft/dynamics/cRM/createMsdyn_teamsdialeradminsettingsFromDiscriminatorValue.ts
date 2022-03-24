import {Msdyn_teamsdialeradminsettings} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_teamsdialeradminsettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_teamsdialeradminsettings {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_teamsdialeradminsettings();
}
