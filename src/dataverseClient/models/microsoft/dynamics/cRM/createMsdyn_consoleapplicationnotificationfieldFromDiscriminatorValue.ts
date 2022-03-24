import {Msdyn_consoleapplicationnotificationfield} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_consoleapplicationnotificationfieldFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_consoleapplicationnotificationfield {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_consoleapplicationnotificationfield();
}
