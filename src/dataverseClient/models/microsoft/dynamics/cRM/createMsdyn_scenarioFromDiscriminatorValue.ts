import {Msdyn_scenario} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_scenarioFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_scenario {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_scenario();
}
