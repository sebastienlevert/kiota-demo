import {Msdyn_projectteam} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_projectteamFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_projectteam {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_projectteam();
}
