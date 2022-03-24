import {Msdyn_aicontactsuggestion} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_aicontactsuggestionFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_aicontactsuggestion {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_aicontactsuggestion();
}
