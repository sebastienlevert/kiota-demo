import {Msdyn_consoleapplicationnotificationtemplate} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_consoleapplicationnotificationtemplateFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_consoleapplicationnotificationtemplate {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_consoleapplicationnotificationtemplate();
}
