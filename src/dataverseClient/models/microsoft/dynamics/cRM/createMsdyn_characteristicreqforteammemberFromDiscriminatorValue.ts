import {Msdyn_characteristicreqforteammember} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_characteristicreqforteammemberFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_characteristicreqforteammember {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_characteristicreqforteammember();
}
