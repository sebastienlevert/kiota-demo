import {Msdyn_salessuggestion} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_salessuggestionFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_salessuggestion {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_salessuggestion();
}
